'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 仿 CLI，閃爍底線游標 _ */
export function TerminalPrompt(props?: { prompt?: string; initialInput?: string }) {
  const promptStr = props?.prompt ?? '~ ';
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      style={{
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.bg,
        fontFamily: 'monospace',
        fontSize: 13,
        color: nothing.colors.surfaceLight,
      }}
      aria-label="Terminal prompt"
    >
      <span style={{ color: nothing.colors.red }}>{promptStr}</span>
      <span style={{ opacity: cursor ? 1 : 0 }}>_</span>
    </div>
  );
}
