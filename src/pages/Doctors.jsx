import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Building2, ChevronRight, Search, ShieldCheck, GraduationCap, Video } from 'lucide-react';

const Doctors = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // all, instructor, consultant
  
  const doctors = [
    { 
      id: 'instructor-1', 
      name: "Kıdemli Eğitmen", 
      exp: "20+ Yıl", 
      field: "Plastik Cerrahi & Anatomi", 
      clinic: "Doctora Academy", 
      location: "İstanbul",
      img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400", 
      badge: "Master Eğitmen",
      rating: 5.0,
      reviews: 120,
      isInstructor: true,
      isConsultant: true
    },
    { 
      id: 'instructor-2', 
      name: "Misafir Öğretim Üyesi", 
      exp: "15 Yıl", 
      field: "Yüz Estetiği", 
      clinic: "Londra Ofisi", 
      location: "Londra",
      img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400", 
      badge: "Uluslararası Fellow",
      rating: 4.9,
      reviews: 85,
      isInstructor: true,
      isConsultant: false
    },
    { 
      id: 'consultant-1', 
      name: "Klinik Danışmanı", 
      exp: "12 Yıl", 
      field: "Medikal Onkoloji & Tele-Tıp", 
      clinic: "Online Konsültasyon", 
      location: "Online",
      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=400", 
      badge: "Tele-Tıp Uzmanı",
      rating: 4.8,
      reviews: 210,
      isInstructor: false,
      isConsultant: true
    }
  ];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.field.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'all' 
                        ? true 
                        : filterType === 'instructor' ? doc.isInstructor 
                        : doc.isConsultant;
    return matchesSearch && matchesType;
  });

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '80px', paddingTop: '100px' }}>
      {/* Header Section */}
      <section style={{ padding: '0 0 40px', color: 'var(--secondary)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', margin: '0 0 40px' }}>
             <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Akademik Kadromuz</h1>
             <p style={{ fontSize: '18px', color: '#64748b' }}>
               Alanında uzman eğitmenlerimiz ve uluslararası danışmanlarımız ile tanışın.
             </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
             {/* Filter Tabs */}
             <div style={{ display: 'flex', background: 'white', padding: '6px', borderRadius: '14px', border: '1px solid var(--border)' }}>
                {['Tümü', 'Eğitmen', 'Danışman'].map((type, idx) => {
                   const typeVal = idx === 0 ? 'all' : idx === 1 ? 'instructor' : 'consultant';
                   return (
                   <button
                     key={typeVal}
                     onClick={() => setFilterType(typeVal)}
                     style={{
                        padding: '10px 24px',
                        borderRadius: '10px',
                        border: 'none',
                        background: filterType === typeVal ? 'var(--secondary)' : 'transparent',
                        color: filterType === typeVal ? 'white' : '#64748b',
                        fontWeight: '700',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        transition: 'all 0.2s'
                     }}
                   >
                      {type}
                   </button>
                   );
                })}
             </div>

             {/* Search */}
             <div style={{ position: 'relative', width: '300px' }}>
               <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
               <input 
                 type="text" 
                 placeholder="İsim veya uzmanlık ara..." 
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 style={{
                   width: '100%',
                   padding: '14px 20px 14px 44px',
                   borderRadius: '12px',
                   border: '1px solid var(--border)',
                   fontSize: '14px',
                   outline: 'none',
                   background: 'white'
                 }}
               />
             </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
          {filteredDoctors.map((doc) => (
            <div key={doc.id} className="glass card-hover" style={{ padding: '24px', borderRadius: '32px', background: 'white', display: 'flex', flexDirection: 'column' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                 <div style={{ width: '80px', height: '80px', borderRadius: '24px', overflow: 'hidden' }}>
                    <img src={doc.img} alt={doc.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                 </div>
                 <div style={{ display: 'flex', gap: '8px' }}>
                    {doc.isInstructor && <div title="Eğitmen" style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#dbeafe', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><GraduationCap size={18} /></div>}
                    {doc.isConsultant && <div title="Danışman" style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#dcfce7', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Video size={18} /></div>}
                 </div>
               </div>

              <div>
                 <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '4px' }}>{doc.name}</h3>
                 <p style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '700', marginBottom: '12px' }}>{doc.field}</p>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#fbbf24', fontWeight: '700', marginBottom: '20px' }}>
                    <Star size={14} fill="#fbbf24" /> {doc.rating} ({doc.reviews} Değerlendirme)
                 </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '10px' }}>
                 <Link to={`/doctor/${doc.id}`} className="btn-outline" style={{ flex: 1, textAlign: 'center', padding: '10px', fontSize: '14px' }}>Profil</Link>
                 {doc.isConsultant && <Link to="/second-opinion" className="btn-primary" style={{ flex: 2, textAlign: 'center', padding: '10px', fontSize: '14px' }}>Randevu Al</Link>}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
