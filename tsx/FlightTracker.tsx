'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 點陣飛機在網格上緩慢移動 */
export function FlightTracker() {
  const [x, setX] = useState(10);
  const [y, setY] = useState(20);

  useEffect(() => {
    const id = setInterval(() => {
      setX((p) => (p + 2) % 80);
      setY((p) => (p + 1) % 40);
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Flight tracker">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Flight</div>
      <div style={{ position: 'relative', width: 80, height: 40, background: nothing.colors.circleBg, borderRadius: 8 }}>
        <div style={{ position: 'absolute', left: x, top: y, width: 8, height: 8, color: nothing.colors.red, fontSize: 10 }}>✈</div>
      </div>
    </div>
  );
}
