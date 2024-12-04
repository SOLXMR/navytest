'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const App = dynamic(() => import('../App'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-xrp-blue"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-xrp-blue"></div>
      </div>
    }>
      <App />
    </Suspense>
  );
} 