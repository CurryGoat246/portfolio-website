// src/pages/Profile.jsx
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading profile...</p>;

  if (!user) {
    return (
      <div className="profile-container">
        <h2>Access Denied</h2>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>
      <p>This is your protected profile page.</p>
    </div>
  );
};

export default Profile;
