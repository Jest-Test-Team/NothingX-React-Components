'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 經緯度即時，軍事雷達字體風格 */
export function CoordinateTracker() {
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  useEffect(() => {
    if (!navigator.geolocation) return;
    const id = navigator.geolocation.watchPosition(
      (p) => { setLat(p.coords.latitude); setLon(p.coords.longitude); },
      () => {},
      { enableHighAccuracy: true }
    );
    return () => navigator.geolocation.clearWatch(id);
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, fontFamily: 'monospace' }} aria-label="Coordinates">
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Coordinates</div>
      <div style={{ fontSize: 12, color: nothing.colors.surfaceLight, letterSpacing: 1 }}>LAT {lat != null ? lat.toFixed(5) : '—'}</div>
      <div style={{ fontSize: 12, color: nothing.colors.surfaceLight, letterSpacing: 1 }}>LON {lon != null ? lon.toFixed(5) : '—'}</div>
    </div>
  );
}
