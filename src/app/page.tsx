'use client';

import dynamic from 'next/dynamic';

const App = dynamic(() => import('../App'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen bg-ripple-blue">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-xrp-blue"></div>
    </div>
  ),
});

export default function Home() {
  return <App />;
} 