'use client';

import { useState, useEffect } from 'react';
import ClientPage from './ClientPage';

export default function OptionsLoader() {
  const [options, setOptions] = useState<{
    creditOpts: number[];
    gradeOpts: number[];
    depOpts: string[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('/api/options');
        if (response.ok) {
          const data = await response.json();
          setOptions(data);
        } else {
          throw new Error('Failed to fetch options');
        }
      } catch (err) {
        console.error('Error fetching options:', err);
        setError('オプションデータの取得に失敗しました');
      } finally {
        setLoading(false);
      }
    };

    fetchOptions();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-lg">データを読み込み中...</div>
      </div>
    );
  }

  if (error || !options) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-500">
          {error || 'データの読み込みに失敗しました'}
        </div>
      </div>
    );
  }

  return <ClientPage initialOptions={options} />;
}