'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 撲翼機四條線段震動 */
export function OrnithopterWings() {
  const [t, setT] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 80);
    return () => clearInterval(id);
  }, []);
  const y = Math.sin(t * 0.3) * 4;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Ornithopter</div>
      <svg width={60} height={24}>
        {[0, 1, 2, 3].map((i) => (
          <line key={i} x1={10 + i * 14} y1={12} x2={20 + i * 14} y2={12 + y} stroke={nothing.colors.red} strokeWidth={2} />
        ))}
      </svg>
    </div>
  );
}
