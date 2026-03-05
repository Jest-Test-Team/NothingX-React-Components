'use client';

import { nothing } from './theme';

/**
 * NThing-UI Daily Word: 每日一詞/單字學習（可搭配 Quotes）
 */
export function DailyWord(props: { word?: string; definition?: string; example?: string }) {
  const word = props.word ?? 'minimal';
  const definition = props.definition ?? 'adj. 極簡的；最低限度的';
  const example = props.example ?? 'Nothing design is minimal and functional.';

  return (
    <div
      style={{
        width: 185,
        padding: 16,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label={`Daily word ${word}`}
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 8 }}>
        Daily Word
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 22, fontWeight: 700, color: nothing.colors.surfaceLight, marginBottom: 8, letterSpacing: 1 }}>
        {word}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 12, color: nothing.colors.muted, marginBottom: 10 }}>
        {definition}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.surfaceLight, fontStyle: 'italic' }}>
        &ldquo;{example}&rdquo;
      </div>
    </div>
  );
}
