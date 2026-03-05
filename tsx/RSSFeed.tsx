'use client';

import { nothing } from './theme';

type Item = { title: string; link?: string; date?: string };

/**
 * NThing-UI RSS Feed: 簡化 RSS 訂閱源最新文章列表
 */
export function RSSFeed(props: { title?: string; items?: Item[] }) {
  const title = props.title ?? 'RSS';
  const items = props.items ?? [
    { title: 'First article headline here', date: '10:30' },
    { title: 'Second feed item title', date: '09:15' },
    { title: 'Third post from feed', date: 'Yesterday' },
  ];

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surfaceLight,
        flexShrink: 0,
      }}
      aria-label="RSS feed"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.slice(0, 5).map((item, i) => (
          <li
            key={i}
            style={{
              padding: '8px 0',
              borderBottom: i < items.length - 1 ? `1px solid ${nothing.colors.muted}` : 'none',
            }}
          >
            <a
              href={item.link ?? '#'}
              style={{
                fontFamily: 'var(--font-headline, system-ui)',
                fontSize: 12,
                color: nothing.colors.textDark,
                textDecoration: 'none',
                display: 'block',
              }}
            >
              {item.title}
            </a>
            {item.date && <div style={{ fontSize: 10, color: nothing.colors.muted, marginTop: 2 }}>{item.date}</div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
