import React from 'react';
import { Target, Heart, Users, ShieldCheck, Globe, Award, GraduationCap, Video } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const About = () => {
  const { language } = useLanguage();
  
  const content = language === 'tr' ? {
    title: "Tıbbın Geleceğini Şekillendiriyoruz",
    desc: "Doctora, tıp profesyonelleri için ileri düzey eğitimler ve hastalar için premium online danışmanlık hizmetleri sunan, teknoloji odaklı yeni nesil bir sağlık platformudur.",
    missionTitle: "Misyonumuz",
    missionDesc: "Tıbbi bilgiye erişimi demokratikleştirmeyi ve coğrafi sınırları kaldırarak uzman hekim görüşünü herkes için ulaşılabilir kılmayı hedefliyoruz. Eğitimden tedaviye, mükemmeliyetin peşindeyiz.",
    values: [
      { title: 'Akademik Mükemmellik', desc: 'Dünya standartlarında müfredat ve eğitmen kadrosu.', icon: <GraduationCap /> },
      { title: 'Teknolojik İnovasyon', desc: 'Hibrit eğitim modelleri ve güvenli tele-tıp altyapısı.', icon: <Video /> },
      { title: 'Global Erişim', desc: 'Dünyanın her yerinden doktor ve hastalara hizmet.', icon: <Globe /> }
    ]
  } : {
    title: "Shaping the Future of Medicine",
    desc: "Doctora is a technology-driven health platform offering advanced medical training for professionals and premium online consultation services for patients.",
    missionTitle: "Our Mission",
    missionDesc: "We aim to democratize access to medical knowledge and make expert medical opinions accessible to everyone by removing geographical barriers. From education to treatment, we pursue excellence.",
    values: [
      { title: 'Academic Excellence', desc: 'World-class curriculum and instructor staff.', icon: <GraduationCap /> },
      { title: 'Technological Innovation', desc: 'Hybrid education models and secure telemedicine infrastructure.', icon: <Video /> },
      { title: 'Global Reach', desc: 'Serving doctors and patients from all over the world.', icon: <Globe /> }
    ]
  };

  return (
    <div style={{ paddingTop: '120px', background: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section className="section" style={{ paddingBottom: '60px' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#eff6ff', color: 'var(--primary)', padding: '8px 20px', borderRadius: '100px', fontWeight: '700', fontSize: '14px', marginBottom: '30px' }}>
             <Award size={18} /> {language === 'tr' ? 'Öncü Tıp Platformu' : 'Leading Medical Platform'}
          </div>
          <h1 style={{ fontSize: '56px', fontWeight: '900', marginBottom: '30px', color: '#0f172a', lineHeight: '1.2' }}>{content.title}</h1>
          <p style={{ fontSize: '20px', color: '#64748b', lineHeight: '1.7' }}>
            {content.desc}
          </p>
        </div>
      </section>

      {/* Stats & Visual */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
           <div style={{ position: 'relative', borderRadius: '40px', overflow: 'hidden', height: '500px', marginBottom: '80px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)' }}>
              <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1600" alt="Medical Team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: '60px', left: '60px', right: '60px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '40px' }}>
                 <div>
                    <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px', color: 'white' }}>{content.missionTitle}</h2>
                    <p style={{ fontSize: '18px', maxWidth: '600px', lineHeight: '1.6', opacity: 0.9 }}>{content.missionDesc}</p>
                 </div>
                 <div style={{ display: 'flex', gap: '30px' }}>
                    <div>
                       <div style={{ fontSize: '42px', fontWeight: '900', color: '#38bdf8' }}>50+</div>
                       <div style={{ fontSize: '14px', fontWeight: '600', opacity: 0.8 }}>{language === 'tr' ? 'Eğitmen Doktor' : 'Instructors'}</div>
                    </div>
                    <div>
                       <div style={{ fontSize: '42px', fontWeight: '900', color: '#38bdf8' }}>2.5k</div>
                       <div style={{ fontSize: '14px', fontWeight: '600', opacity: 0.8 }}>{language === 'tr' ? 'Mezun' : 'Alumni'}</div>
                    </div>
                    <div>
                       <div style={{ fontSize: '42px', fontWeight: '900', color: '#38bdf8' }}>10k+</div>
                       <div style={{ fontSize: '14px', fontWeight: '600', opacity: 0.8 }}>{language === 'tr' ? 'Online Görüşme' : 'Consultations'}</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Values Grid */}
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
              {content.values.map((val, i) => (
                 <div key={i} className="glass" style={{ padding: '40px', borderRadius: '32px', textAlign: 'center', transition: 'transform 0.3s' }}>
                    <div style={{ width: '80px', height: '80px', background: 'var(--primary)', color: 'white', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 10px 25px -5px rgba(0, 122, 255, 0.4)' }}>
                       {React.cloneElement(val.icon, { size: 36 })}
                    </div>
                    <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '15px' }}>{val.title}</h3>
                    <p style={{ color: '#64748b', lineHeight: '1.6' }}>{val.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '100px 0', background: '#0f172a', color: 'white', textAlign: 'center' }}>
          <div className="container">
              <h2 style={{ color: 'white', fontSize: '42px', fontWeight: '900', marginBottom: '24px' }}>
                {language === 'tr' ? 'Gelişime Hazır Mısınız?' : 'Ready to Evolve?'}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '20px', maxWidth: '700px', margin: '0 auto 40px' }}>
                {language === 'tr' 
                  ? 'İster kariyerinizi ilerletmek isteyen bir doktor olun, ister uzman görüşü arayan bir hasta.' 
                  : 'Whether you are a doctor looking to advance your career or a patient seeking expert opinion.'}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                 <Link to="/courses" className="btn-primary" style={{ padding: '18px 40px', fontSize: '16px' }}>
                    {language === 'tr' ? 'Kursları İncele' : 'Explore Courses'}
                 </Link>
                 <Link to="/second-opinion" className="btn-outline" style={{ padding: '18px 40px', fontSize: '16px', background: 'transparent', color: 'white', borderColor: 'rgba(255,255,255,0.2)' }}>
                    {language === 'tr' ? 'Online Randevu Al' : 'Book Online Consult'}
                 </Link>
              </div>
          </div>
      </section>
    </div>
  );
};

export default About;
