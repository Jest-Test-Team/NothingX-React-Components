'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 科里奧利風暴雷達，旋轉漩渦 */
export function CoriolisStormRadar() {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setAngle((a) => (a + 4) % 360), 50);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Storm</div>
      <div style={{ width: 56, height: 56, borderRadius: '50%', border: `2px dashed ${nothing.colors.red}`, transform: `rotate(${angle}deg)` }} />
    </div>
  );
}
