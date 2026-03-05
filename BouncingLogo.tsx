'use client';

import { useEffect, useState, useRef } from 'react';
import { nothing } from './theme';

const SIZE = 24;

/** DVD 風彈跳點 / Logo */
export function BouncingLogo() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const dx = useRef(2);
  const dy = useRef(1);
  const w = 120;
  const h = 80;

  useEffect(() => {
    const id = setInterval(() => {
      setX((p) => {
        let n = p + dx.current;
        if (n <= 0 || n >= w - SIZE) dx.current *= -1;
        return Math.max(0, Math.min(w - SIZE, n));
      });
      setY((p) => {
        let n = p + dy.current;
        if (n <= 0 || n >= h - SIZE) dy.current *= -1;
        return Math.max(0, Math.min(h - SIZE, n));
      });
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Bouncing logo">
      <div style={{ position: 'relative', width: w, height: h, background: nothing.colors.bg, borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', left: x, top: y, width: SIZE, height: SIZE, borderRadius: '50%', background: nothing.colors.red }} />
      </div>
    </div>
  );
}
