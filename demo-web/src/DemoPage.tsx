import { Link } from 'react-router-dom'
import * as N from 'nothingx-react-components'
import type { FC } from 'react'
import { categories } from './categories'
import { ErrorBoundary } from './ErrorBoundary'

type Category = (typeof categories)[number]

function DemoCard({ name }: { name: string }) {
  const Comp = (N as Record<string, FC<Record<string, unknown>>>)[name]
  if (!Comp || typeof Comp !== 'function') return <div className="demo-card demo-card--missing">? {name}</div>
  if (name === 'RedactedText') return <div className="demo-card"><Comp>Classified</Comp></div>
  if (name === 'GlitchImage') return <div className="demo-card"><Comp src="https://placehold.co/80x80" alt="Demo" /></div>
  return <div className="demo-card"><Comp /></div>
}

function DemoPage({ category }: { category: Category }) {
  return (
    <div className="demo-page">
      <div className="demo-header">
        <Link to="/">← Back</Link>
        <h2>{category.name}</h2>
      </div>
      <div className="demo-grid">
        {category.components.map((name) => (
          <ErrorBoundary key={name} name={name} fallback={<div className="demo-card demo-card--error">Error: {name}</div>}>
            <DemoCard name={name} />
          </ErrorBoundary>
        ))}
      </div>
    </div>
  )
}

export { DemoPage }
