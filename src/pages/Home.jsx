import { Link } from 'react-router-dom';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Creative Space</h1>
          <p className="hero-subtitle">Building digital experiences that matter</p>
          
          <div className="cta-buttons">
            {/* Use Link instead of anchor tags for SPA behavior */}
            <Link to="/projects" className="primary-button">
              Explore My Work
            </Link>
            <Link to="/contact" className="secondary-button">
              Get In Touch
            </Link>
            <Link to="/signup" className="auth-button">
              Join My Network
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/hero-image.jpg"
            alt="Creative workspace"
            className="profile-hero-image"
            loading="lazy" // Better performance
          />
        </div>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <h2>Mission Statement</h2>
        <div className="mission-card">
          <p>
            To design and develop intuitive, accessible web applications that solve real problems 
            while delivering exceptional user experiences through clean code and thoughtful design.
          </p>
          {/* Additional call-to-action */}
          <Link to="/about" className="tertiary-button">
            Learn More About Me
          </Link>
        </div>
      </section>

      {/* Skills Preview Section (Optional) */}
      <section className="skills-section">
        <h2>Core Competencies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <p>React, Vue, JavaScript, TypeScript</p>
          </div>
          <div className="skill-card">
            <h3>Backend Development</h3>
            <p>Node.js, Express, MongoDB</p>
          </div>
          <div className="skill-card">
            <h3>UI/UX Design</h3>
            <p>Figma, Adobe XD, Responsive Design</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;