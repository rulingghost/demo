import React from 'react';
import { Mail, Phone, MessageSquare, Clock, MapPin, ArrowRight, GraduationCap, Stethoscope } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router-dom';

const Contact = () => {
  const supportImg = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800";
  const location = useLocation();
  const [subject, setSubject] = React.useState('Kurs Kaydı & Bilgi');
  const [message, setMessage] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('type'); // 'enroll', 'syllabus', 'fellowship', 'brochure'
    const course = params.get('course'); // e.g., 'dermal-filler'
    const track = params.get('track'); // 'visiting' or 'full' for fellowship

    if (type === 'enroll') {
       setSubject('Kurs Kaydı & Bilgi');
       setMessage(`Merhaba, "${course}" eğitimi için kayıt işlemlerini başlatmak istiyorum. Lütfen bilgi veriniz.`);
    } else if (type === 'syllabus') {
       setSubject('Kurs Kaydı & Bilgi');
       setMessage(`Merhaba, "${course}" eğitiminin detaylı müfredatını (Syllabus) talep ediyorum.`);
    } else if (type === 'fellowship') {
       setSubject('Uzmanlık (Fellowship) Başvurusu');
       const trackName = track === 'visiting' ? 'Visiting Scholar (Kısa Dönem)' : track === 'full' ? 'Clinical Fellow (Uzun Dönem)' : 'Genel Başvuru';
       setMessage(`Merhaba, International Clinical Fellowship Programı kapsamında "${trackName}" programına başvurmak istiyorum. Lütfen süreç hakkında bilgilendirin.`);
    } else if (type === 'brochure') {
       setSubject('Broşür Talebi');
       setMessage(`Merhaba, "${course || 'Fellowship'}" programınızın detaylı tanıtım broşürünü talep ediyorum.`);
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Teşekkürler! Mesajınız alındı. İlgili birimimiz kısa süre içinde sizinle iletişime geçecek.');
  };

  const contactMethods = [
    { icon: Phone, title: "Akademi Hattı", info: "+90 212 123 45 67", sub: "Kurs & Kayıt Bilgi" },
    { icon: Stethoscope, title: "Tele-Tıp Destek", info: "+90 212 123 45 68", sub: "Randevu & Raporlar" },
    { icon: Mail, title: "E-posta", info: "info@doctora.com", sub: "24 Saat İçinde Yanıt" }
  ];

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Hero Header */}
      <section style={{ padding: '60px 0 100px', textAlign: 'center' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-gradient" style={{ fontSize: '56px', fontWeight: '900', marginBottom: '24px', letterSpacing: '-0.02em' }}>İletişime Geçin</h1>
            <p style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Kurs kayıtları, eğitmenlik başvuruları veya online muayene süreçleri hakkında aklınıza takılan her şeyi sorabilirsiniz.
            </p>
          </motion.div>
        </div>
      </section>

      <section style={{ paddingBottom: '100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '60px' }}>
            
            {/* Left Column: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div style={{ position: 'relative', marginBottom: '50px', borderRadius: '32px', overflow: 'hidden', height: '300px', boxShadow: 'var(--shadow-lg)' }}>
                <img src={supportImg} alt="Destek Ekibi" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: '30px', left: '30px', color: 'white' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%' }}></div>
                    <span style={{ fontWeight: '700', fontSize: '14px' }}>Şu an Çevrimiçi</span>
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: '800' }}>Öğrenci & Hasta İşleri</h3>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '24px' }}>
                {contactMethods.map((method, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="glass"
                    style={{ padding: '24px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '20px', cursor: 'pointer' }}
                  >
                    <div style={{ width: '60px', height: '60px', background: 'var(--surface)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <method.icon size={26} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '4px' }}>{method.title}</div>
                      <div style={{ fontSize: '20px', fontWeight: '800', color: 'var(--secondary)', marginBottom: '4px' }}>{method.info}</div>
                      <div style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '600' }}>{method.sub}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-premium" 
              style={{ padding: '50px', borderRadius: '40px' }}
            >
              <h2 style={{ fontSize: '32px', marginBottom: '10px', fontWeight: '800' }}>Mesaj Gönderin</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Size en doğru birimimizin dönüş yapabilmesi için lütfen konuyu belirtiniz.</p>
              
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)' }}>Adınız</label>
                    <input required type="text" placeholder="Adınız" style={{ padding: '18px', borderRadius: '16px', border: '1px solid var(--border)', background: 'white', fontSize: '16px', outline: 'none', transition: 'all 0.3s' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)' }}>Soyadınız</label>
                    <input required type="text" placeholder="Soyadınız" style={{ padding: '18px', borderRadius: '16px', border: '1px solid var(--border)', background: 'white', fontSize: '16px', outline: 'none' }} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)' }}>E-posta Adresi</label>
                  <input required type="email" placeholder="ornek@email.com" style={{ padding: '18px', borderRadius: '16px', border: '1px solid var(--border)', background: 'white', fontSize: '16px', outline: 'none' }} />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)' }}>Konu Seçiniz</label>
                  <select value={subject} onChange={e => setSubject(e.target.value)} style={{ padding: '18px', borderRadius: '16px', border: '1px solid var(--border)', background: 'white', fontSize: '16px', outline: 'none', appearance: 'none' }}>
                    <option>Kurs Kaydı & Bilgi</option>
                    <option>Uzmanlık (Fellowship) Başvurusu</option>
                    <option>Broşür Talebi</option>
                    <option>Online Muayene & Randevu</option>
                    <option>Teknik Destek</option>
                    <option>Eğitmen Başvurusu</option>
                    <option>Kurumsal İşbirliği</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '700', color: 'var(--secondary)' }}>Mesajınız</label>
                  <textarea required rows="5" value={message} onChange={e => setMessage(e.target.value)} placeholder="Sorunuzu detaylıca belirtiniz..." style={{ padding: '18px', borderRadius: '16px', border: '1px solid var(--border)', background: 'white', fontSize: '16px', outline: 'none', resize: 'none' }}></textarea>
                </div>

                <button type="submit" className="btn-primary" style={{ padding: '22px', fontSize: '18px', marginTop: '10px', borderRadius: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                  Mesajı Gönder <ArrowRight />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Map Section */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="glass" 
             style={{ padding: '60px', borderRadius: '40px', textAlign: 'center', backgroundImage: 'url("https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200")', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' }}
           >
             <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.85)' }}></div>
             <div style={{ position: 'relative', zIndex: 1 }}>
               <h2 style={{ fontSize: '36px', color: 'white', fontWeight: '900', marginBottom: '40px' }}>Kampüslerimiz</h2>
               <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                 {[
                   { city: "İstanbul", name: "Merkez Kampüs", address: "Maslak 1453, Sarıyer, İstanbul" },
                   { city: "Ankara", name: "Eğitim Ofisi", address: "Next Level, Söğütözü, Ankara" },
                   { city: "Londra", name: "Int. Office", address: "Canary Wharf, London, UK" }
                 ].map((office, i) => (
                   <div key={i} style={{ flex: '1 1 300px', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.2)' }}>
                     <MapPin size={32} color="var(--primary)" style={{ marginBottom: '20px' }} />
                     <h3 style={{ fontSize: '24px', color: 'white', fontWeight: '800', marginBottom: '8px' }}>{office.city}</h3>
                     <div style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '16px' }}>{office.name}</div>
                     <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '15px', lineHeight: '1.6' }}>{office.address}</p>
                   </div>
                 ))}
               </div>
             </div>
           </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
