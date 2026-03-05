'use client';

import { nothing } from './theme';

/**
 * NThing-UI Nothing Card: 圓角與點陣陰影的基礎容器
 */
export function NothingCard(props: { children: React.ReactNode; dark?: boolean; style?: React.CSSProperties }) {
  const dark = props.dark ?? false;

  return (
    <div
      style={{
        borderRadius: nothing.radius.card,
        background: dark ? nothing.colors.surface : nothing.colors.surfaceLight,
        padding: 16,
        boxShadow: `0 0 0 1px ${nothing.colors.circleBg}`,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
}
