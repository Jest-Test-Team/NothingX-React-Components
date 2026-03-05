'use client';

import { nothing } from './theme';

/** 仿翻頁顯示器列車時刻 */
export function TrainSchedule(props?: { departures?: { time: string; dest: string }[] }) {
  const departures = props?.departures ?? [
    { time: '14:32', dest: 'North' },
    { time: '14:45', dest: 'Central' },
  ];

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="Train schedule">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Departures</div>
      {departures.map((d, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontFamily: 'monospace', fontSize: 14, color: nothing.colors.surfaceLight }}>
          <span>{d.time}</span>
          <span>{d.dest}</span>
        </div>
      ))}
    </div>
  );
}
