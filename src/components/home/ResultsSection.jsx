import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const ResultsSection = () => {
  const { t } = useLanguage();
  const results = t('home.results') || { items: [] };

  const resultImages = [
    { before: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=400' },
    { before: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
    { before: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', after: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }
  ];

  return (
    <section style={{ padding: '100px 0', background: '#f0f9ff' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '16px' }}>{results.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>{results.desc}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {results.items && results.items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass hover-lift" 
              style={{ borderRadius: '32px', overflow: 'hidden', padding: '25px', background: 'white', border: '1px solid white' }}
            >
               <div style={{ display: 'flex', gap: '15px', marginBottom: '25px' }}>
                 <div style={{ flex: 1, position: 'relative' }}>
                   <img src={resultImages[i].before} alt="Before" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px' }} />
                   <span style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(0,0,0,0.7)', color: 'white', fontSize: '13px', padding: '6px 12px', borderRadius: '8px', fontWeight: '600' }}>{results.before}</span>
                 </div>
                 <div style={{ flex: 1, position: 'relative' }}>
                   <img src={resultImages[i].after} alt="After" style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '20px' }} />
                   <span style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--accent)', color: 'white', fontSize: '13px', padding: '6px 12px', borderRadius: '8px', fontWeight: '600' }}>{results.after}</span>
                 </div>
               </div>
               <div style={{ textAlign: 'center' }}>
                 <h3 style={{ fontSize: '22px', marginBottom: '8px', fontWeight: '800' }}>{item.title}</h3>
                 <p style={{ color: 'var(--text-muted)', fontSize: '15px', fontWeight: '500' }}>{item.patient} • {item.time}</p>
               </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
           <Link to="/search" className="btn-primary" style={{ padding: '18px 36px', fontSize: '16px' }}>{results.cta}</Link>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
