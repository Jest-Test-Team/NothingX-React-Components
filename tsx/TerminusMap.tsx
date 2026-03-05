'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 端點星黑底邊緣閃爍白點 */
export function TerminusMap() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((o) => !o), 800);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.bg }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Terminus</div>
      <div style={{ width: 80, height: 50, background: nothing.colors.bg, borderRadius: 8, position: 'relative', border: `1px solid ${nothing.colors.circleBg}` }}>
        <div style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', width: 6, height: 6, borderRadius: '50%', background: on ? nothing.colors.text : nothing.colors.circleBg }} />
      </div>
    </div>
  );
}
