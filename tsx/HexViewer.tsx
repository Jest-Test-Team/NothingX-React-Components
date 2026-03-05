'use client';

import { nothing } from './theme';

/** 16 進位資料檢視器，裝飾用 */
export function HexViewer(props?: { lines?: number }) {
  const lines = props?.lines ?? 8;
  const base = 0x0040_0000 + Math.floor(Math.random() * 0x1000);

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.bg, fontFamily: 'monospace', fontSize: 10, color: nothing.colors.muted }} aria-hidden>
      <div style={{ color: nothing.colors.red, marginBottom: 6 }}>HEX</div>
      {Array.from({ length: lines }).map((_, i) => {
        const addr = base + i * 16;
        const bytes = Array.from({ length: 16 }, () => Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase());
        return (
          <div key={i} style={{ marginBottom: 2 }}>
            <span style={{ color: nothing.colors.red }}>{addr.toString(16).toUpperCase().padStart(8, '0')}</span>
            {'  '}
            <span style={{ color: nothing.colors.surfaceLight }}>{bytes.join(' ')}</span>
          </div>
        );
      })}
    </div>
  );
}
