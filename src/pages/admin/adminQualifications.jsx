import { useEffect, useState } from 'react';
import api from '../../api';

function AdminQualifications() {
  const [qualifications, setQualifications] = useState([]);
  const [form, setForm] = useState({ title: '', institution: '', year: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchData = async () => {
    const res = await api.get('/api/qualifications');
    setQualifications(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await api.put(`/api/qualifications/${editingId}`, form);
    } else {
      await api.post('/api/qualifications', form);
    }
    setForm({ title: '', institution: '', year: '' });
    setEditingId(null);
    fetchData();
  };

  const handleDelete = async (id) => {
    await api.delete(`/api/qualifications/${id}`);
    fetchData();
  };

  const handleEdit = (item) => {
    setForm({ title: item.title, institution: item.institution, year: item.year });
    setEditingId(item._id);
  };

  return (
    <div className="container">
      <h2>Manage Qualifications</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} required />
        <input placeholder="Institution" value={form.institution} onChange={e => setForm({ ...form, institution: e.target.value })} required />
        <input placeholder="Year" value={form.year} onChange={e => setForm({ ...form, year: e.target.value })} required />
        <button type="submit">{editingId ? 'Update' : 'Create'}</button>
      </form>

      <ul>
        {qualifications.map(q => (
          <li key={q._id}>
            <strong>{q.title}</strong> - {q.institution}, {q.year}
            <button onClick={() => handleEdit(q)}>Edit</button>
            <button onClick={() => handleDelete(q._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminQualifications;
