// src/pages/Qualification.jsx
import { useEffect, useState, useContext } from 'react';
import api from '../api';
import { AuthContext } from '../context/AuthContext';

export default function Qualification() {
  const { user } = useContext(AuthContext);
  const [qualifications, setQualifications] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    firstname: '',
    lastname: '',
    email: '',
    completion: '',
    description: ''
  });

  const fetchQualifications = async () => {
    try {
      const res = await api.get('/api/qualifications');
      setQualifications(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchQualifications();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/api/qualifications', formData);
      fetchQualifications();
      setFormData({
        title: '',
        firstname: '',
        lastname: '',
        email: '',
        completion: '',
        description: ''
      });
    } catch (err) {
      alert(err.response?.data?.message || 'Error creating qualification');
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this qualification?')) return;
    try {
      await api.delete(`/api/qualifications/${id}`);
      fetchQualifications();
    } catch (err) {
      alert('Delete failed');
    }
  };

  return (
    <div className="container" style={{ padding: '2rem' }}>
      <h2>Qualifications</h2>

      {/* Admin-only form */}
      {user?.role === 'admin' && (
        <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
          <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
          <input name="firstname" placeholder="First Name" value={formData.firstname} onChange={handleChange} required />
          <input name="lastname" placeholder="Last Name" value={formData.lastname} onChange={handleChange} required />
          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input name="completion" type="date" value={formData.completion} onChange={handleChange} required />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
          <button type="submit">Add Qualification</button>
        </form>
      )}

      {/* List all qualifications */}
      <ul>
        {qualifications.map((q) => (
          <li key={q._id} style={{ marginBottom: '1rem' }}>
            <strong>{q.title}</strong> – {q.firstname} {q.lastname}<br />
            {q.email} | Completed: {new Date(q.completion).toLocaleDateString()}<br />
            <em>{q.description}</em>
            {user?.role === 'admin' && (
              <div>
                <button onClick={() => handleDelete(q._id)} style={{ marginTop: '0.5rem' }}>
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
