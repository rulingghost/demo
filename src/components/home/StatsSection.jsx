import React from 'react';
import { BookOpen, Users, Video, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const StatsSection = () => {
  const { t } = useLanguage();
  // We can override statsData to be more "Academy" focused if translations aren't updated yet
  
  const stats = [
    { value: "50+", label: "Masterclass Courses", icon: <BookOpen size={32} color="#3b82f6" />, bg: "rgba(59, 130, 246, 0.1)" },
    { value: "12k+", label: "Happy Graduates", icon: <Users size={32} color="#10b981" />, bg: "rgba(16, 185, 129, 0.1)" },
    { value: "4.9", label: "Average Rating", icon: <Video size={32} color="#f59e0b" />, bg: "rgba(245, 158, 11, 0.1)" },
    { value: "150+", label: "Expert Instructors", icon: <GraduationCap size={32} color="#ef4444" />, bg: "rgba(239, 68, 68, 0.1)" }
  ];

  return (
    <section style={{ position: 'relative', padding: '80px 0', background: '#0f172a', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              style={{ 
                padding: '30px', 
                borderRadius: '24px', 
                textAlign: 'center',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.05)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                <div style={{ padding: '16px', background: stat.bg, borderRadius: '18px' }}>
                  {stat.icon}
                </div>
              </div>
              <span style={{ display: 'block', fontSize: '42px', fontWeight: '900', color: 'white', marginBottom: '8px', letterSpacing: '-1px' }}>{stat.value}</span>
              <span style={{ color: '#94a3b8', fontWeight: '600', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
