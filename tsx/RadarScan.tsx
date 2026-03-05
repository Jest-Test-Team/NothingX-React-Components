'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/**
 * NThing-UI Radar Scan: 雷達掃描點陣動畫背景
 */
export function RadarScan(props: { size?: number; children?: React.ReactNode }) {
  const size = props.size ?? 120;
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setAngle((a) => (a + 2) % 360), 50);
    return () => clearInterval(id);
  }, []);

  const r = size / 2;

  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
        {[1, 2, 3].map((i) => (
          <circle
            key={i}
            cx={r}
            cy={r}
            r={r * (i / 3)}
            fill="none"
            stroke={nothing.colors.circleBg}
            strokeWidth={1}
            strokeDasharray="4 4"
          />
        ))}
        <line
          x1={r}
          y1={r}
          x2={r + r * Math.cos((angle * Math.PI) / 180)}
          y2={r + r * Math.sin((angle * Math.PI) / 180)}
          stroke={nothing.colors.red}
          strokeWidth={1}
          opacity={0.8}
        />
      </svg>
      {props.children && (
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: size, height: size }}>
          {props.children}
        </div>
      )}
    </div>
  );
}
