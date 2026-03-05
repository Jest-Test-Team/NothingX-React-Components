'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/**
 * NThing-UI Monitor CPU: CPU 使用率圓形點陣進度條
 * Browser: 使用合成數值模擬（無 Node/systeminfo API）
 */
export function MonitorCPU(props?: { percent?: number }) {
  const [percent, setPercent] = useState(props?.percent ?? 0);

  useEffect(() => {
    if (props?.percent != null) {
      setPercent(Math.min(100, Math.max(0, props.percent)));
      return;
    }
    const id = setInterval(() => {
      setPercent((p) => (p >= 95 ? 5 : p + Math.random() * 15 + 2));
    }, 800);
    return () => clearInterval(id);
  }, [props?.percent]);

  const size = 72;
  const r = size / 2 - 3;
  const circumference = 2 * Math.PI * r;
  const dotLength = 4;
  const gap = 6;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      style={{
        width: 175,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
      }}
      aria-label={`CPU ${Math.round(percent)}%`}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={nothing.colors.circleBg}
            strokeWidth={3}
            strokeDasharray={`${dotLength} ${gap}`}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={percent > 85 ? nothing.colors.red : nothing.colors.text}
            strokeWidth={3}
            strokeDasharray={`${dotLength} ${gap}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>
      </div>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 15, fontWeight: 700, color: nothing.colors.surfaceLight }}>
        {Math.round(percent)}%
      </span>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>
        CPU
      </span>
    </div>
  );
}
