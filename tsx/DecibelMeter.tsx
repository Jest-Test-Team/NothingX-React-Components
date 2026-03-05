'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 麥克風環境噪音 dB（需權限） */
export function DecibelMeter() {
  const [db, setDb] = useState<number | null>(null);

  useEffect(() => {
    let ctx: AudioContext | null = null;
    const run = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        ctx = new AudioContext();
        const src = ctx.createMediaStreamSource(stream);
        const processor = ctx.createScriptProcessor(256, 1, 1);
        processor.onaudioprocess = (e) => {
          const buf = e.inputBuffer.getChannelData(0);
          const rms = Math.sqrt(buf.reduce((a, s) => a + s * s, 0) / buf.length);
          setDb(Math.round(20 * Math.log10(Math.max(1e-5, rms)) + 60));
        };
        src.connect(processor);
        processor.connect(ctx.destination);
      } catch {
        setDb(null);
      }
    };
    run();
    return () => { ctx?.close(); };
  }, []);

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Decibel meter">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>dB</div>
      <div style={{ fontFamily: 'monospace', fontSize: 24, fontWeight: 700, color: nothing.colors.surfaceLight }}>{db != null ? `${db} dB` : '—'}</div>
    </div>
  );
}
