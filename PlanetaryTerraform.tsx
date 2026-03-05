'use client';

import { nothing } from './theme';

/** 地球化進度，網格密度表示大氣 */
export function PlanetaryTerraform(props?: { progress?: number }) {
  const p = Math.min(100, Math.max(0, props?.progress ?? 45));
  const filled = Math.round((p / 100) * 24);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Terraform</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, width: 64 }}>
        {Array.from({ length: 24 }).map((_, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: 1, background: i < filled ? nothing.colors.red : nothing.colors.circleBg }} />)}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: nothing.colors.surfaceLight, marginTop: 6 }}>{p}%</div>
    </div>
  );
}
