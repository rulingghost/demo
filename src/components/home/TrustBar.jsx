import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const TrustBar = () => {
  const { t } = useLanguage();

  return (
    <section style={{ padding: '50px 0', background: 'var(--surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <p style={{ textAlign: 'center', color: 'var(--text-light)', fontSize: '14px', marginBottom: '30px', fontWeight: '800', letterSpacing: '0.1em' }}>
          {t('home.trustBar.title')}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', opacity: 0.4 }}>
          <div style={{ fontWeight: '950', fontSize: '32px' }}>JCI</div>
          <div style={{ fontWeight: '950', fontSize: '32px' }}>ISO 9001</div>
          <div style={{ fontWeight: '950', fontSize: '32px' }}>TEMOS</div>
          <div style={{ fontWeight: '950', fontSize: '32px' }}>ESMO</div>
          <div style={{ fontWeight: '950', fontSize: '32px' }}>HIPAA</div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
