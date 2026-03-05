'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 點陣硬幣翻轉 */
export function CoinFlip() {
  const [side, setSide] = useState<'H' | 'T' | null>(null);
  const [flipping, setFlipping] = useState(false);

  const flip = () => {
    setFlipping(true);
    setSide(null);
    setTimeout(() => {
      setSide(Math.random() > 0.5 ? 'H' : 'T');
      setFlipping(false);
    }, 600);
  };

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Coin flip">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Coin</div>
      <div style={{ width: 48, height: 48, borderRadius: '50%', border: `3px solid ${nothing.colors.red}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'monospace', fontSize: 20, fontWeight: 700, color: nothing.colors.surfaceLight, marginBottom: 8, transform: flipping ? 'rotateY(180deg)' : 'none', transition: 'transform 0.3s' }}>{side ?? '?'}</div>
      <button type="button" onClick={flip} disabled={flipping} style={{ padding: '8px 16px', borderRadius: 8, border: 'none', background: nothing.colors.red, color: nothing.colors.surfaceLight, cursor: 'pointer' }}>Flip</button>
    </div>
  );
}
