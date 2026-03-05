'use client';

import { nothing } from './theme';

/** 蒸餾服水分回收，低於 98% 紅色警告 */
export function StillsuitWaterLevel(props?: { level?: number }) {
  const level = Math.min(100, Math.max(0, props?.level ?? 99));
  const warn = level < 98;
  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface, border: warn ? `2px solid ${nothing.colors.red}` : 'none' }}>
      <div style={{ fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Stillsuit</div>
      <div style={{ height: 8, borderRadius: 4, background: nothing.colors.circleBg, overflow: 'hidden' }}>
        <div style={{ width: `${level}%`, height: '100%', background: warn ? nothing.colors.red : nothing.colors.surfaceLight }} />
      </div>
      <div style={{ fontFamily: 'monospace', fontSize: 12, color: warn ? nothing.colors.red : nothing.colors.surfaceLight }}>{level}%</div>
    </div>
  );
}
