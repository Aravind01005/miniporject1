import { useState } from 'react'
import { demoCredentials } from '../data/studentData.js'

function LoginScreen({ onLogin }) {
  const [username, setUsername] = useState(demoCredentials.username)
  const [password, setPassword] = useState(demoCredentials.password)
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    if (username.trim() !== demoCredentials.username || password !== demoCredentials.password) {
      setError('That username or password doesn’t match the demo account.')
      return
    }

    setError('')
    onLogin()
  }

  return (
    <main className="login-page">
      <section className="login-story" aria-label="Campus student portal">
        <a className="brand brand-light" href="#login" aria-label="Northstar home">
          <span className="brand-mark" aria-hidden="true">n.</span>
          <span>northstar<span className="brand-dot">.</span></span>
        </a>

        <div className="story-content">
          <span className="eyebrow"><span className="eyebrow-dot" /> YOUR CAMPUS, IN SYNC</span>
          <h1>Make this<br />semester <em>count.</em></h1>
          <p>One place for your classes, progress, and everything you’re working toward.</p>
        </div>

        <div className="story-card">
          <div className="story-card-top">
            <span className="story-card-label">YOUR NEXT CHAPTER</span>
            <span className="story-card-icon" aria-hidden="true">↗</span>
          </div>
          <div className="story-card-stat">18 <span>credits this semester</span></div>
          <div className="story-progress"><span /></div>
          <div className="story-card-foot"><span>On your way</span><span>3 courses in progress</span></div>
        </div>

        <p className="story-footer">LEARN WITH PURPOSE. GO ANYWHERE.</p>
      </section>

      <section className="login-panel" id="login">
        <div className="login-panel-top">
          <span className="panel-kicker">STUDENT PORTAL</span>
          <span className="secure-label"><span aria-hidden="true">●</span> Secure sign in</span>
        </div>

        <div className="login-form-wrap">
          <span className="welcome-label">WELCOME BACK</span>
          <h2>Sign in to your<br />student account</h2>
          <p className="login-subtitle">Pick up right where you left off.</p>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.5-3.5 3.2-5.5 7-5.5s6.5 2 7 5.5" /></svg>
              </span>
              <input
                autoComplete="username"
                id="username"
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Enter your username"
                required
                value={username}
              />
            </div>

            <div className="password-label-row">
              <label htmlFor="password">Password</label>
              <span>DEMO ACCOUNT</span>
            </div>
            <div className="input-wrap">
              <span className="input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2" /></svg>
              </span>
              <input
                autoComplete="current-password"
                id="password"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Enter your password"
                required
                type="password"
                value={password}
              />
            </div>

            {error && <p className="form-error" role="alert">{error}</p>}

            <button className="sign-in-button" type="submit">
              Sign in to your dashboard <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="demo-hint">
            <span className="demo-hint-icon" aria-hidden="true">i</span>
            <p><strong>Just exploring?</strong><br />Use the demo credentials already filled in above.</p>
          </div>
        </div>

        <p className="login-footnote">Need help signing in? <a href="mailto:support@northstar.example">Contact student support</a></p>
      </section>
    </main>
  )
}

export default LoginScreen
