'use client';

import { nothing } from './theme';

const size = 70;
const r = size / 2 - 4;
const circumference = 2 * Math.PI * r;

/**
 * NThing-UI Step Counter: 每日步數環形進度條
 */
export function StepCounter(props: { steps?: number; goal?: number }) {
  const steps = props.steps ?? 6842;
  const goal = props.goal ?? 10000;
  const percent = Math.min(100, (steps / goal) * 100);
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div
      style={{
        width: 140,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
      }}
      aria-label={`Steps ${steps} of ${goal}`}
    >
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={nothing.colors.circleBg} strokeWidth={4} />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            stroke={percent >= 100 ? nothing.colors.red : nothing.colors.text}
            strokeWidth={4}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 0.3s ease' }}
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 14, fontWeight: 700, color: nothing.colors.surfaceLight }}>{Math.round(percent)}%</span>
        </div>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: nothing.colors.surfaceLight }}>{steps.toLocaleString()}</div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>Steps / {goal.toLocaleString()}</div>
    </div>
  );
}
