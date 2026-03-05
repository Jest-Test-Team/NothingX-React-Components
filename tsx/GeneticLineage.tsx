'use client';

import { nothing } from './theme';

/** 極簡點陣族譜樹 */
export function GeneticLineage() {
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Lineage</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: nothing.colors.red }} />
        <div style={{ width: 2, height: 12, background: nothing.colors.circleBg }} />
        <div style={{ display: 'flex', gap: 16 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: nothing.colors.surfaceLight }} />
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: nothing.colors.surfaceLight }} />
        </div>
      </div>
    </div>
  );
}
