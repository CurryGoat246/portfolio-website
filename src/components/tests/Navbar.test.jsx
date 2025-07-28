import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { AuthContext } from '../../context/AuthContext';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar Component', () => {
  it('renders all navigation links', () => {
    const mockContext = {
      user: { name: 'Test User', role: 'user', email: 'test@example.com' },
      logout: () => {}
    };

    render(
      <AuthContext.Provider value={mockContext}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Services/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
