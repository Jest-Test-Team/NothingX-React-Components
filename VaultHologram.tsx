'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 穹窿全息，整點顯示點陣波 */
export function VaultHologram() {
  const now = new Date();
  const open = now.getMinutes() === 0;
  const [show, setShow] = useState(open);
  useEffect(() => {
    const id = setInterval(() => setShow(new Date().getMinutes() === 0), 60000);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Vault</div>
      {show && <div style={{ height: 24, background: `repeating-linear-gradient(90deg, ${nothing.colors.red}, ${nothing.colors.red} 2px, transparent 2px, transparent 6px)` }} />}
    </div>
  );
}
