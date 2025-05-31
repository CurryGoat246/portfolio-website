import '../styles/About.css';
//Description:Professional profile featuring your academic background (Centennial College),
//technical skills, and career aspirations. Includes a headshot image and downloadable resume link 
//formatted for recruiter scanning with clean typography and organized sections.
function About() {
  return (
    // Main container
    <div className="about-container">
      <div className="about-content">
        <h1>About Me</h1>
         {/* Profile section containing image and text information */}
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
              Download My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;