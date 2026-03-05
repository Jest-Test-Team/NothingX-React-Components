'use client';

import { nothing } from './theme';

const BARS = 4;
const BAR_WIDTH = 6;
const BAR_GAP = 2;

/**
 * NThing-UI Wifi Signal: Wi-Fi 訊號強度的點陣圖示
 * strength 0–4，0 為無訊號
 */
export function WifiSignal(props: { strength?: number; connected?: boolean }) {
  const strength = Math.min(4, Math.max(0, props.strength ?? 3));
  const connected = props.connected ?? true;

  return (
    <div
      style={{
        width: 80,
        padding: 12,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexShrink: 0,
      }}
      aria-label={`Wi-Fi ${strength}/4 ${connected ? 'Connected' : 'Disconnected'}`}
    >
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: BAR_GAP, height: 24 }}>
        {Array.from({ length: BARS }).map((_, i) => {
          const h = 6 + i * 5;
          const active = i < strength;
          return (
            <div
              key={i}
              style={{
                width: BAR_WIDTH,
                height: h,
                borderRadius: 1,
                background: active ? (connected ? nothing.colors.text : nothing.colors.red) : nothing.colors.circleBg,
                transition: 'background 0.2s ease',
              }}
            />
          );
        })}
      </div>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.surfaceLight }}>
        {connected ? 'Wi‑Fi' : '—'}
      </span>
    </div>
  );
}
