import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, MapPin, Globe, Award, 
  CheckCircle, MessageCircle, ThumbsUp, ChevronRight, User, 
  ArrowRight, HeartPulse, Microscope, Camera, Building2, PlayCircle, GraduationCap, FileText, Video
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const DoctorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const { t } = useLanguage();

  const doctorsData = {
    'instructor-1': {
      id: 'instructor-1',
      name: "Kıdemli Akademi Eğitmeni",
      title: "Plastik Cerrah & Anatomi Uzmanı",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      clinic: "Doctora Academy",
      location: "İstanbul, Türkiye",
      rating: 5.0,
      reviews: 120,
      experience: "20+ Yıl",
      languages: ["Türkçe", "İngilizce"],
      specialties: ["Rinoplasti", "Yüz Anatomi", "Komplikasyon Yönetimi"],
      priceFrom: "€1,200",
      isInstructor: true,
      about: "Akademimizin kıdemli eğitmeni, 20 yılı aşkın cerrahi tecrübesi ve yüz anatomisi üzerine derinlemesine bilgi birikimiyle uluslararası düzeyde eğitimler vermektedir.",
      education: [
        { year: "2000 - 2005", degree: "Plastik Cerrahi Uzmanlığı", school: "Hacettepe Üniversitesi" }
      ],
      experience_timeline: [
        { year: "2015 - Günümüz", role: "Baş Eğitmen", place: "Doctora Academy" }
      ],
      achievements: [
        "Uluslararası Anatomi Eğitmeni",
        "Yılın Eğitmeni Ödülü"
      ],
      faq: [
        { q: "Eğitim dili nedir?", a: "Eğitimler hem Türkçe hem İngilizce verilmektedir." }
      ],
      gallery: [],
      clinic_images: [],
      professional_images: [],
      profile_photo: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      procedures: [
        { name: "Yüz Anatomisi Masterclass", price: "€1,200", time: "2 Gün" },
        { name: "Birebir Mentorluk", price: "€500", time: "1 Saat" }
      ]
    },
    'consultant-1': {
      id: 'consultant-1',
      name: "Medikal Direktör",
      title: "Medikal Onkolog & Tele-Tıp Lideri",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      clinic: "Online Konsültasyon",
      location: "Online",
      rating: 4.8,
      reviews: 210,
      experience: "12 Yıl",
      languages: ["Türkçe", "İngilizce", "Almanca"],
      specialties: ["Kanser Tedavisi", "İkinci Görüş", "Tedavi Planlama"],
      priceFrom: "€150",
      isInstructor: false,
      about: "Uluslararası hastalara online ikinci görüş ve tedavi planlama hizmeti sunan medikal direktörümüz.",
      education: [
         { year: "2010", degree: "Onkoloji Yan Dal", school: "Charité Berlin" }
      ],
      experience_timeline: [],
      achievements: ["Tele-Tıp İnovasyon Ödülü"],
      faq: [],
      gallery: [],
      clinic_images: [],
      procedures: [
        { name: "Online İkinci Görüş", price: "€150", time: "45 dk" },
        { name: "Konsey Raporu", price: "€400", time: "3 Gün" }
      ],
      profile_photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400"
    }
  };

  const doctor = doctorsData[id] || doctorsData['instructor-1']; 
  
  // Decide what tabs to show based on doctor type
  const tabs = ['overview'];
  if (doctor.isInstructor) tabs.push('courses', 'mentorship');
  else tabs.push('consultation');
  tabs.push('resume', 'reviews');

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '80px', paddingTop: '100px' }}>
      <SEO 
        title={`${doctor.name} | ${doctor.title}`}
        description={`Profile of ${doctor.name}.`}
        image={doctor.profile_photo || doctor.image}
      />
      
      {/* Hero Profile Header */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '40px' }}
        >
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <img 
              src={doctor.profile_photo || doctor.image} 
              alt={doctor.name} 
              style={{ width: '200px', height: '200px', borderRadius: '40px', objectFit: 'cover', border: '6px solid white', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }} 
            />
            {doctor.isInstructor && (
              <div style={{ position: 'absolute', bottom: '10px', right: '-10px', background: 'var(--primary)', color: 'white', padding: '8px 12px', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '800', border: '4px solid white' }}>
                <GraduationCap size={16} /> Eğitmen
              </div>
            )}
          </div>

          {/* Main Info */}
          <div style={{ padding: '10px 0' }}>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
               <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '11px', fontWeight: '800', padding: '6px 14px', borderRadius: '100px' }}>ONAYLI</span>
               <span style={{ background: '#fffbeb', color: '#b45309', fontSize: '11px', fontWeight: '800', padding: '6px 14px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Star size={12} fill="#b45309" /> 5.0
               </span>
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', marginBottom: '8px' }}>{doctor.name}</h1>
            <p style={{ fontSize: '18px', color: '#64748b', fontWeight: '500', marginBottom: '24px' }}>{doctor.title} @ <span style={{ color: 'var(--primary)' }}>{doctor.clinic}</span></p>
            
            <div style={{ display: 'flex', gap: '24px', color: '#64748b', fontSize: '14px', fontWeight: '500' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={18} /> {doctor.location}</div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Globe size={18} /> {doctor.languages.join(', ')}</div>
            </div>
          </div>

          {/* CTA Box */}
          <div style={{ minWidth: '240px', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
             {doctor.isInstructor ? (
                <>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Kursa Kaydol</button>
                  <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Müfredatı Gör</button>
                </>
             ) : (
                <>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Görüşme Planla</button>
                  <button className="btn-outline" style={{ width: '100%', justifyContent: 'center' }}>Mesaj Gönder</button>
                </>
             )}
          </div>
        </motion.div>
      </section>

      {/* Content Grid */}
      <section className="container">
         <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: '40px' }}>
            
            {/* Sidebar Tabs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
               {tabs.map(tab => {
                 let label = tab;
                 if(tab === 'overview') label = 'Genel Bakış';
                 if(tab === 'courses') label = 'Kurslar';
                 if(tab === 'mentorship') label = 'Mentorluk';
                 if(tab === 'consultation') label = 'Danışmanlık';
                 if(tab === 'resume') label = 'Özgeçmiş';
                 if(tab === 'reviews') label = 'Yorumlar';
                 
                 return (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    style={{
                       textAlign: 'left',
                       padding: '16px 20px',
                       borderRadius: '16px',
                       background: activeTab === tab ? 'white' : 'transparent',
                       color: activeTab === tab ? 'var(--primary)' : '#64748b',
                       fontWeight: activeTab === tab ? '800' : '600',
                       border: activeTab === tab ? '1px solid #e2e8f0' : 'none',
                       boxShadow: activeTab === tab ? '0 4px 12px rgba(0,0,0,0.03)' : 'none',
                       cursor: 'pointer',
                       display: 'flex',
                       alignItems: 'center',
                       gap: '12px',
                       textTransform: 'capitalize',
                       transition: 'all 0.2s'
                    }}
                  >
                     {tab === 'overview' && <User size={18} />}
                     {tab === 'courses' && <BookOpen size={18} />}
                     {tab === 'mentorship' && <GraduationCap size={18} />}
                     {tab === 'consultation' && <Video size={18} />}
                     {tab === 'resume' && <FileText size={18} />}
                     {tab === 'reviews' && <MessageCircle size={18} />}
                     {label}
                  </button>
                 );
               })}
            </div>

            {/* Main Content Area */}
            <div>
               {activeTab === 'overview' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass" style={{ padding: '40px', borderRadius: '32px' }}>
                     <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>Hakkında</h2>
                     <p style={{ lineHeight: '1.8', color: '#475569', fontSize: '16px' }}>{doctor.about}</p>
                     
                     <div style={{ marginTop: '40px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px' }}>Başarılar & Ödüller</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                           {doctor.achievements.map((ach, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                                 <Award size={20} color="#fbbf24" />
                                 <span style={{ fontSize: '14px', fontWeight: '600', color: '#334155' }}>{ach}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               )}

               {activeTab === 'courses' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass" style={{ padding: '40px', borderRadius: '32px' }}>
                     <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>Aktif Kurslar</h2>
                     <div style={{ display: 'grid', gap: '20px' }}>
                        <div style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div>
                              <div style={{ fontWeight: '800', fontSize: '18px', marginBottom: '4px' }}>Rinoplasti Masterclass</div>
                              <div style={{ color: '#64748b', fontSize: '14px' }}>Sonraki Grup: 15 Şub 2026 • 2 Gün Online</div>
                           </div>
                           <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Kayıt Ol €1,200</button>
                        </div>
                        <div style={{ padding: '24px', border: '1px solid #e2e8f0', borderRadius: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div>
                              <div style={{ fontWeight: '800', fontSize: '18px', marginBottom: '4px' }}>Yüz Anatomi Atölyesi</div>
                              <div style={{ color: '#64748b', fontSize: '14px' }}>İsteğe Bağlı Erişim • 6 Saat</div>
                           </div>
                           <button className="btn-outline" style={{ padding: '10px 20px', fontSize: '14px' }}>İncele €450</button>
                        </div>
                     </div>
                  </motion.div>
               )}
               
               {activeTab === 'consultation' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass" style={{ padding: '40px', borderRadius: '32px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '20px' }}>Danışmanlık Hizmetleri</h2>
                    <div style={{ display: 'grid', gap: '20px' }}>
                      {doctor.procedures.map((proc, i) => (
                        <div key={i} style={{ padding: '20px', background: '#f8fafc', borderRadius: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                           <div>
                              <div style={{ fontWeight: '800' }}>{proc.name}</div>
                              <div style={{ fontSize: '13px', color: '#64748b' }}>Süre: {proc.time}</div>
                           </div>
                           <button className="btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>Randevu {proc.price}</button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
               )}

            </div>
         </div>
      </section>

    </div>
  );
};

export default DoctorProfile;
