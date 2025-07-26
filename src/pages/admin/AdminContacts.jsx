import { useEffect, useState } from 'react';
import api from '../../api';

function AdminContacts() {
  const [contacts, setContacts] = useState([]);

  const fetchData = async () => {
    const res = await api.get('/api/contacts');
    setContacts(res.data);
  };

  const handleDelete = async (id) => {
    await api.delete(`/api/contacts/${id}`);
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Contact Messages</h2>
      <ul>
        {contacts.map(c => (
          <li key={c._id}>
            <strong>{c.name}</strong> ({c.email}): {c.message}
            <button onClick={() => handleDelete(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminContacts;
