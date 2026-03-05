'use client';

import { useState } from 'react';
import { nothing } from './theme';

async function sha256(s: string): Promise<string> {
  if (typeof crypto !== 'undefined' && crypto.subtle) {
    const buf = new TextEncoder().encode(s);
    const hash = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(hash)).map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  return '—';
}

/** 輸入文字即時 MD5/SHA-256（瀏覽器僅 SHA-256） */
export function HashGenerator() {
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [algo, setAlgo] = useState<'sha256'>('sha256');

  const update = async (v: string) => {
    setInput(v);
    if (!v) { setHash(''); return; }
    const h = await sha256(v);
    setHash(h);
  };

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Hash generator">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Hash</div>
      <textarea value={input} onChange={(e) => update(e.target.value)} placeholder="Input" rows={2} style={{ width: '100%', boxSizing: 'border-box', marginBottom: 8, padding: 8, borderRadius: 8, border: `1px solid ${nothing.colors.circleBg}`, background: nothing.colors.bg, color: nothing.colors.surfaceLight, fontFamily: 'monospace', resize: 'vertical' }} />
      <div style={{ fontFamily: 'monospace', fontSize: 11, color: nothing.colors.surfaceLight, wordBreak: 'break-all' }}>{algo}: {hash || '—'}</div>
    </div>
  );
}
