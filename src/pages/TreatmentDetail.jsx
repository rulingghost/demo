import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, MapPin, Star, CheckCircle, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';

const treatmentData = {
  'dental-implants': {
    title: 'Dental Implants',
    description: 'Restore your smile with premium titanium implants. Lifetime warranty available.',
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800',
    count: 145
  },
  'rhinoplasty': {
    title: 'Rhinoplasty (Nose Job)',
    description: 'Achieve facial harmony with our board-certified plastic surgeons.',
    image: 'https://images.unsplash.com/photo-1542731441-137a1f592aaa?auto=format&fit=crop&q=80&w=800',
    count: 82
  },
  'hair-transplant': {
    title: 'Hair Transplant',
    description: 'Permanent results with FUE & DHI techniques. All-inclusive packages.',
    image: 'https://images.unsplash.com/photo-1615568434720-69238383e20e?auto=format&fit=crop&q=80&w=800',
    count: 120
  },
  'breast-cancer': {
    title: 'Breast Cancer Treatment',
    description: 'Multidisciplinary approach with top oncologists and latest technology.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    count: 45
  },
  'ivf': {
    title: 'IVF & Fertility',
    description: 'High success rates tailored to your age and medical history.',
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800',
    count: 60
  }
};

const TreatmentDetail = () => {
  const { slug } = useParams();
  const info = treatmentData[slug] || {
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
    description: 'Find the best clinics and costs for this treatment in 2025. Verified reviews and expert evaluations.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    count: '50+'
  };

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#f8fafc' }}>
      
      {/* Breadcrumb & Search Header */}
      <div style={{ background: 'white', borderBottom: '1px solid var(--border)', padding: '20px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <Link to="/" style={{ color: 'var(--text-muted)' }}>Home</Link> / 
            <Link to="/search" style={{ color: 'var(--text-muted)' }}>Treatments</Link> / 
            <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{info.title}</span>
          </div>

          <div style={{ display: 'flex', gap: '15px', maxWidth: '800px' }}>
            <div style={{ flex: 1, position: 'relative' }}>
               <Search size={20} style={{ position: 'absolute', left: '15px', top: '15px', color: 'var(--text-muted)' }} />
               <input 
                 type="text" 
                 defaultValue={info.title}
                 style={{ width: '100%', padding: '14px 14px 14px 45px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', fontWeight: '600' }} 
               />
            </div>
            <div style={{ flex: 1, position: 'relative' }}>
               <MapPin size={20} style={{ position: 'absolute', left: '15px', top: '15px', color: 'var(--text-muted)' }} />
               <select style={{ width: '100%', padding: '14px 14px 14px 45px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '15px', background: 'white', appearance: 'none' }}>
                 <option>All Countries</option>
                 <option>Turkey</option>
                 <option>Thailand</option>
                 <option>Germany</option>
                 <option>Mexico</option>
               </select>
            </div>
            <button className="btn-primary" style={{ padding: '0 30px' }}>Search</button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '10px' }}>
                Advertiser disclosure <span style={{ cursor: 'pointer', borderBottom: '1px dashed #94a3b8' }}>ⓘ</span>
              </div>
              <h1 style={{ fontSize: '42px', fontWeight: '800', lineHeight: '1.2', marginBottom: '24px', color: '#0f172a' }}>
                Discover the Best Clinics and Costs for <span style={{ color: 'var(--primary)' }}>{info.title}</span> in 2025
              </h1>
              <p style={{ fontSize: '18px', color: '#475569', lineHeight: '1.6', marginBottom: '30px' }}>
                {info.description} The ranking is based on patient choices at Sarfea, verified reviews, clinic performance, and expert evaluations.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
                <button className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }} onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}>
                  Get Free Personalized Offer
                </button>
                <div style={{ display: 'flex', alignItems: 'center', gap: '-10px' }}>
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '3px solid white', marginLeft: i > 0 ? '-10px' : 0 }} />
                  ))}
                  <span style={{ marginLeft: '10px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>
                    {info.count} people asked today
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '30px', borderTop: '1px solid #e2e8f0', paddingTop: '30px' }}>
                <div>
                   <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>1,500+</div>
                   <div style={{ fontSize: '13px', color: '#64748b' }}>Verified Clinics</div>
                </div>
                <div>
                   <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>98%</div>
                   <div style={{ fontSize: '13px', color: '#64748b' }}>Satisfaction Rate</div>
                </div>
                <div>
                   <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>24/7</div>
                   <div style={{ fontSize: '13px', color: '#64748b' }}>Support</div>
                </div>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img 
                src={info.image} 
                alt={info.title} 
                style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-xl)' }} 
              />
              <div style={{ position: 'absolute', bottom: '30px', left: '30px', background: 'rgba(255,255,255,0.95)', padding: '20px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '50px', height: '50px', background: '#ecfccb', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={28} color="#65a30d" />
                </div>
                <div>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>Medically Verified</div>
                  <div style={{ fontSize: '12px', color: '#64748b' }}>Content reviewed by Dr. Ergin Er</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Clinics List */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: '28px', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <CheckCircle color="var(--primary)" /> Top Recommended Clinics for {info.title}
          </h2>
          
          <div style={{ display: 'grid', gap: '30px' }}>
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass" style={{ padding: '30px', borderRadius: '24px', display: 'grid', gridTemplateColumns: '300px 1fr auto', gap: '30px' }}>
                <div style={{ position: 'relative' }}>
                  <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '16px' }} />
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#10b981', color: 'white', fontSize: '11px', fontWeight: '700', padding: '4px 8px', borderRadius: '4px' }}>
                    SUPERB 9.8
                  </div>
                </div>
                
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '20px' }}>Memorial Bahçelievler Hospital</h3>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
                    </div>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '16px' }}>Istanbul, Turkey • 15km from airport</p>
                  
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                     <span style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>JCI Accredited</span>
                     <span style={{ background: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#475569' }}>ISO 9001</span>
                     <span style={{ background: '#ecfdf5', padding: '6px 12px', borderRadius: '8px', fontSize: '13px', fontWeight: '600', color: '#059669' }}>Free Transfer</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <img src="https://i.pravatar.cc/100?img=5" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                    <div style={{ fontSize: '14px' }}>
                      <span style={{ fontWeight: '700', display: 'block' }}>Dr. Ali Vefa</span>
                      <span style={{ color: 'var(--text-muted)' }}>Lead Surgeon • 20 Years Exp.</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '200px', borderLeft: '1px solid var(--border)', paddingLeft: '30px' }}>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>Starting from</div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: 'var(--primary)', marginBottom: '16px' }}>$2,450</div>
                  <button className="btn-primary" style={{ width: '100%', marginBottom: '10px' }}>Get Offer</button>
                  <button className="btn-outline" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <MessageCircle size={16} /> WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/search" className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}>
              View All 140+ Clinics <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default TreatmentDetail;
