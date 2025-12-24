import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, ShieldCheck, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Clinics', path: '/search' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Medical Hub', path: '/blog' },
    { name: 'Second Opinion', path: '/second-opinion' },
    { name: 'Safety', path: '/safety' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255, 255, 255, 0.9)' : 'white',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-md)' : 'none',
        transition: 'all 0.3s ease',
        borderBottom: scrolled ? 'none' : '1px solid var(--border)'
      }}
    >
      {/* Top Bar (Trust Bar) */}
      <div style={{ background: 'var(--secondary)', color: 'white', padding: '8px 0', fontSize: '12px' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={14} /> Global Patient Support Available 24/7
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={14} color="var(--accent)" /> Verified Safe Clinics
            </span>
          </div>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
              <span style={{ fontSize: '14px' }}>🇬🇧</span> English <ChevronDown size={14} />
            </div>
            <Link to="/contact" style={{ color: 'white', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '15px' }}>
              For Clinics
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-1px' }}>
          SARFEA
        </Link>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{
                fontSize: '15px',
                fontWeight: '500',
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            onClick={() => alert('Our coordinator will call you back within 15 minutes. Thank you!')}
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'var(--text-main)', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <Phone size={18} /> Call Back
          </button>
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 20px' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'white',
          padding: '20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-xl)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '18px', fontWeight: '600' }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)}>
            Get a Free Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
