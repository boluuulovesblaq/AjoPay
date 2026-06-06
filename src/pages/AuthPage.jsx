import { useState } from 'react'
import { useWindowWidth } from '../useWindowWidth'

function AuthPage() {
  const width = useWindowWidth()
  const isMobile = width < 768

  const [activeTab, setActiveTab] = useState('login')
  const [loginData, setLoginData] = useState({ email: '', password: '' })
  const [registerData, setRegisterData] = useState({
    fullName: '', email: '', password: '', confirmPassword: ''
  })
  const [errors, setErrors] = useState({})

  function handleLoginChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  function handleRegisterChange(e) {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }

  function validateLogin() {
    const newErrors = {}
    if (!loginData.email) newErrors.email = 'Email is required'
    if (!loginData.password) newErrors.password = 'Password is required'
    return newErrors
  }

  function validateRegister() {
    const newErrors = {}
    if (!registerData.fullName) newErrors.fullName = 'Full name is required'
    if (!registerData.email) newErrors.email = 'Email is required'
    if (!registerData.password) newErrors.password = 'Password is required'
    if (registerData.password !== registerData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match'
    return newErrors
  }

  function handleLoginSubmit() {
    const newErrors = validateLogin()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setErrors({})
    console.log('Login submitted:', loginData)
  }

  function handleRegisterSubmit() {
    const newErrors = validateRegister()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setErrors({})
    console.log('Register submitted:', registerData)
  }

  // Reusable input style function — red border when field has error
  function inputStyle(hasError) {
    return {
      width: '100%', padding: '0.75rem 1rem',
      background: 'rgba(255,255,255,0.04)',
      border: hasError
        ? '1px solid #ef4444'
        : '1px solid rgba(255,255,255,0.08)',
      borderRadius: '10px', color: 'var(--white)',
      fontFamily: 'var(--font-body)', fontSize: '0.9rem',
      outline: 'none', boxSizing: 'border-box',
      transition: 'border 0.2s ease'
    }
  }

  function labelStyle() {
    return {
      display: 'block', fontSize: '0.8rem',
      fontWeight: 600, color: 'var(--muted)',
      marginBottom: '0.4rem'
    }
  }

  function errorStyle() {
    return {
      fontSize: '0.75rem', color: '#ef4444',
      marginTop: '0.3rem', display: 'block'
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--charcoal)',
      // Deep ambient glow in the center behind the card
      backgroundImage: `
        radial-gradient(ellipse 70% 60% at 50% 50%, rgba(245,158,11,0.09) 0%, transparent 70%),
        radial-gradient(ellipse 40% 40% at 20% 80%, rgba(234,88,12,0.06) 0%, transparent 60%)
      `,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 6%'
    }}>

      {/* FLOATING CARD with deep shadow */}
      <div style={{
        background: 'rgba(41,37,36,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(245,158,11,0.15)',
        borderRadius: '24px',
        padding: isMobile ? '2rem 1.5rem' : '2.5rem 3rem',
        width: '100%',
        maxWidth: '460px',
        // Layered shadow — deep black drop + amber ambient glow underneath
        boxShadow: `
          0 32px 80px rgba(0,0,0,0.6),
          0 8px 32px rgba(0,0,0,0.4),
          0 0 0 1px rgba(245,158,11,0.05),
          0 0 80px rgba(245,158,11,0.06)
        `
      }}>

        {/* LOGO */}
        <div style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 800, fontSize: '1.35rem',
          color: 'var(--amber)', letterSpacing: '-0.02em',
          marginBottom: '1.75rem', textAlign: 'center'
        }}>
          Ajo<span style={{ color: 'var(--white)' }}>Pay</span>
        </div>

        {/* SLIDING TAB SWITCHER */}
        <div style={{
          position: 'relative',
          display: 'flex',
          background: 'rgba(0,0,0,0.3)',
          borderRadius: '10px',
          padding: '4px',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.06)'
        }}>
          {/* LIQUID GLASS PILL — semi-transparent orange with blur */}
          <div style={{
            position: 'absolute',
            top: '4px', bottom: '4px',
            left: activeTab === 'login' ? '4px' : 'calc(50% + 2px)',
            width: 'calc(50% - 6px)',
            // Liquid glass effect — orange tinted frosted glass
            background: 'rgba(245,158,11,0.25)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '7px',
            border: '1px solid rgba(245,158,11,0.4)',
            boxShadow: '0 2px 12px rgba(245,158,11,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }} />

          {/* LOGIN TAB */}
          <button
            onClick={() => { setActiveTab('login'); setErrors({}) }}
            style={{
              flex: 1, position: 'relative', zIndex: 1,
              background: 'none', border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem', fontWeight: 600,
              color: activeTab === 'login' ? 'var(--amber)' : 'var(--muted)',
              padding: '0.625rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}>
            Login
          </button>

          {/* REGISTER TAB */}
          <button
            onClick={() => { setActiveTab('register'); setErrors({}) }}
            style={{
              flex: 1, position: 'relative', zIndex: 1,
              background: 'none', border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem', fontWeight: 600,
              color: activeTab === 'register' ? 'var(--amber)' : 'var(--muted)',
              padding: '0.625rem',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}>
            Register
          </button>
        </div>

        {/* LOGIN FORM */}
        {activeTab === 'login' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={labelStyle()}>Email</label>
              <input
                type="email" name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="you@example.com"
                style={inputStyle(errors.email)}
              />
              {errors.email && <span style={errorStyle()}>{errors.email}</span>}
            </div>

            <div>
              <label style={labelStyle()}>Password</label>
              <input
                type="password" name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="••••••••"
                style={inputStyle(errors.password)}
              />
              {errors.password && <span style={errorStyle()}>{errors.password}</span>}
            </div>

            <button
              onClick={handleLoginSubmit}
              style={{
                width: '100%', padding: '0.875rem',
                background: 'var(--amber)', border: 'none',
                borderRadius: '10px', color: 'var(--charcoal)',
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem'
              }}>
              Login →
            </button>

            {/* DIVIDER */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              margin: '0.25rem 0'
            }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>or</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            </div>

            {/* CONTINUE WITH GOOGLE — stubbed, no backend yet */}
            <button
              onClick={() => console.log('Google OAuth — coming in backend phase')}
              style={{
                width: '100%', padding: '0.875rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', color: 'var(--white)',
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '0.75rem'
              }}>
              {/* Google SVG icon */}
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.6 16.3 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        )}

        {/* REGISTER FORM */}
        {activeTab === 'register' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={labelStyle()}>Full Name</label>
              <input
                type="text" name="fullName"
                value={registerData.fullName}
                onChange={handleRegisterChange}
                placeholder="Tunde Balogun"
                style={inputStyle(errors.fullName)}
              />
              {errors.fullName && <span style={errorStyle()}>{errors.fullName}</span>}
            </div>

            <div>
              <label style={labelStyle()}>Email</label>
              <input
                type="email" name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="you@example.com"
                style={inputStyle(errors.email)}
              />
              {errors.email && <span style={errorStyle()}>{errors.email}</span>}
            </div>

            <div>
              <label style={labelStyle()}>Password</label>
              <input
                type="password" name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="••••••••"
                style={inputStyle(errors.password)}
              />
              {errors.password && <span style={errorStyle()}>{errors.password}</span>}
            </div>

            <div>
              <label style={labelStyle()}>Confirm Password</label>
              <input
                type="password" name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                placeholder="••••••••"
                style={inputStyle(errors.confirmPassword)}
              />
              {errors.confirmPassword && <span style={errorStyle()}>{errors.confirmPassword}</span>}
            </div>

            <button
              onClick={handleRegisterSubmit}
              style={{
                width: '100%', padding: '0.875rem',
                background: 'var(--amber)', border: 'none',
                borderRadius: '10px', color: 'var(--charcoal)',
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                fontWeight: 700, cursor: 'pointer', marginTop: '0.5rem'
              }}>
              Create Account →
            </button>

            {/* DIVIDER */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              margin: '0.25rem 0'
            }}>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>or</span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.08)' }} />
            </div>

            {/* CONTINUE WITH GOOGLE — stubbed */}
            <button
              onClick={() => console.log('Google OAuth — coming in backend phase')}
              style={{
                width: '100%', padding: '0.875rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px', color: 'var(--white)',
                fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                fontWeight: 500, cursor: 'pointer',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '0.75rem'
              }}>
              <svg width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.6 20H24v8h11.3C33.6 33.1 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.1-4z"/>
                <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.5 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
                <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.4 35.6 26.8 36 24 36c-5.2 0-9.6-2.9-11.3-7.1l-6.5 5C9.5 39.6 16.3 44 24 44z"/>
                <path fill="#1976D2" d="M43.6 20H24v8h11.3c-.9 2.4-2.5 4.4-4.6 5.8l6.2 5.2C40.8 35.4 44 30.1 44 24c0-1.3-.1-2.7-.4-4z"/>
              </svg>
              Continue with Google
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default AuthPage