'use client';

import { nothing } from './theme';

type AppUsage = { name: string; minutes: number };

/**
 * NThing-UI Screen Time: 螢幕使用時間統計
 */
export function ScreenTime(props: { totalMinutes?: number; apps?: AppUsage[] }) {
  const totalMinutes = props.totalMinutes ?? 186;
  const apps = props.apps ?? [
    { name: 'Browser', minutes: 72 },
    { name: 'Social', minutes: 45 },
    { name: 'Work', minutes: 38 },
    { name: 'Other', minutes: 31 },
  ];
  const maxM = Math.max(...apps.map((a) => a.minutes), 1);

  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Screen time ${h}h ${m}m`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>Screen Time</span>
        <span style={{ fontFamily: 'monospace', fontSize: 16, fontWeight: 700, color: nothing.colors.surfaceLight }}>{h}h {m}m</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {apps.map((app) => (
          <div key={app.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ width: 56, fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.muted, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{app.name}</span>
            <div style={{ flex: 1, height: 6, borderRadius: 3, background: nothing.colors.circleBg, overflow: 'hidden' }}>
              <div style={{ width: `${(app.minutes / maxM) * 100}%`, height: '100%', background: nothing.colors.red, borderRadius: 3, transition: 'width 0.3s ease' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.surfaceLight }}>{app.minutes}m</span>
          </div>
        ))}
      </div>
    </div>
  );
}
