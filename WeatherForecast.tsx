'use client';

import { nothing } from './theme';

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

/**
 * NThing-UI Weather Forecast: 未來三天的天氣預報小卡
 */
export function WeatherForecast(props: { items?: { day: string; high: number; low: number; icon?: string }[] }) {
  const items = props.items ?? [
    { day: DAYS[new Date().getDay()], high: 28, low: 18, icon: '☀' },
    { day: DAYS[(new Date().getDay() + 1) % 7], high: 26, low: 17, icon: '⛅' },
    { day: DAYS[(new Date().getDay() + 2) % 7], high: 24, low: 16, icon: '☁' },
  ];

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surfaceLight,
        flexShrink: 0,
      }}
      aria-label="Weather forecast"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Forecast
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8 }}>
        {items.slice(0, 3).map((item, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '8px 4px',
              borderRadius: 12,
              background: '#fff',
            }}
          >
            <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 9, color: nothing.colors.textDark, marginBottom: 4 }}>{item.day}</div>
            <div style={{ fontSize: 16, marginBottom: 4 }}>{item.icon ?? '—'}</div>
            <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, fontWeight: 700, color: nothing.colors.textDark }}>{item.high}°</div>
            <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted }}>{item.low}°</div>
          </div>
        ))}
      </div>
    </div>
  );
}
