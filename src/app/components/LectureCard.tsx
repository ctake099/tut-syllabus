'use client';

import { Dialog } from '@headlessui/react';
import { InformationCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TimeTableBadge from '@/components/TimeTableBadge';
import type { LectureCardProps } from '../types/lecture';
import { MetaRow, TextRow } from '@/components/InfoRows';
export default function LectureCard({ lecture }: LectureCardProps) {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const joinOrDash = (arr: (string | number | null | undefined)[]) =>
        arr.filter(Boolean).join(' / ') || '―';

    return (
        <>
            {/* ====== 検索結果カード（＜div＞に変更） ====== */}
            <div className="relative border rounded-xl p-4 shadow-md hover:shadow-lg">
                <button
                    aria-label="詳細を見る"
                    className="absolute -top-2 -left-2 bg-white rounded-full p-1 ring-1 ring-gray-300 hover:bg-gray-50"
                    onClick={() => setOpen(true)}
                >
                    <InformationCircleIcon className="h-5 w-5 text-gray-600" />
                </button>

                <p className="font-bold text-lg text-blue-700">{lecture.subjectName}</p>
                <p className="text-sm text-gray-600">
                    {joinOrDash(lecture.instructors.map((i: { name: string }) => i.name))}
                </p>

                <div className="flex flex-wrap gap-2 text-xs mt-2">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                        {lecture.credits}単位
                    </span>
                    {lecture.periods.map(p => (
                        <span key={p.id} className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {p.day}
                            {p.period ?? '―'}
                        </span>
                    ))}
                    <TimeTableBadge code={lecture.timeTableCode} />
                </div>
            </div>

            {/* ====== モーダル ====== */}
            <Dialog
                open={open}
                onClose={() => {
                    setOpen(false);
                    router.push('/');       // 背景クリックや ESC でもホームへ
                }}
                className="relative z-50"
            >
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

                <div className="fixed inset-0 flex items-center justify-center p-4 overflow-y-auto">
                    <Dialog.Panel className="w-full max-w-xl max-h-screen overflow-y-auto rounded-xl bg-white p-6 space-y-5">
                        {/* ------ ヘッダ ------ */}
                        <header className="flex items-start justify-between">
                            <div>
                                <Dialog.Title className="text-xl font-bold">
                                    {lecture.subjectName}
                                </Dialog.Title>
                                <p className="text-sm text-gray-500">
                                    {joinOrDash(lecture.instructors.map((i: { name: string }) => i.name))}
                                </p>
                            </div>
                            <button
                                aria-label="閉じる"
                                onClick={() => {
                                    setOpen(false);
                                }}
                            >
                                <XMarkIcon className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                            </button>
                        </header>

                        {/* ------ LectureInfo 全フィールド ------ */}
                        <MetaRow label="科目区分">{lecture.courseCategory}</MetaRow>
                        <MetaRow label="授業形態">{lecture.courseType}</MetaRow>
                        <MetaRow label="曜日・時限">
                            {lecture.periods.map(p => `${p.day}${p.period ?? ''}`).join(' / ')}
                        </MetaRow>
                        <MetaRow label="時間割コード">
                            <TimeTableBadge code={lecture.timeTableCode} />
                        </MetaRow>
                        <MetaRow label="学期">{lecture.semester}</MetaRow>
                        <MetaRow label="開講元">
                            {lecture.departments.map((d: { name: string }) => d.name).join(' / ')}
                        </MetaRow>
                        <MetaRow label="対象年次">
                            {lecture.grades.map((g: { value: number }) => `${g.value}年`).join(' / ')}
                        </MetaRow>
                        <MetaRow label="単位数">{lecture.credits}</MetaRow>
                        <MetaRow label="教室">{lecture.classroom ?? '―'}</MetaRow>
                        <MetaRow label="最終更新">{lecture.lastUpdated}</MetaRow>

                        {/* --- 長文項目 --- */}
                        <TextRow label="概要">{lecture.overview}</TextRow>
                        <TextRow label="到達目標">{lecture.objectives}</TextRow>
                        <TextRow label="学習成果">{lecture.learningOutcomes}</TextRow>
                        <TextRow label="授業方法">{lecture.teachingMethod}</TextRow>
                        <TextRow label="注意事項">{lecture.notes}</TextRow>
                        <TextRow label="事前準備">{lecture.preparation}</TextRow>
                        <TextRow label="評価方法">{lecture.evaluation}</TextRow>
                        <TextRow label="教科書">{lecture.textbook}</TextRow>
                        <TextRow label="参考書">{lecture.referenceMaterials}</TextRow>
                        <TextRow label="授業計画">{lecture.schedulePlan}</TextRow>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}
