'use client';

import { useState, useCallback } from 'react';
import LectureCard from './LectureCard';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { LectureWithRelations } from '@/types/lecture';

interface LectureListProps {
  lectures: LectureWithRelations[];
  totalCount: number;
  isLoading: boolean;
  onLoadMore?: () => void;
  hasMore?: boolean;
}

export default function LectureList({ 
  lectures, 
  isLoading,
  onLoadMore,
  hasMore = false
}: LectureListProps) {
  const [loadingMore, setLoadingMore] = useState(false);

  const handleLoadMore = useCallback(async () => {
    if (!onLoadMore || loadingMore) return;
    
    setLoadingMore(true);
    await onLoadMore();
    setLoadingMore(false);
  }, [onLoadMore, loadingMore]);

  if (isLoading && lectures.length === 0) {
    return (
      <div className="flex justify-center items-center py-12">
        <CircularProgress />
        <span className="ml-2">検索中...</span>
      </div>
    );
  }

  return (
    <div>
      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lectures.map((lec) => (
          <LectureCard key={lec.id} lecture={lec} />
        ))}
      </ul>
      
      {lectures.length === 0 && !isLoading && (
        <div className="text-center py-12 text-gray-500">
          検索条件に一致する講義が見つかりませんでした。
        </div>
      )}
      
      {hasMore && (
        <div className="mt-6 text-center">
          <Button
            onClick={handleLoadMore}
            disabled={loadingMore}
            variant="contained"
            startIcon={loadingMore ? <CircularProgress size={16} color="inherit" /> : null}
            sx={{ 
              backgroundColor: '#2563eb',
              '&:hover': { backgroundColor: '#1d4ed8' }
            }}
          >
            {loadingMore ? '読み込み中...' : 'もっと見る'}
          </Button>
        </div>
      )}
    </div>
  );
}