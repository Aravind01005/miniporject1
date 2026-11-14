import { activity, courses, schedule, student } from '../data/studentData.js'

function Brand({ light = false }) {
  return (
    <a className={`brand${light ? ' brand-light' : ''}`} href="#overview" aria-label="Northstar home">
      <span className="brand-mark" aria-hidden="true">n.</span>
      <span>northstar<span className="brand-dot">.</span></span>
    </a>
  )
}

function Dashboard({ onLogout }) {
  return (
    <main className="dashboard-shell">
      <aside className="sidebar">
        <Brand light />
        <div className="sidebar-section-label">STUDENT MENU</div>
        <nav className="sidebar-nav" aria-label="Student dashboard">
          <a className="nav-link active" href="#overview"><span className="nav-icon">⌂</span>Overview</a>
          <a className="nav-link" href="#courses"><span className="nav-icon">▤</span>My courses<span className="nav-count">3</span></a>
          <a className="nav-link" href="#attendance"><span className="nav-icon">◷</span>Attendance</a>
          <a className="nav-link" href="#schedule"><span className="nav-icon">▦</span>Class schedule</a>
          <a className="nav-link" href="#grades"><span className="nav-icon">↗</span>Grades</a>
        </nav>

        <div className="sidebar-help">
          <span className="help-spark" aria-hidden="true">✦</span>
          <strong>Need a hand?</strong>
          <p>Your student success team is just a message away.</p>
          <a href="mailto:success@northstar.example">Get support <span aria-hidden="true">→</span></a>
        </div>

        <div className="sidebar-profile">
          <div className="avatar avatar-small">{student.initials}</div>
          <div className="profile-copy"><strong>{student.name}</strong><span>{student.id}</span></div>
          <button className="logout-button" onClick={onLogout} title="Sign out" type="button" aria-label="Sign out">↪</button>
        </div>
      </aside>

      <section className="dashboard-main" id="overview">
        <header className="dashboard-header">
          <div className="mobile-brand"><Brand /></div>
          <div>
            <span className="dashboard-date">MONDAY, NOVEMBER 16, 2026</span>
            <h1>Good morning, Alex <span aria-hidden="true">✦</span></h1>
            <p>Here’s what’s happening with your semester.</p>
          </div>
          <div className="header-actions">
            <button className="icon-button notification-button" type="button" aria-label="Notifications"><span>♧</span><i /></button>
            <div className="header-divider" />
            <div className="term-select"><span className="term-dot" /> Fall 2026 <span className="chevron">⌄</span></div>
          </div>
        </header>

        <div className="dashboard-content">
          <section className="welcome-banner" aria-label="Student information">
            <div className="welcome-copy">
              <span className="banner-overline">YOUR STUDENT SNAPSHOT</span>
              <h2>A good day to<br /><em>make progress.</em></h2>
              <p>{student.program} <span>·</span> {student.year}</p>
              <a href="#courses">Explore your semester <span aria-hidden="true">→</span></a>
            </div>
            <div className="banner-decoration" aria-hidden="true">
              <div className="orbit orbit-one" /><div className="orbit orbit-two" />
              <div className="banner-star">✳</div>
              <div className="banner-note"><span>SEMESTER<br />MOMENTUM</span><strong>Looking good.</strong><i><b /></i></div>
            </div>
            <div className="banner-index">01 <span>/ 04</span></div>
          </section>

          <section className="stats-grid" aria-label="Academic summary">
            <article className="stat-card">
              <div className="stat-heading"><span>TERM GPA</span><span className="stat-icon purple-icon">↗</span></div>
              <div className="stat-value">3.82<span className="stat-unit">/ 4.0</span></div>
              <div className="stat-foot"><span className="trend">↑ 0.14</span> from last term</div>
              <div className="sparkline spark-purple" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            </article>
            <article className="stat-card" id="attendance">
              <div className="stat-heading"><span>ATTENDANCE</span><span className="stat-icon green-icon">✓</span></div>
              <div className="stat-value">94<span className="stat-unit">%</span></div>
              <div className="stat-foot"><span className="status-dot" /> Great consistency this month</div>
              <div className="attendance-track"><span /></div>
            </article>
            <article className="stat-card" id="grades">
              <div className="stat-heading"><span>CREDITS EARNED</span><span className="stat-icon orange-icon">✳</span></div>
              <div className="stat-value">72<span className="stat-unit">/ 120</span></div>
              <div className="stat-foot"><span className="trend">60%</span> of your degree complete</div>
              <div className="credits-track"><span /></div>
            </article>
          </section>

          <div className="content-grid">
            <section className="content-card courses-card" id="courses">
              <div className="section-heading">
                <div><span className="section-kicker">KEEP YOUR MOMENTUM</span><h2>Your courses</h2></div>
                <a className="text-link" href="#courses">All courses <span aria-hidden="true">→</span></a>
              </div>
              <div className="course-list">
                {courses.map((course) => (
                  <article className="course-row" key={course.code}>
                    <div className={`course-monogram ${course.color}`}>{course.code.slice(0, 2)}</div>
                    <div className="course-info">
                      <div className="course-name-row"><h3>{course.name}</h3><span>{course.progress}%</span></div>
                      <p>{course.code} <span>·</span> {course.instructor}</p>
                      <div className={`course-progress ${course.color}`}><span style={{ width: `${course.progress}%` }} /></div>
                    </div>
                    <span className="course-arrow" aria-hidden="true">↗</span>
                  </article>
                ))}
              </div>
              <div className="course-footer"><span className="course-footer-icon">✦</span><span>You’re making steady progress across all 3 courses.</span></div>
            </section>

            <section className="content-card schedule-card" id="schedule">
              <div className="section-heading">
                <div><span className="section-kicker">MONDAY, NOV 16</span><h2>Today’s schedule</h2></div>
                <a className="calendar-button" href="#schedule" aria-label="View full schedule">↗</a>
              </div>
              <div className="schedule-list">
                {schedule.map((item, index) => (
                  <article className="schedule-row" key={item.code}>
                    <div className="schedule-time">{item.time}<span>{item.end}</span></div>
                    <div className={`schedule-marker ${item.color}`}>{index === 0 ? <i /> : null}</div>
                    <div className="schedule-info"><h3>{item.course}</h3><p>{item.code} <span>·</span> {item.location}</p></div>
                  </article>
                ))}
              </div>
              <a className="schedule-footer" href="#schedule">View weekly schedule <span aria-hidden="true">→</span></a>
            </section>
          </div>

          <section className="content-card activity-card">
            <div className="section-heading">
              <div><span className="section-kicker">THE LATEST</span><h2>Recent activity</h2></div>
              <a className="text-link" href="#activity">See all <span aria-hidden="true">→</span></a>
            </div>
            <div className="activity-list" id="activity">
              {activity.map((item) => (
                <article className="activity-row" key={item.title}>
                  <span className={`activity-indicator ${item.color}`} />
                  <div className="activity-info"><h3>{item.title}</h3><p>{item.detail}</p></div>
                  <span className="activity-date">{item.date}</span>
                  <span className={`activity-status ${item.color}`}>{item.status}</span>
                  <span className="activity-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </section>

          <footer className="dashboard-footer"><span>© 2026 Northstar University</span><span>{student.semester} <i /> Your student portal</span></footer>
        </div>
      </section>
    </main>
  )
}

export default Dashboard
