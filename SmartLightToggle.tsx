'use client';

import { useState } from 'react';
import { nothing } from './theme';

/** 智慧燈開關，開啟時燈光擴散點陣動畫 */
export function SmartLightToggle(props?: { defaultOn?: boolean }) {
  const [on, setOn] = useState(props?.defaultOn ?? false);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Smart light">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Light</div>
      <button
        type="button"
        onClick={() => setOn((o) => !o)}
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          border: 'none',
          background: on ? nothing.colors.red : nothing.colors.circleBg,
          boxShadow: on ? `0 0 24px ${nothing.colors.red}80` : 'none',
          cursor: 'pointer',
        }}
      />
    </div>
  );
}
