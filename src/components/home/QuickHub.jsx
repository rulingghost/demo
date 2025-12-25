import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Users, 
  GraduationCap, 
  ShieldCheck, 
  MessageSquare, 
  Star,
  ChevronRight
} from 'lucide-react';
import { motion } from 'framer-motion';

const QuickHub = () => {
  const hubs = [
    { title: 'Klinik Bul', icon: <Search size={22} />, path: '/search', color: '#3b82f6', desc: '1,500+ Kurum' },
    { title: 'Doktorlar', icon: <Users size={22} />, path: '/doctors', color: '#8b5cf6', desc: 'Sertifikalı Uzmanlar' },
    { title: 'Konsültasyon', icon: <MessageSquare size={22} />, path: '/second-opinion', color: '#06b6d4', desc: 'Online Görüşme' },
    { title: 'Akademi', icon: <GraduationCap size={22} />, path: '/courses', color: '#10b981', desc: 'Tıbbi Eğitimler' },
    { title: 'Güvenlik', icon: <ShieldCheck size={22} />, path: '/safety', color: '#f59e0b', desc: 'Hasta Hakları' },
    { title: 'Yorumlar', icon: <Star size={22} />, path: '/reviews', color: '#ef4444', desc: 'Gerçek Hikayeler' },
    { title: 'Sorular (SSS)', icon: <Search size={22} />, path: '/faq', color: '#64748b', desc: 'Merak Edilenler' },
    { title: 'Bize Ulaşın', icon: <Users size={22} />, path: '/contact', color: '#475569', desc: '7/24 Destek' },
  ];

  return (
    <section style={{ padding: '60px 0', background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'var(--secondary)', marginBottom: '12px' }}>
            Nereye Gitmek İstersiniz?
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
            Doctora platformundaki tüm hizmetlere hızlıca erişin.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
          gap: '20px' 
        }}>
          {hubs.map((hub, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={hub.path} style={{ textDecoration: 'none' }}>
                <div style={{
                  background: 'white',
                  padding: '24px',
                  borderRadius: '24px',
                  border: '1px solid #f1f5f9',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  gap: '12px',
                  transition: 'all 0.3s ease'
                }} className="card-hover">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: `${hub.color}10`,
                    color: hub.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {hub.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '16px', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>{hub.title}</h3>
                    <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{hub.desc}</p>
                  </div>
                  <div style={{ color: hub.color, display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700' }}>
                     Keşfet <ChevronRight size={14} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickHub;
