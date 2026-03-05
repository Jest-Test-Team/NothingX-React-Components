'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const BARS = 16;

/**
 * NThing-UI Audio Visualizer: 點陣音軌跳動頻譜
 */
export function AudioVisualizer(props: { isPlaying?: boolean }) {
  const isPlaying = props.isPlaying ?? true;
  const [heights, setHeights] = useState<number[]>(() => Array(BARS).fill(4));

  useEffect(() => {
    if (!isPlaying) {
      setHeights(Array(BARS).fill(4));
      return;
    }
    const id = setInterval(() => {
      setHeights((prev) => prev.map(() => Math.max(4, Math.min(40, 4 + Math.random() * 36))));
    }, 80);
    return () => clearInterval(id);
  }, [isPlaying]);

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label="Audio visualizer"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Spectrum
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 44 }}>
        {heights.map((h, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: h,
              borderRadius: 2,
              background: i % 3 === 0 ? nothing.colors.red : nothing.colors.text,
              transition: 'height 0.08s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
