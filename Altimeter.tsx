'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 海拔高度（需權限） */
export function Altimeter() {
  const [alt, setAlt] = useState<number | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    const id = setInterval(() => {
      navigator.geolocation.getCurrentPosition((p) => setAlt(Math.round(p.coords.altitude ?? 0)), () => setAlt(null));
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Altitude">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Altitude</div>
      <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: nothing.colors.surfaceLight }}>{alt != null ? `${alt} m` : '—'}</div>
    </div>
  );
}
