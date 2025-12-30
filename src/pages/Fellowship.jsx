import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Globe, Star, CheckCircle, ArrowRight, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Fellowship = () => {
  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)', 
        color: 'white', 
        padding: '100px 0', 
        position: 'relative', 
        overflow: 'hidden'
      }}>
        {/* Abstract Background */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%', opacity: 0.1, backgroundImage: 'url("https://www.transparenttextures.com/patterns/medical-icons.png")' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: '800px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', border: '1px solid rgba(251, 191, 36, 0.3)', marginBottom: '24px' }}>
              <Star size={14} fill="#fbbf24" /> PRESTIGIOUS PROGRAM 2026
            </div>
            <h1 style={{ fontSize: '56px', fontWeight: '900', lineHeight: '1.1', marginBottom: '24px' }}>
              International Clinical Fellowship Program
            </h1>
            <p style={{ fontSize: '20px', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '40px' }}>
              A fully immersive, 3 to 6-month hands-on training program designed for surgeons seeking mastery in aesthetic medicine alongside world-renowned faculty.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
               <Link to="/contact?type=fellowship" className="btn-primary" style={{ padding: '18px 36px', fontSize: '16px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
                 Apply for Fellowship <ArrowRight size={18} />
               </Link>
               <Link to="/contact?type=brochure&course=fellowship" className="btn-outline" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px', color: 'white', borderColor: 'rgba(255,255,255,0.3)', padding: '18px 36px', fontSize: '16px' }}>
                 Download Brochure
               </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Highlights */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {[
              { icon: Users, title: "1-on-1 Mentorship", desc: "Direct supervision by Master Faculty in live OR settings." },
              { icon: BookOpen, title: "Research & Publication", desc: "Opportunity to co-author clinical papers during your tenure." },
              { icon: Globe, title: "Global Certification", desc: "Internationally recognized diploma upon successful completion." },
              { icon: Award, title: "Career Networking", desc: "Join an elite alumni network of leaders in aesthetic surgery." }
            ].map((item, i) => (
              <div key={i} style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <div style={{ width: '60px', height: '60px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '20px' }}>
                   <item.icon size={28} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers/Options */}
      <section style={{ padding: '0 0 100px' }}>
        <div className="container">
           <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', marginBottom: '16px' }}>Available Tracks</h2>
             <p style={{ color: '#64748b', fontSize: '18px' }}>Select the intensity level that matches your career goals.</p>
           </div>
           
           <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '1000px', margin: '0 auto' }}>
              {/* Track 1 */}
              <div style={{ background: 'white', padding: '50px', borderRadius: '32px', border: '1px solid #e2e8f0', position: 'relative' }}>
                 <div style={{ fontSize: '14px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Short Term</div>
                 <h3 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', marginBottom: '24px' }}>Visiting Scholar</h3>
                 <div style={{ fontSize: '42px', fontWeight: '900', color: 'var(--primary)', marginBottom: '30px' }}>€3,500 <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>/ month</span></div>
                 
                 <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                   {['Principally Observational', 'Access to Morning Rounds', 'Clinic Case Discussions', 'Certificate of Attendance'].map((feat, i) => (
                     <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#334155', fontWeight: '500' }}>
                       <CheckCircle size={18} color="#22c55e" /> {feat}
                     </li>
                   ))}
                 </ul>
                 <Link to="/contact?type=fellowship&track=visiting" className="btn-outline" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '16px', borderRadius: '16px' }}>Apply Now</Link>
              </div>

              {/* Track 2 */}
              <div style={{ background: '#0f172a', padding: '50px', borderRadius: '32px', border: '1px solid #1e293b', position: 'relative', color: 'white', transform: 'scale(1.05)', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.2)' }}>
                 <div style={{ position: 'absolute', top: '20px', right: '20px', background: '#fbbf24', color: '#0f172a', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: '800' }}>MOST POPULAR</div>
                 <div style={{ fontSize: '14px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '8px' }}>Long Term</div>
                 <h3 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '24px' }}>Clinical Fellow</h3>
                 <div style={{ fontSize: '42px', fontWeight: '900', color: '#38bdf8', marginBottom: '30px' }}>€5,500 <span style={{ fontSize: '16px', color: '#94a3b8', fontWeight: '500' }}>/ month</span></div>
                 
                 <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                   {['Full Hands-on Participation', 'Private Mentor Logbook', 'Research Publication Support', 'Fellowship Diploma', 'Alumni Association Access'].map((feat, i) => (
                     <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#e2e8f0', fontWeight: '500' }}>
                       <CheckCircle size={18} color="#38bdf8" /> {feat}
                     </li>
                   ))}
                 </ul>
                 <Link to="/contact?type=fellowship&track=full" className="btn-primary" style={{ display: 'block', textAlign: 'center', textDecoration: 'none', padding: '16px', borderRadius: '16px', background: '#38bdf8', border: 'none' }}>Apply for Residency</Link>
              </div>
           </div>
        </div>
      </section>

      {/* Application Process */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
             <h2 style={{ fontSize: '36px', fontWeight: '900', color: '#0f172a', marginBottom: '16px' }}>Başvuru Süreci</h2>
             <p style={{ color: '#64748b', fontSize: '18px' }}>Global fellowship programımıza katılmak için izlemeniz gereken 4 adım.</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap', gap: '30px' }}>
             {[
               { step: "01", title: "Online Başvuru", desc: "CV, Tıp Diploması ve Niyet Mektubunuzu (Statement of Purpose) sistem üzerinden yükleyin." },
               { step: "02", title: "Mülakat", desc: "Akademik kurulumuzla online video mülakat gerçekleştirin." },
               { step: "03", title: "Kabul & Kayıt", desc: "Kabul mektubunuzu alın ve program depozitosunu yatırarak yerinizi ayırtın." },
               { step: "04", title: "Vize & Konaklama", desc: "Uluslararası ofisimizden vize davet mektubu ve konaklama desteği alın." }
             ].map((item, i) => (
               <div key={i} style={{ flex: '1', minWidth: '250px', position: 'relative', textAlign: 'center' }}>
                  <div style={{ width: '60px', height: '60px', background: '#0f172a', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '800', margin: '0 auto 24px', position: 'relative', zIndex: 2, border: '4px solid #f8fafc' }}>{item.step}</div>
                  {i !== 3 && <div style={{ position: 'absolute', top: '30px', left: '50%', width: '100%', height: '2px', background: '#e2e8f0', zIndex: 1, display: window.innerWidth > 768 ? 'block' : 'none' }}></div>}
                  <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '12px', color: '#0f172a' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', maxWidth: '220px', margin: '0 auto' }}>{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Global Recognition */}
      <section style={{ padding: '60px 0', borderTop: '1px solid #e2e8f0' }}>
         <div className="container" style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '14px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '40px' }}>
               AKREDİTASYON VE PARTNERLERİMİZ
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '60px', opacity: 0.6, filter: 'grayscale(100%)' }}>
               {/* Placeholder Logos - In a real project these would be actual partner logos */}
               <div style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>ISAPS</div>
               <div style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>American Board</div>
               <div style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>Royal College</div>
               <div style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>Euromedicom</div>
            </div>
         </div>
      </section>

      {/* Locations */}
      <section style={{ padding: '0 0 100px' }}>
         <div className="container">
            <div style={{ background: 'white', padding: '60px', borderRadius: '32px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '60px' }}>
               <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', marginBottom: '20px' }}>Global Training Centers</h2>
                  <p style={{ color: '#64748b', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                    Rotations are available at our certified partner hospitals in Istanbul, London, and Dubai. Accommodation assistance is provided for all international fellows.
                  </p>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    {['Istanbul (Main)', 'London', 'Dubai'].map(loc => (
                      <div key={loc} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#334155', fontWeight: '700' }}>
                        <MapPin size={18} color="var(--primary)" /> {loc}
                      </div>
                    ))}
                  </div>
               </div>
               <div style={{ flex: 1, height: '300px', borderRadius: '24px', overflow: 'hidden', background: '#f1f5f9' }}>
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000" alt="Hospital" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
               </div>
            </div>
         </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '30px', fontWeight: '900', color: '#0f172a', marginBottom: '40px', textAlign: 'center' }}>Sıkça Sorulan Sorular</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { q: "Konaklama desteği sağlıyor musunuz?", a: "Evet, uluslararası fellowship katılımcıları için anlaşmalı rezidanslarımızda indirimli konaklama ve havalimanı transfer hizmeti sunuyoruz." },
              { q: "Hangi dilde eğitim veriliyor?", a: "Tüm fellowship programı %100 İngilizce olarak yürütülmektedir. Türkçe bilmenize gerek yoktur." },
              { q: "Vize sürecinde yardımcı oluyor musunuz?", a: "Kabul edilen adaylara resmi davet mektubu gönderilmekte ve vize danışmanlığı sağlanmaktadır." }
            ].map((faq, i) => (
              <details key={i} style={{ background: '#f8fafc', padding: '20px', borderRadius: '16px', cursor: 'pointer' }}>
                <summary style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>{faq.q}</summary>
                <p style={{ marginTop: '10px', color: '#64748b', lineHeight: '1.6' }}>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Fellowship;
