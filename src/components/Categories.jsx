import React from 'react';
import { Microscope, Activity, Stethoscope, Scissors, ArrowUpRight, HeartPulse, Brain, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Categories = () => {
  const { t } = useLanguage();
  const categoriesData = t('home.categories.items') || [];
  
  const icons = [
    <Stethoscope size={28} />, 
    <Scissors size={28} />, 
    <Microscope size={28} />, 
    <Brain size={28} />
  ];
  
  const colors = [
    { main: '#0ea5e9', bg: '#e0f2fe' },
    { main: '#ec4899', bg: '#fce7f3' },
    { main: '#6366f1', bg: '#e0e7ff' },
    { main: '#8b5cf6', bg: '#ede9fe' }
  ];

  return (
    <section style={{ padding: '100px 0', background: 'white', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(circle at 70% 50%, #f0f9ff 0%, transparent 70%)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
            {t('home.categories.title')} <span style={{ color: 'var(--primary)', position: 'relative' }}>{t('home.categories.highlight')}
              <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: 0, zIndex: -1 }}>
                 <path d="M0 4 C 30 8, 70 8, 100 4" stroke="#bfdbfe" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            {t('home.categories.desc')}
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
          {categoriesData.map((cat, i) => (
            <div 
              key={i} 
              className="category-card"
              style={{
                textDecoration: 'none',
                background: 'white',
                borderRadius: '32px',
                padding: '40px',
                border: '1px solid var(--border)',
                transition: 'all 0.4s ease',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = colors[i].main;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: colors[i].bg, color: colors[i].main, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {icons[i]}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>{cat.name}</h3>
                    <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '500' }}>{cat.count}</p>
                  </div>
                </div>
                <Link to='/search' style={{ display: 'flex', alignItems: 'center', gap: '8px', color: colors[i].main, fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
                  {t('home.categories.viewAll')} <ArrowUpRight size={18} />
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 30px' }}>
                {cat.subs && cat.subs.map((sub, idx) => (
                  <Link 
                    to={`/search`} 
                    key={idx} 
                    style={{ color: '#475569', fontSize: '15px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: '1px dashed #f1f5f9' }} 
                    className="hover:text-blue-600"
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1' }}></span>
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
