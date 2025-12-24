import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search as SearchIcon, 
  Filter, 
  Star, 
  MapPin, 
  ChevronRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  DollarSign,
  TrendingDown,
  Info,
  Building2,
  Users
} from 'lucide-react';

const Search = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [showQuiz, setShowQuiz] = useState(false);

  const clinics = [
    {
      id: 1,
      name: "Memorial Şişli Hospital",
      location: "Istanbul, Turkey",
      rating: 4.8,
      reviews: 1240,
      specialty: "Dental Care & Aesthetics",
      price: "from $3,500",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      operations: "25,000+ Operations",
      experience: "25 Years Experience",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["JCI Accredited", "Best Price Guarantee"]
    },
    {
      id: 2,
      name: "Esteworld Aesthetic Center",
      location: "Istanbul, Turkey",
      rating: 4.9,
      reviews: 850,
      specialty: "Hair Transplant",
      price: "from $1,800",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400",
      operations: "50,000+ Patients",
      experience: "18 Years Experience",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["Temos Certified", "VIP Support"]
    },
    {
      id: 3,
      name: "Medical Park Group",
      location: "Antalya, Turkey",
      rating: 4.7,
      reviews: 2100,
      specialty: "Oncology & Orthopedics",
      price: "from $5,000",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400",
      operations: "100k+ Annual Patients",
      experience: "28 Years Experience",
      medicallyReviewed: false,
      allInclusive: false,
      labels: ["JCI Accredited", "Multiple Specialties"]
    },
    {
      id: 4,
      name: "Bumrungrad International",
      location: "Bangkok, Thailand",
      rating: 4.9,
      reviews: 3500,
      specialty: "Full Check-up & Vitality",
      price: "from $1,200",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b9af922?auto=format&fit=crop&q=80&w=400",
      operations: "1.1M Patients/Year",
      experience: "40 Years Experience",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["JCI Accredited", "Asia's Best"]
    },
    {
      id: 5,
      name: "JK Plastic Surgery Center",
      location: "Seoul, South Korea",
      rating: 4.9,
      reviews: 980,
      specialty: "Plastic Surgery",
      price: "from $4,000",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
      operations: "10,000+ Operations",
      experience: "25 Years Experience",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["K-Beauty Leader", "ISO Certified"]
    },
    {
      id: 6,
      name: "Quironsalud Madrid",
      location: "Madrid, Spain",
      rating: 4.8,
      reviews: 1400,
      specialty: "Cardiology & Neurology",
      price: "from $9,000",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=400",
      operations: "Top EU Hospital",
      experience: "30 Years Experience",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["JCI Accredited", "Academic Hospital"]
    },
    {
      id: 7,
      name: "GSD International",
      location: "Milan, Italy",
      rating: 4.7,
      reviews: 890,
      specialty: "Obesity Surgery",
      price: "from $6,500",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      operations: "5,000+ Bariatric Ops",
      experience: "20 Years Experience",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["European Excellence", "Research Center"]
    },
    {
      id: 8,
      name: "Asklepios Klinik Barmbek",
      location: "Hamburg, Germany",
      rating: 4.9,
      reviews: 2200,
      specialty: "Oncology",
      price: "from $12,000",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400",
      operations: "Top Oncologists",
      experience: "50 Years Experience",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["German Precision", "Best In Class"]
    },
    {
      id: 9,
      name: "Angeles Hospital",
      location: "Tijuana, Mexico",
      rating: 4.6,
      reviews: 450,
      specialty: "Bariatric Surgery",
      price: "from $4,200",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=400",
      operations: "15,000+ Operations",
      experience: "20 Years Experience",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["USA Neighbor", "Safe & Reliable"]
    },
    {
      id: 10,
      name: "KCM Clinic",
      location: "Jelenia Góra, Poland",
      rating: 4.9,
      reviews: 620,
      specialty: "Spinal Surgery",
      price: "from $6,500",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      operations: "10,000+ Operations",
      experience: "15 Years Experience",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["EU Standard", "Top Spinal Care"]
    },
    {
      id: 11,
      name: "Bumrungrad International",
      location: "Bangkok, Thailand",
      rating: 4.9,
      reviews: 3200,
      specialty: "Check-up & Cardiology",
      price: "from $300",
      image: "https://images.unsplash.com/photo-1587351021759-3e566b9af922?auto=format&fit=crop&q=80&w=400",
      operations: "1.1M Patients/Year",
      experience: "40 Years Experience",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["JCI Accredited", "Asia No. 1"]
    }
  ];

  return (
    <div style={{ paddingTop: '130px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Advanced Search Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '12px' }}>Find the Best Clinics Worldwide</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>1,500+ verified hospitals, 6,000+ reviews, 0% commission.</p>
          
          <div className="search-bar-advanced">
            <div className="search-field">
              <SearchIcon size={20} color="var(--text-muted)" />
              <input type="text" placeholder="Diagnosis or Procedure (e.g. Dental Implants)" />
            </div>
            <div className="search-field">
              <MapPin size={20} color="var(--text-muted)" />
              <input type="text" placeholder="Country or City" />
            </div>
            <button className="btn-primary" style={{ padding: '0 32px' }}>Search</button>
          </div>
        </div>

        {/* Global Price Comparison Widget */}
        <div style={{ background: 'white', padding: '24px', borderRadius: '24px', marginBottom: '40px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <TrendingDown color="var(--accent)" />
            <h3 style={{ fontSize: '18px' }}>Procedure Price Comparison by Country</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { country: 'Turkey', price: '$2,500', savings: 'Save up to 70%' },
              { country: 'Mexico', price: '$3,800', savings: 'Save up to 50%' },
              { country: 'Poland', price: '$4,200', savings: 'Save up to 45%' },
              { country: 'USA/UK', price: '$12,000', savings: 'Base Price' },
            ].map((p, i) => (
              <div key={i} style={{ padding: '16px', background: i === 0 ? '#f0fdf4' : '#f8fafc', borderRadius: '16px', border: i === 0 ? '1px solid #10b981' : '1px solid transparent' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{p.country}</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: i === 0 ? 'var(--accent)' : 'var(--text-main)' }}>{p.price}</div>
                <div style={{ fontSize: '11px', color: i === 0 ? '#059669' : 'var(--text-muted)', fontWeight: '700' }}>{p.savings}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
          
          {/* Sidebar Filters */}
          <aside className="hide-mobile">
            <div className="glass" style={{ padding: '24px', borderRadius: '24px', position: 'sticky', top: '150px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <Filter size={20} />
                <h3 style={{ fontSize: '18px' }}>Filters</h3>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Specialties</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['All-Inclusive Packages', 'Surgery', 'Dentistry', 'Hair Transplant', 'Oncology'].map(f => (
                    <label key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}>
                      <input type="checkbox" style={{ width: '18px', height: '18px' }} />
                      {f}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Price Range</h4>
                <input type="range" style={{ width: '100%' }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
                  <span>$500</span>
                  <span>$50,000+</span>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%' }}>Apply Filters</button>
            </div>

            {/* Support Card */}
            <div style={{ marginTop: '24px', background: 'var(--secondary)', color: 'white', padding: '24px', borderRadius: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700' }}>Need Help Deciding?</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Our coordinators are online.</div>
                </div>
              </div>
              <button style={{ width: '100%', background: 'white', color: 'var(--secondary)', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}>
                Chat with Specialist
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px' }}>Found {clinics.length} best clinics</h2>
              <select style={{ padding: '8px 16px', borderRadius: '8px', border: '1px solid var(--border)' }}>
                <option>Most Reviewed</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Highest Rated</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {clinics.map(clinic => (
                <div key={clinic.id} className="glass card-hover" style={{ display: 'flex', overflow: 'hidden', borderRadius: '24px', border: '1px solid var(--border)' }}>
                  <div style={{ width: '320px', minWidth: '320px', position: 'relative' }}>
                    <img src={clinic.image} alt={clinic.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '15px', left: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {clinic.medicallyReviewed && (
                        <div className="badge-review" style={{ background: 'white' }}>
                          <CheckCircle size={10} color="var(--accent)" /> Medically Reviewed
                        </div>
                      )}
                      {clinic.allInclusive && (
                        <div className="badge-all-inclusive">All-Inclusive</div>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <h3 style={{ fontSize: '22px' }}>{clinic.name}</h3>
                          <ShieldCheck size={18} color="var(--primary)" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin size={14} /> {clinic.location}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Star size={14} fill="#f59e0b" color="#f59e0b" /> {clinic.rating} ({clinic.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Estimated Price</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>{clinic.price}</div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0', padding: '15px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                        <Building2 size={16} color="var(--primary)" />
                        <span>{clinic.operations}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px' }}>
                        <Clock size={16} color="var(--primary)" />
                        <span>{clinic.experience}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                      {clinic.labels.map(l => (
                        <span key={l} style={{ fontSize: '12px', fontWeight: '600', color: '#475569', background: '#f1f5f9', padding: '4px 12px', borderRadius: '100px' }}>{l}</span>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: '15px' }}>
                      <Link to={`/clinic/${clinic.id}`} className="btn-primary" style={{ flex: 1 }}>
                        Get Free Quote
                      </Link>
                      <Link to={`/clinic/${clinic.id}`} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        View Details <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Sticky Quiz Widget */}
      <div 
        onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}
        style={{ 
          position: 'fixed', 
          bottom: '100px', 
          right: '-20px', 
          background: 'var(--secondary)', 
          color: 'white', 
          padding: '12px 30px 12px 20px', 
          borderRadius: '100px 0 0 100px',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 900,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.right = '0'}
        onMouseLeave={e => e.currentTarget.style.right = '-20px'}
      >
        <div style={{ width: '30px', height: '30px', background: 'var(--primary)', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Star size={16} fill="white" />
        </div>
        <span style={{ fontWeight: '700', fontSize: '14px' }}>Get Clinic Match</span>
      </div>
    </div>
  );
};

export default Search;
