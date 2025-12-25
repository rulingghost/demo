import React from 'react';
import { UserCheck, FileText, Zap, Headphones, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const featuresData = t('features.items') || [];

  const icons = [
    <Zap size={32} />,
    <UserCheck size={32} />,
    <FileText size={32} />,
    <Headphones size={32} />
  ];

  const links = ['/how-it-works', '/safety', '/how-it-works', '/contact'];

  return (
    <section className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-header">
          <h2>{t('features.title')}</h2>
          <p>{t('features.desc')}</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {featuresData.map((f, i) => (
            <div key={i} className="glass card-hover" style={{ textAlign: 'center', padding: '40px', borderRadius: '24px' }}>
              <div style={{ 
                color: 'var(--primary)', 
                marginBottom: '20px',
                display: 'inline-block'
              }}>
                {icons[i] || icons[0]}
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>{f.desc}</p>
              <Link to={links[i]} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '14px', color: 'var(--primary)', fontWeight: '700' }}>
                {t('features.learnMore')} <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
