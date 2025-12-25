import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const DestinationsSection = () => {
  const { t, language } = useLanguage();

  const destinations = [
    { country: language === 'tr' ? 'Türkiye' : 'Turkey', proc: language === 'tr' ? 'Saç Ekimi' : 'Hair Transplant', price: '€1,600', save: language === 'tr' ? '%70 Tasarruf' : '70% Savings', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=400', flag: '🇹🇷' },
    { country: language === 'tr' ? 'Meksika' : 'Mexico', proc: language === 'tr' ? 'Diş Kaplama' : 'Dental Veneers', price: '$4,200', save: language === 'tr' ? '%60 Tasarruf' : '60% Savings', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400', flag: '🇲🇽' },
    { country: language === 'tr' ? 'Tayland' : 'Thailand', proc: language === 'tr' ? 'Rinoplasti' : 'Rhinoplasty', price: '$3,100', save: language === 'tr' ? '%55 Tasarruf' : '55% Savings', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=400', flag: '🇹🇭' },
    { country: language === 'tr' ? 'Almanya' : 'Germany', proc: language === 'tr' ? 'Onkoloji Tarama' : 'Oncology Screening', price: '€2,500', save: language === 'tr' ? 'En İyi Kalite' : 'Best Quality', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=400', flag: '🇩🇪' },
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'end', justifyContent: 'space-between', marginBottom: '60px' }}>
             <div>
               <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '15px' }}>{t('home.destinations.title')}</h2>
               <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>{t('home.destinations.desc')}</p>
             </div>
             <Link to="/search" className="btn-outline">{t('home.destinations.allBtn')}</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {destinations.map((item, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5, delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="hover-lift" 
                 style={{ background: 'white', borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
               >
                 <div style={{ height: '200px', position: 'relative' }}>
                   <img src={item.img} alt={item.country} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   <div style={{ position: 'absolute', top: '20px', left: '20px', background: 'rgba(255,255,255,0.95)', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                     <span>{item.flag}</span> {item.country}
                   </div>
                 </div>
                 <div style={{ padding: '30px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                     <h3 style={{ fontSize: '20px', fontWeight: '800' }}>{item.proc}</h3>
                     <span style={{ background: 'var(--accent-light)', color: 'var(--accent)', fontSize: '12px', fontWeight: '800', padding: '6px 12px', borderRadius: '100px' }}>{item.save}</span>
                   </div>
                   <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>{t('home.destinations.startPrice')}</p>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--border-light)', paddingTop: '20px' }}>
                     <span style={{ fontSize: '26px', fontWeight: '900', color: 'var(--primary)' }}>{item.price}</span>
                     <Link to="/search" style={{ fontSize: '14px', fontWeight: '800', color: 'var(--secondary)', display: 'flex', alignItems: 'center', gap: '5px' }}>{t('home.destinations.compare')} <ArrowRight size={16} /></Link>
                   </div>
                 </div>
               </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
