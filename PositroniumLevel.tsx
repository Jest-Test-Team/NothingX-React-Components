'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 正電子素濃度，臨界時紅色點陣閃爍 */
export function PositroniumLevel(props?: { level?: number; critical?: number }) {
  const level = props?.level ?? 65;
  const critical = props?.critical ?? 80;
  const [blink, setBlink] = useState(false);
  useEffect(() => {
    if (level < critical) return;
    const id = setInterval(() => setBlink((b) => !b), 400);
    return () => clearInterval(id);
  }, [level, critical]);
  const alert = level >= critical;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, boxShadow: alert && blink ? `0 0 16px ${nothing.colors.red}` : 'none' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Positronium</div>
      <div style={{ fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: alert ? nothing.colors.red : nothing.colors.surfaceLight }}>{level}%</div>
    </div>
  );
}
