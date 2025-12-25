import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const Newsletter = () => {
  const { t } = useLanguage();
  const news = t('home.newsletter') || {};

  return (
    <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, var(--secondary) 0%, #000 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'url("https://www.transparenttextures.com/patterns/cubes.png")', opacity: 0.05 }}></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
         >
           <h2 style={{ fontSize: '42px', marginBottom: '20px', color: 'white', fontWeight: '900' }}>{news.title}</h2>
           <p style={{ fontSize: '18px', opacity: 0.8, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
             {news.desc}
           </p>
         </motion.div>
         <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.6, delay: 0.3 }}
           viewport={{ once: true }}
           style={{ display: 'flex', gap: '15px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}
         >
          <input 
            type="email" 
            placeholder={news.placeholder} 
            style={{ flex: 1, padding: '18px 28px', borderRadius: '100px', border: 'none', outline: 'none', fontSize: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }} 
          />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: '18px 36px', borderRadius: '100px', background: 'var(--primary)', color: 'white', border: 'none', fontWeight: '800', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 10px 30px rgba(0, 122, 255, 0.4)' }}
          >
             {news.subscribe}
          </motion.button>
         </motion.div>
         <motion.p 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           transition={{ delay: 0.6 }}
           style={{ fontSize: '13px', opacity: 0.6, marginTop: '24px' }}
         >
           {news.note}
         </motion.p>
      </div>
    </section>
  );
};

export default Newsletter;
