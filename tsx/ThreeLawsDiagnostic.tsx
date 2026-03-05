'use client';

import { nothing } from './theme';

/** 三大法則邏輯權重，三條點陣長條 */
export function ThreeLawsDiagnostic(props?: { weights?: number[] }) {
  const w = props?.weights ?? [100, 95, 90];
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Laws</div>
      {w.map((v, i) => (
        <div key={i} style={{ marginBottom: 6 }}>
          <div style={{ height: 6, borderRadius: 3, background: nothing.colors.circleBg, overflow: 'hidden' }}>
            <div style={{ width: `${v}%`, height: '100%', background: nothing.colors.red }} />
          </div>
        </div>
      ))}
    </div>
  );
}
