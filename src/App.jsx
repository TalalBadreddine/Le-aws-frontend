import './App.css'

const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Built for speed with optimized performance out of the box.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Enterprise-grade security with best practices baked in.',
  },
  {
    icon: '📈',
    title: 'Scalable',
    description: 'Grows with your needs from prototype to production.',
  },
]

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">Acme</div>
        <ul className="navbar-links">
          <li><a href="#features">Features</a></li>
          <li><a href="#cta">Pricing</a></li>
          <li><a href="#cta">Contact</a></li>
        </ul>
      </nav>

      <section className="hero">
        <h1>Build something amazing, faster</h1>
        <p>
          The modern platform that helps teams ship products with confidence.
          Simple, powerful, and ready to scale.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Why choose us</h2>
        <div className="features-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta" id="cta">
        <h2>Ready to get started?</h2>
        <p>Join thousands of teams already building with Acme.</p>
        <button className="btn btn-primary">Start Free Trial</button>
      </section>

      <footer className="footer">
        &copy; 2026 Acme. All rights reserved.
      </footer>
    </>
  )
}

export default App
