'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 節拍器，點左右擺動 */
export function Metronome(props?: { bpm?: number }) {
  const bpm = props?.bpm ?? 60;
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), (60 * 1000) / bpm);
    return () => clearInterval(id);
  }, [bpm]);

  const left = tick % 2 === 0;

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Metronome">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Metronome</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 24 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: left ? nothing.colors.red : nothing.colors.circleBg }} />
        <span style={{ fontFamily: 'monospace', color: nothing.colors.surfaceLight }}>{bpm} BPM</span>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: !left ? nothing.colors.red : nothing.colors.circleBg }} />
      </div>
    </div>
  );
}
