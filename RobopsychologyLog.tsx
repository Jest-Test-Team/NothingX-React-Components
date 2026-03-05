'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 機器人心理學診斷終端，滾動代碼 */
export function RobopsychologyLog() {
  const [line, setLine] = useState('');
  useEffect(() => {
    const id = setInterval(() => setLine(`LOG ${Date.now().toString(16).slice(-6)} DREAM_OK`), 1500);
    return () => clearInterval(id);
  }, []);
  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.bg, fontFamily: 'monospace', fontSize: 10, color: nothing.colors.muted }}>
      <div style={{ color: nothing.colors.red, marginBottom: 6 }}>ROBOPsych</div>
      <div>{line || '—'}</div>
    </div>
  );
}
