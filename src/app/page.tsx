import { Suspense } from 'react';
import OptionsLoader from '@/components/OptionsLoader';

export default function Page() {
  return (
    <main className="p-6 space-y-6">
      <Suspense fallback={<div>Loading...</div>}>
        <OptionsLoader />
      </Suspense>
    </main>
  );
}