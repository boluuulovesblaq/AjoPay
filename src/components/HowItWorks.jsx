import { useWindowWidth } from '../useWindowWidth'

function HowItWorks() {
  const width = useWindowWidth()
  const isMobile = width < 768

  const steps = [
    {
      number: '01',
      title: 'Create or Join a Group',
      desc: 'Start your own ajo circle or get invited into one by a trusted friend, family member, or colleague.'
    },
    {
      number: '02',
      title: 'Contribute Every Cycle',
      desc: 'Each member contributes a fixed amount every cycle — weekly or monthly. All tracked automatically, no spreadsheets.'
    },
    {
      number: '03',
      title: 'Receive Your Payout',
      desc: 'When it\'s your turn, the full pot lands in your account. Transparent, scheduled, and guaranteed.'
    }
  ]

  return (
    <section style={{
      padding: '6rem 6%',
      background: 'var(--charcoal-mid)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--amber)', marginBottom: '1rem'
        }}>
          How It Works
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 800, letterSpacing: '-0.02em',
          lineHeight: 1.15
        }}>
          Simple. Transparent. Communal.
        </h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
        gap: '1.5rem',
        maxWidth: '960px',
        margin: '0 auto'
      }}>
        {steps.map((step) => (
          <div key={step.number} style={{
            background: 'var(--charcoal)',
            border: '1px solid rgba(245,158,11,0.12)',
            borderRadius: '16px',
            padding: '2rem 1.75rem',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute', top: '-0.5rem', right: '1rem',
              fontFamily: 'var(--font-display)',
              fontSize: '5rem', fontWeight: 800,
              color: 'rgba(245,158,11,0.06)',
              lineHeight: 1, userSelect: 'none'
            }}>
              {step.number}
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center', justifyContent: 'center',
              width: '40px', height: '40px',
              background: 'rgba(245,158,11,0.12)',
              borderRadius: '10px',
              fontFamily: 'var(--font-display)',
              fontSize: '0.8rem', fontWeight: 700,
              color: 'var(--amber)',
              marginBottom: '1.25rem'
            }}>
              {step.number}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem', fontWeight: 700,
              marginBottom: '0.75rem', lineHeight: 1.3
            }}>
              {step.title}
            </h3>
            <p style={{
              fontSize: '0.9rem', color: 'var(--muted)',
              lineHeight: 1.7
            }}>
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks