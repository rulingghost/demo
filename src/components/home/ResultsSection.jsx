import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PlayCircle, ArrowRight } from 'lucide-react';

const ResultsSection = () => {
  // Re-purposing Results Section to show "Success Stories" from doctors (Alumni)
  
  const stories = [
    { 
      doctor: 'Op. Dr. Mehmet Yılmaz', 
      course: 'Rhinoplasty Masterclass', 
      quote: "This course completely changed my surgical approach. The hands-on cadaver lab was invaluable.",
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400'
    },
    { 
      doctor: 'Dr. Sarah Johnson', 
      course: 'Dermal Fillers Advanced', 
      quote: "I doubled my patient retention after learning these safety protocols. Highly recommended!",
      image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400'
    },
    { 
      doctor: 'Dr. Ali Vural', 
      course: 'Hair Transplant Tech', 
      quote: "From theory to practice, everything was top notch. The facility is world-class.",
      image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400'
    }
  ];

  return (
    <section style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '900', color: '#0f172a', marginBottom: '16px' }}>Alumni Success Stories</h2>
          <p style={{ color: '#64748b', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
             Hear from medical professionals who have advanced their careers with our training programs.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {stories.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="hover-lift" 
              style={{ borderRadius: '32px', overflow: 'hidden', background: 'white', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}
            >
               <div style={{ height: '250px', position: 'relative' }}>
                  <img src={item.image} alt={item.doctor} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', color: 'white' }}>
                     <h3 style={{ fontSize: '20px', fontWeight: '700' }}>{item.doctor}</h3>
                     <div style={{ fontSize: '13px', opacity: 0.9 }}>Alumni - {item.course}</div>
                  </div>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, transition: '0.3s' }} className="play-btn">
                     <PlayCircle size={60} color="white" fill="rgba(255,255,255,0.2)" />
                  </div>
               </div>
               
               <div style={{ padding: '30px' }}>
                  <p style={{ color: '#475569', fontSize: '16px', fontStyle: 'italic', lineHeight: '1.6', marginBottom: '20px' }}>
                    "{item.quote}"
                  </p>
                  <Link to="/reviews" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
                     Watch Story <ArrowRight size={16} />
                  </Link>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
