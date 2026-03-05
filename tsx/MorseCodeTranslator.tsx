'use client';

import { useState } from 'react';
import { nothing } from './theme';

const MORSE: Record<string, string> = { A: '.-', B: '-...', C: '-.-.', D: '-..', E: '.', F: '..-.', G: '--.', H: '....', I: '..', J: '.---', K: '-.-', L: '.-..', M: '--', N: '-.', O: '---', P: '.--.', Q: '--.-', R: '.-.', S: '...', T: '-', U: '..-', V: '...-', W: '.--', X: '-..-', Y: '-.--', Z: '--..', ' ': ' ' };

/** 摩斯密碼，點陣滴答 */
export function MorseCodeTranslator() {
  const [text, setText] = useState('');

  const morse = text.toUpperCase().split('').map((c) => MORSE[c] ?? '').join(' ');

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Morse code">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Morse</div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Text" style={{ width: '100%', marginBottom: 8, padding: 8, background: nothing.colors.bg, border: `1px solid ${nothing.colors.circleBg}`, borderRadius: 8, color: nothing.colors.surfaceLight }} />
      <div style={{ fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight, letterSpacing: 2 }}>{morse || '—'}</div>
    </div>
  );
}
