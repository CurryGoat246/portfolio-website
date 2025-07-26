// src/context/AuthContext.jsx
import { createContext, useState, useEffect } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Auto-check auth on app mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await api.get('/auth/check');
        const { id, name, email, role } = response.data.user;
        setUser({ id, name, email, role });
        console.log("✅ Auth check success:", response.data.user);
      } catch (err) {
        console.warn("⚠️ Auth check failed:", err.response?.data?.message || err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Login method
  const login = async (email, password) => {
    try {
      const response = await api.post('/auth/signin', { email, password });
      localStorage.setItem('token', response.data.token);
      console.log("✅ Login token stored");

      // Immediately fetch authenticated user after login
      const check = await api.get('/auth/check');
      const { id, name, email: userEmail, role } = check.data.user;
      setUser({ id, name, email: userEmail, role });

      console.log("✅ User loaded after login:", check.data.user);
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Login failed');
    }
  };

  // Logout method
  const logout = async () => {
    try {
      await api.post('/auth/signout');
    } catch (err) {
      console.warn("⚠️ Error during logout:", err.message);
    } finally {
      localStorage.removeItem('token');
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
