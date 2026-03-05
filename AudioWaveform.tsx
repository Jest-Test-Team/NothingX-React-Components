'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const BARS = 32;

/** 語音波形點陣柱 */
export function AudioWaveform(props?: { active?: boolean }) {
  const [heights, setHeights] = useState<number[]>(() => Array(BARS).fill(8));

  useEffect(() => {
    if (!props?.active) return;
    const id = setInterval(() => setHeights((h) => h.map(() => 4 + Math.random() * 24)), 100);
    return () => clearInterval(id);
  }, [props?.active]);

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Waveform">
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 36 }}>
        {heights.map((h, i) => (
          <div key={i} style={{ flex: 1, height: h, borderRadius: 1, background: nothing.colors.red }} />
        ))}
      </div>
    </div>
  );
}
