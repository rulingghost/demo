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
  TrendingDown,
  Building2,
  Users
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const Search = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState('clinics');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const [priceRange, setPriceRange] = useState(50000);

  const clinics = [
    {
      id: 1,
      name: "Memorial Şişli Hastanesi",
      location: "İstanbul, Türkiye",
      rating: 4.8,
      reviews: 1240,
      price: 3500,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      operations: "25,000+ Operasyon",
      experience: "25 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["JCI Akreditasyonu", "En İyi Fiyat Garantisi"]
    },
    {
      id: 2,
      name: "Esteworld Estetik Merkezi",
      location: "İstanbul, Türkiye",
      rating: 4.9,
      reviews: 850,
      price: 1800,
      specialty: "Saç Ekimi",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400",
      operations: "50,000+ Hasta",
      experience: "18 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["Temos Onaylı", "VIP Destek"]
    },
    {
      id: 3,
      name: "Medical Park Grubu",
      location: "Antalya, Türkiye",
      rating: 4.7,
      reviews: 2100,
      price: 5000,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&q=80&w=400",
      operations: "100k+ Yıllık Hasta",
      experience: "28 Yıllık Tecrübe",
      medicallyReviewed: false,
      allInclusive: false,
      labels: ["JCI Akreditasyonu", "Çoklu Uzmanlık"]
    },
    {
      id: 4,
      name: "Bumrungrad International",
      location: "Bangkok, Tayland",
      rating: 4.9,
      reviews: 3500,
      price: 1200,
      specialty: "Onkoloji",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      operations: "1.1M Hasta/Yıl",
      experience: "40 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["JCI Akreditasyonu", "Asya'nın En İyisi"]
    },
    {
      id: 5,
      name: "JK Plastik Cerrahi",
      location: "Seul, Güney Kore",
      rating: 4.9,
      reviews: 980,
      price: 4000,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400",
      operations: "10,000+ Operasyon",
      experience: "25 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["K-Beauty Lideri", "ISO Sertifikalı"]
    },
    {
      id: 6,
      name: "Quironsalud Madrid",
      location: "Madrid, İspanya",
      rating: 4.8,
      reviews: 1400,
      price: 9000,
      specialty: "Onkoloji",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=400",
      operations: "En İyi AB Hastanesi",
      experience: "30 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["JCI Akreditasyonu", "Akademik Hastane"]
    },
    {
      id: 7,
      name: "GSD International",
      location: "Milano, İtalya",
      rating: 4.7,
      reviews: 890,
      price: 6500,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400",
      operations: "5,000+ Bariatrik Op.",
      experience: "20 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["Avrupa Mükemmelliği", "Araştırma Merkezi"]
    },
    {
      id: 8,
      name: "Asklepios Klinik Barmbek",
      location: "Hamburg, Almanya",
      rating: 4.9,
      reviews: 2200,
      price: 12000,
      specialty: "Onkoloji",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=400",
      operations: "En İyi Onkologlar",
      experience: "50 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: false,
      labels: ["Alman Titizliği", "Sınıfının En İyisi"]
    },
    {
      id: 9,
      name: "Angeles Hastanesi",
      location: "Tijuana, Meksika",
      rating: 4.6,
      reviews: 450,
      price: 4200,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=400",
      operations: "15,000+ Operasyon",
      experience: "20 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["ABD Komşusu", "Güvenli & Güvenilir"]
    },
    {
      id: 10,
      name: "Dentakay Diş Kliniği",
      location: "İstanbul, Türkiye",
      rating: 4.9,
      reviews: 1850,
      price: 2500,
      specialty: "Diş Hekimliği",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400",
      operations: "30,000+ Gülüş Tasarımı",
      experience: "12 Yıllık Tecrübe",
      medicallyReviewed: true,
      allInclusive: true,
      labels: ["VIP Transfer", "Ömür Boyu Garanti"]
    }
  ];

  const doctors = [
    {
      id: 1,
      name: "Op. Dr. Ömer Buhşem",
      location: "Bursa, Türkiye",
      rating: 4.9,
      reviews: 312,
      price: 4500,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=400",
      clinic: "D'estetica Klinik",
      experience: "22 Yıllık Tecrübe",
      medicallyReviewed: true,
      labels: ["ISAPS Member", "Vaser Lipo Uzmanı"]
    },
    {
      id: 2,
      name: "Prof. Dr. Ayşe Yılmaz",
      location: "İstanbul, Türkiye",
      rating: 4.9,
      reviews: 560,
      price: 8000,
      specialty: "Onkoloji",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      clinic: "Acıbadem Altunizade",
      experience: "30 Yıllık Tecrübe",
      medicallyReviewed: true,
      labels: ["Kanser Cerrahı", "Akademik Lider"]
    },
    {
      id: 3,
      name: "Dr. Can Demir",
      location: "İstanbul, Türkiye",
      rating: 4.7,
      reviews: 215,
      price: 2000,
      specialty: "Saç Ekimi",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400",
      clinic: "Esteworld",
      experience: "12 Yıllık Tecrübe",
      medicallyReviewed: true,
      labels: ["Fue Uzmanı", "DHI Tekniği"]
    },
    {
      id: 4,
      name: "Dr. Leyla Kaya",
      location: "İstanbul, Türkiye",
      rating: 4.9,
      reviews: 180,
      price: 5000,
      specialty: "Cerrahi",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400",
      clinic: "Memorial",
      experience: "15 Yıllık Tecrübe",
      medicallyReviewed: true,
      labels: ["Rinoplasti", "Yüz Estetiği"]
    }
  ];

  const handleSpecialtyChange = (specialty) => {
    setSelectedSpecialties(prev => 
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const currentData = activeTab === 'clinics' ? clinics : doctors;

  const filteredData = currentData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSpecialty = selectedSpecialties.length === 0 || 
                            selectedSpecialties.includes(item.specialty) ||
                            (selectedSpecialties.includes('Her Şey Dahil Paketler') && item.allInclusive);
    const matchesPrice = item.price <= priceRange;
    
    return matchesSearch && matchesSpecialty && matchesPrice;
  });

  return (
    <div style={{ paddingTop: '130px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Advanced Search Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <h1 style={{ fontSize: '32px', marginBottom: '12px', fontWeight: '900', color: 'var(--secondary)' }}>{t('search.heroTitle')}</h1>
          <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '18px' }}>{t('search.heroSub')}</p>
          
          <div className="search-bar-advanced" style={{ boxShadow: 'var(--shadow-lg)' }}>
            <div className="search-field">
              <SearchIcon size={20} color="var(--text-muted)" />
              <input 
                type="text" 
                placeholder={t('search.placeholderTreatment')} 
                style={{ fontSize: '15px' }} 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="search-field">
              <MapPin size={20} color="var(--text-muted)" />
              <input 
                type="text" 
                placeholder={t('search.placeholderLocation')} 
                style={{ fontSize: '15px' }} 
              />
            </div>
            <button className="btn-primary" style={{ padding: '0 32px' }}>{t('search.searchBtn')}</button>
          </div>
        </motion.div>

        {/* Global Price Comparison Widget */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ background: 'white', padding: '24px', borderRadius: '24px', marginBottom: '40px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <TrendingDown color="var(--accent)" />
            <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{t('search.priceComparison')}</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { country: 'Türkiye', price: '$2,500', savings: language === 'tr' ? '%70 Kazanç' : '70% Savings' },
              { country: 'Meksika', price: '$3,800', savings: language === 'tr' ? '%50 Kazanç' : '50% Savings' },
              { country: 'Polonya', price: '$4,200', savings: language === 'tr' ? '%45 Kazanç' : '45% Savings' },
              { country: 'ABD/İngiltere', price: '$12,000', savings: language === 'tr' ? 'Taban Fiyat' : 'Base Price' },
            ].map((p, i) => (
              <div key={i} style={{ padding: '16px', background: i === 0 ? '#f0fdf4' : '#f8fafc', borderRadius: '16px', border: i === 0 ? '1px solid #10b981' : '1px solid transparent' }}>
                <div style={{ fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{p.country}</div>
                <div style={{ fontSize: '20px', fontWeight: '800', color: i === 0 ? 'var(--accent)' : 'var(--text-main)' }}>{p.price}</div>
                <div style={{ fontSize: '11px', color: i === 0 ? '#059669' : 'var(--text-muted)', fontWeight: '700' }}>{p.savings}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '40px' }}>
          
          {/* Sidebar Filters */}
          <aside className="hide-mobile">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass" 
              style={{ padding: '24px', borderRadius: '24px', position: 'sticky', top: '150px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
                <Filter size={20} />
                <h3 style={{ fontSize: '18px', fontWeight: '800' }}>{t('search.filters')}</h3>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', color: 'var(--text-muted)' }}>{t('search.specialties')}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Her Şey Dahil Paketler', 'Cerrahi', 'Diş Hekimliği', 'Saç Ekimi', 'Onkoloji'].map(f => (
                    <label key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer', fontWeight: '500' }}>
                      <input 
                        type="checkbox" 
                        checked={selectedSpecialties.includes(f)}
                        onChange={() => handleSpecialtyChange(f)}
                        style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }} 
                      />
                      {f}
                    </label>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '700', color: 'var(--text-muted)' }}>{t('search.priceRange')}</h4>
                <input 
                  type="range" 
                  min="300" 
                  max="50000" 
                  step="100"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  style={{ width: '100%', accentColor: 'var(--primary)' }} 
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px', fontSize: '12px', color: 'var(--text-muted)' }}>
                  <span>$300</span>
                  <span style={{ fontWeight: '700', color: 'var(--primary)' }}>${priceRange.toLocaleString()}+</span>
                </div>
              </div>

              <button className="btn-primary" style={{ width: '100%' }}>{t('search.applyFilters')}</button>
            </motion.div>

            {/* Support Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{ marginTop: '24px', background: 'var(--secondary)', color: 'white', padding: '24px', borderRadius: '24px' }}
            >
              <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', background: 'var(--primary)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Users size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700' }}>{t('search.cantDecide')}</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>{t('search.expertOnline')}</div>
                </div>
              </div>
              <button style={{ width: '100%', background: 'white', color: 'var(--secondary)', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '700', cursor: 'pointer' }}>
                 {t('search.chatWithExpert')}
              </button>
            </motion.div>
          </aside>

          {/* Main Content */}
          <main>
            {/* Tabs */}
            <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', borderBottom: '1px solid var(--border)', paddingBottom: '15px' }}>
              <button 
                onClick={() => setActiveTab('clinics')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: activeTab === 'clinics' ? '800' : '600',
                  color: activeTab === 'clinics' ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '8px 16px'
                }}
              >
                Klinikler {activeTab === 'clinics' && <motion.div layoutId="tab-underline" style={{ position: 'absolute', bottom: '-15px', left: 0, right: 0, height: '3px', background: 'var(--primary)', borderRadius: '3px' }} />}
              </button>
              <button 
                onClick={() => setActiveTab('doctors')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: activeTab === 'doctors' ? '800' : '600',
                  color: activeTab === 'doctors' ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '8px 16px'
                }}
              >
                Doktorlar {activeTab === 'doctors' && <motion.div layoutId="tab-underline" style={{ position: 'absolute', bottom: '-15px', left: 0, right: 0, height: '3px', background: 'var(--primary)', borderRadius: '3px' }} />}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800' }}>{filteredData.length} {t('search.found')}</h2>
              <select style={{ padding: '10px 16px', borderRadius: '12px', border: '1px solid var(--border)', fontSize: '14px', outline: 'none' }}>
                <option>{t('search.sort.mostReviewed')}</option>
                <option>{t('search.sort.priceLow')}</option>
                <option>{t('search.sort.priceHigh')}</option>
                <option>{t('search.sort.bestRated')}</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {filteredData.map((item, i) => (
                <motion.div 
                  key={item.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass card-hover" 
                  style={{ display: 'flex', overflow: 'hidden', borderRadius: '24px', border: '1px solid var(--border)' }}
                >
                  <div style={{ width: '320px', minWidth: '320px', position: 'relative' }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '15px', left: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {item.medicallyReviewed && (
                        <div className="badge-review" style={{ background: 'white', fontWeight: '700' }}>
                          <CheckCircle size={10} color="var(--accent)" /> {t('search.verified')}
                        </div>
                      )}
                      {item.allInclusive && (
                        <div className="badge-all-inclusive" style={{ fontWeight: '700' }}>{t('search.allInclusive')}</div>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ padding: '30px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <h3 style={{ fontSize: '22px', fontWeight: '800' }}>{item.name}</h3>
                          <ShieldCheck size={18} color="var(--primary)" />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--text-muted)', fontSize: '14px' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <MapPin size={14} /> {item.location}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                            <Star size={14} fill="#f59e0b" color="#f59e0b" /> {item.rating} ({item.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{t('search.estimatedCost')}</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--primary)' }}>${item.price.toLocaleString()} <span style={{fontSize: '14px', color: 'var(--text-muted)', fontWeight: '500'}}>{t('search.from')}</span></div>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', margin: '20px 0', padding: '15px 0', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--secondary)' }}>
                        <Building2 size={16} color="var(--primary)" />
                        <span>{item.operations || item.clinic}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: '600', color: 'var(--secondary)' }}>
                        <Clock size={16} color="var(--primary)" />
                        <span>{item.experience}</span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                      {item.labels.map(l => (
                        <span key={l} style={{ fontSize: '12px', fontWeight: '700', color: '#475569', background: '#f1f5f9', padding: '6px 14px', borderRadius: '100px' }}>{l}</span>
                      ))}
                    </div>

                    <div style={{ marginTop: 'auto', display: 'flex', gap: '15px' }}>
                      <Link to={activeTab === 'clinics' ? `/clinic/${item.id}` : `/doctor/${item.id}`} className="btn-primary" style={{ flex: 1, textAlign: 'center' }}>
                         {t('search.getFreeQuote')}
                      </Link>
                      <Link to={activeTab === 'clinics' ? `/clinic/${item.id}` : `/doctor/${item.id}`} className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                         {t('search.details')} <ChevronRight size={18} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
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
        <span style={{ fontWeight: '700', fontSize: '14px' }}>{t('search.stickyQuiz')}</span>
      </div>
    </div>
  );
};

export default Search;
