'use client';

import { nothing } from './theme';

/**
 * NThing-UI Crypto Tracker: 加密貨幣即時價格（如 BTC, ETH）
 */
export function CryptoTracker(props: { items?: { symbol: string; price: number; change24h: number }[] }) {
  const items = props.items ?? [
    { symbol: 'BTC', price: 43250.5, change24h: 2.3 },
    { symbol: 'ETH', price: 2280.2, change24h: -0.8 },
  ];

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label="Crypto prices"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Crypto
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((item) => {
          const isUp = item.change24h >= 0;
          return (
            <div key={item.symbol} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.surfaceLight }}>{item.symbol}</span>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: nothing.colors.surfaceLight }}>
                  ${item.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: isUp ? nothing.colors.surfaceLight : nothing.colors.red }}>
                  {isUp ? '+' : ''}{item.change24h}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
