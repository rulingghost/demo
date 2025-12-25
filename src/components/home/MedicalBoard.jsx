import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const MedicalBoard = () => {
  const { t } = useLanguage();
  const board = t('home.medicalBoard') || { roles: {}, experts: {} };

  const doctors = [
    { 
      name: 'Op. Dr. Ömer Buhşem', 
      role: board.roles.director, 
      expert: board.experts.plastic, 
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300' 
    },
    { 
      name: 'Dr. Ergin Er', 
      role: board.roles.director, 
      expert: board.experts.plastic, 
      image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300' 
    },
    { 
      name: 'Dr. Sarah Wilson', 
      role: board.roles.advisor, 
      expert: board.experts.ivf, 
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300' 
    },
    { 
      name: 'Dr. Mark Thompson', 
      role: board.roles.quality, 
      expert: board.experts.oncology, 
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300' 
    }
  ];

  return (
    <section style={{ background: 'white', padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '20px' }}>{board.title}</h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', fontSize: '18px' }}>
            {board.desc}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          {doctors.map((doc, i) => {
            // Map doctor names to their IDs
            const doctorIds = {
              'Op. Dr. Ömer Buhşem': 'omer-buhsem',
              'Dr. Ergin Er': 'tarik-akar',
              'Dr. Sarah Wilson': 'bulent-cihantimur',
              'Dr. Mark Thompson': 'tarik-akar'
            };
            
            return (
              <Link 
                key={i}
                to={`/doctor/${doctorIds[doc.name] || 'omer-buhsem'}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass hover-lift" 
                  style={{ padding: '50px 30px', textAlign: 'center', borderRadius: '40px', border: '1px solid var(--border-light)', cursor: 'pointer' }}
                >
                  <div style={{ position: 'relative', display: 'inline-block', marginBottom: '25px' }}>
                    <img src={doc.image} alt={doc.name} style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', border: '5px solid white', boxShadow: 'var(--shadow-md)' }} />
                    <div style={{ position: 'absolute', bottom: '5px', right: '5px', background: 'var(--accent)', width: '25px', height: '25px', borderRadius: '50%', border: '3px solid white' }}></div>
                  </div>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px', fontWeight: '800' }}>{doc.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '14px', marginBottom: '15px', textTransform: 'uppercase' }}>{doc.role}</p>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', background: 'var(--surface)', padding: '8px 20px', borderRadius: '100px', display: 'inline-block', fontWeight: '700' }}>
                     {doc.expert}
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MedicalBoard;
