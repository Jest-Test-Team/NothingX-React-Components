'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const WAVE_BARS = 24;

/**
 * NThing-UI Voice Recorder: 錄音小工具，錄音時顯示聲波
 */
export function VoiceRecorder(props: { isRecording?: boolean; duration?: number }) {
  const isRecording = props.isRecording ?? false;
  const [duration, setDuration] = useState(props.duration ?? 0);
  const [waves, setWaves] = useState<number[]>(() => Array(WAVE_BARS).fill(8));

  useEffect(() => {
    if (!isRecording) return;
    const t = setInterval(() => setDuration((d) => d + 1), 1000);
    return () => clearInterval(t);
  }, [isRecording]);

  useEffect(() => {
    if (!isRecording) {
      setWaves(Array(WAVE_BARS).fill(8));
      return;
    }
    const id = setInterval(() => {
      setWaves((prev) => [...prev.slice(1), 4 + Math.random() * 20]);
    }, 100);
    return () => clearInterval(id);
  }, [isRecording]);

  const m = Math.floor(duration / 60);
  const s = duration % 60;

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={isRecording ? `Recording ${m}:${s.toString().padStart(2, '0')}` : 'Voice recorder'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>Record</span>
        {isRecording && <span style={{ fontFamily: 'monospace', fontSize: 14, fontWeight: 700, color: nothing.colors.red }}>{m}:{s.toString().padStart(2, '0')}</span>}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, height: 36, marginBottom: 12 }}>
        {waves.map((h, i) => (
          <div
            key={i}
            style={{
              width: 4,
              height: h,
              borderRadius: 1,
              background: isRecording ? nothing.colors.red : nothing.colors.circleBg,
              transition: 'height 0.1s ease',
            }}
          />
        ))}
      </div>
      <button
        type="button"
        style={{
          width: 48,
          height: 48,
          margin: '0 auto',
          display: 'block',
          borderRadius: '50%',
          border: 'none',
          background: isRecording ? nothing.colors.red : nothing.colors.circleBg,
          color: nothing.colors.surfaceLight,
          cursor: 'pointer',
          fontSize: 18,
        }}
      >
        {isRecording ? '■' : '●'}
      </button>
    </div>
  );
}
