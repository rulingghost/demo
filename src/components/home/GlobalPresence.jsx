import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const GlobalPresence = () => {
    const { t } = useLanguage();
    const presence = t('home.globalPresence') || {};

  return (
    <section style={{ background: 'var(--secondary)', padding: '100px 0', color: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{ fontSize: '42px', color: 'white', marginBottom: '28px', fontWeight: '900' }}>{presence.title}</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '18px', marginBottom: '40px', lineHeight: '1.6' }}>
              {presence.desc}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '35px' }}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 style={{ color: 'white', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontWeight: '800' }}>
                  <Award size={24} color="var(--primary)" /> {presence.topClinics}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.5' }}>{presence.topClinicsDesc}</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 style={{ color: 'white', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '18px', fontWeight: '800' }}>
                  <ShieldCheck size={24} color="var(--primary)" /> {presence.patientProtection}
                </h4>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '15px', lineHeight: '1.5' }}>{presence.patientProtectionDesc}</p>
              </motion.div>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary" 
              style={{ marginTop: '50px', padding: '18px 36px', border: 'none' }}
              onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}
            >
              {presence.cta}
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
             <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Global Team" 
              style={{ width: '100%', borderRadius: '40px', boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
