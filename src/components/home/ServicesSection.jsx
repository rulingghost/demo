import React from 'react';
import { Users, Video, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const ServicesSection = () => {
  const { t } = useLanguage();
  const servicesData = t('home.services.items') || [];

  const icons = [
    <Users color="var(--primary)" size={32} />,
    <Video color="var(--accent)" size={32} />,
    <ShieldCheck color="#f97316" size={32} />
  ];

  const bgs = [
    "var(--primary-light)",
    "var(--accent-light)",
    "#fff7ed"
  ];

  return (
    <section style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="section-title">{t('home.services.title')}</h2>
          <p className="section-subtitle">{t('home.services.subtitle')}</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {servicesData.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="glass hover-lift" 
              style={{ padding: '50px 40px', borderRadius: '40px', border: '1px solid var(--border-light)' }}
            >
              <div style={{ width: '70px', height: '70px', background: bgs[i], borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '30px' }}>
                {icons[i] || icons[0]}
              </div>
              <h3 style={{ marginBottom: '15px', fontWeight: '800' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.6' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
