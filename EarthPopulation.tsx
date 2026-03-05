'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 全球人口即時估算（往上跳動的數字）；可接 API 或固定基數 + 增長 */
const BASE_POPULATION = 8_040_000_000;
const GROWTH_PER_SEC = 2.5;

export function EarthPopulation() {
  const [pop, setPop] = useState(BASE_POPULATION);

  useEffect(() => {
    const start = Date.now();
    const id = setInterval(() => {
      const elapsed = (Date.now() - start) / 1000;
      setPop(Math.floor(BASE_POPULATION + elapsed * GROWTH_PER_SEC));
    }, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
      }}
      aria-label={`Earth population ${pop}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Earth
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: nothing.colors.surfaceLight, letterSpacing: 1 }}>
        {pop.toLocaleString()}
      </div>
    </div>
  );
}
