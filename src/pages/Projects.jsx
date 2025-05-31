//Three technical projects demonstrating full stack capabilities. 


import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Inventory Management System",
      description: "Java Spring Boot application with React frontend for tracking product inventory across multiple warehouses. Implemented real time updates and reporting features.",
      image: "/images/javaproject.jpg"
    },
    {
      id: 2,
      title: "Fitness Mobile App", 
      description: "React Native application with Firebase backend for tracking workouts and nutrition. Features include progress charts and social sharing.",
      image: "/images/mobileapps.jpg"
    },
    {
      id: 3,
      title: "E-commerce Web Application",
      description: "Full stack React application with Node.js backend and MongoDB. Includes product catalog, shopping cart, and payment processing.",
      image: "/images/webapp.jpg"
    }
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image-container">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image"
              />
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;