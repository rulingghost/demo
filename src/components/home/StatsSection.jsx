import React from 'react';
import { Building2, Users, Star, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  const statsData = t('home.stats') || [];
  
  const icons = [
    <Building2 className="text-blue-500" size={32} />,
    <Users className="text-emerald-500" size={32} />,
    <Star className="text-yellow-500" size={32} />,
    <Phone className="text-rose-500" size={32} />
  ];

  return (
    <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden', background: 'white' }}>
      <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0, 122, 255, 0.03) 0%, transparent 70%)', zIndex: -1 }}></div>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
          {statsData.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass hover-lift" 
              style={{ 
                padding: '40px 30px', 
                borderRadius: 'var(--radius-lg)', 
                textAlign: 'center',
                border: '1px solid white',
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '15px', background: 'var(--surface)', borderRadius: '20px' }}>
                  {icons[i] || icons[0]}
                </div>
              </div>
              <span style={{ display: 'block', fontSize: '42px', fontWeight: '900', color: 'var(--secondary)', marginBottom: '8px', letterSpacing: '-1px' }}>{stat.value}</span>
              <span style={{ color: 'var(--text-muted)', fontWeight: '700', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
