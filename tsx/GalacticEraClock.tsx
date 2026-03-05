'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 雙曆法 G.E. / F.E. */
export function GalacticEraClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  const ge = 12500 + Math.floor(now.getTime() / 31536000000);
  const fe = ge - 12069;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Era</div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.surfaceLight }}>G.E. {ge}</div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.muted }}>F.E. {fe}</div>
    </div>
  );
}
