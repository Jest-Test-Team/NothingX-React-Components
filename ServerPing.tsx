'use client';

import { useState, useEffect } from 'react';
import { nothing } from './theme';

const POINTS = 20;

/** 伺服器延遲監控，點陣折線圖 */
export function ServerPing(props?: { host?: string }) {
  const [host, setHost] = useState(props?.host ?? '8.8.8.8');
  const [ms, setMs] = useState<number | null>(null);
  const [history, setHistory] = useState<number[]>(Array(POINTS).fill(0));

  useEffect(() => {
    const tick = () => {
      const start = performance.now();
      fetch(`https://${host}`, { mode: 'no-cors', cache: 'no-store' }).catch(() => {}).finally(() => {
        const elapsed = Math.round(performance.now() - start);
        setMs(elapsed);
        setHistory((h) => [...h.slice(1), elapsed]);
      });
    };
    tick();
    const id = setInterval(tick, 2000);
    return () => clearInterval(id);
  }, [host]);

  const maxH = Math.max(...history, 1);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label={`Ping ${host} ${ms ?? '—'}ms`}>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Ping</div>
      <input type="text" value={host} onChange={(e) => setHost(e.target.value)} placeholder="Host" style={{ width: '100%', marginBottom: 8, padding: 6, borderRadius: 8, border: `1px solid ${nothing.colors.circleBg}`, background: nothing.colors.bg, color: nothing.colors.surfaceLight, fontFamily: 'monospace', fontSize: 12 }} />
      <div style={{ fontFamily: 'monospace', fontSize: 18, fontWeight: 700, color: nothing.colors.surfaceLight, marginBottom: 8 }}>{ms != null ? `${ms} ms` : '—'}</div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 36 }}>
        {history.map((v, i) => (
          <div key={i} style={{ flex: 1, height: Math.max(2, (v / maxH) * 36), borderRadius: 1, background: nothing.colors.red }} />
        ))}
      </div>
    </div>
  );
}
