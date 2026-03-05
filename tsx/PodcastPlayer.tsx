'use client';

import { nothing } from './theme';

/**
 * NThing-UI Podcast Player: 播客播放控制器
 */
export function PodcastPlayer(props: { title?: string; episode?: string; progress?: number; isPlaying?: boolean }) {
  const title = props.title ?? 'Podcast Show';
  const episode = props.episode ?? 'Ep. 42 — Topic';
  const progress = Math.min(1, Math.max(0, props.progress ?? 0.35));
  const isPlaying = props.isPlaying ?? false;

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        flexShrink: 0,
      }}
      aria-label="Podcast player"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 6 }}>
        Podcast
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 13, fontWeight: 600, color: nothing.colors.surfaceLight, marginBottom: 2 }}>{title}</div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.muted, marginBottom: 10 }}>{episode}</div>
      <div style={{ height: 4, borderRadius: 2, background: nothing.colors.circleBg, overflow: 'hidden', marginBottom: 10 }}>
        <div style={{ width: `${progress * 100}%`, height: '100%', background: nothing.colors.red, borderRadius: 2, transition: 'width 0.2s ease' }} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
        <button type="button" aria-label="Rewind" style={{ width: 28, height: 28, borderRadius: '50%', border: 'none', background: nothing.colors.circleBg, color: nothing.colors.surfaceLight, cursor: 'pointer', fontSize: 12 }}>⟪</button>
        <button type="button" aria-label={isPlaying ? 'Pause' : 'Play'} style={{ width: 40, height: 40, borderRadius: '50%', border: 'none', background: nothing.colors.red, color: nothing.colors.surfaceLight, cursor: 'pointer', fontSize: 16 }}>{isPlaying ? '❚❚' : '▶'}</button>
        <button type="button" aria-label="Forward" style={{ width: 28, height: 28, borderRadius: '50%', border: 'none', background: nothing.colors.circleBg, color: nothing.colors.surfaceLight, cursor: 'pointer', fontSize: 12 }}>⟫</button>
      </div>
    </div>
  );
}
