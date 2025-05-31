//Professional contact hub 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    navigate('/');
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Name:</strong> Gavin Beresford</p>
        <p><strong>Email:</strong> gavin.beresford@centennialcollege.ca</p>
        <p><strong>Phone:</strong> (416) 555-0199</p>
        <p><strong>School:</strong> Centennial College</p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Send Me a Message</h2>
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;