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
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}