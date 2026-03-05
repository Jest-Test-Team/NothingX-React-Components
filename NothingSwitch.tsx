'use client';

import { nothing } from './theme';

/**
 * NThing-UI Nothing Switch: 極簡 Toggle 開關
 */
export function NothingSwitch(props: { checked?: boolean; onChange?: (checked: boolean) => void; label?: string }) {
  const checked = props.checked ?? false;

  return (
    <label
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        cursor: 'pointer',
      }}
    >
      <div
        role="switch"
        aria-checked={checked}
        tabIndex={0}
        onClick={() => props.onChange?.(!checked)}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); props.onChange?.(!checked); } }}
        style={{
          width: 44,
          height: 24,
          borderRadius: 12,
          background: checked ? nothing.colors.red : nothing.colors.circleBg,
          position: 'relative',
          transition: 'background 0.2s ease',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 2,
            left: checked ? 22 : 2,
            width: 20,
            height: 20,
            borderRadius: '50%',
            background: nothing.colors.surfaceLight,
            transition: 'left 0.2s ease',
          }}
        />
      </div>
      {props.label && (
        <span style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 13, color: nothing.colors.surfaceLight }}>
          {props.label}
        </span>
      )}
    </label>
  );
}
