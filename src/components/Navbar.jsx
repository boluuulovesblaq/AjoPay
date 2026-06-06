import { useState } from 'react'
import { useWindowWidth } from '../useWindowWidth'
import { useNavigate } from 'react-router-dom'


function Navbar() {
  const width = useWindowWidth()
  const isMobile = width < 768
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(28,25,23,0.88)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(245,158,11,0.12)'
    }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 6%', height: '68px'
      }}>
        {/* LOGO */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.35rem',
          color: 'var(--amber)', letterSpacing: '-0.02em'
        }}>
          Ajo<span style={{ color: 'var(--white)' }}>Pay</span>
        </div>

        {/* DESKTOP NAV */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Home', 'Features', 'About'].map(link => (
              <a key={link} href="#" style={{
                fontSize: '0.875rem', fontWeight: 500,
                color: 'var(--muted)', textDecoration: 'none'
              }}>
                {link}
              </a>
            ))}
          </div>
        )}

        {/* DESKTOP BUTTONS */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button onClick={() => navigate('/auth')} style={{
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
            <button onClick={() => navigate('/auth')} style={{
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
        )}

        {/* HAMBURGER */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '0.5rem',
              display: 'flex', flexDirection: 'column',
              gap: '5px'
            }}>
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: 'block', width: '22px', height: '2px',
                background: 'var(--white)', borderRadius: '2px'
              }} />
            ))}
          </button>
        )}
      </div>

      {/* MOBILE MENU */}
      {isMobile && menuOpen && (
        <div style={{
          background: 'var(--charcoal-mid)',
          borderTop: '1px solid rgba(245,158,11,0.1)',
          padding: '1.25rem 6%',
          display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {['Home', 'Features', 'About'].map(link => (
            <a key={link} href="#" style={{
              fontSize: '0.95rem', fontWeight: 500,
              color: 'var(--muted)', textDecoration: 'none'
            }}>
              {link}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button onClick={() => navigate('/auth')} style={{
              flex: 1,
              background: 'none',
              border: '1px solid rgba(255,255,255,0.15)',
              color: 'var(--white)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem', fontWeight: 500,
              padding: '0.625rem', borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Login
            </button>
            <button onClick={() => navigate('/auth')} style={{
              flex: 1,
              background: 'var(--amber)',
              border: 'none',
              color: 'var(--charcoal)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.875rem', fontWeight: 700,
              padding: '0.625rem', borderRadius: '8px',
              cursor: 'pointer'
            }}>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar