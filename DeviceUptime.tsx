'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

/**
 * NThing-UI Device Uptime: 設備已開機運行時間（Digital Counter 風格）
 */
export function DeviceUptime(props?: { startAt?: number }) {
  const startAt = props?.startAt ?? Date.now() - 3600000 * 2 - 120000;
  const [uptime, setUptime] = useState({ h: 0, m: 0, s: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, Math.floor((Date.now() - startAt) / 1000));
      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = diff % 60;
      setUptime({ h, m, s });
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [startAt]);

  return (
    <div
      style={{
        width: 160,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Uptime ${uptime.h}h ${uptime.m}m ${uptime.s}s`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Uptime
      </div>
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: 2,
          color: nothing.colors.surfaceLight,
        }}
      >
        {pad(uptime.h)}:{pad(uptime.m)}:{pad(uptime.s)}
      </div>
    </div>
  );
}
