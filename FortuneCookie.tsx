'use client';

import { nothing } from './theme';

const QUOTES = ['Like tears in rain.', 'All those moments will be lost in time.', 'More human than human.', 'I have seen things you would not believe.'];

/** 每日工程師/科幻名言 */
export function FortuneCookie(props?: { quote?: string }) {
  const i = Math.floor((Date.now() / 86400000) % QUOTES.length);
  const quote = props?.quote ?? QUOTES[i];

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Fortune">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Fortune</div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.surfaceLight, fontStyle: 'italic' }}>&ldquo;{quote}&rdquo;</div>
    </div>
  );
}
