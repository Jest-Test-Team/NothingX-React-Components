import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom'
import { categories } from './categories'
import { DemoPage } from './DemoPage'
import './App.css'

function Home() {
  return (
    <div className="home">
      <h1>NThing-UI Demo</h1>
      <p>Nothing OS style React components — dot-matrix, minimal black/white/red.</p>
      <nav className="nav-grid">
        {categories.map((c) => (
          <Link key={c.id} to={`/category/${c.id}`} className="nav-card">
            {c.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

function CategoryRoute() {
  const { id } = useParams<{ id: string }>()
  const cat = categories.find((c) => c.id === id)
  if (!cat) return <Navigate to="/" replace />
  return <DemoPage category={cat} />
}

function App() {
  return (
    <div className="app">
      <header className="header">
        <Link to="/" className="logo">NThing-UI</Link>
        <nav className="nav-links">
          {categories.slice(0, 6).map((c) => (
            <Link key={c.id} to={`/category/${c.id}`}>{c.name.split(' ')[0]}</Link>
          ))}
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:id" element={<CategoryRoute />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
