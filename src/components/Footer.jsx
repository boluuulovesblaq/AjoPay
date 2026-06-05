import { useWindowWidth } from '../useWindowWidth'

function Footer() {
  const width = useWindowWidth()
  const isMobile = width < 768

  return (
    <footer style={{
      background: 'var(--charcoal-mid)',
      borderTop: '1px solid rgba(245,158,11,0.1)',
      padding: '3rem 6%'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'space-between',
        gap: '1.5rem'
      }}>

        {/* LOGO */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.35rem',
          color: 'var(--amber)', letterSpacing: '-0.02em'
        }}>
          Ajo<span style={{ color: 'var(--white)' }}>Pay</span>
        </div>

        {/* NAV LINKS */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: isMobile ? '1.25rem' : '2rem'
        }}>
          {['Home', 'Features', 'About', 'Contact'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '0.875rem', fontWeight: 500,
              color: 'var(--muted)', textDecoration: 'none'
            }}>
              {link}
            </a>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div style={{
          fontSize: '0.8rem',
          color: 'var(--muted)'
        }}>
          © {new Date().getFullYear()} AjoPay. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer