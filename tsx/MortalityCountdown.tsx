'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 基於平均壽命推算的個人死亡倒數（秒），數字跳動 */
const AVG_LIFESPAN_YEARS = 80;

export function MortalityCountdown(props?: { birthYear?: number; birthMonth?: number; birthDay?: number }) {
  const y = props?.birthYear ?? new Date().getFullYear() - 30;
  const m = (props?.birthMonth ?? 1) - 1;
  const d = props?.birthDay ?? 1;
  const deathMs = new Date(y + AVG_LIFESPAN_YEARS, m, d).getTime();
  const [remaining, setRemaining] = useState(Math.max(0, Math.floor((deathMs - Date.now()) / 1000)));

  useEffect(() => {
    const id = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n: number, len = 2) => n.toString().padStart(len, '0');
  const sec = remaining % 60;
  const min = Math.floor(remaining / 60) % 60;
  const hr = Math.floor(remaining / 3600) % 24;
  const days = Math.floor(remaining / 86400);

  return (
    <div
      style={{
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
      }}
      aria-label={`Mortality countdown ${remaining} seconds`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Remaining
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: nothing.colors.surfaceLight, letterSpacing: 1 }}>
        {days}d {pad(hr)}:{pad(min)}:{pad(sec)}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted, marginTop: 4 }}>seconds: {remaining.toLocaleString()}</div>
    </div>
  );
}
