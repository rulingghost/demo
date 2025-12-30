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
import { useLocation, Link } from 'react-router-dom';

const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('q');
    if (q) {
      setSearchQuery(q);
    }
  }, [location.search]);

  const categories = ['Tümü', 'Estetik Cerrahi', 'Dolgu & Botoks', 'Saç Ekimi', 'Klinik Yönetimi'];

  const courses = [
    {
      id: 1,
      title: "Masterclass: İleri Seviye Rinoplasti & Hassas Şekillendirme",
      description: "Karmaşık burun deformiteleri, revizyon teknikleri ve yapısal koruma üzerine ustalık sınıfı.",
      category: "Estetik Cerrahi",
      level: "Master Seviyesi",
      startDate: "08 Şub 2026",
      price: "€2,450",
      duration: "3 Gün (Canlı Cerrahi)",
      seats: "15",
      tags: ["Canlı Cerrahi", "Revizyon", "Master Sertifika"]
    },
    {
      id: 2,
      title: "Fellowship: Yüz Enjeksiyonları ve İleri Anatomi",
      description: "Kadavra üzerinde anatomi eğitimi ve canlı model uygulamalarıyla 3 aylık yoğun fellowship programı.",
      category: "Dolgu & Botoks",
      level: "Fellowship",
      startDate: "01 Mar 2026",
      price: "€5,500",
      duration: "3 Ay",
      seats: "6",
      tags: ["Kadavra Eğitimi", "Hands-on", "Diploma"]
    },
    {
      id: 3,
      title: "Masterclass: Endoskopik Yüz Germe ve Gençleştirme",
      description: "Minimal invaziv derin plan yüz germe ve endoskopik kaş kaldırma teknikleri.",
      category: "Estetik Cerrahi",
      level: "İleri Seviye",
      startDate: "18 Oca 2026",
      price: "€3,200",
      duration: "2 Gün",
      seats: "10",
      tags: ["Derin Plan", "Endoskopi", "Video Kütüphanesi"]
    },
    {
      id: 4,
      title: "Sertifikasyon: Saç Ekimi ve Saç Sağlığı Yönetimi",
      description: "FUE, DHI teknikleri ve greft canlılığı üzerine kapsamlı uluslararası sertifika programı.",
      category: "Saç Ekimi",
      level: "Profesyonel",
      startDate: "22 Şub 2026",
      price: "€1,800",
      duration: "5 Gün",
      seats: "20",
      tags: ["FUE & DHI", "Greft Analizi", "ISO Sertifikası"]
    },
    {
      id: 5,
      title: "Masterclass: Meme Estetiğinde Kompozit Yaklaşımlar",
      description: "İmplant ve yağ transferi kombinasyonları (Hibrit) ile doğal sonuçlar elde etme sanatı.",
      category: "Estetik Cerrahi",
      level: "İleri Seviye",
      startDate: "05 Nis 2026",
      price: "€1,950",
      duration: "1 Gün",
      seats: "25",
      tags: ["Hibrit Teknikler", "Güvenlik", "Komplikasyon Yönetimi"]
    },
    {
      id: 6,
      title: "Güvenlik Sempozyumu: Estetik Tıpta Komplikasyon Yönetimi",
      description: "Vasküler oklüzyon, körlük riski ve acil durum protokolleri üzerine küresel konsensüs eğitimi.",
      category: "Güvenlik",
      level: "Zorunlu",
      startDate: "11 Oca 2026",
      price: "€450",
      duration: "1 Gün",
      seats: "100",
      tags: ["Acil Protokoller", "Vaka Analizi", "Yasal Koruma"]
    },
    {
      id: 7,
      title: "Workshop: Dudak ve Perioral Bölge Sanatı",
      description: "Rus tekniği, doğal kontur ve asimetri düzeltme üzerine uygulamalı atölye çalışması.",
      category: "Dolgu & Botoks",
      level: "Uygulamalı",
      startDate: "15 Şub 2026",
      price: "€850",
      duration: "1 Gün",
      seats: "12",
      tags: ["Rus Tekniği", "Kanül Kullanımı", "Sanatsal Yaklaşım"]
    },
    {
      id: 8,
      title: "Mini-MBA: Estetik Klinik Yönetimi ve Büyüme Stratejileri",
      description: "Klinik işletmeciliği, hasta deneyimi yönetimi ve küresel marka oluşturma eğitimi.",
      category: "Klinik Yönetimi",
      level: "Yönetici",
      startDate: "02 Şub 2026",
      price: "€1,200",
      duration: "4 Hafta (Online)",
      seats: "50",
      tags: ["Medical Marketing", "Finans", "Liderlik"]
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === 'Tümü' || course.category === activeCategory;
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
                Doctora Academy <span style={{ color: '#94a3b8', fontWeight: '400' }}>— Kurslar</span>
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
                {cat}
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
                <Link 
                  to={course.level === 'Fellowship' ? '/fellowship' : '/treatment/dermal-filler'}
                  style={{ 
                    flex: '1', 
                    padding: '12px', 
                    borderRadius: '12px', 
                    background: 'none', 
                    border: '1px solid #e2e8f0', 
                    fontSize: '14px', 
                    fontWeight: '700', 
                    color: '#475569',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    textAlign: 'center',
                    transition: 'background 0.2s'
                  }}>
                  {course.level === 'Fellowship' ? 'Program Detayı' : 'Müfredatı Gör'}
                </Link>
                <Link 
                  to={`/contact?type=enroll&course=${encodeURIComponent(course.title)}`}
                  className="btn-primary"
                  style={{ 
                    flex: '1.2', 
                    padding: '12px', 
                    borderRadius: '12px', 
                    fontSize: '14px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '8px',
                    textDecoration: 'none'
                  }}
                >
                  Kayıt Ol <ArrowRight size={16} />
                </Link>
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
