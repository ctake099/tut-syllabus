import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';
import { optionsCache } from '../../lib/cache';

export async function GET() {
  try {
    // キャッシュチェック
    const cacheKey = 'options:all';
    const cached = optionsCache.get(cacheKey);
    if (cached) {
      return NextResponse.json(cached);
    }

    // 検索オプション用のデータを効率的に取得
    const [creditRaw, gradeRaw, depRaw] = await Promise.all([
      prisma.lecture.findMany({
        distinct: ['credits'],
        select: { credits: true },
        orderBy: { credits: 'asc' },
      }),
      prisma.grade.findMany({
        select: { value: true },
        orderBy: { value: 'asc' },
      }),
      prisma.department.findMany({
        distinct: ['name'],
        select: { name: true },
        orderBy: { name: 'asc' },
      }),
    ]);

    const result = {
      creditOpts: creditRaw.map((r) => r.credits),
      gradeOpts: gradeRaw.map((g) => g.value),
      depOpts: depRaw.map((d) => d.name),
    };

    // 結果をキャッシュ（10分間）
    optionsCache.set(cacheKey, result, 10);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Options fetch error:', error);
    
    // データベース接続エラーの場合はデフォルトオプションを返す
    return NextResponse.json({
      creditOpts: [1, 2, 3, 4, 5, 6],
      gradeOpts: [1, 2, 3, 4],
      depOpts: [
        'コンピュータサイエンス学部コンピュータサイエンス学科',
        'メディア学部メディア学科',
        '工学部応用化学科',
        '工学部機械工学科', 
        '工学部電気電子工学科',
        '応用生物学部応用生物学科',
        '工学研究科博士前期課程サステイナブル工学専攻',
        '教養学環'
      ],
    });
  }
}