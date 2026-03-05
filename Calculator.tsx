'use client';

import { useState, useCallback } from 'react';
import { nothing } from './theme';

/**
 * NThing-UI Calculator: 復古電子計算機介面
 */
export function Calculator() {
  const [display, setDisplay] = useState('0');
  const [prev, setPrev] = useState<string | null>(null);
  const [op, setOp] = useState<string | null>(null);

  const onDigit = useCallback((d: string) => {
    setDisplay((s) => (s === '0' && d !== '.' ? d : s + d));
  }, []);

  const onOp = useCallback((o: string) => {
    setPrev(display);
    setOp(o);
    setDisplay('0');
  }, [display]);

  const onEquals = useCallback(() => {
    if (prev == null || op == null) return;
    const a = parseFloat(prev);
    const b = parseFloat(display);
    let result = 0;
    if (op === '+') result = a + b;
    else if (op === '−') result = a - b;
    else if (op === '×') result = a * b;
    else if (op === '÷') result = b === 0 ? 0 : a / b;
    setDisplay(String(Math.round(result * 1e10) / 1e10));
    setPrev(null);
    setOp(null);
  }, [prev, op, display]);

  const onClear = useCallback(() => {
    setDisplay('0');
    setPrev(null);
    setOp(null);
  }, []);

  const onKey = useCallback((key: string) => {
    if (key === '±') setDisplay((s) => String(-parseFloat(s)));
    else if (key === '%') setDisplay((s) => String(parseFloat(s) / 100));
  }, []);

  const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '−'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div
      style={{
        width: 200,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label="Calculator"
    >
      <div
        style={{
          fontFamily: 'monospace',
          fontSize: 24,
          fontWeight: 700,
          color: nothing.colors.surfaceLight,
          textAlign: 'right',
          marginBottom: 12,
          padding: '8px 10px',
          borderRadius: 8,
          background: nothing.colors.circleBg,
          minHeight: 36,
        }}
      >
        {display}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        {buttons.map((row, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 6, justifyContent: 'space-between' }}>
            {row.map((key) => {
              const isOp = ['+', '−', '×', '÷', '='].includes(key);
              const isZero = key === '0';
              const isRed = key === 'C' || key === '=';
              const handleClick = () => {
                if (key === 'C') onClear();
                else if (key === '=') onEquals();
                else if (['+', '−', '×', '÷'].includes(key)) onOp(key);
                else if (key === '±' || key === '%') onKey(key);
                else onDigit(key);
              };
              return (
                <button
                  key={key}
                  type="button"
                  onClick={handleClick}
                  style={{
                    width: isZero ? 'calc(50% - 3px)' : 40,
                    height: 40,
                    borderRadius: 20,
                    border: 'none',
                    background: isRed ? nothing.colors.red : isOp ? nothing.colors.circleBg : nothing.colors.surfaceLight,
                    color: isOp || isRed ? nothing.colors.surfaceLight : nothing.colors.textDark,
                    fontFamily: 'var(--font-headline, system-ui)',
                    fontSize: 16,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
