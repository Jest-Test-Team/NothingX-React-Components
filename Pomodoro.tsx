'use client';

import { useEffect, useState, useCallback } from 'react';
import { nothing } from './theme';

const WORK_SEC = 25 * 60;
const BREAK_SEC = 5 * 60;

function pad(n: number) {
  return n.toString().padStart(2, '0');
}

/**
 * NThing-UI Pomodoro: 番茄鐘工作法計時器
 */
export function Pomodoro() {
  const [phase, setPhase] = useState<'work' | 'break'>('work');
  const [remaining, setRemaining] = useState(WORK_SEC);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running || remaining <= 0) return;
    const id = setInterval(() => {
      setRemaining((r) => {
        if (r <= 1) {
          setPhase((p) => (p === 'work' ? 'break' : 'work'));
          return 0;
        }
        return r - 1;
      });
    }, 1000);
    return () => clearInterval(id);
  }, [running, remaining]);

  useEffect(() => {
    if (remaining === 0) {
      setRemaining(phase === 'work' ? BREAK_SEC : WORK_SEC);
    }
  }, [remaining, phase]);

  const min = Math.floor(remaining / 60);
  const sec = remaining % 60;

  return (
    <div
      style={{
        width: 160,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: phase === 'work' ? nothing.colors.surface : nothing.colors.surface,
        borderLeft: `4px solid ${phase === 'work' ? nothing.colors.red : nothing.colors.text}`,
        flexShrink: 0,
      }}
      aria-label={`Pomodoro ${phase} ${min}:${pad(sec)}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        {phase === 'work' ? 'Focus' : 'Break'}
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 32, fontWeight: 700, color: nothing.colors.surfaceLight }}>
        {pad(min)}:{pad(sec)}
      </div>
      <button
        type="button"
        onClick={() => setRunning((r) => !r)}
        style={{
          marginTop: 12,
          width: '100%',
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
        {running ? 'Pause' : 'Start'}
      </button>
    </div>
  );
}
