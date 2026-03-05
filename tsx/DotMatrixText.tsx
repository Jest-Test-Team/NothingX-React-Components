'use client';

import { nothing } from './theme';

/** 簡易 5x7 點陣字元對應（0 = 空，1 = 點） */
const DOT_MATRIX: Record<string, number[][]> = {
  '0': [[1,1,1],[1,0,1],[1,0,1],[1,0,1],[1,1,1]],
  '1': [[0,1,0],[1,1,0],[0,1,0],[0,1,0],[1,1,1]],
  '2': [[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],
  '3': [[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],
  '4': [[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],
  '5': [[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],
  '6': [[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],
  '7': [[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],
  '8': [[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],
  '9': [[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]],
  ' ': [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],
  A: [[0,1,0],[1,0,1],[1,1,1],[1,0,1],[1,0,1]],
  B: [[1,1,0],[1,0,1],[1,1,0],[1,0,1],[1,1,0]],
  '.': [[0],[0],[0],[0],[1]],
  ':': [[0],[1],[0],[1],[0]],
};

const DEFAULT_GRID = [[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]];

/**
 * NThing-UI Dot Matrix Text: 將文字轉為點陣效果顯示
 */
export function DotMatrixText(props: { children: string; color?: string; dotSize?: number; gap?: number }) {
  const text = String(props.children ?? '').toUpperCase();
  const color = props.color ?? nothing.colors.surfaceLight;
  const dotSize = props.dotSize ?? 3;
  const gap = props.gap ?? 1;

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: gap + 2 }}>
      {text.split('').map((char, i) => {
        const grid = DOT_MATRIX[char] ?? DEFAULT_GRID;
        return (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', gap }}>
            {grid.map((row, r) => (
              <div key={r} style={{ display: 'flex', gap }}>
                {row.map((cell, c) => (
                  <div
                    key={c}
                    style={{
                      width: dotSize,
                      height: dotSize,
                      borderRadius: 1,
                      background: cell ? color : 'transparent',
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
