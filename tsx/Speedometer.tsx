'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** GPS 速度 km/h（需權限） */
export function Speedometer() {
  const [speed, setSpeed] = useState<number | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    const w = navigator as any;
    if (!w.getCurrentPosition) return;
    const id = setInterval(() => {
      w.getCurrentPosition((p: GeolocationPosition) => {
        const v = p.coords.speed;
        setSpeed(v != null ? Math.round(v * 3.6) : null);
      }, () => setSpeed(null));
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Speed">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Speed</div>
      <div style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: nothing.colors.surfaceLight }}>{speed != null ? `${speed} km/h` : '—'}</div>
    </div>
  );
}
