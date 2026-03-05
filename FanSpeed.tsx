'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const BLADES = 5;
const CENTER = 28;

/**
 * NThing-UI Fan Speed: 散熱風扇轉速動畫（點陣旋轉效果）
 */
export function FanSpeed(props: { rpm?: number; label?: string }) {
  const [angle, setAngle] = useState(0);
  const rpm = props.rpm ?? 1200;
  const label = props.label ?? 'FAN';

  useEffect(() => {
    const degPerMs = (rpm / 60) * 360 / 1000;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      setAngle((now - start) * degPerMs % 360);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rpm]);

  return (
    <div
      style={{
        width: 100,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        flexShrink: 0,
      }}
      aria-label={`Fan ${rpm} RPM`}
    >
      <div style={{ position: 'relative', width: 56, height: 56 }}>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 56,
            height: 56,
            marginLeft: -28,
            marginTop: -28,
            transform: `rotate(${angle}deg)`,
            transition: 'none',
          }}
        >
          {Array.from({ length: BLADES }).map((_, i) => {
            const a = (i / BLADES) * 360;
            return (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: CENTER,
                  top: CENTER,
                  width: 2,
                  height: 20,
                  background: nothing.colors.red,
                  borderRadius: 1,
                  transformOrigin: 'center 0',
                  transform: `rotate(${a}deg) translateY(-8)`,
                }}
              />
            );
          })}
        </div>
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: 10,
            height: 10,
            marginLeft: -5,
            marginTop: -5,
            borderRadius: '50%',
            background: nothing.colors.circleBg,
          }}
        />
      </div>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, fontWeight: 700, color: nothing.colors.surfaceLight }}>{rpm} RPM</span>
      <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 9, color: nothing.colors.red, textTransform: 'uppercase' }}>{label}</span>
    </div>
  );
}
