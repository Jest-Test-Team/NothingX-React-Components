'use client';

import { useEffect, useState, useCallback } from 'react';
import { nothing } from './theme';

const W = 20;
const H = 12;

/** 康威生命遊戲小區塊 */
export function ConwayGameOfLife() {
  const [grid, setGrid] = useState(() => Array(H).fill(null).map(() => Array(W).fill(0).map(() => Math.random() > 0.7 ? 1 : 0)));

  const step = useCallback(() => {
    setGrid((g) => g.map((row, i) => row.map((_, j) => {
      let n = 0;
      for (let di = -1; di <= 1; di++)
        for (let dj = -1; dj <= 1; dj++)
          if (di || dj) n += g[(i + di + H) % H][(j + dj + W) % W];
      return (n === 3 || (g[i][j] && n === 2)) ? 1 : 0;
    })));
  }, []);

  useEffect(() => {
    const id = setInterval(step, 300);
    return () => clearInterval(id);
  }, [step]);

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Game of Life">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Life</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: W * 6, gap: 1 }}>
        {grid.flat().map((c, i) => (
          <div key={i} style={{ width: 5, height: 5, borderRadius: 1, background: c ? nothing.colors.red : nothing.colors.circleBg }} />
        ))}
      </div>
    </div>
  );
}
