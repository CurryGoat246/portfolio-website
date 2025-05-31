import "../styles/Home.css";

//Description:The welcoming gateway to your portfolio featuring a modern hero section with your mission statement. 
//Highlights your core competencies as a developer with clear call to action buttons linking to key sections.
//Designed with animated gradients and smooth transitions to showcase your front end skills.
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
          <img //image for home
            src="/images/hero-image.jpg"  
            alt="Creative workspace"
            className="profile-hero-image"
          />
          
        </div>
        
      </header>

      <section className="mission-section">
        <h2>Mission Statement</h2>
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