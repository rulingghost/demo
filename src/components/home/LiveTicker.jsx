import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LiveTicker = () => {
  const { t } = useLanguage();
  const activities = t('home.liveTicker') || [];

  return (
    <div style={{ background: 'var(--primary-light)', borderBottom: '1px solid var(--border)', overflow: 'hidden', padding: '12px 0' }}>
      <div className="container">
         <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '13px', color: 'var(--primary)', whiteSpace: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
           <span style={{ fontWeight: '800', paddingRight: '10px', borderRight: '1px solid var(--border)' }}>LIVE:</span>
           {activities.map((text, i) => (
              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600' }}>
                <span className="animate-pulse-soft" style={{ width: '8px', height: '8px', background: 'var(--accent)', borderRadius: '50%' }}></span>
                {text}
              </span>
           ))}
         </div>
      </div>
    </div>
  );
};

export default LiveTicker;
