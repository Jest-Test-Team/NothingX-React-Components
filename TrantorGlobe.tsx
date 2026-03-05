'use client';

import { nothing } from './theme';

/** 川陀金屬球體，密集網格點 */
export function TrantorGlobe() {
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Trantor</div>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: `repeating-conic-gradient(from 0deg, ${nothing.colors.circleBg} 0deg 10deg, ${nothing.colors.surfaceLight} 10deg 20deg)` }} />
    </div>
  );
}
