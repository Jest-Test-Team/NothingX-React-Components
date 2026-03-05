'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 駭客任務風數字滾動，停在一隨機數 */
export function RandomNumberGen(props?: { min?: number; max?: number }) {
  const min = props?.min ?? 0;
  const max = props?.max ?? 9999;
  const [value, setValue] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);
    const target = min + Math.floor(Math.random() * (max - min + 1));
    let count = 0;
    const id = setInterval(() => {
      setValue(min + Math.floor(Math.random() * (max - min + 1)));
      count++;
      if (count > 20) {
        clearInterval(id);
        setValue(target);
        setRolling(false);
      }
    }, 80);
  };

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Random number">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Random</div>
      <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, color: nothing.colors.surfaceLight, marginBottom: 8 }}>{value ?? '—'}</div>
      <button type="button" onClick={roll} disabled={rolling} style={{ padding: '8px 16px', borderRadius: 8, border: 'none', background: nothing.colors.red, color: nothing.colors.surfaceLight, cursor: rolling ? 'wait' : 'pointer' }}>Roll</button>
    </div>
  );
}
