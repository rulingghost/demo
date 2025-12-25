import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ShieldCheck, ChevronDown, UserCircle } from 'lucide-react';
import logo from '../assets/logo.jpg';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('navbar.hospitals'), path: '/search' },
    { name: t('navbar.findDoctor') || 'Doktorlar', path: '/doctors' },
    { name: t('navbar.treatments'), path: '/how-it-works' },
    { name: 'Akademi', path: '/courses' },
    { name: 'Güvenlik', path: '/safety' },
    { name: t('navbar.blog'), path: '/blog' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'white',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-premium)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.3)' : '1px solid transparent'
      }}
    >
      {/* Top Bar (Trust Bar) */}
      <div style={{ background: 'linear-gradient(90deg, #0f172a 0%, #1e293b 100%)', color: 'rgba(255,255,255,0.9)', padding: '10px 0', fontSize: '12px', fontWeight: '500', letterSpacing: '0.05em' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={14} color="var(--primary)" /> 7/24 Global Support
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={14} color="#10b981" /> Verified Safe Clinics
            </span>
          </div>
          <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
            <div 
              onClick={toggleLanguage}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', padding: '4px 12px', borderRadius: '100px', transition: 'all 0.2s', border: '1px solid rgba(255,255,255,0.1)' }} 
              className="hover:bg-white/20"
            >
              <span style={{ fontSize: '14px' }}>{language === 'tr' ? '🇹🇷' : '🇬🇧'}</span> {language.toUpperCase()} <ChevronDown size={12} />
            </div>
            <Link to="/contact" style={{ color: 'white', opacity: 0.9, fontWeight: '600' }}>
              {t('navbar.forClinics')}
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src={logo} alt="Doctora Logo" style={{ height: '50px', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                transition: 'color 0.2s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
              to="/dashboard"
              className="nav-link"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: location.pathname === '/dashboard' ? 'var(--primary)' : 'var(--text-main)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <UserCircle size={18} /> {t('navbar.login')}
            </Link>
        </div>

        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link to="/contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '14px', borderRadius: '12px' }}>
            {t('navbar.getQuote')}
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--secondary)' }}
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
          padding: '30px 20px',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          zIndex: 999
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ fontSize: '18px', fontWeight: '700', color: 'var(--secondary)' }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
            <Link 
              to="/second-opinion" 
              onClick={() => setIsOpen(false)}
              style={{ 
                background: '#f0f9ff', 
                color: 'var(--primary)', 
                padding: '16px', 
                borderRadius: '12px',
                textAlign: 'center',
                fontWeight: '700'
              }}
            >
              Online Konsültasyon
            </Link>
            <Link to="/contact" className="btn-primary" onClick={() => setIsOpen(false)} style={{ padding: '16px' }}>
              Teklif Al
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
