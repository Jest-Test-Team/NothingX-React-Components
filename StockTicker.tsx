'use client';

import { nothing } from './theme';

/**
 * NThing-UI Stock Ticker: 股票/大盤指數（上漲白、下跌紅）
 */
export function StockTicker(props: { symbol?: string; price?: number; change?: number; changePercent?: number }) {
  const symbol = props.symbol ?? 'INDEX';
  const price = props.price ?? 3850.12;
  const change = props.change ?? 42.5;
  const changePercent = props.changePercent ?? (change / (price - change)) * 100;
  const isUp = change >= 0;

  return (
    <div
      style={{
        width: 160,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Stock ${symbol} ${price}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.red, textTransform: 'uppercase' }}>{symbol}</span>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: isUp ? nothing.colors.surfaceLight : nothing.colors.red }}>
          {isUp ? '▲' : '▼'} {Math.abs(changePercent).toFixed(2)}%
        </span>
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 22, fontWeight: 700, color: isUp ? nothing.colors.surfaceLight : nothing.colors.red }}>
        {price.toFixed(2)}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted }}>
        {isUp ? '+' : ''}{change.toFixed(2)} today
      </div>
    </div>
  );
}
