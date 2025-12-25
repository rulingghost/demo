import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const GlobalMedia = () => {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{ color: 'var(--text-light)', fontSize: '13px', fontWeight: '800', marginBottom: '30px', letterSpacing: '0.1em' }}>{t('home.globalMedia.title')}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', alignItems: 'center', flexWrap: 'wrap', opacity: 0.5 }}>
          <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-muted)' }}>Forbes</span>
          <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-muted)' }}>Bloomberg</span>
          <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-muted)' }}>TechCrunch</span>
          <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-muted)' }}>BBC News</span>
          <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--text-muted)' }}>Healthline</span>
        </div>
      </div>
    </section>
  );
};

export default GlobalMedia;
