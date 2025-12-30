import React, { useState } from 'react';
import { 
  ClipboardList, 
  Video, 
  CreditCard, 
  FileCheck, 
  GraduationCap,
  Stethoscope,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const HowItWorks = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('doctor'); // 'doctor' or 'patient'

  const doctorSteps = [
    {
      title: "Kurs Seçimi",
      desc: "Akademi kataloğumuzdan uzmanlık alanınıza uygun masterclass veya sertifika programını seçin.",
      icon: <ClipboardList size={32} />
    },
    {
      title: "Kayıt & Ödeme",
      desc: "Online başvuru formunu doldurun ve güvenli ödeme altyapımızla kaydınızı tamamlayın.",
      icon: <CreditCard size={32} />
    },
    {
      title: "Eğitime Katılım",
      desc: "Teorik dersleri online tamamlayın, pratik uygulamalar için belirlenen kliniklerde yerinizi alın.",
      icon: <GraduationCap size={32} />
    },
    {
      title: "Sertifikasyon",
      desc: "Sınavı başarıyla tamamlayın, uluslararası geçerliliği olan sertifikanıza sahip olun.",
      icon: <FileCheck size={32} />
    }
  ];

  const patientSteps = [
    {
      title: "Uzman Bul",
      desc: "Rahatsızlığınızla ilgili en doğru uzmanı detaylı doktor profillerimizden inceleyin.",
      icon: <Stethoscope size={32} />
    },
    {
      title: "Randevu Oluştur",
      desc: "Size uygun tarih ve saati seçin, online görüşme talebinizi saniyeler içinde iletin.",
      icon: <UserCheck size={32} />
    },
    {
      title: "Rapor Yükle",
      desc: "Varsa tahlil, MR veya röntgen sonuçlarınızı güvenli sistemimize yükleyin.",
      icon: <ClipboardList size={32} />
    },
    {
      title: "Görüş & Reçete",
      desc: "Görüntülü görüşme sonrası tanı, tedavi planı ve e-reçetenize anında ulaşın.",
      icon: <Video size={32} />
    }
  ];

  const activeSteps = activeTab === 'doctor' ? doctorSteps : patientSteps;

  return (
    <div style={{ paddingTop: '120px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px', fontWeight: '900' }}>Nasıl Çalışır?</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto 40px' }}>
            İster eğitim almak isteyen bir hekim olun, ister şifa arayan bir hasta. Süreçlerimiz sizin için optimize edildi.
          </p>
          
          <div style={{ display: 'inline-flex', background: 'white', padding: '6px', borderRadius: '16px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
             <button
               onClick={() => setActiveTab('doctor')}
               style={{
                  padding: '12px 30px',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeTab === 'doctor' ? 'var(--primary)' : 'transparent',
                  color: activeTab === 'doctor' ? 'white' : '#64748b',
                  fontWeight: '800',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
               }}
             >
                Doktorlar İçin
             </button>
             <button
               onClick={() => setActiveTab('patient')}
               style={{
                  padding: '12px 30px',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeTab === 'patient' ? '#10b981' : 'transparent',
                  color: activeTab === 'patient' ? 'white' : '#64748b',
                  fontWeight: '800',
                  fontSize: '15px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
               }}
             >
                Hastalar İçin
             </button>
          </div>
        </div>

        {/* Steps Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
           
           {/* Connecting Line (Desktop) */}
           <div className="hide-mobile" style={{ position: 'absolute', top: '50px', left: '10%', right: '10%', height: '2px', background: '#e2e8f0', zIndex: -1 }}></div>

           {activeSteps.map((step, i) => (
             <div key={i} style={{ textAlign: 'center' }}>
                <div className="glass" style={{ 
                   width: '100px', 
                   height: '100px', 
                   background: activeTab === 'doctor' ? 'var(--primary)' : '#10b981', 
                   color: 'white', 
                   borderRadius: '30px', 
                   display: 'flex', 
                   alignItems: 'center', 
                   justifyContent: 'center', 
                   margin: '0 auto 30px',
                   boxShadow: `0 15px 30px -10px ${activeTab === 'doctor' ? 'rgba(37, 99, 235, 0.4)' : 'rgba(16, 185, 129, 0.4)'}`,
                   transform: 'rotate(-5deg)'
                }}>
                   <div style={{ transform: 'rotate(5deg)' }}>{step.icon}</div>
                </div>
                <div style={{ background: 'white', padding: '30px', borderRadius: '24px', border: '1px solid #f1f5f9', boxShadow: 'var(--shadow-lg)' }}>
                   <div style={{ fontSize: '14px', fontWeight: '800', color: '#cbd5e1', marginBottom: '8px' }}>ADIM 0{i+1}</div>
                   <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}>{step.title}</h3>
                   <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.5' }}>{step.desc}</p>
                </div>
             </div>
           ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', background: activeTab === 'doctor' ? 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)' : 'linear-gradient(135deg, #059669 0%, #047857 100%)', padding: '60px', borderRadius: '40px', color: 'white' }}>
           <h2 style={{ fontSize: '32px', fontWeight: '900', color: 'white', marginBottom: '20px' }}>
              {activeTab === 'doctor' ? 'Kariyerinize Yatırım Yapın' : 'Sağlığınızı Ertelemeyin'}
           </h2>
           <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
              {activeTab === 'doctor' ? 'En güncel tıbbi teknikleri öğrenmek için hemen kayıt olun.' : 'Uzman doktorlarımızla görüşmek için şimdi randevu alın.'}
           </p>
           <Link 
             to={activeTab === 'doctor' ? '/courses' : '/second-opinion'} 
             className="btn-primary" 
             style={{ 
                background: 'white', 
                color: activeTab === 'doctor' ? 'var(--secondary)' : '#047857', 
                padding: '18px 40px', 
                fontWeight: '800',
                fontSize: '16px'
             }}
           >
              {activeTab === 'doctor' ? 'Kursları İncele' : 'Hemen Randevu Al'} <ArrowRight size={20} />
           </Link>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
