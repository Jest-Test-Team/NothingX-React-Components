'use client';

import { useEffect, useState, useCallback } from 'react';
import { nothing } from './theme';

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

/**
 * NThing-UI Stopwatch: 帶有圈數記錄的碼表
 */
export function Stopwatch() {
  const [running, setRunning] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [laps, setLaps] = useState<number[]>([]);

  useEffect(() => {
    if (!running) return;
    const start = Date.now() - elapsed;
    const id = setInterval(() => setElapsed(Date.now() - start), 10);
    return () => clearInterval(id);
  }, [running, elapsed]);

  const addLap = useCallback(() => {
    setLaps((prev) => [...prev, elapsed]);
  }, [elapsed]);

  const reset = useCallback(() => {
    setRunning(false);
    setElapsed(0);
    setLaps([]);
  }, []);

  const ms = Math.floor((elapsed % 1000) / 10);
  const sec = Math.floor((elapsed / 1000) % 60);
  const min = Math.floor(elapsed / 60000);

  return (
    <div
      style={{
        width: 185,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Stopwatch ${min}:${pad(sec)}.${pad(ms)}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Stopwatch
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 28, fontWeight: 700, letterSpacing: 2, color: nothing.colors.surfaceLight, marginBottom: 12 }}>
        {pad(min)}:{pad(sec)}.<small style={{ fontSize: 18 }}>{pad(ms)}</small>
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
        <button
          type="button"
          onClick={() => setRunning((r) => !r)}
          style={{
            flex: 1,
            padding: 8,
            borderRadius: 12,
            border: 'none',
            background: nothing.colors.red,
            color: nothing.colors.surfaceLight,
            fontFamily: 'var(--font-headline, system-ui)',
            fontSize: 12,
            cursor: 'pointer',
          }}
        >
          {running ? 'Stop' : 'Start'}
        </button>
        <button type="button" onClick={addLap} disabled={!running} style={{ flex: 1, padding: 8, borderRadius: 12, border: `2px solid ${nothing.colors.circleBg}`, background: 'transparent', color: nothing.colors.muted, fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, cursor: running ? 'pointer' : 'not-allowed' }}>
          Lap
        </button>
        <button type="button" onClick={reset} style={{ flex: 1, padding: 8, borderRadius: 12, border: `2px solid ${nothing.colors.circleBg}`, background: 'transparent', color: nothing.colors.muted, fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, cursor: 'pointer' }}>
          Reset
        </button>
      </div>
      {laps.length > 0 && (
        <div style={{ maxHeight: 80, overflow: 'auto' }}>
          {laps.map((lap, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: nothing.colors.muted, marginBottom: 4 }}>
              <span>Lap {i + 1}</span>
              <span style={{ fontFamily: 'monospace' }}>{pad(Math.floor(lap / 60000))}:{pad(Math.floor((lap / 1000) % 60))}.{pad(Math.floor((lap % 1000) / 10))}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
