import { useEffect, useState } from 'react';
import api from '../../api';

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', technologies: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchProjects = async () => {
    const res = await api.get('/api/projects');
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await api.put(`/api/projects/${editingId}`, form);
    } else {
      await api.post('/api/projects', form);
    }
    setForm({ title: '', description: '', technologies: '' });
    setEditingId(null);
    fetchProjects();
  };

  const handleDelete = async (id) => {
    await api.delete(`/api/projects/${id}`);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({ title: project.title, description: project.description, technologies: project.technologies });
    setEditingId(project._id);
  };

  return (
    <div className="container">
      <h2>Manage Projects</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <input placeholder="Description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} required />
        <input placeholder="Technologies" value={form.technologies} onChange={e => setForm({ ...form, technologies: e.target.value })} required />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>

      <ul>
        {projects.map(p => (
          <li key={p._id}>
            <strong>{p.title}</strong> - {p.technologies}
            <button onClick={() => handleEdit(p)}>Edit</button>
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminProjects;
