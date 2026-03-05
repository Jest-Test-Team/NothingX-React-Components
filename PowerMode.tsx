'use client';

import { nothing } from './theme';

type Mode = 'power_saver' | 'balanced' | 'performance';

/**
 * NThing-UI Power Mode: 省電模式/效能模式的切換按鈕
 */
export function PowerMode(props: { mode?: Mode; onModeChange?: (m: Mode) => void }) {
  const mode = props.mode ?? 'balanced';
  const modes: { id: Mode; label: string }[] = [
    { id: 'power_saver', label: '省電' },
    { id: 'balanced', label: '平衡' },
    { id: 'performance', label: '效能' },
  ];

  return (
    <div
      style={{
        width: 175,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Power mode ${mode}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Power Mode
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        {modes.map((m) => {
          const active = m.id === mode;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => props.onModeChange?.(m.id)}
              style={{
                flex: 1,
                padding: '8px 6px',
                borderRadius: 12,
                border: `2px solid ${active ? nothing.colors.red : nothing.colors.circleBg}`,
                background: active ? nothing.colors.red : 'transparent',
                color: active ? nothing.colors.surfaceLight : nothing.colors.muted,
                fontFamily: 'var(--font-headline, system-ui)',
                fontSize: 11,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {m.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
