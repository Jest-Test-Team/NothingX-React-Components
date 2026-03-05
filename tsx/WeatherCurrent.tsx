'use client';

import { nothing } from './theme';

type IconKind = 'sun' | 'cloud' | 'rain' | 'snow' | 'fog';

/**
 * 點陣風格天氣圖示（太陽、雲、雨等）
 */
function DotWeatherIcon({ kind }: { kind: IconKind }) {
  const size = 32;
  const dot = 4;
  const gap = 2;
  const grid = (row: number, col: number, key?: string) => (
    <div
      key={key ?? `${row}-${col}`}
      style={{
        position: 'absolute',
        left: col * (dot + gap),
        top: row * (dot + gap),
        width: dot,
        height: dot,
        borderRadius: '50%',
        background: nothing.colors.red,
      }}
    />
  );
  if (kind === 'sun') {
    const points = [[1, 1], [1, 3], [3, 1], [3, 3], [2, 0], [2, 4], [0, 2], [4, 2], [2, 2]];
    return (
      <div style={{ position: 'relative', width: size, height: size }}>
        {points.map(([r, c], i) => grid(r, c, `sun-${i}`))}
      </div>
    );
  }
  if (kind === 'cloud') {
    const points = [[1, 1], [1, 2], [1, 3], [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [3, 1], [3, 2], [3, 3]];
    return (
      <div style={{ position: 'relative', width: size, height: size }}>
        {points.map(([r, c], i) => grid(r, c, `cloud-${i}`))}
      </div>
    );
  }
  if (kind === 'rain') {
    return (
      <div style={{ position: 'relative', width: size, height: size }}>
        {[[1, 1], [1, 2], [2, 1], [2, 2], [2, 3], [3, 0], [3, 2], [3, 4]].map(([r, c], i) => grid(r, c, `rain-${i}`))}
        {[1.5, 2.5, 3.5].map((r, i) => (
          <div key={`r-${i}`} style={{ position: 'absolute', left: 8 + i * 8, top: r * (dot + gap), width: 2, height: 6, background: nothing.colors.red }} />
        ))}
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      {grid(2, 2)}
    </div>
  );
}

/**
 * NThing-UI Weather Current: 當前天氣狀況（點陣風格圖示）
 */
export function WeatherCurrent(props: { temp?: number; icon?: IconKind; desc?: string }) {
  const temp = props.temp ?? 24;
  const icon = props.icon ?? 'sun';
  const desc = props.desc ?? 'Sunny';

  return (
    <div
      style={{
        width: 140,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
      }}
      aria-label={`Weather ${temp}°C ${desc}`}
    >
      <DotWeatherIcon kind={icon} />
      <div>
        <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 22, fontWeight: 700, color: nothing.colors.surfaceLight }}>{temp}°</div>
        <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red }}>{desc}</div>
      </div>
    </div>
  );
}
