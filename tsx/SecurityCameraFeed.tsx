'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 偽監視器框，閃爍 REC 與時間戳 */
export function SecurityCameraFeed() {
  const [rec, setRec] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    const t = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
    const r = setInterval(() => setRec((c) => !c), 1000);
    return () => { clearInterval(t); clearInterval(r); };
  }, []);

  return (
    <div style={{ padding: 8, borderRadius: nothing.radius.card, background: nothing.colors.bg, border: `2px solid ${nothing.colors.circleBg}` }} aria-label="Camera feed">
      <div style={{ position: 'relative', width: 120, height: 80, background: nothing.colors.surface, borderRadius: 8 }}>
        <div style={{ position: 'absolute', top: 4, left: 4, fontFamily: 'monospace', fontSize: 10, color: rec ? nothing.colors.red : nothing.colors.muted }}>REC</div>
        <div style={{ position: 'absolute', bottom: 4, right: 4, fontFamily: 'monospace', fontSize: 9, color: nothing.colors.muted }}>{time}</div>
      </div>
    </div>
  );
}
