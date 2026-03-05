'use client';

import { useEffect, useState } from 'react';
import { nothing } from './theme';

/** 裝飾用閃爍方塊 */
export function TerminalBlink(props?: { children?: React.ReactNode }) {
  const [on, setOn] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setOn((o) => !o), 530);
    return () => clearInterval(id);
  }, []);

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      {props?.children}
      <span style={{ width: 10, height: 16, background: on ? nothing.colors.red : 'transparent', display: 'inline-block' }} />
    </span>
  );
}
