'use client';

import { nothing } from './theme';

/**
 * NThing-UI Bluetooth Status: 藍牙連接狀態與已連接設備名稱
 */
export function BluetoothStatus(props: { connected?: boolean; deviceName?: string }) {
  const connected = props.connected ?? false;
  const deviceName = props.deviceName ?? '—';

  return (
    <div
      style={{
        width: 175,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        flexShrink: 0,
      }}
      aria-label={`Bluetooth ${connected ? deviceName : 'Disconnected'}`}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: connected ? nothing.colors.red : nothing.colors.circleBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: nothing.colors.surfaceLight,
          fontSize: 18,
          fontWeight: 700,
        }}
      >
        ⟡
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 2 }}>
          Bluetooth
        </div>
        <div
          style={{
            fontFamily: 'var(--font-headline, system-ui)',
            fontSize: 14,
            fontWeight: 600,
            color: nothing.colors.surfaceLight,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {connected ? deviceName : 'Not connected'}
        </div>
      </div>
    </div>
  );
}
