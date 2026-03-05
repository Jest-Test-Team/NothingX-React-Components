'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const BARS = 24;

/** 點陣上傳/下載頻寬長條圖 */
export function BandwidthGraph() {
  const [up, setUp] = useState<number[]>(() => Array(BARS).fill(0));
  const [down, setDown] = useState<number[]>(() => Array(BARS).fill(0));

  useEffect(() => {
    const id = setInterval(() => {
      setUp((u) => [...u.slice(1), Math.random() * 80 + 10]);
      setDown((d) => [...d.slice(1), Math.random() * 100 + 20]);
    }, 500);
    return () => clearInterval(id);
  }, []);

  const max = Math.max(1, ...up, ...down);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Bandwidth graph">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Bandwidth</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32, marginBottom: 8 }}>
        {up.map((v, i) => <div key={`u${i}`} style={{ flex: 1, height: (v / max) * 32, borderRadius: 1, background: nothing.colors.red }} />)}
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }}>
        {down.map((v, i) => <div key={`d${i}`} style={{ flex: 1, height: (v / max) * 32, borderRadius: 1, background: nothing.colors.surfaceLight }} />)}
      </div>
    </div>
  );
}
