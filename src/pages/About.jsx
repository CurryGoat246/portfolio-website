import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
        <div className="profile-section">
          <img 
            src="/images/profile.jpg" 
            alt="Gavin Beresford"
            className="profile-image"
          />
          <div className="profile-info">
            <h2>Gavin Beresford</h2>
            <p className="school-info">Computer Science Student at Centennial College</p>
            <p>
              I'm a passionate software developer with expertise in web and mobile application development. 
              Currently pursuing my degree in Computer Science, I enjoy solving complex problems and 
              creating user friendly applications. My technical skills include React, Node.js, Java 
              and database management.

            </p>
            <a 
              href="/resume.pdf" 
              download
              className="resume-link"
            >
              D
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;