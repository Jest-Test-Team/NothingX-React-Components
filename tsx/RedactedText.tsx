'use client';

import React, { useState } from 'react';
import { nothing } from './theme';

/** SCP 風塗黑文字，hover 解碼 */
export function RedactedText(props: { children: string }) {
  const [hover, setHover] = useState(false);

  return (
    <span
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: hover ? 'transparent' : nothing.colors.textDark,
        color: hover ? nothing.colors.surfaceLight : nothing.colors.textDark,
        transition: 'all 0.2s',
      }}
    >
      {props.children}
    </span>
  );
}
