'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 午夜 = 人類毀滅；顯示距離午夜的分秒，緩慢閃爍警告 */
const MIDNIGHT_MS = 24 * 60 * 60 * 1000;

export function DoomsdayClock(props?: { offsetMinutes?: number }) {
  const offset = (props?.offsetMinutes ?? 0) * 60 * 1000;
  const [now, setNow] = useState(Date.now());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  useEffect(() => {
    const b = setInterval(() => setBlink((x) => !x), 1200);
    return () => clearInterval(b);
  }, []);

  const todayStart = new Date(new Date().toDateString()).getTime();
  const msToMidnight = MIDNIGHT_MS - ((now - todayStart + offset) % MIDNIGHT_MS);
  const totalSec = Math.max(0, Math.floor(msToMidnight / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <div
      style={{
        padding: 16,
        borderRadius: nothing.radius.card,
        background: blink ? nothing.colors.surface : nothing.colors.surface,
        border: `2px solid ${blink ? nothing.colors.red : nothing.colors.circleBg}`,
        transition: 'border-color 0.6s ease, box-shadow 0.6s ease',
        boxShadow: blink ? `0 0 12px ${nothing.colors.red}40` : 'none',
      }}
      aria-label={`Doomsday clock ${m}:${pad(s)} to midnight`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        To Midnight
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, letterSpacing: 2, color: nothing.colors.red }}>
        {pad(m)}:{pad(s)}
      </div>
    </div>
  );
}
