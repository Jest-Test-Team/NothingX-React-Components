'use client';

import { nothing } from './theme';

/**
 * NThing-UI Barcode Generator: 裝飾用條碼視覺元件（非真實編碼）
 */
export function BarcodeGenerator(props: { value?: string; width?: number; height?: number }) {
  const value = props.value ?? '1234567890';
  const width = props.width ?? 120;
  const height = props.height ?? 40;

  const bars = value.split('').flatMap((_, i) => {
    const n = value.charCodeAt(i) % 5;
    return [1, ...Array(n).fill(0), 1];
  });

  return (
    <div
      style={{
        width,
        padding: 8,
        borderRadius: 4,
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
      }}
      aria-label={`Barcode ${value}`}
    >
      <div style={{ display: 'flex', alignItems: 'stretch', height }}>
        {bars.map((w, i) => (
          <div
            key={i}
            style={{
              width: w ? 2 : 1,
              minWidth: w ? 2 : 1,
              background: w ? nothing.colors.textDark : 'transparent',
            }}
          />
        ))}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 10, color: nothing.colors.textDark, letterSpacing: 2 }}>{value}</div>
    </div>
  );
}
