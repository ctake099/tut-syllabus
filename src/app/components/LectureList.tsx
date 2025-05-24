'use client';

import { useState, useTransition } from 'react';
import { loadMoreLectures } from '@/actions';
import LectureCard from './LectureCard';
import { Props } from '@/types/lecture';

export default function LectureList({ initialLectures, totalCount}: Props) {
  const [lectures, setLectures] = useState(initialLectures);
  const [offset, setOffset] = useState(initialLectures.length);
  const [isPending, startTransition] = useTransition();

  const hasMore = lectures.length < totalCount;

  const handleLoadMore = () => {
    startTransition(async () => {
      const more = await loadMoreLectures(offset);
      setLectures((prev) => [...prev, ...more]);
      setOffset((prev) => prev + more.length);
    });
  };

  return (
    <div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lectures.map((lec) => (
          <LectureCard key={lec.id} lecture={lec} />
        ))}
      </ul>
      {hasMore && (
        <div className="mt-6 text-center">
          <button
            onClick={handleLoadMore}
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
          >
            {isPending ? '読み込み中...' : 'もっと見る'}
          </button>
        </div>
      )}
    </div>
  );
}