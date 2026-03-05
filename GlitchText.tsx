'use client';

import { nothing } from './theme';

/**
 * NThing-UI Glitch Text: 數位雜訊/故障藝術效果文字
 */
export function GlitchText(props: { children: React.ReactNode; active?: boolean }) {
  const active = props.active ?? false;

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: 'var(--font-headline, monospace)',
        color: nothing.colors.surfaceLight,
        fontWeight: 700,
      }}
    >
      <span style={{ position: 'relative', zIndex: 1 }}>{props.children}</span>
      {active && (
        <>
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              color: nothing.colors.red,
              clipPath: 'inset(0 90% 0 0)',
              animation: 'glitch1 0.3s infinite',
            }}
          >
            {props.children}
          </span>
          <span
            aria-hidden
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              color: nothing.colors.text,
              clipPath: 'inset(0 0 0 90%)',
              animation: 'glitch2 0.3s infinite',
            }}
          >
            {props.children}
          </span>
        </>
      )}
      <style>{`
        @keyframes glitch1 { 0% { transform: translate(-2px, 0); } 50% { transform: translate(2px, -1px); } 100% { transform: translate(-2px, 0); } }
        @keyframes glitch2 { 0% { transform: translate(2px, 0); } 50% { transform: translate(-2px, 1px); } 100% { transform: translate(2px, 0); } }
      `}</style>
    </span>
  );
}
