'use client';

import { nothing } from './theme';

/**
 * NThing-UI Progress Dots: 由一排點組成的線性進度條
 */
export function ProgressDots(props: { value?: number; max?: number; count?: number; color?: string }) {
  const value = Math.min(props.max ?? 100, Math.max(0, props.value ?? 0));
  const max = props.max ?? 100;
  const count = props.count ?? 10;
  const color = props.color ?? nothing.colors.red;
  const filled = Math.round((value / max) * count);

  return (
    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: i < filled ? color : nothing.colors.circleBg,
            transition: 'background 0.2s ease',
          }}
        />
      ))}
    </div>
  );
}
