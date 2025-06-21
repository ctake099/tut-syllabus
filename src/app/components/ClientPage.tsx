'use client';

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
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
  lectures: LectureWithRelations[];
  totalCount: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// 検索結果のキャッシュ
const searchCache = new Map<string, SearchResults>();

export default function ClientPage({ initialOptions }: ClientPageProps) {
  const searchParams = useSearchParams();
  const [searchResults, setSearchResults] = useState<SearchResults>({
    lectures: [],
    totalCount: 0,
    page: 1,
    limit: 50,
    hasMore: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = useCallback(async () => {
    setIsLoading(true);
    
    try {
      const params = new URLSearchParams(searchParams.toString());
      const cacheKey = params.toString();
      
      // キャッシュをチェック
      if (searchCache.has(cacheKey)) {
        const cached = searchCache.get(cacheKey)!;
        setSearchResults(cached);
        setCurrentPage(cached.page);
        setIsLoading(false);
        return;
      }

      const response = await fetch(`/api/search?${params.toString()}`);
      const data = await response.json();
      
      if (response.ok) {
        const results = {
          lectures: data.lectures,
          totalCount: data.totalCount,
          page: data.page,
          limit: data.limit,
          hasMore: data.hasMore,
        };
        
        // キャッシュに保存（最大100件）
        if (searchCache.size >= 100) {
          const firstKey = searchCache.keys().next().value;
          if (firstKey) {
            searchCache.delete(firstKey);
          }
        }
        searchCache.set(cacheKey, results);
        
        setSearchResults(results);
        setCurrentPage(data.page);
      } else {
        console.error('Search failed:', data.error);
      }
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsLoading(false);
    }
  }, [searchParams]);

  // 初期検索実行（URLパラメータがある場合）
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (params.toString()) {
      handleSearch();
    }
  }, [searchParams, handleSearch]);

  const handleLoadMore = useCallback(async () => {
    if (!searchResults.hasMore || isLoading) return;

    setIsLoading(true);
    try {
      const params = new URLSearchParams(searchParams.toString());
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
  }, [searchResults, currentPage, searchParams, isLoading]);

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
        lectures={searchResults.lectures}
        totalCount={searchResults.totalCount}
        isLoading={isLoading}
        onLoadMore={handleLoadMore}
        hasMore={searchResults.hasMore}
      />
    </>
  );
}