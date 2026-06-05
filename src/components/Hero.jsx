function Hero() {
  return (
    <section style={{
      minHeight: 'calc(100vh - 68px)',
      display: 'flex', alignItems: 'center',
      padding: '5% 6%',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(ellipse 60% 55% at 70% 50%, rgba(245,158,11,0.08) 0%, transparent 70%),
          radial-gradient(ellipse 30% 40% at 20% 80%, rgba(234,88,12,0.06) 0%, transparent 60%)
        `
      }} />

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '4rem', alignItems: 'center',
        width: '100%', position: 'relative', zIndex: 1
      }}>

        {/* LEFT COPY */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(245,158,11,0.1)',
            border: '1px solid rgba(245,158,11,0.25)',
            color: 'var(--amber)',
            fontSize: '0.75rem', fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '0.375rem 0.875rem', borderRadius: '100px',
            marginBottom: '1.5rem'
          }}>
            <span style={{
              width: '6px', height: '6px',
              borderRadius: '50%', background: 'var(--amber)'
            }} />
            Now in Beta · Join Free
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 800, lineHeight: 1.1,
            letterSpacing: '-0.03em', marginBottom: '1.25rem'
          }}>
            Save Together,<br />
            <em style={{ fontStyle: 'normal', color: 'var(--amber)' }}>
              Without Meeting
            </em><br />
            Physically
          </h1>

          <p style={{
            fontSize: '1.05rem', color: 'var(--muted)',
            lineHeight: 1.7, marginBottom: '2rem', maxWidth: '44ch'
          }}>
            A modern digital ajo platform for groups, friends, and communities
            to contribute, save, and track funds — securely online, no cash needed.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <button style={{
              background: 'var(--amber)', color: 'var(--charcoal)',
              fontFamily: 'var(--font-body)', fontWeight: 700,
              fontSize: '1rem', padding: '0.875rem 2rem',
              border: 'none', borderRadius: '10px', cursor: 'pointer'
            }}>
              Start Saving →
            </button>
            <button style={{
              background: 'none', color: 'var(--white)',
              fontFamily: 'var(--font-body)', fontWeight: 500,
              fontSize: '1rem', padding: '0.875rem 2rem',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '10px', cursor: 'pointer'
            }}>
              Learn How It Works
            </button>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: '320px', height: '320px' }}>

            {/* MAIN CARD */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0,
              background: 'var(--charcoal-mid)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '16px', padding: '1.25rem 1.5rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>
                Family Savings Circle
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem', fontWeight: 800
              }}>
                ₦2,400,000
              </div>
              <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 600, marginTop: '0.25rem' }}>
                ↑ 12% this cycle
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.75rem' }}>
                <div style={{ display: 'flex' }}>
                  {[
                    { initials: 'AO', bg: '#F59E0B', color: '#1C1917' },
                    { initials: 'KB', bg: '#EA580C', color: '#fff' },
                    { initials: 'TF', bg: '#7C3AED', color: '#fff' },
                    { initials: 'NG', bg: '#059669', color: '#fff' },
                  ].map((av, i) => (
                    <div key={i} style={{
                      width: '28px', height: '28px', borderRadius: '50%',
                      background: av.bg, color: av.color,
                      border: '2px solid var(--charcoal-mid)',
                      marginLeft: i === 0 ? 0 : '-8px',
                      fontSize: '0.6rem', fontWeight: 700,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-display)'
                    }}>
                      {av.initials}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                  +8 members · Cycle 3 of 12
                </span>
              </div>

              <div style={{ marginTop: '0.875rem' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  fontSize: '0.7rem', color: 'var(--muted)', marginBottom: '0.375rem'
                }}>
                  <span>Contributions</span><span>72%</span>
                </div>
                <div style={{
                  height: '5px', background: 'rgba(255,255,255,0.08)',
                  borderRadius: '100px', overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%', background: 'var(--amber)',
                    borderRadius: '100px', width: '72%'
                  }} />
                </div>
              </div>
            </div>

            {/* TRANSACTION NOTIFICATION */}
            <div style={{
              position: 'absolute', top: '155px', right: '-24px',
              background: 'var(--charcoal-mid)',
              border: '1px solid rgba(245,158,11,0.15)',
              borderRadius: '12px', padding: '0.75rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              minWidth: '190px'
            }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                background: 'rgba(245,158,11,0.12)',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', fontSize: '1rem', flexShrink: 0
              }}>
                💸
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>Kemi paid</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--muted)', marginTop: '1px' }}>2 mins ago</div>
              </div>
              <div style={{ marginLeft: 'auto', fontSize: '0.875rem', fontWeight: 700, color: '#22c55e' }}>
                +₦50k
              </div>
            </div>

            {/* PAYOUT CARD */}
            <div style={{
              position: 'absolute', bottom: 0, right: 0, width: '200px',
              background: 'var(--charcoal-mid)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '16px', padding: '1.25rem 1.5rem'
            }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>
                Next Payout
              </div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.25rem', fontWeight: 800
              }}>
                ₦200,000
              </div>
              <div style={{ fontSize: '0.75rem', color: '#22c55e', fontWeight: 600, marginTop: '0.25rem' }}>
                → Tunde · in 3 days
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero