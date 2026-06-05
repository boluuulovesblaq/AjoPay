import { useState } from 'react'
import { useWindowWidth } from '../useWindowWidth'

function FeatureCard({ feature }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'var(--charcoal-mid)',
        border: hovered
          ? '1px solid rgba(245,158,11,0.4)'
          : '1px solid rgba(245,158,11,0.1)',
        borderRadius: '16px',
        padding: '2rem',
        display: 'flex',
        gap: '1.25rem',
        alignItems: 'flex-start',
        cursor: 'default',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
        boxShadow: hovered
          ? '0 8px 32px rgba(245,158,11,0.15), 0 2px 8px rgba(0,0,0,0.4)'
          : '0 0px 0px transparent',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease, border 0.2s ease'
      }}
    >
      <div style={{
        fontSize: '1.5rem',
        width: '48px', height: '48px',
        background: hovered
          ? 'rgba(245,158,11,0.15)'
          : 'rgba(245,158,11,0.08)',
        borderRadius: '12px',
        display: 'flex', alignItems: 'center',
        justifyContent: 'center', flexShrink: 0,
        transition: 'background 0.2s ease'
      }}>
        {feature.icon}
      </div>
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1rem', fontWeight: 700,
          marginBottom: '0.5rem',
          color: hovered ? 'var(--amber)' : 'var(--white)',
          transition: 'color 0.2s ease'
        }}>
          {feature.title}
        </h3>
        <p style={{
          fontSize: '0.875rem',
          color: 'var(--muted)',
          lineHeight: 1.7
        }}>
          {feature.desc}
        </p>
      </div>
    </div>
  )
}

function Features() {
  const width = useWindowWidth()
  const isMobile = width < 768

  const features = [
    {
      icon: '🔒',
      title: 'Bank-Grade Security',
      desc: 'Every transaction is encrypted end-to-end. Your money and data are protected at every step.'
    },
    {
      icon: '📊',
      title: 'Real-Time Tracking',
      desc: 'See contributions, payouts, and cycle progress live. No more chasing people for updates.'
    },
    {
      icon: '🔔',
      title: 'Smart Reminders',
      desc: 'Automatic payment reminders sent to members so no one misses their contribution date.'
    },
    {
      icon: '🤝',
      title: 'Trust-Based Groups',
      desc: 'Invite only the people you trust. You control who joins your circle, always.'
    }
  ]

  return (
    <section style={{
      padding: '6rem 6%',
      background: 'var(--charcoal)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div style={{
          display: 'inline-block',
          fontSize: '0.75rem', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase',
          color: 'var(--amber)', marginBottom: '1rem'
        }}>
          Features
        </div>
        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
          fontWeight: 800, letterSpacing: '-0.02em',
          lineHeight: 1.15
        }}>
          Built for the way you already save.
        </h2>
        <p style={{
          fontSize: '1rem', color: 'var(--muted)',
          maxWidth: '48ch', margin: '1rem auto 0'
        }}>
          Everything your ajo group needs — digitized, automated, and secured.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gap: '1.25rem',
        maxWidth: '860px',
        margin: '0 auto'
      }}>
        {features.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  )
}

export default Features