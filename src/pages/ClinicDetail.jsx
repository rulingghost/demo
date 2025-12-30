import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight, 
  Building2, 
  Globe, 
  Calendar, 
  Award,
  Video,
  MonitorPlay,
  Microscope,
  GraduationCap,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';

const ClinicDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('facility');

  const center = {
    name: "Istanbul Surgical Arts Center",
    location: "Nişantaşı, İstanbul",
    rating: 4.9,
    reviews: 85,
    established: "2015",
    type: "Advanced Training Facility",
    accreditations: ["CME Accredited", "ISAPS Certified Center", "Ministry of Health Approved"],
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
    ],
    faculty: [
      { name: "Op. Dr. Ömer Buhşem", role: "Head of Plastic Surgery", exp: "30+ Years", specialty: "Rhinoplasty Lead", img: "/src/assets/doctors/omer-buhsem/presentation.png" },
      { name: "Prof. Dr. Ayşe Yılmaz", role: "Clinical Director", exp: "25 Years", specialty: "Dermatology Lead", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200" }
    ],
    features: [
      { item: "Live Surgery Theaters", desc: "4K Broadcasting Capabilities" },
      { item: "Cadaver Lab", desc: "12 Stations for Hands-on Dissection" },
      { item: "Simulation Suite", desc: "VR/AR Enhanced Procedures" }
    ]
  };

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Header Info */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'white', background: 'var(--primary)', padding: '4px 12px', borderRadius: '100px' }}>EĞİTİM MERKEZİ</span>
                <span className="badge-verified" style={{ fontWeight: '700' }}><ShieldCheck size={14} /> {center.accreditations[0]}</span>
              </div>
              <h1 style={{ fontSize: '36px', marginBottom: '8px', fontWeight: '900' }}>{center.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)', fontSize: '15px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={18} /> {center.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={18} fill="#f59e0b" color="#f59e0b" /> {center.rating} ({center.reviews} Mezun Yorumu)</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={18} /> Est. {center.established}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '500' }}>Sonraki Kurs: 15 Şubat</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}><MessageCircle size={18} /> Bilgi Al</button>
                <button 
                  className="btn-primary" 
                  style={{ padding: '12px 32px' }}
                >
                  Takvimi Gör
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '40px' }}>
          
          {/* Main Content Area */}
          <div>
            {/* Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', height: '450px', marginBottom: '40px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
            >
              <img src={center.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Center Main" />
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '15px' }}>
                <img src={center.images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Lab View" />
                <div style={{ position: 'relative' }}>
                  <img src={center.images[2]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Lecture Hall" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '18px' }}>+8 Kampüs Fot.</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', gap: '40px', marginBottom: '40px', position: 'sticky', top: '100px', background: '#f8fafc', zIndex: 10, padding: '10px 0' }}>
              {['Facility', 'Faculty', 'Courses', 'Accommodation'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    borderBottom: activeTab === tab.toLowerCase() ? '3px solid var(--primary)' : '3px solid transparent',
                    padding: '10px 0',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: activeTab === tab.toLowerCase() ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content Sections */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: '800' }}>Eğitim Altyapısı</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Video size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Canlı Cerrahi</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>4K Yayın Sistemi</div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Microscope size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Kadavra Lab</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Birebir Uygulama</div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Users size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>Max 12 Kişi</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Butik Sınıflar</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                Doctora Akademi'nin ana eğitim üssü olan bu merkez, özellikle cerrahi branşlarda "hands-on" eğitimler için tasarlanmıştır. 
                Katılımcılar, teorik derslerin hemen ardından simülasyon laboratuvarlarında veya kadavra üzerinde pratik yapma imkanı bulurlar.
              </p>
            </motion.div>

            {/* Faculty Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: '800' }}>Akademik Kadro</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {center.faculty.map((doc, i) => (
                  <div key={i} className="glass hover-lift" style={{ display: 'flex', gap: '20px', padding: '24px', borderRadius: '24px', cursor: 'pointer' }}>
                    <img src={doc.img} alt={doc.name} style={{ width: '100px', height: '100px', borderRadius: '50px', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: '700' }}>{doc.name}</h4>
                      <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>{doc.role}</p>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} /> {doc.exp} Deneyim</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={14} /> {doc.specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Right Sidebar Sticky Info */}
          <aside>
            <div style={{ position: 'sticky', top: '100px' }}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass" 
                style={{ padding: '30px', borderRadius: '32px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--primary)' }}
              >
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '8px', fontWeight: '800' }}>Eğitim Partnerimiz Olun</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Kurumsal işbirlikleri ve grup eğitimleri için.</p>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', background: 'white', borderRadius: '12px', border: '1px solid var(--border)' }}>
                     <Building2 size={20} color="var(--primary)" />
                     <div>
                        <div style={{ fontWeight: '700', fontSize: '14px' }}>Kurumsal İletişim</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>partners@doctora.com</div>
                     </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '15px', background: 'white', borderRadius: '12px', border: '1px solid var(--border)' }}>
                     <MapPin size={20} color="var(--primary)" />
                     <div>
                        <div style={{ fontWeight: '700', fontSize: '14px' }}>Kampüs Ziyareti</div>
                        <div style={{ fontSize: '12px', color: '#64748b' }}>Randevu ile gezi düzenlenir</div>
                     </div>
                  </div>
                </div>

                <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                   <div style={{ fontSize: '14px', fontWeight: '800', marginBottom: '12px' }}>Tesis İmkanları:</div>
                   <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {['400 Kişilik Odtitoryum', 'Kütüphane', 'Kafeterya', 'Mescit', 'Ders Çalışma Alanları'].map(i => (
                         <span key={i} style={{ fontSize: '12px', background: '#f1f5f9', padding: '4px 8px', borderRadius: '6px', color: '#475569' }}>{i}</span>
                      ))}
                   </div>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;
