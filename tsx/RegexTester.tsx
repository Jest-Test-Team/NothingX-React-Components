'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 極簡正則測試 */
export function RegexTester() {
  const [pattern, setPattern] = useState('');
  const [text, setText] = useState('');
  let error: string | null = null;
  let match: RegExpMatchArray | null = null;
  try {
    if (pattern) match = text.match(new RegExp(pattern, 'g'));
  } catch (e) {
    error = (e as Error).message;
  }

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Regex tester">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Regex</div>
      <input type="text" value={pattern} onChange={(e) => setPattern(e.target.value)} placeholder="/pattern/" style={{ width: '100%', marginBottom: 6, padding: 8, borderRadius: 8, border: `1px solid ${nothing.colors.circleBg}`, background: nothing.colors.bg, color: nothing.colors.surfaceLight, fontFamily: 'monospace' }} />
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Text" rows={3} style={{ width: '100%', boxSizing: 'border-box', marginBottom: 8, padding: 8, borderRadius: 8, border: `1px solid ${nothing.colors.circleBg}`, background: nothing.colors.bg, color: nothing.colors.surfaceLight, fontFamily: 'monospace', resize: 'vertical' }} />
      <div style={{ fontSize: 12, color: error ? nothing.colors.red : nothing.colors.surfaceLight }}>{error ?? (match ? `Match: ${match.join(', ')}` : 'No match')}</div>
    </div>
  );
}
