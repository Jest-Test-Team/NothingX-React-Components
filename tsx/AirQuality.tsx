'use client';

import { nothing } from './theme';
import * as React from 'react';

/**
 * NThing-UI Air Quality: AQI 空氣品質指數（低於標準顯示紅色）
 */
export function AirQuality(props: { aqi?: number; label?: string }) {
  const aqi = props.aqi ?? 45;
  const label = props.label ?? 'AQI';
  const isBad = aqi > 100;

  return (
    <div
      style={{
        width: 120,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        flexShrink: 0,
      }}
      aria-label={`Air quality ${aqi} ${label}`}
    >
      <span
        style={{
          fontFamily: 'var(--font-headline, system-ui)',
          fontSize: 28,
          fontWeight: 700,
          color: isBad ? nothing.colors.red : nothing.colors.surfaceLight,
        }}
      >
        {aqi}
      </span>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>
        {label}
      </span>
      <div style={{ display: 'flex', gap: 2, marginTop: 4 }}>
        {[50, 100, 150, 200].map((threshold, i) => (
          <div
            key={i}
            style={{
              width: 16,
              height: 6,
              borderRadius: 1,
              background: aqi > threshold ? nothing.colors.red : nothing.colors.circleBg,
            }}
          />
        ))}
      </div>
    </div>
  );
}
