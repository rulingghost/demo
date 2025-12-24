import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Building2, ChevronRight, Search, ShieldCheck } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    { 
      id: 'tarik-akar', 
      name: "Dr. Tarik Akar", 
      exp: "18 Years", 
      field: "Gastroenterologist", 
      clinic: "Liv Hospital Ulus", 
      location: "Istanbul",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400", 
      badge: "European Board Certified",
      rating: 4.9,
      reviews: 124
    },
    { 
      id: 'bulent-cihantimur', 
      name: "Dr. Bülent Cihantimur", 
      exp: "25 Years", 
      field: "Plastic Surgery", 
      clinic: "Estetik International", 
      location: "Istanbul",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400", 
      badge: "Global Talent Award",
      rating: 5.0,
      reviews: 856
    },
    { 
      id: 'mehmet-erdogan', 
      name: "Dr. Mehmet Erdoğan", 
      exp: "14 Years", 
      field: "Dental Implants", 
      clinic: "Smile Center", 
      location: "Antalya",
      img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400", 
      badge: "Expert Implantologist",
      rating: 4.8,
      reviews: 432
    }
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Header Section */}
      <section style={{ background: 'var(--secondary)', padding: '60px 0', color: 'white', marginBottom: '40px' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>
            <Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'white' }}>Doctors</span>
          </div>
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Top-Rated Medical Specialists</h1>
          <p style={{ fontSize: '18px', opacity: 0.8, maxWidth: '700px' }}>
            Browse through our verified network of world-class doctors and surgeons across Turkey, Mexico, and Thailand. 
          </p>
        </div>
      </section>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '30px' }}>
          {doctors.map((doc) => (
            <div key={doc.id} className="glass card-hover" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '30px', padding: '30px', borderRadius: '32px', background: 'white' }}>
              {/* Image */}
              <div style={{ width: '180px', height: '180px', position: 'relative' }}>
                <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }} />
                <div style={{ position: 'absolute', bottom: '-10px', right: '-10px', background: '#10b981', color: 'white', padding: '6px', borderRadius: '50%', border: '4px solid white' }}>
                  <ShieldCheck size={18} />
                </div>
              </div>

              {/* Details */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span style={{ background: '#e0f2fe', color: '#0369a1', fontSize: '11px', fontWeight: '800', padding: '4px 10px', borderRadius: '100px' }}>{doc.badge.toUpperCase()}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#fbbf24', fontWeight: '700' }}>
                    <Star size={14} fill="#fbbf24" /> {doc.rating} ({doc.reviews} Reviews)
                  </div>
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{doc.name}</h3>
                <p style={{ fontSize: '16px', color: 'var(--primary)', fontWeight: '700', marginBottom: '16px' }}>{doc.field}</p>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
                    <Building2 size={16} color="var(--primary)" /> {doc.clinic}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
                    <MapPin size={16} color="var(--primary)" /> {doc.location}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#64748b' }}>
                    <Search size={16} color="var(--primary)" /> {doc.exp} Experience
                  </div>
                </div>
              </div>

              {/* Action */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center', minWidth: '200px' }}>
                <Link to={`/doctor/${doc.id}`} className="btn-primary" style={{ textAlign: 'center', padding: '14px' }}>View Profile</Link>
                <button 
                  className="btn-outline" 
                   onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}
                  style={{ padding: '14px' }}
                >
                  Get a Free Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
