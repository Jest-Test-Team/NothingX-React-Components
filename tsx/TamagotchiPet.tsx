'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 迷你點陣電子寵物走動 */
export function TamagotchiPet() {
  const [x, setX] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setX((p) => (p + 8) % 80), 400);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Tamagotchi">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Pet</div>
      <div style={{ position: 'relative', width: 80, height: 24, background: nothing.colors.circleBg, borderRadius: 8 }}>
        <div style={{ position: 'absolute', left: x, top: 4, width: 12, height: 12, borderRadius: 2, background: nothing.colors.red }} />
      </div>
    </div>
  );
}
