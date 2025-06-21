import { Suspense } from 'react';
import ClientPage from '@/components/ClientPage';

// デフォルトのオプションデータ（データベースエラー時のフォールバック）
const defaultOptions = {
  creditOpts: [1, 2, 3, 4, 5, 6],
  gradeOpts: [1, 2, 3, 4],
  depOpts: ['工学部', '理学部', '文学部', '法学部', '経済学部'],
};

export default function Page() {
  return (
    <main className="p-6 space-y-6">
      <Suspense fallback={<div>Loading...</div>}>
        <ClientPage initialOptions={defaultOptions} />
      </Suspense>
    </main>
  );
}