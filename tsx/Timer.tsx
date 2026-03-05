'use client';

import { useEffect, useState, useCallback } from 'react';
import { nothing } from './theme';

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

/**
 * NThing-UI Timer: 倒數計時器（時間到時閃爍點陣動畫）
 */
export function Timer(props: { initialMinutes?: number }) {
  const initialMs = (props.initialMinutes ?? 5) * 60 * 1000;
  const [remaining, setRemaining] = useState(initialMs);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    if (!running || remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1000) {
          setDone(true);
          setRunning(false);
          return 0;
        }
        return r - 1000;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, remaining]);

  useEffect(() => {
    if (!done) return;
    const id = setInterval(() => setFlash((f) => !f), 400);
    return () => clearInterval(id);
  }, [done]);

  const min = Math.floor(remaining / 60000);
  const sec = Math.floor((remaining / 1000) % 60);

  return (
    <div
      style={{
        width: 160,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: done && flash ? nothing.colors.red : nothing.colors.surface,
        transition: 'background 0.2s ease',
        flexShrink: 0,
      }}
      aria-label={`Timer ${min}:${pad(sec)}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Timer
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 32, fontWeight: 700, letterSpacing: 2, color: done ? nothing.colors.surfaceLight : nothing.colors.surfaceLight }}>
        {pad(min)}:{pad(sec)}
      </div>
      {done && <div style={{ fontSize: 11, color: nothing.colors.surfaceLight, marginTop: 4 }}>Time&apos;s up</div>}
      {!done && (
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            style={{ flex: 1, padding: 8, borderRadius: 12, border: 'none', background: nothing.colors.red, color: nothing.colors.surfaceLight, fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, cursor: 'pointer' }}
          >
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            type="button"
            onClick={() => { setRemaining(initialMs); setRunning(false); }}
            style={{ flex: 1, padding: 8, borderRadius: 12, border: `2px solid ${nothing.colors.circleBg}`, background: 'transparent', color: nothing.colors.muted, fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, cursor: 'pointer' }}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );
}
