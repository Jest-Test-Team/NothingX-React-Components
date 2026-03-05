'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 即時用電瓦數跳動 */
export function PowerConsumption(props?: { watts?: number }) {
  const [w, setW] = useState(props?.watts ?? 0);

  useEffect(() => {
    if (props?.watts != null) { setW(props.watts); return; }
    const id = setInterval(() => setW((p) => Math.max(0, p + (Math.random() - 0.5) * 40)), 800);
    return () => clearInterval(id);
  }, [props?.watts]);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Power consumption">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Power</div>
      <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: nothing.colors.surfaceLight }}>{Math.round(w)} W</div>
    </div>
  );
}
