'use client';

import { nothing } from '../theme';

/**
 * NThing-UI News Ticker: 橫向滾動最新頭條（跑馬燈）
 */
export function NewsTicker(props: { items?: string[]; speed?: number }) {
  const items = props.items ?? [
    'Market opens higher on tech rally.',
    'New policy to take effect next week.',
    'Local weather: Sunny, 24°C.',
  ];
  const speed = props.speed ?? 30;

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 320,
        padding: '12px 16px',
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        overflow: 'hidden',
        flexShrink: 0,
      }}
      aria-label="News ticker"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Headlines
      </div>
      <div
        style={{
          display: 'flex',
          gap: 40,
          animation: `ticker ${speed}s linear infinite`,
          width: 'max-content',
        }}
      >
        {(items.concat(items)).map((text, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-headline, system-ui)',
              fontSize: 12,
              color: nothing.colors.surfaceLight,
              whiteSpace: 'nowrap',
            }}
          >
            {text}
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
