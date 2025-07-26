import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Profile from './pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import Qualification from './pages/Qualification';
import AdminProjects from './pages/admin/AdminProjects'; // ✅ match case
import AdminQualifications from './pages/admin/adminQualifications'; // ✅ match case
import AdminContacts from './pages/admin/AdminContacts'; // ✅ match case

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/qualifications" element={<Qualification />} />

        {/* Auth Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Protected Profile */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ✅ Admin-Only Routes */}
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute adminOnly>
              <AdminProjects />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/qualifications"
          element={
            <ProtectedRoute adminOnly>
              <AdminQualifications />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute adminOnly>
              <AdminContacts />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
