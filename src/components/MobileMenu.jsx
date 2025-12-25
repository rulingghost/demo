import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ChevronRight, Home, Search, FileText, Shield, Phone, User, Users, GraduationCap } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  const [expandedSection, setExpandedSection] = useState(null);

  const menuItems = [
    {
      title: 'Ana Sayfa',
      icon: <Home size={20} />,
      link: '/'
    },
    {
      title: 'Tedavi Ara',
      icon: <Search size={20} />,
      link: '/search'
    },
    {
      title: 'Doktorlar',
      icon: <Users size={20} />,
      link: '/doctors'
    },
    {
      title: 'Akademi',
      icon: <GraduationCap size={20} />,
      link: '/courses'
    },
    {
      title: 'Nasıl Çalışır',
      icon: <FileText size={20} />,
      link: '/how-it-works'
    },
    {
      title: 'Güvenlik',
      icon: <Shield size={20} />,
      link: '/safety'
    },
    {
      title: 'İletişim',
      icon: <Phone size={20} />,
      link: '/contact'
    },
    {
      title: 'Giriş Yap',
      icon: <User size={20} />,
      link: '/dashboard'
    }
  ];

  const popularTreatments = [
    'Saç Ekimi', 'Rinoplasti', 'Diş İmplantı', 'Meme Estetiği',
    'Liposuction', 'Tüp Bebek'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.5)',
              zIndex: 998
            }}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              bottom: 0,
              width: '85%',
              maxWidth: '350px',
              background: 'white',
              zIndex: 999,
              boxShadow: '4px 0 20px rgba(0,0,0,0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflowY: 'auto'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '24px',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--primary)',
              color: 'white'
            }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', margin: 0 }}>Doctora</h2>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'white'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Menu Items */}
            <div style={{ flex: 1, padding: '16px' }}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '16px',
                    borderRadius: '12px',
                    marginBottom: '8px',
                    textDecoration: 'none',
                    color: 'var(--secondary)',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
                    <span style={{ fontSize: '15px', fontWeight: '600' }}>{item.title}</span>
                  </div>
                  <ChevronRight size={18} color="var(--text-light)" />
                </Link>
              ))}

              {/* Popular Treatments */}
              <div style={{ marginTop: '32px', padding: '16px', background: 'var(--surface)', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', marginBottom: '16px', color: 'var(--text-muted)' }}>
                  POPÜLER TEDAVİLER
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {popularTreatments.map((treatment, index) => (
                    <Link
                      key={index}
                      to={`/search?q=${treatment}`}
                      onClick={onClose}
                      style={{
                        padding: '8px 14px',
                        background: 'white',
                        borderRadius: '100px',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--secondary)',
                        textDecoration: 'none',
                        border: '1px solid var(--border)',
                        transition: 'all 0.2s'
                      }}
                    >
                      {treatment}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div style={{ padding: '24px', borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={() => {
                  onClose();
                  window.dispatchEvent(new CustomEvent('openClinicQuiz'));
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '16px', fontSize: '15px', fontWeight: '700' }}
              >
                Ücretsiz Teklif Al
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
