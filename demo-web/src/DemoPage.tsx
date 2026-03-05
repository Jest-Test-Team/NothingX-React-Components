import { Link } from 'react-router-dom'
import * as N from 'nothingx-react-components'
import type { FC } from 'react'
import { categories } from './categories'

type Category = (typeof categories)[number]

function DemoPage({ category }: { category: Category }) {
  return (
    <div className="demo-page">
      <div className="demo-header">
        <Link to="/">← Back</Link>
        <h2>{category.name}</h2>
      </div>
      <div className="demo-grid">
        {category.components.map((name) => {
          const Comp = (N as Record<string, FC<Record<string, unknown>>>)[name]
          if (!Comp || typeof Comp !== 'function') return <div key={name} className="demo-card demo-card--missing">? {name}</div>
          try {
            if (name === 'RedactedText') return <div key={name} className="demo-card"><Comp>Classified</Comp></div>
            if (name === 'GlitchImage') return <div key={name} className="demo-card"><Comp src="https://placehold.co/80x80" alt="Demo" /></div>
            return <div key={name} className="demo-card"><Comp /></div>
          } catch {
            return <div key={name} className="demo-card demo-card--error">{name}</div>
          }
        })}
      </div>
    </div>
  )
}

export { DemoPage }
