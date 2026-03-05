'use client';

import { useState, useRef } from 'react';
import { nothing } from './theme';

/** 點擊測 BPM */
export function BPMTapper() {
  const [bpm, setBpm] = useState<number | null>(null);
  const taps = useRef<number[]>([]);

  const tap = () => {
    const now = Date.now();
    taps.current = taps.current.filter((t) => now - t < 2000);
    taps.current.push(now);
    if (taps.current.length >= 2) {
      const gaps = taps.current.slice(1).map((t, i) => t - taps.current[i]);
      const avg = gaps.reduce((a, b) => a + b, 0) / gaps.length;
      setBpm(Math.round(60000 / avg));
    }
  };

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="BPM tapper">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>BPM</div>
      <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, color: nothing.colors.surfaceLight, marginBottom: 12 }}>{bpm ?? '—'}</div>
      <button type="button" onClick={tap} style={{ width: '100%', padding: 12, borderRadius: 8, border: 'none', background: nothing.colors.red, color: nothing.colors.surfaceLight, cursor: 'pointer' }}>Tap</button>
    </div>
  );
}
