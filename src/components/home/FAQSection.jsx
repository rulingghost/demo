import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const FAQSection = () => {
  const { t } = useLanguage();
  const faqData = t('home.faq') || { items: [] };

  return (
    <section style={{ padding: '100px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '80px' }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '24px', lineHeight: 1.1 }}>{faqData.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '40px', lineHeight: '1.6' }}>
              {faqData.desc}
            </p>
            <Link to="/faq" className="btn-primary" style={{ padding: '16px 32px' }}>{faqData.viewAll}</Link>
          </div>
          
          <div style={{ display: 'grid', gap: '24px' }}>
            {faqData.items && faqData.items.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="hover-lift" 
                style={{ padding: '30px', borderRadius: '30px', background: 'var(--surface)', border: '1px solid var(--border-light)' }}
              >
                <h4 style={{ fontSize: '20px', marginBottom: '12px', fontWeight: '800', color: 'var(--secondary)' }}>{item.q}</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '16px', lineHeight: '1.6' }}>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
