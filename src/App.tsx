import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-center">
          <span className="star">★ ★ ★</span>
          <img src="public/US-WhiteHouse-Logo.png" alt="White House Seal" className="white-house-seal" />
          <span className="star">★ ★ ★</span>
        </div>
        <div className="white-house-text-center">
          <div className="flag-icon">🇺🇸</div>
          <div className="text-content">
            <h2>THE WHITE HOUSE</h2>
            <p>PRESIDENT NIKOLA KALINIC</p>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  )
}

function Nav() {
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-link">HOME</NavLink>
      <NavLink to="/agenda" className="nav-link">the AGENDA</NavLink>
      <NavLink to="/press" className="nav-link">PRESS</NavLink>
      <NavLink to="/contact" className="nav-link">CONTACT us</NavLink>
    </nav>
  )
}

function HomePage() {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1 className="hero-title">
          <span className="change">CHANGE</span>
          <span className="has-come">HAS COME</span>
          <span className="to">to</span>
          <span className="america">AMERICA</span>
        </h1>
        <p className="hero-subtitle">THE INAUGURATION of PRESIDENT NIKOLA KALINIC <br/> and VICE PRESIDENT CAESAHRIUS</p>
      </div>
      <div className="hero-right">
        <div className="portraits-container">
          <img src="public/vicepresident.png" alt="Vice President" className="vp-image" />
          <img src="public/president.png" alt="President Nikola Kalinic" className="president-image" />
        </div>
      </div>
    </div>
  )
}

function AgendaPage() {
  return (
    <div className="press-page">
      <div className="container">
        <h1 className="page-title">The Agenda</h1>
        <div className="agenda-content">
          <p>View the full agenda document:</p>
          <a 
            href="https://drive.google.com/file/d/1Ypuxu0gvPMhLdx7C21qhV7UD0Fr2m4_X/view" 
            target="_blank" 
            rel="noopener noreferrer"
            className="agenda-link"
          >
            Open Agenda PDF →
          </a>
        </div>
      </div>
    </div>
  )
}

function PressPage() {
  return (
    <div className="press-page">
      <div className="container">
        <h1 className="page-title">Press & Media</h1>
        
        <div className="press-sections">
          <section className="press-section">
            <h2>Next Press Conference</h2>
            <div className="press-conference-info">
              <div className="info-card">
                <h3>Upcoming Conference</h3>
                <p>The White House Press Office would like to inform members of the public of a press briefing occurring today or Tuesday, November 4 at 8:30 PM EST. This briefing will be open to members of the public and members of the media, access will be through the press gate at the White House starting promptly at 8:20 PM EST. Thank you. A announcement is attached below showing the time converted to your local time.</p>
              </div>
            </div>
          </section>

          <section className="press-section">
            <h2>Seating Chart</h2>
            <div className="seating-chart-container">
              <img src="public/seatingchart.png" alt="Press Seating Chart" className="seating-chart" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function ContactPage() {
  return (
    <div className="press-page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        
        <div className="contact-sections">
          <section className="press-section">
            <h2>Join Our Discord</h2>
            <div className="info-card">
              <h3>Kalinic Administration Discord Server</h3>
              <p>Join our official Discord server to stay connected with the administration and apply for positions.</p>
              <div className="info-details">
                <p><strong>To apply for a position:</strong> Please create a ticket in the Discord server.</p>
                <a 
                  href="https://discord.gg/VzThbnBjCD" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="discord-link"
                >
                  Join Discord Server →
                </a>
              </div>
            </div>
          </section>

          <section className="press-section">
            <h2>Current Vacancies</h2>
            <div className="vacancies-container">
              <div className="vacancy-card">
                <h3>Director of Legislative Affairs</h3>
                <p><strong>Available Positions:</strong> x1</p>
                <p>To apply, please create a ticket in the Discord server.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/agenda" element={<AgendaPage />} />
            <Route path="/press" element={<PressPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; 2024 The White House. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
