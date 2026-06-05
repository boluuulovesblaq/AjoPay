function Footer() {
  return (
    <footer style={{
      background: 'var(--charcoal-mid)',
      borderTop: '1px solid rgba(245,158,11,0.1)',
      padding: '3rem 6%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem'
      }}>
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.35rem',
          color: 'var(--amber)', letterSpacing: '-0.02em'
        }}>
          Ajo<span style={{ color: 'var(--white)' }}>Pay</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'Features', 'About', 'Contact'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '0.875rem', fontWeight: 500,
              color: 'var(--muted)', textDecoration: 'none'
            }}>
              {link}
            </a>
          ))}
        </div>
        <div style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>
          © {new Date().getFullYear()} AjoPay. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer