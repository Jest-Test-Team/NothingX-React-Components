'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const BARS = 20;
const MAX_H = 24;

/**
 * NThing-UI Heart Rate: 模擬心跳波動的點陣動畫圖
 */
export function HeartRate(props: { bpm?: number }) {
  const bpm = props.bpm ?? 72;
  const [heights, setHeights] = useState<number[]>(() => Array(BARS).fill(0).map(() => Math.random() * MAX_H));

  useEffect(() => {
    const interval = 60000 / bpm / 2;
    const id = setInterval(() => {
      setHeights((prev) => {
        const next = [...prev.slice(1)];
        const peak = Math.random() > 0.7 ? MAX_H * 0.9 : MAX_H * (0.3 + Math.random() * 0.4);
        next.push(peak);
        return next;
      });
    }, interval);
    return () => clearInterval(id);
  }, [bpm]);

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Heart rate ${bpm} BPM`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>Heart Rate</span>
        <span style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: nothing.colors.surfaceLight }}>{bpm} <small style={{ fontSize: 11, color: nothing.colors.muted }}>BPM</small></span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 32 }}>
        {heights.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: Math.max(4, h),
              borderRadius: 1,
              background: nothing.colors.red,
              transition: 'height 0.15s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
