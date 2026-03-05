'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const ZONES: { label: string; tz: string }[] = [
  { label: 'TOKYO', tz: 'Asia/Tokyo' },
  { label: 'NYC', tz: 'America/New_York' },
  { label: 'LONDON', tz: 'Europe/London' },
];

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

/**
 * NThing-UI World Clock: 多時區時鐘並排
 */
export function WorldClock(props?: { zones?: { label: string; tz: string }[] }) {
  const zones = props?.zones ?? ZONES;
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label="World clock"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        World Clock
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {zones.map((z) => {
          const t = new Date(now.toLocaleString('en-US', { timeZone: z.tz }));
          const h = t.getHours();
          const m = t.getMinutes();
          return (
            <div key={z.tz} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted }}>{z.label}</span>
              <span style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: nothing.colors.surfaceLight }}>
                {pad(h)}<span style={{ color: nothing.colors.red }}>:</span>{pad(m)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
