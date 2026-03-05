'use client';

import { nothing } from './theme';

/** 三位一體同步率，三交錯點陣圓環 */
export function TriadSync(props?: { sync?: number[] }) {
  const sync = props?.sync ?? [70, 85, 60];
  const size = 40;
  const r = size / 2 - 2;
  const C = 2 * Math.PI * r;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Triad Sync</div>
      <div style={{ display: 'flex', gap: 8 }}>
        {sync.map((s, i) => (
          <svg key={i} width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
            <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={nothing.colors.circleBg} strokeWidth={2} />
            <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={nothing.colors.red} strokeWidth={2} strokeDasharray={C} strokeDashoffset={C - (s/100)*C} />
          </svg>
        ))}
      </div>
    </div>
  );
}
