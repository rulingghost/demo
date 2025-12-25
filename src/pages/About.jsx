import React from 'react';
import { Target, Heart, Users, ShieldCheck, Globe, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { language } = useLanguage();
  
  const content = language === 'tr' ? {
    title: "Hastaları Güçlendiriyoruz, Hayatları Dönüştürüyoruz",
    desc: "Doctora, hastaları dünyanın en iyi doktorları ve klinikleriyle buluşturan öncü bir sağlık turizmi platformudur. 2020'den bu yana 10.000'den fazla hastanın güvenli, uygun fiyatlı ve kaliteli sağlık hizmetine ulaşmasına yardımcı olduk.",
    missionTitle: "Misyonumuz",
    missionDesc: "Kaliteli sağlık hizmetinin bir lüks olmaması gerektiğine inanıyoruz. Misyonumuz, sağlık fiyatlandırmasında ve kalitesinde şeffaflık sağlayarak, her hastanın kendi sağlığı için en iyi kararı vermesi için ihtiyaç duyduğu bilgi ve desteğe sahip olmasını sağlamaktır.",
    values: [
      { title: 'Şeffaflık', desc: 'Gizli ücret yok. Kliniğe doğrudan ödeme yaparsınız.' },
      { title: 'Bakım', desc: 'Sizin için 24/7 kişisel koordinatör.' },
      { title: 'Güvenilirlik', desc: 'Sadece JCI belgeli ve onaylı klinikler.' }
    ]
  } : {
    title: "Empowering Patients, Transforming Lives",
    desc: "Sarfea is a leading global medical tourism platform that connects patients with the world's best doctors and clinics. Since 2020, we have helped over 10,000 patients find safe, affordable, and high-quality medical care abroad.",
    missionTitle: "Our Mission",
    missionDesc: "We believe that high-quality healthcare shouldn't be a luxury. Our mission is to provide transparency in medical pricing and quality, ensuring that every patient has the information and support they need to make the best decision for their health.",
    values: [
      { title: 'Transparency', desc: 'No hidden fees. You pay the clinic directly.' },
      { title: 'Care', desc: 'Personal coordinator available 24/7 for you.' },
      { title: 'Reliability', desc: 'Only JCI-accredited and verified clinics.' }
    ]
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px' }}>{content.title}</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            {content.desc}
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Our Office" 
                style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-xl)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>{content.missionTitle}</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.7' }}>
                {content.missionDesc}
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {content.values.map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ padding: '12px', background: 'white', borderRadius: '12px', height: 'fit-content', color: 'var(--primary)' }}>
                      {item.title === 'Şeffaflık' || item.title === 'Transparency' ? <ShieldCheck /> : item.title === 'Bakım' || item.title === 'Care' ? <Heart /> : <Users />}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px' }}>{language === 'tr' ? 'Küresel Erişebilirlik' : 'Our Global Reach'}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>25+</div>
                <div style={{ color: 'var(--text-muted)' }}>{language === 'tr' ? 'Hizmet Verilen Ülke' : 'Countries Covered'}</div>
             </div>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>1,200+</div>
                <div style={{ color: 'var(--text-muted)' }}>{language === 'tr' ? 'Onaylı Klinik' : 'Verified Clinics'}</div>
             </div>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>15k+</div>
                <div style={{ color: 'var(--text-muted)' }}>{language === 'tr' ? 'Mutlu Hasta' : 'Happy Patients'}</div>
             </div>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>4.9/5</div>
                <div style={{ color: 'var(--text-muted)' }}>{language === 'tr' ? 'Memnuniyet Puanı' : 'Trustpilot Rating'}</div>
             </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
          <div className="container">
              <h2 style={{ color: 'white', fontSize: '36px', marginBottom: '24px' }}>{language === 'tr' ? 'Uzman Bakım Bir Tık Uzağınızda' : 'Expert Care is Just a Click Away'}</h2>
              <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
                {language === 'tr' ? 'Medikal yolculuklarında Doctora\'ya güvenen binlerce hastaya katılın.' : 'Join thousands of patients who trust Doctora for their medical journey.'}
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '16px 48px' }}>{language === 'tr' ? 'Yolculuğa Başla' : 'Start Your Journey'}</Link>
          </div>
      </section>
    </div>
  );
};

export default About;
