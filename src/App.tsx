import './App.css'

function App() {
  return (
    <main className="page">
      <section className="card">
        <p className="label">Cloudflare Pages Ready</p>
        <h1>HealthBoy</h1>
        <p className="lead">
          HealthBoy deployment is live and this page is rendering from the latest
          Cloudflare Pages build.
        </p>
        <dl className="facts">
          <div>
            <dt>Project</dt>
            <dd>healthboy</dd>
          </div>
          <div>
            <dt>Build</dt>
            <dd>npm run build</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>dist</dd>
          </div>
        </dl>
      </section>
    </main>
  )
}

export default App
