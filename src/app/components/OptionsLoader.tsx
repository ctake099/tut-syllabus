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

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('/api/options');
        if (response.ok) {
          const data = await response.json();
          setOptions(data);
        } else {
          // API失敗時はデフォルトデータを使用
          console.warn('API failed, using default options');
          setOptions({
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
      } catch (err) {
        console.error('Error fetching options:', err);
        // エラー時もデフォルトデータを使用
        setOptions({
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

  if (!options) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="text-red-500">
          データの読み込みに失敗しました
        </div>
      </div>
    );
  }

  return <ClientPage initialOptions={options} />;
}