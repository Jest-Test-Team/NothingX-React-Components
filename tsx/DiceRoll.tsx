'use client';

import { useState } from 'react';
import { nothing } from './theme';

const DOTS: Record<number, number[][]> = { 1: [[1,1]], 2: [[0,0],[2,2]], 3: [[0,0],[1,1],[2,2]], 4: [[0,0],[0,2],[2,0],[2,2]], 5: [[0,0],[0,2],[1,1],[2,0],[2,2]], 6: [[0,0],[0,1],[0,2],[2,0],[2,1],[2,2]] };

/** 點陣骰子 D6-D20 */
export function DiceRoll(props?: { sides?: number }) {
  const sides = props?.sides ?? 6;
  const [value, setValue] = useState<number | null>(null);

  const roll = () => {
    setValue(null);
    setTimeout(() => setValue(1 + Math.floor(Math.random() * sides)), 400);
  };

  const v = value ?? 0;
  const dots = DOTS[v as keyof typeof DOTS];

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Dice">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>D{sides}</div>
      <div style={{ width: 40, height: 40, borderRadius: 8, border: `2px solid ${nothing.colors.circleBg}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, padding: 4, marginBottom: 8 }}>
        {dots?.map(([r, c], i) => <div key={i} style={{ gridColumn: c + 1, gridRow: r + 1, width: 6, height: 6, borderRadius: '50%', background: nothing.colors.red, justifySelf: 'center', alignSelf: 'center' }} />)}
      </div>
      <button type="button" onClick={roll} style={{ padding: '8px 16px', borderRadius: 8, border: 'none', background: nothing.colors.red, color: nothing.colors.surfaceLight, cursor: 'pointer' }}>Roll</button>
    </div>
  );
}
