import React, { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Star, 
  Clock, 
  Users, 
  ArrowRight, 
  Search, 
  Filter,
  Calendar,
  Layers,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { motion } from 'framer-motion';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Plastic Surgery', 'Fillers & Botox', 'Hair Transplant', 'Clinic Ops'];

  const courses = [
    {
      id: 1,
      title: "Rhinoplasty Planning & Case Review",
      description: "Pre-op analysis, aesthetic goals, functional considerations, and outcome planning.",
      category: "Plastic Surgery",
      level: "Advanced",
      startDate: "Feb 08, 2026",
      price: "€249",
      duration: "6 hours (self-paced)",
      seats: "120",
      tags: ["Nasal analysis", "Aesthetic planning", "Complications"]
    },
    {
      id: 2,
      title: "Facelift Fundamentals & Complication Management",
      description: "Anatomy-focused planning, patient selection, and risk reduction strategies.",
      category: "Plastic Surgery",
      level: "Intermediate",
      startDate: "Mar 01, 2026",
      price: "€199",
      duration: "5 hours",
      seats: "90",
      tags: ["SMAS concepts", "Patient selection", "Safety"]
    },
    {
      id: 3,
      title: "Breast Aesthetics: Planning, Sizing & Follow-up",
      description: "Case selection, implant sizing logic, post-op follow-up, and complication pathways.",
      category: "Plastic Surgery",
      level: "Intermediate",
      startDate: "Jan 18, 2026",
      price: "€179",
      duration: "4.5 hours",
      seats: "80",
      tags: ["Sizing", "Aftercare", "Capsular contracture"]
    },
    {
      id: 4,
      title: "Liposuction & Body Contouring: Case Selection",
      description: "Planning, safety, expectations, and post-op monitoring (case-based).",
      category: "Plastic Surgery",
      level: "Beginner",
      startDate: "Feb 22, 2026",
      price: "€149",
      duration: "4 hours",
      seats: "140",
      tags: ["Patient selection", "Safety checklist", "Aftercare"]
    },
    {
      id: 5,
      title: "Blepharoplasty: Pre-op Assessment & Outcomes",
      description: "Assessment framework, expected outcomes, and common pitfalls.",
      category: "Plastic Surgery",
      level: "Beginner",
      startDate: "Apr 05, 2026",
      price: "€129",
      duration: "3.5 hours",
      seats: "110",
      tags: ["Assessment", "Risks", "Follow-up"]
    },
    {
      id: 6,
      title: "Complications in Aesthetic Surgery: Early Recognition",
      description: "Red flags, escalation pathways, and structured documentation.",
      category: "Safety",
      level: "Essential",
      startDate: "Jan 11, 2026",
      price: "€99",
      duration: "3 hours",
      seats: "200",
      tags: ["Infection", "Hematoma", "Documentation"]
    },
    {
      id: 7,
      title: "Botulinum Toxin: Patient Selection & Aftercare",
      description: "Assessment, consent, expectations, and post-treatment care (theory-based).",
      category: "Fillers & Botox",
      level: "Injectables",
      startDate: "Feb 15, 2026",
      price: "€119",
      duration: "3.5 hours",
      seats: "160",
      tags: ["Consent", "Aftercare", "Adverse events"]
    },
    {
      id: 8,
      title: "Dermal Fillers: Anatomy, Safety & Complication Response",
      description: "Risk zones, safety protocols, and complication pathways (case-based).",
      category: "Fillers & Botox",
      level: "Injectables",
      startDate: "Mar 16, 2026",
      price: "€149",
      duration: "4 hours",
      seats: "140",
      tags: ["Anatomy", "Safety", "Complications"]
    },
    {
      id: 9,
      title: "Hair Transplant Foundations: Assessment & Patient Journey",
      description: "Patient evaluation, planning logic, and post-procedure aftercare pathway.",
      category: "Hair Transplant",
      level: "Beginner",
      startDate: "Jan 25, 2026",
      price: "€129",
      duration: "4 hours",
      seats: "180",
      tags: ["Assessment", "Planning", "Aftercare"]
    },
    {
      id: 10,
      title: "Hair Transplant Complications: Prevention & Follow-up",
      description: "Common issues, early recognition, and structured patient communication.",
      category: "Hair Transplant",
      level: "Intermediate",
      startDate: "Apr 19, 2026",
      price: "€119",
      duration: "3.5 hours",
      seats: "120",
      tags: ["Risk reduction", "Follow-up", "Documentation"]
    },
    {
      id: 11,
      title: "International Patient Workflow: Intake -> Consult -> Aftercare",
      description: "CRM-style pipeline, messaging templates, consent flow, and follow-up cadence.",
      category: "Clinic Ops",
      level: "Clinic Ops",
      startDate: "Feb 02, 2026",
      price: "€89",
      duration: "2.5 hours",
      seats: "240",
      tags: ["CRM pipeline", "Scripts", "Coordination"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'All' || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ paddingTop: '140px', paddingBottom: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        {/* Header Section */}
        <header style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '30px' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '800', fontSize: '24px', marginBottom: '16px' }}
              >
                Sarfea Academy <span style={{ color: '#94a3b8', fontWeight: '400' }}>— Kurslar</span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                style={{ fontSize: '16px', color: '#64748b', maxWidth: '600px', lineHeight: '1.6' }}
              >
                Uluslararası tıbbi uygulama iş akışları için yapılandırılmış, vaka odaklı öğrenme. Kurslarımız teori, planlama, güvenlik ve komplikasyon yönetimine odaklanır.
              </motion.p>
            </div>
            
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <div style={{ 
                background: '#f0fdf4', 
                border: '1px solid #dcfce7', 
                padding: '12px 20px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }}></div>
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#15803d' }}>18 Yaklaşan Kurs</span>
              </div>
              <div style={{ 
                background: '#fffbeb', 
                border: '1px solid #fef3c7', 
                padding: '12px 20px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <Star size={16} fill="#f59e0b" color="#f59e0b" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#b45309' }}>4.8/5 Memnuniyet</span>
              </div>
              <div style={{ 
                background: '#eff6ff', 
                border: '1px solid #dbeafe', 
                padding: '12px 20px', 
                borderRadius: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '10px' 
              }}>
                <Users size={16} color="#3b82f6" />
                <span style={{ fontSize: '14px', fontWeight: '700', color: '#1d4ed8' }}>2,450+ Kayıt</span>
              </div>
            </div>
          </div>
        </header>

        {/* Filters and Search */}
        <div style={{ marginBottom: '40px', display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '10px 22px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: '700',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--primary)' : '#e2e8f0',
                  background: activeCategory === cat ? 'var(--primary)' : 'white',
                  color: activeCategory === cat ? 'white' : '#64748b',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
              >
                {cat === 'All' ? 'Tümü' : cat}
              </button>
            ))}
          </div>
          
          <div style={{ position: 'relative', flex: '1', maxWidth: '400px', minWidth: '280px' }}>
            <Search style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} size={18} />
            <input 
              type="text" 
              placeholder="Kurs ara (örn: rinoplasti, komplikasyonlar...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 15px 12px 45px',
                borderRadius: '15px',
                border: '1px solid #e2e8f0',
                fontSize: '14px',
                outline: 'none',
                transition: 'border-color 0.2s'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
              onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '30px' }}>
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid #eef2f6',
                boxShadow: '0 10px 30px -15px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ fontSize: '19px', fontWeight: '800', color: '#0f172a', lineHeight: '1.4', flex: '1' }}>
                  {course.title}
                </h3>
                <span style={{ 
                  padding: '5px 12px', 
                  background: '#f1f5f9', 
                  borderRadius: '100px', 
                  fontSize: '11px', 
                  fontWeight: '700', 
                  color: '#475569',
                  whiteSpace: 'nowrap',
                  marginLeft: '15px'
                }}>
                  {course.category} • {course.level}
                </span>
              </div>
              
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                {course.description}
              </p>

              {/* Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>BAŞLANGIÇ TARİHİ</div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#1e293b' }}>{course.startDate}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>ÜCRET</div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: 'var(--primary)' }}>{course.price}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>SÜRE</div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#1e293b' }}>{course.duration}</div>
                </div>
                <div style={{ background: '#f8fafc', padding: '15px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', marginBottom: '4px' }}>KONTENJAN</div>
                  <div style={{ fontSize: '14px', fontWeight: '800', color: '#1e293b' }}>{course.seats} Koltuk</div>
                </div>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {course.tags.map(tag => (
                  <span key={tag} style={{ 
                    padding: '4px 10px', 
                    background: '#f1f5f9', 
                    borderRadius: '8px', 
                    fontSize: '12px', 
                    color: '#64748b',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '12px', marginTop: 'auto', paddingTop: '10px' }}>
                <button style={{ 
                  flex: '1', 
                  padding: '12px', 
                  borderRadius: '12px', 
                  background: 'none', 
                  border: '1px solid #e2e8f0', 
                  fontSize: '14px', 
                  fontWeight: '700', 
                  color: '#475569',
                  cursor: 'pointer',
                  transition: 'background 0.2s'
                }}>
                  Müfredatı Gör
                </button>
                <button 
                  className="btn-primary"
                  style={{ 
                    flex: '1.2', 
                    padding: '12px', 
                    borderRadius: '12px', 
                    fontSize: '14px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px' 
                  }}
                >
                  Kayıt Ol <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <div style={{ marginBottom: '20px', color: '#cbd5e1' }}><Search size={64} /></div>
            <h3 style={{ fontSize: '20px', color: '#64748b', fontWeight: '700' }}>Aradığınız kriterlere uygun kurs bulunamadı.</h3>
            <p style={{ color: '#94a3b8' }}>Lütfen farklı bir kategori veya arama terimi deneyin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
