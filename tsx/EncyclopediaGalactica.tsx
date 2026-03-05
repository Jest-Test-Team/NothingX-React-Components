'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 銀河百科搜尋，打字機點陣輸出 */
export function EncyclopediaGalactica() {
  const [q, setQ] = useState('');
  const result = q ? `Result: ${q} (found)` : '';
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Encyclopedia</div>
      <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search" style={{ width: '100%', marginBottom: 8, padding: 8, background: nothing.colors.bg, border: `1px solid ${nothing.colors.circleBg}`, borderRadius: 8, color: nothing.colors.surfaceLight, fontFamily: 'monospace' }} />
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: nothing.colors.muted }}>{result || '—'}</div>
    </div>
  );
}
