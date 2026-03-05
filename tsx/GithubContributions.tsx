'use client';

import { nothing } from './theme';

const COLS = 13;
const ROWS = 7;

/** 點陣風 GitHub 貢獻圖，深淺表示 commit 數 */
export function GithubContributions(props?: { grid?: number[][] }) {
  const grid = props?.grid ?? Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => Math.floor(Math.random() * 5)));

  const color = (level: number) => {
    if (level === 0) return nothing.colors.circleBg;
    if (level === 1) return '#1a1a1f';
    if (level === 2) return '#2d333b';
    if (level === 3) return '#3d454d';
    return nothing.colors.text;
  };

  return (
    <div style={{ padding: 12, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label="GitHub contributions">
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Contributions</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {grid.map((row, i) => (
          <div key={i} style={{ display: 'flex', gap: 2 }}>
            {row.map((v, j) => (
              <div key={j} style={{ width: 10, height: 10, borderRadius: 2, background: color(v) }} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
