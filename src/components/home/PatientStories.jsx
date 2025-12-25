import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Video } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const PatientStories = () => {
  const { t } = useLanguage();
  const stories = t('home.stories') || { items: [] };

  const storyImages = [
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=500',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500'
  ];

  return (
    <section style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div style={{ textAlign: 'left' }}>
            <h2 className="text-gradient" style={{ fontSize: '42px', marginBottom: '20px', fontWeight: '900' }}>{stories.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '600px' }}>{stories.desc}</p>
          </div>
          <Link to="/reviews" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {stories.readAll} <ArrowRight size={18} />
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {stories.items && stories.items.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="hover-lift" 
              style={{ position: 'relative', height: '450px', borderRadius: '40px', overflow: 'hidden', cursor: 'pointer', boxShadow: 'var(--shadow-lg)' }}
            >
              <img src={storyImages[i]} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, transparent 60%)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }}>
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.3 + (i * 0.1), type: "spring" }}
                  style={{ width: '64px', height: '64px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px', boxShadow: '0 0 20px rgba(0, 122, 255, 0.5)' }}
                >
                  <Video size={28} fill="white" />
                </motion.div>
                <h3 style={{ color: 'white', fontSize: '28px', marginBottom: '10px', fontWeight: '800' }}>{item.title}</h3>
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px', fontWeight: '600' }}>{item.name}</span>
                  <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '6px 14px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', border: '1px solid rgba(16, 185, 129, 0.3)' }}>{item.savings}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientStories;
