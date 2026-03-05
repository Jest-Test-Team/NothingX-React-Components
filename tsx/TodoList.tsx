'use client';

import { useState } from 'react';
import { nothing } from './theme';

type Todo = { id: string; text: string; done: boolean };

/**
 * NThing-UI Todo List: 極簡待辦事項清單（打勾時刪除線）
 */
export function TodoList(props: { items?: Todo[]; onToggle?: (id: string) => void; onAdd?: (text: string) => void }) {
  const [items, setItems] = useState<Todo[]>(props.items ?? [
    { id: '1', text: 'Check email', done: false },
    { id: '2', text: 'Ship package', done: true },
    { id: '3', text: 'Call team', done: false },
  ]);
  const toggle = (id: string) => {
    setItems((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
    props.onToggle?.(id);
  };

  return (
    <div
      style={{
        width: 185,
        padding: 14,
        borderRadius: nothing.radius.card,
        background: nothing.colors.surfaceLight,
        flexShrink: 0,
      }}
      aria-label="Todo list"
    >
      <div style={{ fontFamily: 'var(--font-headline, system-ui)', fontSize: 10, color: nothing.colors.red, textTransform: 'uppercase', marginBottom: 10 }}>
        Todo
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
        {items.map((t) => (
          <li
            key={t.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 0',
              borderBottom: '1px solid ' + nothing.colors.muted,
            }}
          >
            <button
              type="button"
              onClick={() => toggle(t.id)}
              style={{
                width: 18,
                height: 18,
                borderRadius: 4,
                border: `2px solid ${t.done ? nothing.colors.red : nothing.colors.textDark}`,
                background: t.done ? nothing.colors.red : 'transparent',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              {t.done && <span style={{ color: '#fff', fontSize: 12, lineHeight: 1 }}>✓</span>}
            </button>
            <span
              style={{
                fontFamily: 'var(--font-headline, system-ui)',
                fontSize: 13,
                color: nothing.colors.textDark,
                textDecoration: t.done ? 'line-through' : 'none',
                opacity: t.done ? 0.7 : 1,
              }}
            >
              {t.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
