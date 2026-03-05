'use client';

import { nothing } from './theme';

/** 點陣星座輪廓（依定位可接 API；此處為靜態裝飾） */
const STARS = [[20, 10], [35, 15], [50, 8], [65, 20], [80, 12], [40, 35], [55, 40]];

export function StarMap() {
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Star map">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Stars</div>
      <svg width={100} height={50} style={{ display: 'block' }}>
        {STARS.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={2} fill={nothing.colors.surfaceLight} />
        ))}
      </svg>
    </div>
  );
}
