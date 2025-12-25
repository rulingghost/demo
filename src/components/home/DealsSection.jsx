import React from 'react';
import { MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const DealsSection = () => {
    const { t } = useLanguage();
    const deals = t('home.deals') || { items: [] };

    const dealImages = [
        'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
        'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600'
    ];

    const prices = [
        { price: '€1,790', oldPrice: '€2,500' },
        { price: '€3,200', oldPrice: '€4,500' },
        { price: '€2,600', oldPrice: '€3,200' }
    ];

  return (
    <section style={{ padding: '100px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{ display: 'inline-block', background: '#fef2f2', color: '#ef4444', fontWeight: '800', padding: '8px 16px', borderRadius: '100px', fontSize: '12px', marginBottom: '16px', letterSpacing: '0.05em' }}>
            {deals.badge}
          </div>
          <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '16px' }}>{deals.title}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>{deals.desc}</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {deals.items && deals.items.map((deal, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="hover-lift" 
              style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid white', background: 'white', position: 'relative', boxShadow: 'var(--shadow-lg)' }}
            >
              <div style={{ position: 'relative', height: '240px' }}>
                <img src={dealImages[i]} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5 + (i * 0.1), type: 'spring' }}
                  style={{ position: 'absolute', top: '20px', right: '20px', background: '#ef4444', color: 'white', fontWeight: '800', padding: '8px 16px', borderRadius: '12px', fontSize: '14px', boxShadow: '0 5px 15px rgba(239, 68, 68, 0.4)' }}
                >
                  {deals.discount}
                </motion.div>
              </div>
              <div style={{ padding: '30px' }}>
                <h3 style={{ fontSize: '22px', marginBottom: '8px', fontWeight: '800' }}>{deal.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={16} color="var(--primary)" /> {deal.loc}
                </p>
                
                <div style={{ marginBottom: '30px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {deal.includes.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: 'var(--secondary)' }}>
                      <CheckCircle size={18} color="var(--accent)" /> {item}
                    </div>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                   <div>
                     <span style={{ textDecoration: 'line-through', color: 'var(--text-light)', fontSize: '15px', display: 'block', fontWeight: '600' }}>{prices[i].oldPrice}</span>
                     <span style={{ fontSize: '28px', fontWeight: '900', color: '#ef4444' }}>{prices[i].price}</span>
                   </div>
                   <button className="btn-primary" style={{ padding: '14px 28px', fontSize: '14px' }}>{deals.grabDeal}</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
