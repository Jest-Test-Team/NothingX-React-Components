'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const SAFE_PPM = 420;
const DANGER_PPM = 450;

/** 大氣 CO2 ppm 追蹤；超標時紅色雜訊 */
export function CarbonPPM(props?: { ppm?: number }) {
  const [ppm, setPpm] = useState(props?.ppm ?? 418);
  const [noise, setNoise] = useState(false);

  useEffect(() => {
    if (props?.ppm != null) {
      setPpm(props.ppm);
      setNoise(props.ppm >= DANGER_PPM);
      return;
    }
    const id = setInterval(() => {
      setPpm((p) => p + (Math.random() > 0.7 ? 1 : 0));
      setNoise(() => ppm >= DANGER_PPM || (ppm >= SAFE_PPM && Math.random() > 0.8));
    }, 2000);
    return () => clearInterval(id);
  }, [props?.ppm, ppm]);

  const over = ppm >= SAFE_PPM;

  return (
    <div
      style={{
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        boxShadow: noise && over ? `0 0 20px ${nothing.colors.red}30` : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
      aria-label={`CO2 ${ppm} ppm`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        CO₂ ppm
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 28,
          fontWeight: 700,
          color: over ? nothing.colors.red : nothing.colors.surfaceLight,
          letterSpacing: 2,
          opacity: noise && over ? 0.9 : 1,
        }}
      >
        {ppm}
      </div>
    </div>
  );
}
