'use client';

import { nothing } from './theme';

/** 四角準星 + 掃描線取景框 */
export function QRScannerUI() {
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="QR scanner">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Scan</div>
      <div style={{ position: 'relative', width: 160, height: 160, border: `2px solid ${nothing.colors.circleBg}`, borderRadius: 12 }}>
        <div style={{ position: 'absolute', top: 8, left: 8, width: 24, height: 24, borderTop: `3px solid ${nothing.colors.red}`, borderLeft: `3px solid ${nothing.colors.red}` }} />
        <div style={{ position: 'absolute', top: 8, right: 8, width: 24, height: 24, borderTop: `3px solid ${nothing.colors.red}`, borderRight: `3px solid ${nothing.colors.red}` }} />
        <div style={{ position: 'absolute', bottom: 8, left: 8, width: 24, height: 24, borderBottom: `3px solid ${nothing.colors.red}`, borderLeft: `3px solid ${nothing.colors.red}` }} />
        <div style={{ position: 'absolute', bottom: 8, right: 8, width: 24, height: 24, borderBottom: `3px solid ${nothing.colors.red}`, borderRight: `3px solid ${nothing.colors.red}` }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 2, background: nothing.colors.red, opacity: 0.6, animation: 'scan 2s linear infinite' }} />
      </div>
      <style>{`@keyframes scan { 0%,100% { transform: translateY(-50%) translateY(-40px); } 50% { transform: translateY(-50%) translateY(40px); } }`}</style>
    </div>
  );
}
