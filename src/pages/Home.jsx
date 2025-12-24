import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Building2, 
  Star, 
  Search as SearchIcon, 
  MessageCircle, 
  CheckCircle,
  Video,
  Award,
  ArrowRight,
  ShieldCheck,
  Phone,
  MapPin
} from 'lucide-react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Features from '../components/Features';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Hero />
      
      {/* Live Patient Activity Ticker - Bookimed Style */}
      <div style={{ background: '#f0f9ff', borderBottom: '1px solid #e0f2fe', overflow: 'hidden', padding: '12px 0' }}>
        <div className="container">
           <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '13px', color: '#0369a1', whiteSpace: 'nowrap', overflowX: 'auto', scrollbarWidth: 'none' }}>
             <span style={{ fontWeight: '700', paddingRight: '10px', borderRight: '1px solid #bae6fd' }}>LIVE UPDATES:</span>
             {[
               "🇬🇧 John from UK requested Rhinoplasty quote (2m ago)",
               "🇩🇪 Sarah from Germany booked Hair Transplant (5m ago)",
               "🇺🇸 Michael from USA started Oncology consulation (12m ago)",
               "🇫🇷 Elena from France asked about IVF prices (15m ago)",
               "🇪🇸 Carlos from Spain is viewing Dental Implants (18m ago)"
             ].map((text, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%' }}></span>
                  {text}
                </span>
             ))}
           </div>
        </div>
      </div>
      
      {/* Live Statistics - Modern Glass Design */}
      <section style={{ position: 'relative', padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50%', left: '-20%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(14, 165, 233, 0.05) 0%, transparent 70%)', zIndex: -1 }}></div>
        <div className="container">
          <div className="stats-grid">
            {[
              { label: 'Verified Clinics', value: '1,500+', icon: <Building2 className="text-blue-500" size={32} /> },
              { label: 'Patients Assisted', value: '900k+', icon: <Users className="text-emerald-500" size={32} /> },
              { label: 'Verified Reviews', value: '6,000+', icon: <Star className="text-yellow-500" size={32} /> },
              { label: 'Medical Support', value: '24/7', icon: <Phone className="text-rose-500" size={32} /> },
            ].map((stat, i) => (
              <div key={i} className="stat-item glass-card" style={{ 
                padding: '30px', 
                borderRadius: '24px', 
                textAlign: 'center',
                background: 'white',
                border: '1px solid #f1f5f9',
                boxShadow: '0 10px 30px -10px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  <div style={{ padding: '12px', background: '#f8fafc', borderRadius: '50%' }}>
                    {stat.icon}
                  </div>
                </div>
                <span className="stat-value" style={{ display: 'block', fontSize: '36px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>{stat.value}</span>
                <span className="stat-label" style={{ color: '#64748b', fontWeight: '600' }}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Step by Step Process */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px' }}>Your Journey to Health</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Simple, transparent, and guided by experts at every step.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', position: 'relative' }}>
            {/* Connecting Line (Desktop Only - Hidden via inline style for now) */}
            <div style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '2px', background: '#e2e8f0', zIndex: 0, display: 'none' }}></div>

            {[
              { num: '01', title: 'Submit Request', desc: 'Share your medical needs and records safely.', icon: <MessageCircle size={24} color="white" /> },
              { num: '02', title: 'Free Expert Review', desc: 'Our doctors analyze your case within 24h.', icon: <CheckCircle size={24} color="white" /> },
              { num: '03', title: 'Compare Offers', desc: 'Get 3+ personalized treatment plans.', icon: <Star size={24} color="white" /> },
              { num: '04', title: 'Start Journey', desc: 'We handle booking, transfer, and 24/7 support.', icon: <Building2 size={24} color="white" /> },
            ].map((step, i) => (
              <div key={i} style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <div style={{ 
                  width: '80px', 
                  height: '80px', 
                  background: 'var(--primary)', 
                  borderRadius: '24px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 24px',
                  boxShadow: '0 10px 20px rgba(14, 165, 233, 0.3)',
                  transform: 'rotate(-5deg)'
                }}>
                  <div style={{ transform: 'rotate(5deg)' }}>{step.icon}</div>
                </div>
                <div style={{ fontSize: '48px', fontWeight: '900', color: '#f1f5f9', position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1 }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.5' }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Destinations & Prices */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
             <div>
               <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>Treatment Costs by Country</h2>
               <p style={{ color: 'var(--text-muted)' }}>Save up to 70% compared to US/UK prices without compromising quality.</p>
             </div>
             <Link to="/search" className="btn-outline">View All Destinations</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { country: 'Turkey', proc: 'Hair Transplant', price: '€1,600', save: 'Save 70%', img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&q=80&w=400', flag: '🇹🇷' },
              { country: 'Mexico', proc: 'Dental Veneers', price: '$4,200', save: 'Save 60%', img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=400', flag: '🇲🇽' },
              { country: 'Thailand', proc: 'Rhinoplasty', price: '$3,100', save: 'Save 55%', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&q=80&w=400', flag: '🇹🇭' },
              { country: 'Germany', proc: 'Oncology Checkup', price: '€2,500', save: 'Top Quality', img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&q=80&w=400', flag: '🇩🇪' },
            ].map((item, i) => (
               <div key={i} className="card-hover" style={{ background: 'white', borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                 <div style={{ height: '180px', position: 'relative' }}>
                   <img src={item.img} alt={item.country} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                   <div style={{ position: 'absolute', top: '15px', left: '15px', background: 'rgba(255,255,255,0.9)', padding: '6px 12px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '5px' }}>
                     {item.flag} {item.country}
                   </div>
                 </div>
                 <div style={{ padding: '24px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                     <h3 style={{ fontSize: '18px' }}>{item.proc}</h3>
                     <span style={{ background: '#ecfdf5', color: '#047857', fontSize: '12px', fontWeight: '700', padding: '4px 8px', borderRadius: '6px' }}>{item.save}</span>
                   </div>
                   <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>Average price starting from</div>
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <span style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>{item.price}</span>
                     <Link to="/search" style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>Compare &rarr;</Link>
                   </div>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bookimed Style Benefits (Renamed to 'Why Choose Us') */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="section-title">Free Patient-First Services</h2>
            <p className="section-subtitle">We handle everything, from clinic selection to your safe return home, at no cost to you.</p>
          </div>
          <div className="grid-3">
            <div className="glass card-hover" style={{ padding: '40px', borderRadius: '32px' }}>
              <div style={{ width: '60px', height: '60px', background: '#eff6ff', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Users color="var(--primary)" size={32} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>Personal Medical Coordinator</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Our experts find the best clinic and doctor for your specific case within 24 hours.</p>
            </div>
            <div className="glass card-hover" style={{ padding: '40px', borderRadius: '32px' }}>
              <div style={{ width: '60px', height: '60px', background: '#f0fdf4', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Video color="var(--accent)" size={32} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>Telemedicine Consultation</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>Meet your doctor online before you travel. Clear all doubts from the comfort of your home.</p>
            </div>
            <div className="glass card-hover" style={{ padding: '40px', borderRadius: '32px' }}>
              <div style={{ width: '60px', height: '60px', background: '#fff7ed', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <ShieldCheck color="#f97316" size={32} />
              </div>
              <h3 style={{ marginBottom: '12px' }}>24/7 Journey Support</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '15px' }}>We are with you at every step—hospital admission, translation, and follow-up care.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Accreditations Bar */}
      <section style={{ padding: '30px 0', background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '24px', fontWeight: '700', letterSpacing: '0.05em' }}>
            ACCREDITATIONS & TRUSTED PARTNERS
          </p>
          <div className="trust-bar" style={{ border: 'none', padding: 0 }}>
            {/* Using text labels as placeholders for logos */}
            <div style={{ fontWeight: '900', color: '#e2e8f0', fontSize: '28px' }}>JCI</div>
            <div style={{ fontWeight: '900', color: '#e2e8f0', fontSize: '28px' }}>ISO 9001</div>
            <div style={{ fontWeight: '900', color: '#e2e8f0', fontSize: '28px' }}>TEMOS</div>
            <div style={{ fontWeight: '900', color: '#e2e8f0', fontSize: '28px' }}>ESMO</div>
            <div style={{ fontWeight: '900', color: '#e2e8f0', fontSize: '28px' }}>HIPAA</div>
          </div>
        </div>
      </section>

      <Categories />
      <Features />

      {/* Medical Advisory Board */}
      <section style={{ background: 'var(--surface)', padding: '100px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Medically Reviewed by Experts</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '16px' }}>
              Our Medical Advisory Board ensures that all medical content and clinic recommendations are accurate and up-to-date.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { 
                name: 'Dr. Ergin Er', 
                role: 'Medical Director', 
                expert: 'Plastic Surgery', 
                image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300' 
              },
              { 
                name: 'Dr. Sarah Wilson', 
                role: 'Clinical Advisor', 
                expert: 'Infertility', 
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300' 
              },
              { 
                name: 'Dr. Mark Thompson', 
                role: 'Quality Head', 
                expert: 'Oncology', 
                image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300' 
              }
            ].map((doc, i) => (
              <div key={i} className="glass" style={{ padding: '40px 30px', textAlign: 'center', borderRadius: '32px', boxShadow: 'var(--shadow-md)' }}>
                <img src={doc.image} alt={doc.name} style={{ width: '120px', height: '120px', borderRadius: '60px', marginBottom: '20px', objectFit: 'cover', border: '4px solid white', boxShadow: 'var(--shadow-md)' }} />
                <h3 style={{ fontSize: '20px', marginBottom: '6px' }}>{doc.name}</h3>
                <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '14px', marginBottom: '12px' }}>{doc.role}</p>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', background: '#f8fafc', padding: '6px 16px', borderRadius: '100px', display: 'inline-block', fontWeight: '600' }}>
                   {doc.expert} Specialist
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Impact Video Stories */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div style={{ textAlign: 'left' }}>
              <h2 style={{ fontSize: '36px', marginBottom: '16px' }}>Patient Success Stories</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Real patients sharing their life-changing experiences.</p>
            </div>
            <Link to="/reviews" className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              View All Reviews <ArrowRight size={18} />
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Full Mouth Restoration', name: 'James from USA', savings: '$12,000 saved', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&h=500' },
              { title: 'Oncology Treatment', name: 'Elena from Italy', savings: 'Complex Care', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=500' }
            ].map((item, i) => (
              <div key={i} className="card-hover" style={{ position: 'relative', height: '450px', borderRadius: '32px', overflow: 'hidden', cursor: 'pointer' }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px' }}>
                  <div style={{ width: '64px', height: '64px', background: 'var(--primary)', borderRadius: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', marginBottom: '24px' }}>
                    <Video size={28} fill="white" />
                  </div>
                  <h3 style={{ color: 'white', fontSize: '24px', marginBottom: '8px' }}>{item.title}</h3>
                  <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>{item.name}</span>
                    <span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', padding: '4px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: '700' }}>{item.savings}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rated Surgeons */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>Meet Our Top Rated Surgeons</h2>
              <p style={{ color: 'var(--text-muted)' }}>World-class specialists with over 15+ years of clinical experience.</p>
            </div>
            <Link to="/doctors" className="btn-outline">View All Doctors</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {[
              { name: "Dr. Tarik Akar", exp: "18 Years", field: "Gastroenterologist", clinic: "Liv Hospital Ulus", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300&h=300", badge: "European Board Certified" },
              { name: "Dr. Bülent Cihantimur", exp: "25 Years", field: "Plastic Surgery", clinic: "Estetik International", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=300&h=300", badge: "Global Talent Award" },
              { name: "Dr. Mehmet Erdoğan", exp: "14 Years", field: "Dental Implants", clinic: "Smile Center", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300&h=300", badge: "Expert Implantologist" },
            ].map((doc, i) => (
              <Link 
                to={`/doctor/${doc.name.toLowerCase().replace('dr. ', '').replace(/\s+/g, '-')}`} 
                key={i} 
                className="glass card-hover" 
                style={{ borderRadius: '24px', overflow: 'hidden', textDecoration: 'none', color: 'inherit', display: 'block' }}
              >
                <div style={{ position: 'relative', height: '240px' }}>
                  <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'white', color: 'var(--primary)', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: '800' }}>
                    {doc.badge}
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{doc.name}</h3>
                  <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '14px', marginBottom: '12px' }}>{doc.field}</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={14} fill="#f59e0b" color="#f59e0b" /> {doc.exp} Experience</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Building2 size={14} /> At {doc.clinic}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured In - Media Trust */}
      <section style={{ padding: '40px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '13px', fontWeight: '700', marginBottom: '24px', letterSpacing: '0.05em' }}>AS SEEN IN GLOBAL MEDIA</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', alignItems: 'center', flexWrap: 'wrap', opacity: 0.6, filter: 'grayscale(100%)' }}>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>Forbes</span>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>Bloomberg</span>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>TechCrunch</span>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>BBC News</span>
            <span style={{ fontSize: '24px', fontWeight: '900', color: '#cbd5e1' }}>Healthline</span>
          </div>
        </div>
      </section>

      {/* Latest Medical Insights (Blog) */}
      <section style={{ padding: '100px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
            <div>
              <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '12px' }}>Latest Medical Insights</h2>
              <p style={{ color: 'var(--text-muted)' }}>Expert guides on costs, recovery, and choosing the right clinic.</p>
            </div>
            <Link to="/blog" className="btn-outline">Read All Articles</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Hair Transplant Cost 2025: Turkey vs UK', cat: 'Price Analysis', date: 'Dec 12, 2024', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600' },
              { title: 'All-on-4 Dental Implants: Complete Guide', cat: 'Treatment Guide', date: 'Dec 10, 2024', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600' },
              { title: 'Choosing the Right Rhinoplasty Surgeon', cat: 'Tips', date: 'Dec 05, 2024', img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600' }
            ].map((post, i) => (
              <div key={i} className="card-hover" style={{ background: 'white', borderRadius: '24px', overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={post.img} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', padding: '6px 12px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', color: 'var(--primary)' }}>
                    {post.cat}
                  </span>
                </div>
                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '10px' }}>{post.date} • 5 min read</div>
                  <h3 style={{ fontSize: '20px', lineHeight: '1.4', marginBottom: '16px' }}>{post.title}</h3>
                  <a href="#" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    Read Article <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Homepage FAQ Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '24px' }}>Frequently Asked Questions</h2>
              <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
                We know you have questions. Here are the most common ones our patients ask before traveling.
              </p>
              <Link to="/faq" className="btn-primary" style={{ padding: '16px 32px' }}>View All FAQs</Link>
            </div>
            
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { q: "Is it safe to travel for medical treatment?", a: "Yes. We only work with JCI and ISO accredited clinics that adhere to strict international safety protocols." },
                { q: "How much can I save?", a: "Patients typically save 50-70% compared to prices in the US, UK, or EU, due to lower labor and operational costs abroad." },
                { q: "Do you charge a fee for your services?", a: "No. Our services are 100% free for patients. We are paid by the clinics, but our prices are often lower than booking directly." }
              ].map((item, i) => (
                <div key={i} style={{ padding: '24px', borderRadius: '20px', background: '#f8fafc' }}>
                  <h4 style={{ fontSize: '18px', marginBottom: '10px', color: '#0f172a' }}>{item.q}</h4>
                  <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.5' }}>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Matrix */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px' }}>Why Travel for Treatment?</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Compare average prices and see how much you can save.</p>
          </div>

          <div style={{ overflowX: 'auto', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: '800', color: '#1e293b' }}>Treatment</th>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: '800', color: '#64748b' }}>🇬🇧 UK Avg. Cost</th>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: '800', color: '#64748b' }}>🇺🇸 USA Avg. Cost</th>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: '800', color: 'var(--primary)' }}>🇹🇷 Turkey Avg. Cost</th>
                  <th style={{ padding: '20px', textAlign: 'left', fontWeight: '800', color: '#10b981' }}>Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Hair Transplant', uk: '£8,000', usa: '$12,000', tr: '£1,800', save: '70%' },
                  { name: 'Rhinoplasty', uk: '£6,500', usa: '$9,000', tr: '£2,500', save: '65%' },
                  { name: 'Dental Implants (Full Mouth)', uk: '£22,000', usa: '$35,000', tr: '£6,000', save: '75%' },
                  { name: 'Breast Augmentation', uk: '£7,000', usa: '$10,000', tr: '£3,000', save: '60%' },
                  { name: 'IVF Cycle', uk: '£5,000', usa: '$15,000', tr: '£2,500', save: '50%' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: i === 4 ? 'none' : '1px solid #f1f5f9', background: i % 2 === 0 ? 'white' : '#fcfcfc' }}>
                    <td style={{ padding: '20px', fontWeight: '700', color: '#334155' }}>{row.name}</td>
                    <td style={{ padding: '20px', color: '#94a3b8' }}>{row.uk}</td>
                    <td style={{ padding: '20px', color: '#94a3b8' }}>{row.usa}</td>
                    <td style={{ padding: '20px', fontWeight: '700', color: 'var(--primary)' }}>{row.tr}</td>
                    <td style={{ padding: '20px' }}>
                      <span style={{ background: '#ecfdf5', color: '#047857', padding: '4px 12px', borderRadius: '100px', fontWeight: '700', fontSize: '13px' }}>
                        {row.save}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Meet Your Care Team */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#e0f2fe', color: '#0369a1', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
                <Users size={16} /> 24/7 PATIENT SUPPORT
              </div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>Meet Your Personal Medical Coordinators</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
                We are not just a booking site. We are real people who care about your health. Your personal coordinator stays with you from the first call until you are safely home.
              </p>
              <ul style={{ display: 'grid', gap: '16px', marginBottom: '40px' }}>
                {[
                  "Help with clinic selection & quote comparison",
                  "Travel arrangements (Flights, Hotel, Transfer)",
                  "Translation services & 24/7 assistance"
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '15px', color: '#475569', fontWeight: '600' }}>
                     <CheckCircle size={20} color="#10b981" /> {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary" style={{ padding: '16px 32px' }}>Talk to a Coordinator</button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
               {[
                 { name: "Sarah M.", lang: "English, German", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
                 { name: "Ahmed K.", lang: "Arabic, French", img: "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&q=80&w=300" },
                 { name: "Elena R.", lang: "Russian, English", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300" },
                 { name: "Dr. Chen", lang: "Chinese, English", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300" }
               ].map((person, i) => (
                 <div key={i} className="glass" style={{ padding: '20px', borderRadius: '24px', textAlign: 'center', marginTop: i % 2 !== 0 ? '40px' : '0' }}>
                   <img src={person.img} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', marginBottom: '16px' }} alt={person.name} />
                   <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{person.name}</h4>
                   <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{person.lang}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Real Patient Results - Before & After */}
      <section style={{ padding: '80px 0', background: '#f0f9ff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px' }}>Real Results, Real Confidence</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>See the transformations achieved by our partner clinics.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
            {[
              { title: 'Hair Transplant', patient: 'David, 34', time: '12 Months Post-op', imgBefore: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400', imgAfter: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=400' },
              { title: 'Rhinoplasty', patient: 'Emma, 29', time: '6 Months Post-op', imgBefore: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400', imgAfter: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
              { title: 'Dental Veneers', patient: 'Michael, 42', time: 'Final Result', imgBefore: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400', imgAfter: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' }
            ].map((item, i) => (
              <div key={i} className="glass" style={{ borderRadius: '24px', overflow: 'hidden', padding: '20px', background: 'white' }}>
                 <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                   <div style={{ flex: 1, position: 'relative' }}>
                     <img src={item.imgBefore} alt="Before" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px' }} />
                     <span style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' }}>Before</span>
                   </div>
                   <div style={{ flex: 1, position: 'relative' }}>
                     <img src={item.imgAfter} alt="After" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px' }} />
                     <span style={{ position: 'absolute', top: '10px', right: '10px', background: '#10b981', color: 'white', fontSize: '12px', padding: '4px 8px', borderRadius: '4px' }}>After</span>
                   </div>
                 </div>
                 <div style={{ textAlign: 'center' }}>
                   <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{item.title}</h3>
                   <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>{item.patient} • {item.time}</p>
                 </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
             <Link to="/search" className="btn-primary" style={{ padding: '16px 32px' }}>See More Transformations</Link>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section style={{ background: 'var(--secondary)', padding: '100px 0', color: 'white' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '42px', color: 'white', marginBottom: '28px' }}>We are where you need us</h2>
              <p style={{ color: '#94a3b8', fontSize: '18px', marginBottom: '40px', lineHeight: '1.6' }}>
                With offices in London, Istanbul, and Dubai, our global team works 24/7 to ensure your medical journey is smooth, safe, and cost-effective.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Award size={20} color="var(--primary)" /> Top 1% Clinics
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>We only work with JCI and ISO accredited hospitals.</p>
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={20} color="var(--primary)" /> Patient Guard
                  </h4>
                  <p style={{ color: '#64748b', fontSize: '14px' }}>Full legal and clinical support throughout your journey.</p>
                </div>
              </div>
              <button 
                className="btn-primary" 
                style={{ marginTop: '40px' }}
                onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}
              >
                Find a Clinic Now
              </button>
            </div>
            <div style={{ position: 'relative' }}>
               <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Global Team" 
                style={{ width: '100%', borderRadius: '40px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive All-Inclusive Packages */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'inline-block', background: '#fef2f2', color: '#ef4444', fontWeight: '700', padding: '6px 12px', borderRadius: '100px', fontSize: '12px', marginBottom: '12px' }}>
              🔥 LIMITED TIME OFFERS
            </div>
            <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px' }}>All-Inclusive Medical Packages</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Treatment + 5★ Hotel + VIP Transfer. No hidden costs.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {[
              { title: 'Premium Hair Transplant', loc: 'Istanbul, Turkey', price: '€1,790', oldPrice: '€2,500', img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600', includes: ['FUE/DHI Method', '3 Nights Hotel', 'VIP Transfer', 'PRP Session'] },
              { title: 'Hollywood Smile Makeover', loc: 'Izmir, Turkey', price: '€3,200', oldPrice: '€4,500', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600', includes: ['20 Zirconia Veneers', '5 Nights Hotel', 'Airport Pickup', 'City Tour'] },
              { title: 'Rhinoplasty (All-In)', loc: 'Antalya, Turkey', price: '€2,600', oldPrice: '€3,200', img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=600', includes: ['Surgery & Meds', '4 Nights Hotel', 'Nurse Visit', 'Post-op Care'] },
            ].map((deal, i) => (
              <div key={i} className="card-hover" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #e2e8f0', background: 'white', position: 'relative' }}>
                <div style={{ position: 'relative', height: '220px' }}>
                  <img src={deal.img} alt={deal.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', background: '#ef4444', color: 'white', fontWeight: '800', padding: '6px 12px', borderRadius: '8px', fontSize: '14px' }}>
                    SAVE 30%
                  </div>
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '20px', marginBottom: '4px' }}>{deal.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin size={14} /> {deal.loc}
                  </p>
                  
                  <div style={{ marginBottom: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {deal.includes.map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#475569' }}>
                        <CheckCircle size={16} color="#10b981" /> {item}
                      </div>
                    ))}
                  </div>

                  <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <div>
                       <span style={{ textDecoration: 'line-through', color: '#94a3b8', fontSize: '14px', display: 'block' }}>{deal.oldPrice}</span>
                       <span style={{ fontSize: '24px', fontWeight: '900', color: '#ef4444' }}>{deal.price}</span>
                     </div>
                     <button className="btn-primary" style={{ padding: '12px 24px', fontSize: '14px' }}>Book Deal</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Quality Standards - Bookimed Trust */}
      <section style={{ padding: '80px 0', background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '20px' }}>Strict Clinic Selection 🛡️</h2>
              <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '30px', lineHeight: '1.6' }}>
                We don't work with everyone. Only top 1% of clinics make it to Sarfea. Our 4-step verification process ensures your safety.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'License Verification', desc: 'We check all government licenses and accreditations (JCI, ISO).', icon: 1 },
                  { title: 'On-Site Inspection', desc: 'Our team visits the clinics anonymously to check hygiene and service.', icon: 2 },
                  { title: 'Doctor Qualifications', desc: 'Verification of diplomas, experience, and international training.', icon: 3 },
                  { title: 'Real Patient Reviews', desc: 'We interview past patients to get the truth about their experience.', icon: 4 }
                ].map((item, i) => (
                   <div key={i} style={{ display: 'flex', gap: '20px' }}>
                     <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'white', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '800', color: 'var(--primary)', flexShrink: 0 }}>
                       {item.icon}
                     </div>
                     <div>
                       <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '6px' }}>{item.title}</h4>
                       <p style={{ fontSize: '14px', color: '#64748b' }}>{item.desc}</p>
                     </div>
                   </div>
                ))}
              </div>
            </div>
            
            <div className="glass" style={{ padding: '40px', borderRadius: '32px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: -20, right: -20, background: '#10b981', color: 'white', padding: '10px 20px', borderRadius: '100px', fontWeight: '700', transform: 'rotate(10deg)' }}>
                100% Verified
              </div>
              <ShieldCheck size={80} color="var(--primary)" style={{ opacity: 0.2, margin: '0 auto 20px' }} />
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>Sarfea Safety Guarantee</h3>
              <p style={{ color: '#64748b', marginBottom: '30px' }}>
                If your clinic cancels or something goes wrong, we guarantee a free replacement or full refund of your deposit.
              </p>
              <button className="btn-outline" style={{ padding: '16px 32px' }}>Read Our Policy</button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: '80px 0', background: 'var(--primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
           <h2 style={{ fontSize: '36px', marginBottom: '16px', color: 'white' }}>Get the Best Deals in Your Inbox</h2>
           <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px' }}>
             Subscribe to receive exclusive package offers, cost guides, and medical travel tips.
           </p>
           <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              style={{ flex: 1, padding: '16px 24px', borderRadius: '100px', border: 'none', outline: 'none', fontSize: '16px' }} 
            />
            <button style={{ padding: '16px 32px', borderRadius: '100px', background: '#0f172a', color: 'white', border: 'none', fontWeight: '700', cursor: 'pointer' }}>
               Subscribe
            </button>
           </div>
           <p style={{ fontSize: '12px', opacity: 0.7, marginTop: '20px' }}>No spam, ever. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Floating CTA Buttons */}
      <div className="floating-cta">
        <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="floating-btn whatsapp animate-float">
          <MessageCircle size={28} />
        </a>
        <div className="floating-btn support">
          <Phone size={28} />
        </div>
      </div>
    </div>
  );
};

export default Home;
