'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 邏輯死結，兩箭頭互指，死結時閃紅 */
export function LogicLoopWarning(props?: { loop?: boolean }) {
  const [blink, setBlink] = useState(false);
  const loop = props?.loop ?? false;
  useEffect(() => {
    if (!loop) return;
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, [loop]);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, border: loop && blink ? `2px solid ${nothing.colors.red}` : 'none' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Logic</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, color: loop ? nothing.colors.red : nothing.colors.muted }}>← →</div>
    </div>
  );
}
