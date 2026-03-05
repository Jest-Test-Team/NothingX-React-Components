'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 沙蟲地震儀，滾動/滑鼠劇烈時震動波 */
export function SandwormSeismograph() {
  const [wave, setWave] = useState<number[]>(() => Array(24).fill(20));
  useEffect(() => {
    const id = setInterval(() => setWave((w) => [...w.slice(1), 20 + (Math.random() - 0.5) * 16]), 100);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Seismograph</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 36 }}>
        {wave.map((h, i) => <div key={i} style={{ flex: 1, height: h, borderRadius: 1, background: nothing.colors.red }} />)}
      </div>
    </div>
  );
}
