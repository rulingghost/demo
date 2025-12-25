import React from 'react';
import { MessageCircle, CheckCircle, Star, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();
  const processData = t('home.process') || [];

  const icons = [
    <MessageCircle size={28} color="white" />,
    <CheckCircle size={28} color="white" />,
    <Star size={28} color="white" />,
    <Building2 size={28} color="white" />
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--surface)' }}>
      <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', position: 'relative' }}>
            {processData.map((step, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass hover-lift" 
                style={{ position: 'relative', padding: '40px', borderRadius: '32px', textAlign: 'center' }}
              >
                <div style={{ 
                  width: '70px', 
                  height: '70px', 
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)', 
                  borderRadius: '20px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px',
                  boxShadow: 'var(--shadow-lg)'
                }}>
                  {icons[i] || icons[0]}
                </div>
                <div style={{ fontSize: '64px', fontWeight: '950', color: 'rgba(0,0,0,0.03)', position: 'absolute', top: '10px', right: '20px', zIndex: -1 }}>
                  0{i + 1}
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '12px', fontWeight: '800' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default ProcessSection;
