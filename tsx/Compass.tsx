'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const DIRS = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

/** 數位指南針方位度數 */
export function Compass() {
  const [deg, setDeg] = useState(0);

  useEffect(() => {
    if (!(navigator as any).permissions?.query) return;
    (navigator as any).permissions.query({ name: 'geolocation' }).then(() => {
      const id = navigator.geolocation.watchPosition(
        (p) => setDeg(p.coords.heading ?? 0),
        () => {},
        { enableHighAccuracy: true }
      );
      return () => navigator.geolocation.clearWatch(id);
    }).catch(() => {});
  }, []);

  const idx = Math.round(deg / 45) % 8;

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Compass">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Compass</div>
      <div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: nothing.colors.surfaceLight }}>{DIRS[idx]} {Math.round(deg)}°</div>
    </div>
  );
}
