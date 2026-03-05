'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 極簡「非機器人」勾選，勾選時數位雜訊 */
export function CaptchaNothing() {
  const [checked, setChecked] = useState(false);
  const [glitch, setGlitch] = useState(false);

  const toggle = () => {
    setChecked((c) => !c);
    if (!checked) setGlitch(true);
    setTimeout(() => setGlitch(false), 400);
  };

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: glitch ? nothing.colors.surface : nothing.colors.surface, boxShadow: glitch ? `0 0 12px ${nothing.colors.red}40` : 'none' }} aria-label="Captcha">
      <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <input type="checkbox" checked={checked} onChange={toggle} style={{ width: 18, height: 18, accentColor: nothing.colors.red }} />
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.surfaceLight }}>I am not a robot</span>
      </label>
    </div>
  );
}
