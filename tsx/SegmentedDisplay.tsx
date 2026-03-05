'use client';

import { nothing } from './theme';

/** 七段顯示器：a-g 對應上、右上、右下、下、左下、左上、中；0=關 1=開 */
const SEGMENTS: Record<string, number[]> = {
  '0': [1,1,1,1,1,1,0],
  '1': [0,1,1,0,0,0,0],
  '2': [1,1,0,1,1,0,1],
  '3': [1,1,1,1,0,0,1],
  '4': [0,1,1,0,0,1,1],
  '5': [1,0,1,1,0,1,1],
  '6': [1,0,1,1,1,1,1],
  '7': [1,1,1,0,0,0,0],
  '8': [1,1,1,1,1,1,1],
  '9': [1,1,1,1,0,1,1],
  ' ': [0,0,0,0,0,0,0],
  '-': [0,0,0,0,0,0,1],
};

/**
 * NThing-UI Segmented Display: 仿七段顯示器數字
 */
export function SegmentedDisplay(props: { value: string | number; color?: string; size?: number }) {
  const str = String(props.value);
  const color = props.color ?? nothing.colors.red;
  const size = props.size ?? 24;
  const w = size * 0.6;
  const t = 2;

  return (
    <div style={{ display: 'inline-flex', gap: size * 0.3 }}>
      {str.split('').map((char, i) => {
        const seg = SEGMENTS[char] ?? SEGMENTS[' '];
        return (
          <svg key={i} width={w + t * 2} height={size + t * 2} style={{ display: 'block' }}>
            {/* a-top, b-tr, c-br, d-bottom, e-bl, f-tl, g-mid */}
            <path d={`M ${t} ${t} H ${w+t}`} stroke={seg[0] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
            <path d={`M ${w+t} ${t} V ${size/2+t}`} stroke={seg[1] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
            <path d={`M ${w+t} ${size/2+t} V ${size+t}`} stroke={seg[2] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
            <path d={`M ${w+t} ${size+t} H ${t}`} stroke={seg[3] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
            <path d={`M ${t} ${size+t} V ${size/2+t}`} stroke={seg[4] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
            <path d={`M ${t} ${size/2+t} V ${t}`} stroke={seg[5] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
            <path d={`M ${t} ${size/2+t} H ${w+t}`} stroke={seg[6] ? color : nothing.colors.circleBg} strokeWidth={t} fill="none" />
          </svg>
        );
      })}
    </div>
  );
}
