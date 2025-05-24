// app/page.tsx
import { prisma } from '../../prisma/prisma';
import SearchForm  from '@/components/SearchForm';
import LectureList from '@/components/LectureList';
import { SearchParams } from '@/types/lecture';

export default async function Page({
  searchParams,
}: {
  // ← Promise<SearchParams> として受け取る
  searchParams: Promise<SearchParams>;
}) {
  // ① 必ず await する
  const sp = await searchParams;

  // ② プロパティを取り出す
  const subject    = (sp.subject    as string)              ?? '';
  const instructor = (sp.instructor as string)              ?? '';
  const creditStr  = (sp.credit     as string)              ?? '';
  const gradeStr   = (sp.grade      as string)              ?? '';
  const department = (sp.department as string)              ?? '';

  const credit = creditStr ? Number(creditStr) : undefined;
  const grade  = gradeStr  ? Number(gradeStr)  : undefined;

  // ③ period の配列化
  const rawPeriod = sp.period;
  const periodTokens: string[] =
    rawPeriod === undefined
      ? []
      : Array.isArray(rawPeriod)
      ? rawPeriod
      : [rawPeriod];

  // ④ period OR 条件
  let periodCondition = {};
  if (periodTokens.length) {
    const cond = periodTokens.map((p) => {
      const [dayJp, idx] = p.split('-');
      return { day: dayJp, period: Number(idx) };
    });
    periodCondition = { periods: { some: { OR: cond } } };
  }

  // ⑤ where 条件
  const where = {
    ...(subject    && { subjectName: { contains: subject } }),
    ...(instructor && { instructors: { some: { name: { contains: instructor } } } }),
    ...(credit     !== undefined && { credits: credit }),
    ...(grade      !== undefined && { grades: { some: { value: grade } } }),
    ...(department && { departments: { some: { name: { startsWith: department } } } }),
    ...periodCondition,
  };

  // ⑥ データ取得を並列実行
  const [initialLectures, totalCount, creditRaw, gradeRaw, depRaw] = await Promise.all([
    prisma.lecture.findMany({
      where,
      include: { instructors: true, periods: true, departments: true, grades: true },
      take: 50,
    }),
    prisma.lecture.count({ where }),
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

  const creditOpts = creditRaw.map(r => r.credits);
  const gradeOpts  = gradeRaw.map(g => g.value);
  const depOpts    = depRaw.map(d => d.name);

  // ⑦ レンダリング
  return (
    <main className="p-6 space-y-6">
      <SearchForm
        creditOpts={creditOpts}
        gradeOpts={gradeOpts}
        depOpts={depOpts}
      />

      <h2 className="font-bold text-xl">
        検索結果 {totalCount} 件（表示 {initialLectures.length} 件）
      </h2>

      <LectureList
        initialLectures={initialLectures}
        totalCount={totalCount}
        where={JSON.stringify(where)}
      />
    </main>
  );
}