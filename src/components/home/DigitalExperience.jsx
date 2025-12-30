import React from 'react';
import { Smartphone, Laptop, MessageSquare, Activity, ShieldCheck, ArrowRight } from 'lucide-react';

const DigitalExperience = () => {
  return (
    <section style={{ 
      padding: '120px 0', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
      color: 'white',
      overflow: 'hidden',
      position: 'relative'
    }}>
      {/* Background Orbs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(50px)' }}></div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#38bdf8', 
              padding: '8px 20px', 
              borderRadius: '100px', 
              fontSize: '13px', 
              fontWeight: '700', 
              marginBottom: '20px' 
            }}>
              <Activity size={18} /> DİJİTAL SAĞLIK ASİSTANI
            </div>
            <h2 style={{ fontSize: '42px', fontWeight: '900', color: 'white', marginBottom: '20px', lineHeight: '1.2' }}>
              Tedavi Süreciniz <span style={{ color: '#38bdf8' }}>Cebinizde</span>
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
              Doctora Mobile uygulaması ile randevularınızı yönetin, doktorunuzla görüntülü görüşün ve iyileşme sürecinizi yapay zeka desteğiyle takip edin.
            </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {[
              {
                title: 'Canlı Doktor Görüşmesi',
                desc: 'Operasyon öncesi ve sonrası doktorunuzla HD kalitesinde görüntülü görüşmeler yapın.',
                icon: <Smartphone size={24} color="#38bdf8" />,
                color: 'rgba(56, 189, 248, 0.1)'
              },
              {
                title: 'Yapay Zeka Destekli Takip',
                desc: 'Fotoğraflarınızı yükleyin, AI destekli sistemimiz iyileşme sürecinizi anlık analiz etsin.',
                icon: <Activity size={24} color="#10b981" />,
                color: 'rgba(16, 185, 129, 0.1)'
              },
              {
                title: 'Güvenli Sağlık Kayıtları',
                desc: 'Tüm raporlarınız, reçeteleriniz ve seyahat belgeleriniz uçtan uca şifreli olarak saklanır.',
                icon: <ShieldCheck size={24} color="#f59e0b" />,
                color: 'rgba(245, 158, 11, 0.1)'
              }
            ].map((item, i) => (
              <div key={i} className="hover-lift" style={{ 
                background: 'rgba(255,255,255,0.03)', 
                border: '1px solid rgba(255,255,255,0.05)', 
                padding: '30px', 
                borderRadius: '24px', 
                display: 'flex', 
                gap: '20px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '16px', 
                  background: item.color, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  flexShrink: 0 
                }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'white', marginBottom: '8px' }}>{item.title}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
            
            <button className="hover-lift" style={{ 
              marginTop: '20px', 
              padding: '18px 36px', 
              background: '#38bdf8', 
              color: 'white', 
              border: 'none', 
              borderRadius: '100px', 
              fontSize: '16px', 
              fontWeight: '800', 
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              width: 'fit-content'
            }}>
              Uygulamayı İndir <ArrowRight size={20} />
            </button>
          </div>

          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div style={{ 
              position: 'relative', 
              width: '320px', 
              height: '650px', 
              background: '#0f172a', 
              borderRadius: '50px', 
              border: '8px solid #334155',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden'
            }}>
              {/* Fake App Screen */}
              <div style={{ padding: '30px 20px', height: '100%', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#334155' }}></div>
                  <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: '#334155' }}></div>
                </div>

                <div style={{ marginBottom: '30px' }}>
                   <div style={{ fontSize: '24px', fontWeight: '800', color: 'white', marginBottom: '10px' }}>Merhaba, Ahmet 👋</div>
                   <div style={{ fontSize: '14px', color: '#94a3b8' }}>Bugün operasyonunuzun 3. günü.</div>
                </div>

                <div style={{ background: 'linear-gradient(135deg, #38bdf8 0%, #0284c7 100%)', borderRadius: '24px', padding: '20px', color: 'white', marginBottom: '25px', boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)' }}>
                  <div style={{ fontSize: '12px', fontWeight: '800', opacity: 0.8, marginBottom: '5px' }}>SONRAKİ RANDEVU</div>
                  <div style={{ fontSize: '18px', fontWeight: '900', marginBottom: '5px' }}>Dr. Ergin Er ile Kontrol</div>
                  <div style={{ fontSize: '13px', opacity: 0.9 }}>Yarın, 14:00 • Video Görüşme</div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                  <div style={{ background: '#1e293b', padding: '15px', borderRadius: '20px' }}>
                     <div style={{ width: '35px', height: '35px', background: 'rgba(16, 185, 129, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                       <Activity size={18} color="#34d399" />
                     </div>
                     <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>İyileşme Skoru</div>
                     <div style={{ fontSize: '20px', color: 'white', fontWeight: '800' }}>%85</div>
                  </div>
                  <div style={{ background: '#1e293b', padding: '15px', borderRadius: '20px' }}>
                     <div style={{ width: '35px', height: '35px', background: 'rgba(245, 158, 11, 0.2)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                       <MessageSquare size={18} color="#fbbf24" />
                     </div>
                     <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '700' }}>Asistan Desteği</div>
                     <div style={{ fontSize: '20px', color: 'white', fontWeight: '800' }}>7/24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DigitalExperience;
