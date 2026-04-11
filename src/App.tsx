import './App.css'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-section">
        <p className="eyebrow">Cloudflare Pages Ready</p>
        <h1>HealthBoy</h1>
        <p className="hero-copy">
          The project is prepared for a fresh deployment on
          <code> healthboy.pages.dev </code>
          with a clean starter landing page.
        </p>
        <div className="hero-actions">
          <a className="primary-action" href="https://healthboy.pages.dev">
            Open target URL
          </a>
          <span className="secondary-note">Build output: dist</span>
        </div>
      </section>

      <section className="info-grid" aria-label="deployment summary">
        <article className="info-card">
          <p className="card-label">Project name</p>
          <h2>healthboy</h2>
          <p>Use this exact name when creating the new Cloudflare Pages project.</p>
        </article>
        <article className="info-card">
          <p className="card-label">Build command</p>
          <h2>npm run build</h2>
          <p>The current Vite setup outputs the production bundle into <code>dist</code>.</p>
        </article>
        <article className="info-card">
          <p className="card-label">Framework</p>
          <h2>Vite + React</h2>
          <p>No extra adapter is required for a standard static Pages deployment.</p>
        </article>
      </section>
    </main>
  )
}

export default App
