'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** ISS 經緯度（可接 API）；點陣地球儀上的亮點 */
const ISS_API = 'https://api.wheretheiss.at/v1/satellites/25544';

export function ISS_Tracker() {
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    const fetchISS = () => {
      fetch(ISS_API).then((r) => r.json()).then((d: { latitude?: number; longitude?: number }) => {
        if (!cancelled && d.latitude != null) {
          setLat(d.latitude);
          setLon(d.longitude ?? 0);
        }
      }).catch(() => {});
    };
    fetchISS();
    const id = setInterval(fetchISS, 10000);
    return () => { cancelled = true; clearInterval(id); };
  }, []);

  const x = lon != null ? 50 + (lon / 360) * 80 : 50;
  const y = lat != null ? 50 - (lat / 180) * 40 : 50;

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="ISS tracker">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>ISS</div>
      <div style={{ position: 'relative', width: 100, height: 60, background: nothing.colors.circleBg, borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: x - 4, top: y - 4, width: 8, height: 8, borderRadius: '50%', background: nothing.colors.red, boxShadow: `0 0 8px ${nothing.colors.red}` }} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: nothing.colors.surfaceLight, marginTop: 6 }}>
        {lat != null && lon != null ? `${lat.toFixed(2)}° ${lon.toFixed(2)}°` : '—'}
      </div>
    </div>
  );
}
