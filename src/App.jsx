import React from 'react';
import './App.css';

// Using external high-quality placeholder images that perfectly match the theme to avoid any local file path errors.
const images = {
  solarPanel: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  offshore: 'https://images.unsplash.com/photo-1466611653911-96f2573a246f?auto=format&fit=crop&w=800&q=80',
  mountainHiker: 'https://images.unsplash.com/photo-1551632811-561f3222e70c?auto=format&fit=crop&w=800&q=80',
  drone: 'https://images.unsplash.com/photo-1473968512647-3e447244fac8?auto=format&fit=crop&w=600&q=80',
  city: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80',
  lamp: 'https://images.unsplash.com/photo-1513506003901-1e6a22fd015c?auto=format&fit=crop&w=600&q=80',
  powerLines: 'https://images.unsplash.com/photo-1478147427282-58a8f3d167c4?auto=format&fit=crop&w=600&q=80',
  cliff: 'https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80'
};

function App() {
  return (
    <div className="app-container">
      {/* HEADER & HERO SECTION */}
      <section className="hero-section dark-section">
        <header className="navbar">
          <div className="logo">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" fill="white" />
            </svg>
            <span>hs.</span>
          </div>
          <nav className="nav-links">
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
          </nav>
          <div className="nav-action">
            <button className="button button-outline">Contact us</button>
          </div>
        </header>

        <div className="hero-content container">
          <h1 className="hero-title animate-fade-in">We are energizing<br />the future.</h1>
          
          <div className="hero-bottom animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="hero-text">
              <p>Sustainable energy solutions designed for a modern world, prioritizing efficiency, safety, and scale.</p>
            </div>
            <div className="hero-buttons">
              <button className="button button-light">Get started</button>
              <button className="button button-outline">Read more</button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="intro-section light-section container">
        <div className="intro-header">
          <h2 className="section-title">We are energizing<br />the future</h2>
          <div className="intro-text">
            <p>Our goal is to build long-term, scalable sustainable energy infrastructures. We provide solutions that bring down costs and save the planet. We aim for high quality execution and best standards.</p>
            <p>We work directly with partners globally to secure essential resources and establish advanced grids for a smarter future.</p>
            <p>We are a certified sustainable provider focusing on long-term operations and reliability. Join us to build the infrastructure of tomorrow.</p>
          </div>
        </div>

        <div className="intro-image-container">
          <img src={images.solarPanel} alt="Solar Panels" className="full-width-image" />
          <div className="intro-highlight-card">
            <h3>We're creating a smarter, greener energy future, today</h3>
            <p>Investing in tomorrow's technology to provide the cleanest energy possible. With state-of-the-art facilities and a strong focus on renewable sources.</p>
            <button className="button button-outline dark-text-btn">Read More</button>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section dark-section">
        <div className="container">
          <h2 className="section-title text-white">We are energizing<br />the future</h2>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>350m</h3>
              <p>Customers globally reached</p>
            </div>
            <div className="stat-item">
              <h3>24/5</h3>
              <p>Monitoring & operations</p>
            </div>
            <div className="stat-item">
              <h3>1200</h3>
              <p>Green energy installations</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Global partners</p>
            </div>
            <div className="stat-item">
              <h3>70</h3>
              <p>Awards won</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASES / PORTFOLIO SECTION */}
      <section className="cases-section light-section container">
        <h2 className="section-title">We are energizing<br />the future</h2>
        
        <div className="cases-grid">
          <div className="case-card large" style={{ backgroundImage: `url(${images.offshore})` }}>
            <div className="case-content">
              <span className="case-tag">Case study</span>
              <h3>Electric Wind Island, Sea, and Air 2021-2024</h3>
            </div>
            <button className="icon-btn">→</button>
          </div>
          
          <div className="cases-right-column">
            <div className="case-card small light-blue-bg">
              <span className="case-tag dark">Case study</span>
              <h3>Clean Energy Smart Grid Foundations</h3>
              <button className="icon-btn outline">→</button>
            </div>
            
            <div className="case-card small" style={{ backgroundImage: `url(${images.mountainHiker})` }}>
              <div className="case-content">
                <span className="case-tag">Energy</span>
                <h3>Global Solar Projects</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="cases-grid reverse-mt">
          <div className="case-card large" style={{ backgroundImage: `url(${images.cliff})` }}>
            <div className="case-content">
              <span className="case-tag">Case study</span>
              <h3>Hydro Power Systems, Europe 2023-2024</h3>
            </div>
            <button className="icon-btn">→</button>
          </div>
          
          <div className="cases-right-column">
            <div className="case-card small light-gray-bg">
              <span className="case-tag dark">Case study</span>
              <h3>Wind Energy Operations</h3>
              <button className="button button-dark mt-auto">Read More</button>
            </div>
            
            <div className="case-card small purple-bg">
              <span className="case-tag dark">Case study</span>
              <h3>Future Energy Transitions</h3>
            </div>
          </div>
        </div>
      </section>

      {/* HAFENSTROM PROJECTS (BENTO GRID) */}
      <section className="bento-section bg-gray">
        <div className="container">
          <div className="bento-header">
            <h2 className="section-title">Hafenstrom<br />Projects</h2>
          </div>
          <div className="bento-grid">
            <div className="bento-item item-1" style={{ backgroundImage: `url(${images.drone})` }}>
              <div className="bento-label">Drone Surveys</div>
            </div>
            <div className="bento-item item-2" style={{ backgroundImage: `url(${images.lamp})` }}>
              <div className="bento-label">Smart Lighting</div>
            </div>
            <div className="bento-item item-3" style={{ backgroundImage: `url(${images.powerLines})` }}>
              <div className="bento-label">Grid Upgrades</div>
            </div>
            <div className="bento-item item-4" style={{ backgroundImage: `url(${images.city})` }}>
              <div className="bento-label">City Power</div>
            </div>
            <div className="bento-item item-5" style={{ backgroundImage: `url(${images.cliff})` }}>
              <div className="bento-label">Remote Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED COMPANIES */}
      <section className="trusted-section container">
        <h2 className="section-title">Trusted by great<br />Companies</h2>
        
        <div className="logos-row">
          <div className="logo-item"><strong>millesimé.</strong></div>
          <div className="logo-item"><strong>SQUARE</strong></div>
          <div className="logo-item highlight"><strong>millesimé.</strong></div>
          <div className="logo-item"><strong>SQUARE</strong></div>
          <div className="logo-item"><strong>ALBANY</strong></div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-section">
        <div className="container footer-content">
          <div className="footer-logo">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" fill="black" />
            </svg>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Office</h4>
              <p>123 Energy Way<br />Green City, Eco State</p>
            </div>
            <div className="footer-column">
              <h4>Contact</h4>
              <p>info@hsenergy.com<br />+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2024 HS Energy. All rights reserved.</p>
          <div className="footer-social">
            <a href="#linkedin">LinkedIn</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
