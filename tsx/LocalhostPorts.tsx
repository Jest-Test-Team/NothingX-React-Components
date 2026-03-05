'use client';

import { useState, useEffect } from 'react';
import { nothing } from './theme';

const PORTS = [3000, 8080, 5173, 4173, 5000];

/** 本機 Port 佔用狀態燈號 */
export function LocalhostPorts() {
  const [status, setStatus] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const check = async () => {
      const next: Record<number, boolean> = {};
      await Promise.all(PORTS.map(async (port) => {
        try {
          await fetch(`http://127.0.0.1:${port}`, { mode: 'no-cors', cache: 'no-store' });
          next[port] = true;
        } catch {
          next[port] = false;
        }
      }));
      setStatus((s) => ({ ...s, ...next }));
    };
    check();
    const id = setInterval(check, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Local ports">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Ports</div>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {PORTS.map((port) => (
          <div key={port} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', background: status[port] ? nothing.colors.red : nothing.colors.circleBg }} />
            <span style={{ fontFamily: 'monospace', fontSize: 12, color: nothing.colors.surfaceLight }}>{port}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
