import React from 'react';
import { Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const CareTeam = () => {
    const { t } = useLanguage();
    const team = t('home.careTeam') || { items: [] };

  return (
    <section style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-light)', color: 'var(--primary)', padding: '8px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: '800', marginBottom: '24px' }}>
              <Users size={16} /> {team.badge}
            </div>
            <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '24px', lineHeight: 1.1 }}>{team.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
              {team.desc}
            </p>
            <ul style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
              {team.items && team.items.map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px', color: 'var(--secondary)', fontWeight: '600' }}>
                   <CheckCircle size={22} color="var(--accent)" /> {item}
                </li>
              ))}
            </ul>
            <button className="btn-primary" style={{ padding: '18px 36px', fontSize: '16px' }}>{team.cta}</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '25px' }}>
             {
               [{ name: "Sarah M.", lang: "English, German", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
               { name: "Ahmed K.", lang: "Arabic, French", img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=300" },
               { name: "Elena R.", lang: "Russian, English", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
               { name: "Dr. Chen", lang: "Chinese, English", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300" }
             ].map((person, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: i * 0.15 }}
                 viewport={{ once: true }}
                 className="glass hover-lift" 
                 style={{ padding: '25px', borderRadius: '32px', textAlign: 'center', marginTop: i % 2 !== 0 ? '50px' : '0' }}
               >
                 <img src={person.img} style={{ width: '90px', height: '90px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px', border: '3px solid white', boxShadow: 'var(--shadow-md)' }} alt={person.name} />
                 <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '4px' }}>{person.name}</h4>
                 <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{person.lang}</p>
               </motion.div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareTeam;
