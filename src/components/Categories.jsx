import React from 'react';
import { Microscope, Activity, Stethoscope, Scissors, ArrowUpRight, BookOpen, User, GraduationCap, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    { name: "Surgical Mastery", count: "12 Courses", icon: <Scissors size={24} />, color: "#ef4444", subs: ["Rhinoplasty", "Breast Augmentation", "Liposuction"] },
    { name: "Dermatology & Aesthetics", count: "8 Courses", icon: <Microscope size={24} />, color: "#8b5cf6", subs: ["Botox & Fillers", "Laser Treatments", "Skin Care"] },
    { name: "Clinical Practice", count: "15 Courses", icon: <Stethoscope size={24} />, color: "#3b82f6", subs: ["Patient Management", "Diagnosis", "Emergency Care"] },
    { name: "Health Management", count: "6 Courses", icon: <BookOpen size={24} />, color: "#10b981", subs: ["Clinic Marketing", "Medical Law", "Leadership"] }
  ];

  return (
    <section style={{ padding: '100px 0', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
             <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', marginBottom: '16px' }}>Explore Top Categories</h2>
             <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px' }}>Choose from a wide range of specialized medical courses designed for professionals.</p>
          </div>
          <Link to="/courses" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             View All Categories <ArrowUpRight size={18} />
          </Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px' }}>
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className="hover-lift"
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: `${cat.color}15`, color: cat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>{cat.name}</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '24px' }}>{cat.count}</p>
              
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                 {cat.subs.map((sub, j) => (
                    <div key={j} style={{ fontSize: '14px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: j < cat.subs.length -1 ? '1px dashed #f1f5f9' : 'none' }}>
                       <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#cbd5e1' }}></div>
                       {sub}
                    </div>
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
