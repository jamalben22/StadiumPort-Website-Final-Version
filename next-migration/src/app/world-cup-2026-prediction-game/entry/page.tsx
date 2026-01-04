'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EntryRedirect() {
  const router = useRouter();

  useEffect(() => {
    const lastId = typeof window !== 'undefined' ? localStorage.getItem('sp_wc26_last_id') : null;
    if (lastId) {
      router.replace(`/world-cup-2026-prediction-game/entry/${lastId}`);
    } else {
      router.replace('/world-cup-2026-prediction-game');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0A0A0A]">
      <div className="w-12 h-12 border-4 border-white/10 border-t-[#FBBF24] rounded-full animate-spin" />
    </div>
  );
}

