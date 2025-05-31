import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Creative Space</h1>
          <p className="hero-subtitle">Building digital experiences that matter</p>
          <div className="cta-buttons">
            <a href="/Projects" className="primary-button">Explore My Work</a>
            <a href="/contact" className="secondary-button">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <img 
            src="/images/hero-image.jpg"  // You can use any professional image
            alt="Creative workspace"
            className="profile-hero-image"
          />
        </div>
      </header>

      <section className="mission-section">
        <h2>My Mission</h2>
        <div className="mission-card">
          <p>
            To design and develop intuitive, accessible web applications that solve real problems 
            while delivering exceptional user experiences through clean code and thoughtful design.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;