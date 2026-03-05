'use client';

import { useState } from 'react';
import { nothing } from './theme';

/**
 * NThing-UI Note Widget: 快速記下文字的點陣便利貼
 */
export function NoteWidget(props: { initialText?: string; placeholder?: string; onChange?: (text: string) => void }) {
  const [text, setText] = useState(props.initialText ?? '');
  const placeholder = props.placeholder ?? 'Type something...';

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surfaceLight,
        flexShrink: 0,
      }}
      aria-label="Quick note"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Note
      </div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
          props.onChange?.(e.target.value);
        }}
        placeholder={placeholder}
        rows={4}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: 10,
          borderRadius: 12,
          border: `2px solid ${nothing.colors.muted}`,
          background: '#fff',
          fontFamily: 'var(--font-headline, system-ui)',
          fontSize: 12,
          color: nothing.colors.textDark,
          resize: 'vertical',
          minHeight: 80,
        }}
      />
    </div>
  );
}
