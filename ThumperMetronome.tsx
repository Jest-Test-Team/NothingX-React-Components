'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 沙槌節拍，同心圓擴散 */
export function ThumperMetronome() {
  const [pulse, setPulse] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => (p + 1) % 4), 800);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Thumper</div>
      {[0, 1, 2, 3].map((i) => (
        <div key={i} style={{ width: 40 + i * 12, height: 40 + i * 12, borderRadius: '50%', border: `1px solid ${i === pulse ? nothing.colors.red : nothing.colors.circleBg}`, marginBottom: 4 }} />
      ))}
    </div>
  );
}
