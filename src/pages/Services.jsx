import '../styles/Services.css';

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom responsive websites using React, Node.js, and modern frameworks.",
      icon: "💻"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with React Native.",
      icon: "📱"
    },
    {
      title: "API Development",
      description: "RESTful API design and implementation with Express.js.",
      icon: "🔌"
    },
    {
      title: "Database Design",
      description: "SQL and NoSQL database architecture and optimization.",
      icon: "🗄️"
    }
  ];

  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;