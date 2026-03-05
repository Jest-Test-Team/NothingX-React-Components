'use client';

import { nothing } from './theme';

/** 點陣鎖頭，解鎖時視覺反饋 */
export function DoorLockStatus(props?: { locked?: boolean }) {
  const locked = props?.locked ?? true;

  return (
    <div style={{ padding: 14, borderRadius: nothing.radius.card, background: nothing.colors.surface }} aria-label={locked ? 'Locked' : 'Unlocked'}>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>Lock</div>
      <div style={{ fontSize: 28, color: locked ? nothing.colors.red : nothing.colors.surfaceLight }}>{locked ? '🔒' : '🔓'}</div>
    </div>
  );
}
