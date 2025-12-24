import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div style={{ 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 20px'
    }}>
      <h1 style={{ fontSize: '120px', fontWeight: '800', color: 'var(--primary)', lineHeight: '1', marginBottom: '20px' }}>404</h1>
      <h2 style={{ fontSize: '32px', marginBottom: '24px' }}>Oops! Page not found</h2>
      <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '500px', marginBottom: '40px' }}>
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="btn-primary" style={{ padding: '16px 32px' }}>
        <Home size={20} /> Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
