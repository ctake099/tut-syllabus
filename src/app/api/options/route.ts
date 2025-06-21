import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/prisma';

export async function GET() {
  try {
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
        select: { name: true },
        orderBy: { name: 'asc' },
      }),
    ]);

    const creditOpts = creditRaw.map((r) => r.credits);
    const gradeOpts = gradeRaw.map((g) => g.value);
    const depOpts = depRaw.map((d) => d.name);

    return NextResponse.json({
      creditOpts,
      gradeOpts,
      depOpts,
    });

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