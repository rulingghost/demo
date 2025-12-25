import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const SafetySection = () => {
    const { t } = useLanguage();
    const safety = t('home.safety') || { steps: [] };

  return (
    <section style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '24px' }}>{safety.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '40px', lineHeight: '1.6' }}>
              {safety.desc}
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {safety.steps && safety.steps.map((item, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   transition={{ duration: 0.5, delay: i * 0.2 }}
                   viewport={{ once: true }}
                   style={{ display: 'flex', gap: '25px' }}
                 >
                   <div style={{ width: '60px', height: '60px', borderRadius: '20px', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '900', color: 'var(--primary)', flexShrink: 0 }}>
                     0{i + 1}
                   </div>
                   <div>
                     <h4 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '8px' }}>{item.title}</h4>
                     <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item.desc}</p>
                   </div>
                 </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: 'spring' }}
            viewport={{ once: true }}
            className="glass-premium" 
            style={{ padding: '50px', borderRadius: '40px', textAlign: 'center', position: 'relative' }}
          >
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              style={{ position: 'absolute', top: -25, right: -25, background: 'var(--accent)', color: 'white', padding: '12px 24px', borderRadius: '100px', fontWeight: '800', transform: 'rotate(10deg)', boxShadow: '0 10px 20px rgba(16, 185, 129, 0.4)' }}
            >
              {safety.badge}
            </motion.div>
            <ShieldCheck size={100} color="var(--primary)" style={{ opacity: 0.1, margin: '0 auto 30px' }} />
            <h3 style={{ fontSize: '28px', marginBottom: '20px', fontWeight: '900' }}>{safety.guaranteeTitle}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '16px', lineHeight: '1.6' }}>
              {safety.guaranteeDesc}
            </p>
            <button className="btn-outline" style={{ padding: '16px 32px', background: 'white' }}>{safety.readPolicy}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetySection;
