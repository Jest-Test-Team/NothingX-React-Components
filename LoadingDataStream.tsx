'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const CHARS = '01アイウエオ';

/** 資料瀑布載入動畫 */
export function LoadingDataStream() {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const id = setInterval(() => {
      setLines((prev) => [Array(12).fill(null).map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join(''), ...prev.slice(0, 8)]);
    }, 150);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.bg, fontFamily: 'monospace', fontSize: 11, color: nothing.colors.red, height: 120, overflow: 'hidden' }} aria-label="Loading">
      {lines.map((l, i) => (
        <div key={i} style={{ opacity: 1 - i * 0.12 }}>{l}</div>
      ))}
    </div>
  );
}
