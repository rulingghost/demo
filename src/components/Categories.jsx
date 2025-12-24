import React from 'react';
import { Microscope, Activity, Stethoscope, Scissors, ArrowUpRight, HeartPulse, Brain, Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { 
    id: 1, 
    name: 'Dental Treatment', 
    count: '250+ Clinics', 
    icon: <Stethoscope size={28} />, 
    color: '#0ea5e9', 
    bg: '#e0f2fe', 
    path: '/search',
    subSpecialties: ['Dental Implants', 'Veneers', 'Hollywood Smile', 'Crowns', 'All-on-4', 'Root Canal']
  },
  { 
    id: 2, 
    name: 'Plastic Surgery', 
    count: '180+ Clinics', 
    icon: <Scissors size={28} />, 
    color: '#ec4899', 
    bg: '#fce7f3', 
    path: '/search',
    subSpecialties: ['Rhinoplasty', 'Hair Transplant', 'Breast Lift', 'Liposuction', 'Tummy Tuck', 'Facelift']
  },
  { 
    id: 3, 
    name: 'Oncology', 
    count: '90+ Clinics', 
    icon: <Microscope size={28} />, 
    color: '#6366f1', 
    bg: '#e0e7ff', 
    path: '/search',
    subSpecialties: ['Breast Cancer', 'Prostate Cancer', 'Lung Cancer', 'Chemotherapy', 'Immunotherapy', 'Stomach Cancer']
  },
  { 
    id: 4, 
    name: 'Neurology', 
    count: '50+ Clinics', 
    icon: <Brain size={28} />, 
    color: '#8b5cf6', 
    bg: '#ede9fe', 
    path: '/search',
    subSpecialties: ['Epilepsy', 'Parkinson\'s', 'Multiple Sclerosis', 'Alzheimer\'s', 'Disc Herniation', 'Stroke Rehab']
  },
];

const Categories = () => {
  return (
    <section style={{ padding: '100px 0', background: 'white', position: 'relative', overflow: 'hidden' }}>
      
      {/* Background Decor */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(circle at 70% 50%, #f0f9ff 0%, transparent 70%)', zIndex: 0 }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '20px' }}>
            Browse by <span style={{ color: 'var(--primary)', position: 'relative' }}>Specialty
              <svg width="100%" height="8" viewBox="0 0 100 8" preserveAspectRatio="none" style={{ position: 'absolute', bottom: '-4px', left: 0, zIndex: -1 }}>
                 <path d="M0 4 C 30 8, 70 8, 100 4" stroke="#bfdbfe" strokeWidth="8" fill="none" opacity="0.6" />
              </svg>
            </span>
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            We work with the world's leading centers of excellence. Choose a category to find the best specialists.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '30px' }}>
          {categories.map((cat, i) => (
            <div 
              key={cat.id} 
              className="category-card"
              style={{
                textDecoration: 'none',
                background: 'white',
                borderRadius: '32px',
                padding: '40px',
                border: '1px solid var(--border)',
                transition: 'all 0.4s ease',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px -10px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.borderColor = cat.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.borderColor = 'var(--border)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: cat.bg, color: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>{cat.name}</h3>
                    <p style={{ color: '#64748b', fontSize: '14px', fontWeight: '500' }}>{cat.count}</p>
                  </div>
                </div>
                <Link to={cat.path} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: cat.color, fontWeight: '700', fontSize: '14px', textDecoration: 'none' }}>
                  View all <ArrowUpRight size={18} />
                </Link>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px 30px' }}>
                {cat.subSpecialties.map((sub, idx) => (
                  <Link 
                    to={`/treatment/${sub.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '')}`} 
                    key={idx} 
                    style={{ color: '#475569', fontSize: '15px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', borderBottom: '1px dashed #f1f5f9' }} 
                    className="hover:text-blue-600"
                  >
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#cbd5e1' }}></span>
                    {sub}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
