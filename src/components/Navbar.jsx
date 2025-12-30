import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Video, ChevronDown, UserCircle, BookOpen, Stethoscope } from 'lucide-react';
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
    { name: t('navbar.hospitals') || 'Akademi', path: '/courses' }, // Academy
    { name: 'Fellowship', path: '/fellowship' }, // New Fellowship Link
    { name: t('navbar.destinations') || 'Online Muayene', path: '/second-opinion' }, // Online Muayene
    { name: t('navbar.findDoctor') || 'Eğitmenler', path: '/doctors' },
    { name: t('navbar.blog') || 'Blog', path: '/blog' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'white',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: scrolled ? 'var(--shadow-premium)' : 'none',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent'
      }}
    >
      {/* Top Bar (Trust Bar) */}
      <div style={{ background: 'linear-gradient(90deg, #334155 0%, #0f172a 100%)', color: 'rgba(255,255,255,0.9)', padding: '8px 0', fontSize: '12px', fontWeight: '500', letterSpacing: '0.05em' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '30px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BookOpen size={14} color="#38bdf8" /> {t('hero.subtitle') || 'TIP EĞİTİMİ & TELE-TIP'}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Video size={14} color="#34d399" /> {t('doctor.videoConsult') || 'Online Görüşme'}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div 
              onClick={toggleLanguage}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', background: 'rgba(255,255,255,0.1)', padding: '2px 10px', borderRadius: '100px', transition: 'all 0.2s', border: '1px solid rgba(255,255,255,0.1)' }} 
              className="hover:bg-white/20"
            >
              <span style={{ fontSize: '14px' }}>{language === 'tr' ? '🇹🇷' : '🇬🇧'}</span> {language.toUpperCase()} <ChevronDown size={12} />
            </div>
            <Link to="/courses" style={{ textDecoration: 'none', color: 'white', fontWeight: '600', fontSize: '12px' }}>Akademi</Link>
            <Link to="/fellowship" style={{ textDecoration: 'none', color: 'white', fontWeight: '600', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Fellowship <span style={{ background: '#fef3c7', color: '#b45309', fontSize: '10px', padding: '2px 6px', borderRadius: '4px', border: '1px solid #fcd34d' }}>YENİ</span>
            </Link>
            <Link to="/contact" style={{ color: 'white', opacity: 0.9, fontWeight: '600' }}>
              {t('navbar.forClinics') || 'Eğitmen Başvuru'}
            </Link>
          </div>
        </div>
      </div>

      <div className="container" style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
           {/* If logo file exists, use it, otherwise text fallback */}
           <img src={logo} alt="Doctora" style={{ height: '50px', width: 'auto' }} onError={(e) => {e.target.style.display='none'; e.target.nextSibling.style.display='block'}} />
           <span style={{ display: 'none', fontSize: '20px', fontWeight: '800', color: 'var(--primary)', letterSpacing: '-0.5px' }}>DOCTORA</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link
              to="/dashboard"
              className="nav-link"
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'var(--text-main)',
                transition: 'color 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                marginRight: '10px'
              }}
            >
              <UserCircle size={18} /> {t('navbar.login')}
            </Link>
          <Link to="/courses" className="btn-primary" style={{ padding: '10px 24px', fontSize: '14px', borderRadius: '100px' }}>
            {t('navbar.getQuote') || 'Kayıt Ol'}
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
              style={{ fontSize: '18px', fontWeight: '700', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              {link.name}
            </Link>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px' }}>
             <Link 
               to="/dashboard"
               onClick={() => setIsOpen(false)}
               style={{ fontSize: '16px', fontWeight: '600', color: '#64748b', display: 'flex', alignItems: 'center', gap: '10px' }}
             >
               <UserCircle size={20} /> {t('navbar.login')}
             </Link>
            <Link 
              to="/courses" 
              onClick={() => setIsOpen(false)}
              className="btn-primary" 
              style={{ padding: '16px', textAlign: 'center' }}
            >
              {t('navbar.getQuote')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
