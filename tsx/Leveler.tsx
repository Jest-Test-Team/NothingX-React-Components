'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 氣泡水平儀，實心點在圓內（可接陀螺儀） */
export function Leveler(props?: { tiltX?: number; tiltY?: number }) {
  const [x, setX] = useState(props?.tiltX ?? 0);
  const [y, setY] = useState(props?.tiltY ?? 0);

  useEffect(() => {
    if (props?.tiltX != null) setX(props.tiltX);
    if (props?.tiltY != null) setY(props.tiltY);
  }, [props?.tiltX, props?.tiltY]);

  const cx = 50 + x * 20;
  const cy = 50 + y * 20;

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Leveler">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Level</div>
      <div style={{ position: 'relative', width: 60, height: 60, borderRadius: '50%', border: `2px solid ${nothing.colors.circleBg}` }}>
        <div style={{ position: 'absolute', left: cx - 4, top: cy - 4, width: 8, height: 8, borderRadius: '50%', background: nothing.colors.red }} />
      </div>
    </div>
  );
}
