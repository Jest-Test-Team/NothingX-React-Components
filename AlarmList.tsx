'use client';

import { nothing } from './theme';

type Alarm = { id: string; time: string; enabled: boolean; label?: string };

/**
 * NThing-UI Alarm List: 設定的鬧鐘列表與開關
 */
export function AlarmList(props: { alarms?: Alarm[]; onToggle?: (id: string, enabled: boolean) => void }) {
  const alarms = props.alarms ?? [
    { id: '1', time: '07:00', enabled: true, label: 'Wake' },
    { id: '2', time: '08:30', enabled: false, label: 'Work' },
    { id: '3', time: '12:00', enabled: true, label: 'Lunch' },
  ];

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surfaceLight,
        flexShrink: 0,
      }}
      aria-label="Alarms"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Alarms
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {alarms.map((a) => (
          <div
            key={a.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 10px',
              borderRadius: 12,
              background: '#fff',
            }}
          >
            <div>
              <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: nothing.colors.textDark }}>{a.time}</div>
              {a.label && <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted }}>{a.label}</div>}
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={a.enabled}
              onClick={() => props.onToggle?.(a.id, !a.enabled)}
              style={{
                width: 40,
                height: 22,
                borderRadius: 11,
                border: 'none',
                background: a.enabled ? nothing.colors.red : nothing.colors.muted,
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 2,
                  left: a.enabled ? 20 : 2,
                  width: 18,
                  height: 18,
                  borderRadius: '50%',
                  background: '#fff',
                  transition: 'left 0.2s ease',
                }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
