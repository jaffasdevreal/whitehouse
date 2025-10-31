import { useState } from 'react'
import './App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <header className="header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/seal.svg" alt="Seal of the President" className="seal" />
            <div className="logo-text">
              <h1>THE WHITE HOUSE</h1>
              <p>1600 Pennsylvania Avenue NW</p>
            </div>
          </div>
          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            <ul className="nav-list">
              <li><a href="#briefing-room">Briefing Room</a></li>
              <li><a href="#administration">Administration</a></li>
              <li><a href="#priorities">Priorities</a></li>
              <li><a href="#get-involved">Get Involved</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h2>Welcome to the White House</h2>
            <p className="hero-subtitle">The official website of the President of the United States</p>
            <div className="hero-actions">
              <a href="#briefing-room" className="btn btn-primary">Briefing Room</a>
              <a href="#administration" className="btn btn-secondary">Administration</a>
            </div>
          </div>
        </section>

        <section id="briefing-room" className="section briefing-room">
          <div className="container">
            <h2>Briefing Room</h2>
            <div className="news-grid">
              <article className="news-card featured">
                <div className="news-image">
                  <div className="placeholder-image"></div>
                </div>
                <div className="news-content">
                  <span className="news-date">Today</span>
                  <h3>President's Latest Statement</h3>
                  <p>Read the latest statement from the President on current events and administration priorities.</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
              <article className="news-card">
                <div className="news-content">
                  <span className="news-date">Yesterday</span>
                  <h3>White House Announces New Initiative</h3>
                  <p>The Administration announces a new initiative aimed at strengthening the economy.</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
              <article className="news-card">
                <div className="news-content">
                  <span className="news-date">2 days ago</span>
                  <h3>Press Briefing Highlights</h3>
                  <p>Key highlights from the latest White House press briefing with updates on policy matters.</p>
                  <a href="#" className="read-more">Read More →</a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section id="priorities" className="section priorities">
          <div className="container">
            <h2>Administration Priorities</h2>
            <div className="priorities-grid">
              <div className="priority-card">
                <div className="priority-icon">🏛️</div>
                <h3>Economy</h3>
                <p>Building a stronger, more resilient economy that works for all Americans.</p>
              </div>
              <div className="priority-card">
                <div className="priority-icon">🌍</div>
                <h3>Climate</h3>
                <p>Leading the world in addressing climate change and creating clean energy jobs.</p>
              </div>
              <div className="priority-card">
                <div className="priority-icon">🏥</div>
                <h3>Health Care</h3>
                <p>Expanding access to affordable, quality health care for every American.</p>
              </div>
              <div className="priority-card">
                <div className="priority-icon">🎓</div>
                <h3>Education</h3>
                <p>Investing in education to ensure every child has access to quality learning opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="get-involved" className="section get-involved">
          <div className="container">
            <h2>Get Involved</h2>
            <div className="involvement-grid">
              <div className="involvement-card">
                <h3>Contact Us</h3>
                <p>Send a message to the White House</p>
                <a href="#" className="btn btn-outline">Send a Message</a>
              </div>
              <div className="involvement-card">
                <h3>Sign Up for Updates</h3>
                <p>Receive updates from the White House</p>
                <a href="#" className="btn btn-outline">Subscribe</a>
              </div>
              <div className="involvement-card">
                <h3>Visit the White House</h3>
                <p>Learn about public tours and visits</p>
                <a href="#" className="btn btn-outline">Learn More</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>White House</h4>
              <p>1600 Pennsylvania Avenue NW<br/>Washington, DC 20500</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#briefing-room">Briefing Room</a></li>
                <li><a href="#administration">Administration</a></li>
                <li><a href="#priorities">Priorities</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 The White House. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
