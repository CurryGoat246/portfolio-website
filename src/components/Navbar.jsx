import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.jpg" alt="GB Logo" className="logo" />
        <span className="logo-text">Gavin Beresford</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        {user?.role === 'admin' && (
          <>
            <li><Link to="/admin/projects">Manage Projects</Link></li>
            <li><Link to="/admin/qualifications">Manage Qualifications</Link></li>
            <li><Link to="/admin/contacts">Manage Contacts</Link></li>
          </>
        )}

        {user ? (
          <>
            <li><Link to="/profile">Profile</Link></li>
            <li>
              <button onClick={logout} className="nav-button">Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login" className="nav-login">Login</Link></li>
            <li><Link to="/signup" className="nav-signup">Sign Up</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
