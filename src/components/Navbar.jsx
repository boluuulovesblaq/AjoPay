function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 6%', height: '68px',
      background: 'rgba(28,25,23,0.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,158,11,0.12)'
    }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 800, fontSize: '1.35rem',
        color: 'var(--amber)', letterSpacing: '-0.02em'
      }}>
        Ajo<span style={{ color: 'var(--white)' }}>Pay</span>
      </div>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['Home', 'Features', 'About'].map(link => (
          <a key={link} href="#" style={{
            fontSize: '0.875rem', fontWeight: 500,
            color: 'var(--muted)', textDecoration: 'none'
          }}>{link}</a>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button style={{
          background: 'none',
          border: '1px solid rgba(255,255,255,0.15)',
          color: 'var(--white)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem', fontWeight: 500,
          padding: '0.5rem 1.25rem', borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Login
        </button>
        <button style={{
          background: 'var(--amber)',
          border: 'none',
          color: 'var(--charcoal)',
          fontFamily: 'var(--font-body)',
          fontSize: '0.875rem', fontWeight: 700,
          padding: '0.5rem 1.25rem', borderRadius: '8px',
          cursor: 'pointer'
        }}>
          Get Started
        </button>
      </div>
    </nav>
  )
}

export default Navbar