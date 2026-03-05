'use client';

import { nothing } from './theme';

/** 90 年 × 52 週 = 4680 格；已度過=實心，未來=空心 Memento Mori */
const WEEKS_PER_YEAR = 52;
const YEARS = 90;
const TOTAL = WEEKS_PER_YEAR * YEARS;

export function LifeCalendar(props?: { birthYear?: number; birthWeek?: number }) {
  const birthYear = props?.birthYear ?? new Date().getFullYear() - 25;
  const now = new Date();
  const start = new Date(birthYear, 0, 1).getTime();
  const elapsedWeeks = Math.min(TOTAL, Math.max(0, Math.floor((now.getTime() - start) / (7 * 24 * 60 * 60 * 1000))));

  const cols = 52;

  return (
    <div
      style={{
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
      }}
      aria-label="Life calendar weeks lived"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Life · {elapsedWeeks} / {TOTAL} weeks
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: cols * 6 }}>
        {Array.from({ length: TOTAL }).map((_, i) => {
          const lived = i < elapsedWeeks;
          return (
            <div
              key={i}
              style={{
                width: 5,
                height: 5,
                borderRadius: 1,
                background: lived ? nothing.colors.red : nothing.colors.circleBg,
                opacity: lived ? 1 : 0.4,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
