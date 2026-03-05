'use client';

import { useState } from 'react';
import { nothing } from './theme';

const ANSWERS = ['Yes', 'No', 'Maybe', 'Try again', 'Outlook good', 'Cannot predict'];

/** 點擊後點陣文字浮現答案 */
export function Magic8Ball() {
  const [answer, setAnswer] = useState<string | null>(null);

  const shake = () => {
    setAnswer(null);
    setTimeout(() => setAnswer(ANSWERS[Math.floor(Math.random() * ANSWERS.length)]), 400);
  };

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Magic 8 Ball">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>8 Ball</div>
      <button type="button" onClick={shake} style={{ width: 56, height: 56, borderRadius: '50%', border: `3px solid ${nothing.colors.circleBg}`, background: nothing.colors.bg, color: nothing.colors.surfaceLight, cursor: 'pointer', fontSize: 10 }}>?</button>
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight, marginTop: 8, minHeight: 20 }}>{answer ?? '—'}</div>
    </div>
  );
}
