'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

const POINTS = 24;
const DOT_SIZE = 3;
const GAP = 2;

/**
 * NThing-UI Monitor Network: 即時上傳/下載網速監控（帶有點陣折線圖）
 * Browser: 使用合成數據模擬網速變化
 */
export function MonitorNetwork() {
  const [uploadHistory, setUploadHistory] = useState<number[]>(() => Array(POINTS).fill(0));
  const [downloadHistory, setDownloadHistory] = useState<number[]>(() => Array(POINTS).fill(0));
  const [upload, setUpload] = useState(0);
  const [download, setDownload] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      const u = Math.random() * 80 + 10;
      const d = Math.random() * 120 + 20;
      setUpload(u);
      setDownload(d);
      setUploadHistory((prev) => [...prev.slice(1), u]);
      setDownloadHistory((prev) => [...prev.slice(1), d]);
    }, 500);
    return () => clearInterval(id);
  }, []);

  const chartHeight = 40;
  const maxVal = Math.max(1, ...uploadHistory, ...downloadHistory);

  return (
    <div
      style={{
        width: 185,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Network ↑ ${upload.toFixed(0)} ↓ ${download.toFixed(0)}`}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase' }}>↑ UP</span>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, fontWeight: 700, color: nothing.colors.surfaceLight }}>{upload.toFixed(0)} MB/s</span>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          gap: GAP,
          height: chartHeight,
          marginBottom: 12,
        }}
      >
        {uploadHistory.map((v, i) => (
          <div
            key={`u-${i}`}
            style={{
              width: DOT_SIZE,
              height: Math.max(2, (v / maxVal) * chartHeight),
              background: nothing.colors.red,
              borderRadius: 1,
              transition: 'height 0.2s ease',
            }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.muted, textTransform: 'uppercase' }}>↓ DOWN</span>
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, fontWeight: 700, color: nothing.colors.surfaceLight }}>{download.toFixed(0)} MB/s</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: GAP, height: chartHeight }}>
        {downloadHistory.map((v, i) => (
          <div
            key={`d-${i}`}
            style={{
              width: DOT_SIZE,
              height: Math.max(2, (v / maxVal) * chartHeight),
              background: nothing.colors.text,
              borderRadius: 1,
              transition: 'height 0.2s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
