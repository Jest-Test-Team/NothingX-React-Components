'use client';

import { nothing } from './theme';

type Phase = 'new' | 'waxing_crescent' | 'first_quarter' | 'waxing_gibbous' | 'full' | 'waning_gibbous' | 'last_quarter' | 'waning_crescent';

/**
 * NThing-UI Moon Phase: 當前月相顯示
 */
export function MoonPhase(props: { phase?: Phase; day?: number }) {
  const phase = props.phase ?? 'first_quarter';
  const day = props.day ?? 7;
  const labels: Record<Phase, string> = {
    new: 'New',
    waxing_crescent: 'Waxing Crescent',
    first_quarter: 'First Quarter',
    waxing_gibbous: 'Waxing Gibbous',
    full: 'Full Moon',
    waning_gibbous: 'Waning Gibbous',
    last_quarter: 'Last Quarter',
    waning_crescent: 'Waning Crescent',
  };

  return (
    <div
      style={{
        width: 140,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surface,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        flexShrink: 0,
      }}
      aria-label={`Moon phase ${labels[phase]}`}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          background: nothing.colors.circleBg,
          border: `2px solid ${nothing.colors.text}`,
          boxShadow: phase === 'full' ? 'inset -8px 0 0 0 ' + nothing.colors.surface : phase === 'new' ? 'none' : 'inset 10px 0 0 0 ' + nothing.colors.circleBg,
        }}
      />
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 11, color: nothing.colors.surfaceLight, textAlign: 'center' }}>
        {labels[phase]}
      </div>
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 9, color: nothing.colors.red }}>Day {day}</div>
    </div>
  );
}
