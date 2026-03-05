'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 介子交互，隨機碰撞黑白點 */
const N = 12;
export function PionInteraction() {
  const [dots, setDots] = useState(() => Array(N).fill(null).map(() => ({ x: Math.random() * 60, y: Math.random() * 40 })));
  useEffect(() => {
    const id = setInterval(() => setDots((d) => d.map((p) => ({ x: (p.x + (Math.random() - 0.5) * 8 + 60) % 60, y: (p.y + (Math.random() - 0.5) * 6 + 40) % 40 }))), 200);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Pion</div>
      <div style={{ position: 'relative', width: 60, height: 40, background: nothing.colors.bg, borderRadius: 8 }}>
        {dots.map((p, i) => <div key={i} style={{ position: 'absolute', left: p.x, top: p.y, width: 4, height: 4, borderRadius: '50%', background: i % 2 ? nothing.colors.text : nothing.colors.red }} />)}
      </div>
    </div>
  );
}
