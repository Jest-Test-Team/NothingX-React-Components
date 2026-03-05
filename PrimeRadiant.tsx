'use client';

import { nothing } from './theme';

/** 第一輻射器，密集點陣網路 */
const N = 40;
export function PrimeRadiant() {
  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Prime Radiant</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, width: 80 }}>
        {Array.from({ length: N }).map((_, i) => (
          <div key={i} style={{ width: 4, height: 4, borderRadius: 1, background: Math.random() > 0.5 ? nothing.colors.red : nothing.colors.circleBg }} />
        ))}
      </div>
    </div>
  );
}
