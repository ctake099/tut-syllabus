'use client';

import { useState, useCallback } from 'react';
import SearchForm from './SearchForm';
import LectureList from './LectureList';
import { LectureWithRelations } from '@/types/lecture';

interface ClientPageProps {
  initialOptions: {
    creditOpts: number[];
    gradeOpts: number[];
    depOpts: string[];
  };
}

interface SearchResults {
  lectures: unknown[];
  totalCount: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export default function ClientPage({ initialOptions }: ClientPageProps) {
  const [searchResults, setSearchResults] = useState<SearchResults>({
    lectures: [],
    totalCount: 0,
    page: 1,
    limit: 50,
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback((searchData: {
    lectures: unknown[];
    totalCount: number;
    page: number;
    limit: number;
    hasMore: boolean;
  }) => {
    // SearchFormから渡されたデータを直接使用
    setSearchResults(searchData);
    setCurrentPage(searchData.page);
  }, []);

  const handleLoadMore = useCallback(async () => {
    if (!searchResults.hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('page', String(currentPage + 1));
      
      const response = await fetch(`/api/search?${params.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        const newResults = {
          ...searchResults,
          lectures: [...searchResults.lectures, ...data.lectures],
          hasMore: data.hasMore,
        };
        
        setSearchResults(newResults);
        setCurrentPage(prev => prev + 1);
      }
    } catch (error) {
      console.error('Load more error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchResults, currentPage, isLoading]);

  const handleLoading = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  return (
    <>
      <SearchForm
        creditOpts={initialOptions.creditOpts}
        gradeOpts={initialOptions.gradeOpts}
        depOpts={initialOptions.depOpts}
        onSearch={handleSearch}
        onLoading={handleLoading}
      />

      <h2 className="font-bold text-xl">
        検索結果 {searchResults.totalCount} 件（表示 {searchResults.lectures.length} 件）
      </h2>

      <LectureList
        lectures={searchResults.lectures as LectureWithRelations[]}
        totalCount={searchResults.totalCount}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
        hasMore={searchResults.hasMore}
      />
    </>
  );
}