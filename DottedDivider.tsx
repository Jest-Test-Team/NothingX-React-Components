'use client';

import { nothing } from './theme';

/**
 * NThing-UI Dotted Divider: 由點組成的分隔線
 */
export function DottedDivider(props: { length?: number; color?: string; vertical?: boolean }) {
  const length = props.length ?? 20;
  const color = props.color ?? nothing.colors.circleBg;
  const vertical = props.vertical ?? false;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        gap: 4,
        alignItems: 'center',
        justifyContent: 'center',
        [vertical ? 'height' : 'width']: length * 6,
      }}
      aria-hidden
    >
      {Array.from({ length }).map((_, i) => (
        <div
          key={i}
          style={{
            width: 2,
            height: 2,
            borderRadius: '50%',
            background: color,
          }}
        />
      ))}
    </div>
  );
}
