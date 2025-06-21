import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  
  const subject = searchParams.get('subject') || '';
  const instructor = searchParams.get('instructor') || '';
  const creditStr = searchParams.get('credit') || '';
  const gradeStr = searchParams.get('grade') || '';
  const department = searchParams.get('department') || '';
  const periods = searchParams.getAll('period');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '50');
  
  const credit = creditStr ? Number(creditStr) : undefined;
  const grade = gradeStr ? Number(gradeStr) : undefined;
  const offset = (page - 1) * limit;

  try {
    // 期間条件の構築
    let periodCondition = {};
    if (periods.length > 0) {
      const cond = periods.map((p) => {
        const [dayJp, idx] = p.split('-');
        return { day: dayJp, period: Number(idx) };
      });
      // OR条件は配列の外側に置く
      periodCondition = { 
        periods: { 
          some: {
            OR: cond
          }
        }
      };
    }

    // 検索条件の構築
    const where = {
      ...(subject && { subjectName: { contains: subject } }),
      ...(instructor && { instructors: { some: { name: { contains: instructor } } } }),
      ...(credit !== undefined && { credits: credit }),
      ...(grade !== undefined && { grades: { some: { value: grade } } }),
      ...(department && { departments: { some: { name: { startsWith: department } } } }),
      ...periodCondition,
    };


    // 最適化されたクエリ実行
    const [lectures, totalCount] = await Promise.all([
      prisma.lecture.findMany({
        where,
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
          overview: true,
          objectives: true,
          learningOutcomes: true,
          teachingMethod: true,
          notes: true,
          preparation: true,
          evaluation: true,
          textbook: true,
          referenceMaterials: true,
          schedulePlan: true,
          // 関連データは必要な場合のみ取得
          instructors: {
            select: {
              name: true,
              belongsTo: true,
            },
          },
          periods: {
            select: {
              day: true,
              period: true,
            },
          },
          departments: {
            select: {
              name: true,
            },
          },
          grades: {
            select: {
              value: true,
            },
          },
        },
        orderBy: [
          { subjectName: 'asc' },
          { timeTableCode: 'asc' },
        ],
        skip: offset,
        take: limit,
      }),
      prisma.lecture.count({ where }),
    ]);

    return NextResponse.json({
      lectures,
      totalCount,
      page,
      limit,
      hasMore: offset + lectures.length < totalCount,
    });

  } catch (error) {
    console.error('Search error:', error);
    
    // データベース接続エラーの場合は空の結果を返す
    return NextResponse.json({
      lectures: [],
      totalCount: 0,
      page: 1,
      limit: 50,
      hasMore: false,
    });
  }
}