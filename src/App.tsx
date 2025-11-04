import { useState } from 'react'
import { HashRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './App.css'

function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo-center">
          <span className="star">★ ★ ★</span>
          <img src="/US-WhiteHouse-Logo.png" alt="White House Seal" className="white-house-seal" />
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
      <NavLink to="/administration" className="nav-link">the ADMINISTRATION</NavLink>
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

function AdministrationPage() {
  const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({})

  const toggleExpand = (id: string) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const staffMembers = [
    {
      id: 'cos',
      title: 'White House Chief of Staff',
      name: 'giodoglover1',
      image: 'public/cos.png',
      description: 'The Chief of Staff oversees the operations of the White House and coordinates between the President and the various departments and agencies. This role serves as the senior advisor to the President and manages the White House staff.',
      expandedText: 'The Chief of Staff is responsible for managing the President\'s schedule, coordinating policy development, overseeing White House operations, and serving as a key liaison between the President and other branches of government. This position requires exceptional organizational skills and the ability to navigate complex political and administrative challenges.'
    },
    {
      id: 'dpcos',
      title: 'White House Deputy Principal Chief of Staff',
      name: 'OMGWidgeon',
      image: 'public/dpcos.png',
      description: 'The Deputy Principal Chief of Staff assists the Chief of Staff in managing White House operations and serves as a key deputy in coordinating administrative and policy matters.',
      expandedText: 'This position supports the Chief of Staff in all aspects of White House management, including staff coordination, policy development, and administrative oversight. The Deputy Principal Chief of Staff ensures continuity of operations and assists in strategic planning and decision-making processes.'
    },
    {
      id: 'ps',
      title: 'White House Press Secretary',
      name: 're09533',
      image: 'public/ps.png',
      description: 'The Press Secretary serves as the primary spokesperson for the White House and the President, communicating administration policies and positions to the media and the public.',
      expandedText: 'The Press Secretary conducts daily briefings with the press corps, prepares statements on behalf of the administration, and coordinates media relations. This role requires strong communication skills, the ability to handle difficult questions, and a deep understanding of administration policies and priorities.'
    },
    {
      id: 'dps',
      title: 'White House Deputy Press Secretary',
      name: 'ww2Apache',
      image: 'public/dps.png',
      description: 'The Deputy Press Secretary supports the Press Secretary in media relations and communications, helping to coordinate press briefings and manage media inquiries.',
      expandedText: 'This position assists in all aspects of White House communications, including preparing briefing materials, coordinating with media outlets, and supporting the Press Secretary in daily operations. The Deputy Press Secretary ensures comprehensive coverage of administration activities and maintains strong relationships with the press corps.'
    }
  ]

  return (
    <div className="press-page">
      <div className="container">
        <h1 className="page-title">The Administration</h1>
        
        <div className="administration-sections">
          {staffMembers.map((member) => (
            <div key={member.id} className="administration-card">
              <div className="admin-left">
                <div className="admin-image-container">
                  <img src={member.image} alt={member.name} className="admin-image" />
                </div>
              </div>
              <div className="admin-right">
                <h2 className="admin-title">{member.title}</h2>
                <h3 className="admin-name">{member.name}</h3>
                <div className={`admin-description-container ${expanded[member.id] ? 'expanded' : ''}`}>
                  <p className={`admin-description ${expanded[member.id] ? 'expanded' : ''}`}>
                    {member.description}
                    {expanded[member.id] && (
                      <span className="admin-expanded-text">{member.expandedText}</span>
                    )}
                  </p>
                  <div className="admin-fade-overlay"></div>
                  <button 
                    className="admin-read-more"
                    onClick={() => toggleExpand(member.id)}
                  >
                    {expanded[member.id] ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
            <Route path="/administration" element={<AdministrationPage />} />
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
