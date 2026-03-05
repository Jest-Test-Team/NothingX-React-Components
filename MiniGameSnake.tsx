'use client';

import { useCallback, useEffect, useState } from 'react';
import { nothing } from './theme';

const GRID = 10;
const CELL = 14;

type Dir = 'up' | 'down' | 'left' | 'right';

/**
 * NThing-UI Mini Game Snake: 點陣貪吃蛇小遊戲
 */
export function MiniGameSnake() {
  const [snake, setSnake] = useState<[number, number][]>([[2, 2], [2, 1], [2, 0]]);
  const [food, setFood] = useState<[number, number]>([5, 5]);
  const [dir, setDir] = useState<Dir>('right');
  const [gameOver, setGameOver] = useState(false);

  const placeFood = useCallback(() => {
    let x: number, y: number;
    do {
      x = Math.floor(Math.random() * GRID);
      y = Math.floor(Math.random() * GRID);
    } while (snake.some(([sx, sy]) => sx === x && sy === y));
    setFood([x, y]);
  }, [snake]);

  useEffect(() => {
    if (gameOver) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        const head = prev[0];
        let nx = head[0], ny = head[1];
        if (dir === 'up') ny--;
        if (dir === 'down') ny++;
        if (dir === 'left') nx--;
        if (dir === 'right') nx++;
        if (nx < 0 || nx >= GRID || ny < 0 || ny >= GRID) {
          setGameOver(true);
          return prev;
        }
        if (prev.some(([x, y]) => x === nx && y === ny)) {
          setGameOver(true);
          return prev;
        }
        const next = [[nx, ny] as [number, number], ...prev];
        if (nx === food[0] && ny === food[1]) {
          setFood([-1, -1]);
          setTimeout(() => placeFood(), 0);
          return next;
        }
        next.pop();
        return next;
      });
    }, 200);
    return () => clearInterval(id);
  }, [dir, gameOver, food, placeFood]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (gameOver) return;
      if (e.key === 'ArrowUp' && dir !== 'down') setDir('up');
      if (e.key === 'ArrowDown' && dir !== 'up') setDir('down');
      if (e.key === 'ArrowLeft' && dir !== 'right') setDir('left');
      if (e.key === 'ArrowRight' && dir !== 'left') setDir('right');
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [dir, gameOver]);

  return (
    <div
      style={{
        width: GRID * CELL + 32,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label="Snake game"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Snake
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: GRID * CELL, height: GRID * CELL, gap: 1 }}>
        {Array.from({ length: GRID * GRID }).map((_, i) => {
          const x = i % GRID;
          const y = Math.floor(i / GRID);
          const isSnake = snake.some(([sx, sy]) => sx === x && sy === y);
          const isFood = food[0] === x && food[1] === y;
          return (
            <div
              key={i}
              style={{
                width: CELL - 1,
                height: CELL - 1,
                borderRadius: 2,
                background: isSnake ? nothing.colors.red : isFood ? nothing.colors.text : nothing.colors.circleBg,
              }}
            />
          );
        })}
      </div>
      {gameOver && <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.red, marginTop: 8 }}>Game Over</div>}
    </div>
  );
}
