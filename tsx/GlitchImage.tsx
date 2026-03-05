'use client';

import { nothing } from './theme';

/**
 * NThing-UI Glitch Image: 單色點陣濾鏡風格的圖片
 */
export function GlitchImage(props: { src: string; alt: string; width?: number; height?: number; dotSize?: number }) {
  const width = props.width ?? 80;
  const height = props.height ?? 80;
  const dotSize = props.dotSize ?? 4;

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        borderRadius: nothing.radius.card,
        overflow: 'hidden',
        background: nothing.colors.circleBg,
      }}
    >
      <img
        src={props.src}
        alt={props.alt}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'grayscale(1) contrast(1.2)',
          opacity: 0.9,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `radial-gradient(circle, ${nothing.colors.surface} 1px, transparent 1px)`,
          backgroundSize: `${dotSize}px ${dotSize}px`,
          pointerEvents: 'none',
          mixBlendMode: 'overlay',
        }}
      />
    </div>
  );
}
