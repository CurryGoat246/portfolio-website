import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  // Not logged in → redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // Logged in but not admin → redirect to home
  if (adminOnly && user.role !== 'admin') return <Navigate to="/" replace />;

  return children;
}
