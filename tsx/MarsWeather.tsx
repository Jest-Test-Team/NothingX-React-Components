'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const MARS_API = 'https://api.mars.spacex.com/weather';

/** 火星天氣與 Sol（可接 NASA/SpaceX 風格 API） */
export function MarsWeather() {
  const [sol, setSol] = useState<number | null>(null);
  const [temp, setTemp] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch(MARS_API).then((r) => r.json()).then((d: { sol?: number; temp?: number; season?: string }) => {
      if (!cancelled) {
        setSol(d.sol ?? 0);
        setTemp(d.temp ?? null);
      }
    }).catch(() => {
      if (!cancelled) setSol(0);
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Mars weather">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Mars</div>
      <div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: nothing.colors.surfaceLight }}>Sol {sol ?? '—'}</div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.muted }}>{temp != null ? `${temp}°C` : '—'}</div>
    </div>
  );
}
