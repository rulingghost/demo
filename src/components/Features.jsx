import React from 'react';
import { UserCheck, FileText, Zap, Headphones, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { 
    title: 'Free Support', 
    desc: 'Our medical coordinators help you for free at every stage of your trip.',
    icon: <Zap size={32} />,
    link: '/how-it-works'
  },
  { 
    title: 'Expert Selection', 
    desc: 'We select the best clinics based on strict quality and safety criteria.',
    icon: <UserCheck size={32} />,
    link: '/safety'
  },
  { 
    title: 'Document Help', 
    desc: 'We assist with translations, invitations, and all necessary medical papers.',
    icon: <FileText size={32} />,
    link: '/how-it-works'
  },
  { 
    title: '24/7 Assistance', 
    desc: 'Always feel safe with our round-the-clock patient coordination service.',
    icon: <Headphones size={32} />,
    link: '/contact'
  }
];

const Features = () => {
  return (
    <section className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div className="section-header">
          <h2>The Sarfea Advantage</h2>
          <p>We make international medical care as safe and comfortable as being at home.</p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
          {features.map((f, i) => (
            <div key={i} className="glass card-hover" style={{ textAlign: 'center', padding: '40px', borderRadius: '24px' }}>
              <div style={{ 
                color: 'var(--primary)', 
                marginBottom: '20px',
                display: 'inline-block'
              }}>
                {f.icon}
              </div>
              <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{f.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px', marginBottom: '24px' }}>{f.desc}</p>
              <Link to={f.link} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '14px', color: 'var(--primary)', fontWeight: '700' }}>
                Learn More <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
