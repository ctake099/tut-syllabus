import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';
import { searchCache } from '../../lib/cache';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const subject = searchParams.get('subject') || '';
  const instructor = searchParams.get('instructor') || '';
  const creditStr = searchParams.get('credit') || '';
  const gradeStr = searchParams.get('grade') || '';
  const department = searchParams.get('department') || '';
  const periods = searchParams.getAll('period');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');
  
  const credit = creditStr ? Number(creditStr) : undefined;
  const grade = gradeStr ? Number(gradeStr) : undefined;
  const offset = (page - 1) * limit;

  try {
    // キャッシュキーを生成
    const cacheKey = `search-opt:${searchParams.toString()}`;
    
    // キャッシュチェック
    const cached = searchCache.get(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    // 1. まず基本的な講義データのみで高速検索
    const baseWhere: Record<string, unknown> = {};
    
    // シンプルな条件のみ先に適用
    if (subject) baseWhere.subjectName = { contains: subject };
    if (credit !== undefined) baseWhere.credits = credit;
    
    // 2. 段階的検索：まず基本条件で絞り込み
    const baseQuery = await prisma.lecture.findMany({
      where: baseWhere,
      select: {
        id: true,
        subjectName: true,
        courseCategory: true,
        courseType: true,
        timeTableCode: true,
        semester: true,
        credits: true,
        classroom: true,
        lastUpdated: true,
      },
      take: limit * 3, // 多めに取得してフィルタリング
      skip: offset,
      orderBy: [
        { subjectName: 'asc' },
        { timeTableCode: 'asc' },
      ],
    });

    if (baseQuery.length === 0) {
      const result = {
        lectures: [],
        totalCount: 0,
        page,
        limit,
        hasMore: false,
      };
      searchCache.set(cacheKey, result, 2);
      return NextResponse.json(result);
    }

    const lectureIds = baseQuery.map(l => l.id);

    // 3. 関連データを別クエリで効率的に取得
    const [instructorsData, periodsData, departmentsData, gradesData] = await Promise.all([
      // 講師データ
      !instructor ? Promise.resolve([]) : prisma.instructor.findMany({
        where: {
          name: { contains: instructor },
          lectures: { some: { id: { in: lectureIds } } }
        },
        select: {
          id: true,
          name: true,
          belongsTo: true,
          lectures: { select: { id: true } }
        }
      }),
      
      // 期間データ
      periods.length === 0 ? Promise.resolve([]) : prisma.period.findMany({
        where: {
          OR: periods.map(p => {
            const [day, periodNum] = p.split('-');
            return { day, period: Number(periodNum) };
          }),
          lectures: { some: { id: { in: lectureIds } } }
        },
        select: {
          id: true,
          day: true,
          period: true,
          lectures: { select: { id: true } }
        }
      }),
      
      // 学部データ
      !department ? Promise.resolve([]) : prisma.department.findMany({
        where: {
          name: { startsWith: department },
          lectures: { some: { id: { in: lectureIds } } }
        },
        select: {
          id: true,
          name: true,
          lectures: { select: { id: true } }
        }
      }),
      
      // 学年データ
      grade === undefined ? Promise.resolve([]) : prisma.grade.findMany({
        where: {
          value: grade,
          lectures: { some: { id: { in: lectureIds } } }
        },
        select: {
          id: true,
          value: true,
          lectures: { select: { id: true } }
        }
      })
    ]);

    // 4. フィルタリング条件に基づいてlectureIdを絞り込み
    let filteredLectureIds = new Set(lectureIds);

    if (instructor && instructorsData.length > 0) {
      const matchingLectureIds = new Set(instructorsData.flatMap(i => i.lectures.map(l => l.id)));
      filteredLectureIds = new Set([...filteredLectureIds].filter(id => matchingLectureIds.has(id)));
    }

    if (periods.length > 0 && periodsData.length > 0) {
      const matchingLectureIds = new Set(periodsData.flatMap(p => p.lectures.map(l => l.id)));
      filteredLectureIds = new Set([...filteredLectureIds].filter(id => matchingLectureIds.has(id)));
    }

    if (department && departmentsData.length > 0) {
      const matchingLectureIds = new Set(departmentsData.flatMap(d => d.lectures.map(l => l.id)));
      filteredLectureIds = new Set([...filteredLectureIds].filter(id => matchingLectureIds.has(id)));
    }

    if (grade !== undefined && gradesData.length > 0) {
      const matchingLectureIds = new Set(gradesData.flatMap(g => g.lectures.map(l => l.id)));
      filteredLectureIds = new Set([...filteredLectureIds].filter(id => matchingLectureIds.has(id)));
    }

    // 5. 最終的な講義データを構築
    const finalLectures = baseQuery
      .filter(lecture => filteredLectureIds.has(lecture.id))
      .slice(0, limit)
      .map(lecture => ({
        ...lecture,
        overview: null, // 詳細データは遅延読み込み
        objectives: null,
        learningOutcomes: null,
        teachingMethod: null,
        notes: null,
        preparation: null,
        evaluation: null,
        textbook: null,
        referenceMaterials: null,
        schedulePlan: null,
        instructors: instructorsData
          .filter(i => i.lectures.some(l => l.id === lecture.id))
          .map(i => ({ name: i.name, belongsTo: i.belongsTo })),
        periods: periodsData
          .filter(p => p.lectures.some(l => l.id === lecture.id))
          .map(p => ({ day: p.day, period: p.period })),
        departments: departmentsData
          .filter(d => d.lectures.some(l => l.id === lecture.id))
          .map(d => ({ name: d.name })),
        grades: gradesData
          .filter(g => g.lectures.some(l => l.id === lecture.id))
          .map(g => ({ value: g.value })),
      }));

    const result = {
      lectures: finalLectures,
      totalCount: filteredLectureIds.size,
      page,
      limit,
      hasMore: offset + finalLectures.length < filteredLectureIds.size,
    };

    // 結果をキャッシュ（3分間）
    searchCache.set(cacheKey, result, 3);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Optimized search error:', error);
    
    // エラー時は空の結果を返す
    return NextResponse.json({
      lectures: [],
      totalCount: 0,
      page: 1,
      limit: 20,
      hasMore: false,
    });
  }
}