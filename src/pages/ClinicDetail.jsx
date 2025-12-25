import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, 
  MapPin, 
  CheckCircle, 
  ShieldCheck, 
  MessageCircle, 
  ChevronRight, 
  Building2, 
  Globe, 
  Calendar, 
  Award,
  Clock,
  Info,
  Truck,
  Hotel,
  UserCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const ClinicDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const clinic = {
    name: "Memorial Şişli Hastanesi",
    location: "İstanbul, Türkiye",
    rating: 4.8,
    reviews: 1240,
    established: "2000",
    operations: "25b+ Yıllık Operasyon",
    accreditations: ["JCI Akreditasyonu", "ISO 9001", "Temos Sertifikası"],
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581594634339-c2901ce27bac?auto=format&fit=crop&q=80&w=600"
    ],
    doctors: [
      { name: "Dr. Ergin Er", role: "Baş Cerrah", exp: "22 Yıl", specialty: "Yüz Estetiği", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" },
      { name: "Dr. Ayşe Yılmaz", role: "Diş Hekimi", exp: "15 Yıl", specialty: "İmplantoloji", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200" }
    ],
    prices: [
      { item: "Zirkonyum Kaplama", turkey: "$180", uk: "$850", savings: "%78" },
      { item: "Tüm Ağız İmplant", turkey: "$4,500", uk: "$18,000", savings: "%75" },
      { item: "Hollywood Gülüşü (20 diş)", turkey: "$3,200", uk: "$12,000", savings: "%73" }
    ]
  };

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Header Info */}
      <motion.section 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid var(--border)' }}
      >
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'white', background: 'var(--primary)', padding: '4px 12px', borderRadius: '100px' }}>DOCTORA ONAYLI</span>
                <span className="badge-verified" style={{ fontWeight: '700' }}><ShieldCheck size={14} /> JCI Akreditasyonu</span>
              </div>
              <h1 style={{ fontSize: '36px', marginBottom: '8px', fontWeight: '900' }}>{clinic.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)', fontSize: '15px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={18} /> {clinic.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={18} fill="#f59e0b" color="#f59e0b" /> {clinic.rating} ({clinic.reviews} Yorum)</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={18} /> Kur. {clinic.established}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px', fontWeight: '500' }}>Ücretsiz Transfer & Otel Dahil</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}><MessageCircle size={18} /> Sohbet Et</button>
                <button 
                  className="btn-primary" 
                  style={{ padding: '12px 32px' }}
                  onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Ücretsiz Teklif Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '40px' }}>
          
          {/* Main Content Area */}
          <div>
            {/* Gallery */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', height: '450px', marginBottom: '40px', borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}
            >
              <img src={clinic.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Clinic Main" />
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '15px' }}>
                <img src={clinic.images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Clinic View" />
                <div style={{ position: 'relative' }}>
                  <img src={clinic.images[2]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Clinic View 2" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '18px' }}>+12 Fotoğraf</div>
                </div>
              </div>
            </motion.div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', gap: '40px', marginBottom: '40px', position: 'sticky', top: '100px', background: '#f8fafc', zIndex: 10, padding: '10px 0' }}>
              {['Genel Bakış', 'Fiyatlar', 'Doktorlar', 'Yorumlar', 'SSS'].map(tab => (
                <button 
                  key={tab}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    borderBottom: activeTab === tab.toLowerCase() ? '3px solid var(--primary)' : '3px solid transparent',
                    padding: '10px 0',
                    fontSize: '16px',
                    fontWeight: '700',
                    color: activeTab === tab.toLowerCase() ? 'var(--primary)' : 'var(--text-muted)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              id="overview" 
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: '800' }}>{clinic.name} Hakkında</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Building2 size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>25,000+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Başarılı Operasyon</div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Award size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>JCI Sertifikalı</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Kalite Standardı</div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Globe size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700', fontSize: '18px' }}>90+ Ülke</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Hasta Kaynağı</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                Memorial Sağlık Grubu, 92 ülkeden hastaya hizmet vermektedir. JCI Akreditasyon Belgesi'ni alan Türkiye'de ilk, dünyada 21. hastanedir.
                Organ Nakli, Tüp Bebek, Genetik, Kalp Damar Cerrahisi ve Onkoloji alanlarında dünyaca ünlü mükemmeliyet merkezlerine ev sahipliği yapmaktadır.
              </p>
            </motion.div>

            {/* Price List Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              id="prices" 
              style={{ marginBottom: '60px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '800' }}>İşlem Fiyatları</h2>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}><Info size={14} /> Fiyatlar temsilidir</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr>
                    <th style={{ padding: '20px', textAlign: 'left', fontSize: '15px' }}>İşlem</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '15px' }}>{clinic.name}'de</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '15px' }}>ABD / İngiltere'de</th>
                    <th style={{ padding: '20px', textAlign: 'center', fontSize: '15px' }}>Kazancınız</th>
                  </tr>
                </thead>
                <tbody>
                  {clinic.prices.map((p, i) => (
                    <tr key={i} style={{ borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '20px', fontWeight: '600', color: 'var(--secondary)' }}>{p.item}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'var(--primary)', fontWeight: '800', fontSize: '18px' }}>{p.turkey}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{p.uk}</td>
                      <td style={{ padding: '20px', textAlign: 'center' }}>
                        <span style={{ background: '#dcfce7', color: '#166534', padding: '6px 14px', borderRadius: '100px', fontWeight: '700', fontSize: '14px' }}>{p.savings}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Doctors Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              id="doctors" 
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{ fontSize: '28px', marginBottom: '24px', fontWeight: '800' }}>Uzmanlarla Tanışın</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {clinic.doctors.map((doc, i) => (
                  <div key={i} className="glass hover-lift" style={{ display: 'flex', gap: '20px', padding: '24px', borderRadius: '24px', cursor: 'pointer' }}>
                    <img src={doc.img} alt={doc.name} style={{ width: '100px', height: '100px', borderRadius: '50px', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '4px', fontWeight: '700' }}>{doc.name}</h4>
                      <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>{doc.role}</p>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {doc.exp} Tecrübe</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} /> {doc.specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* All-Inclusive Details */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              style={{ background: 'var(--secondary)', color: 'white', padding: '40px', borderRadius: '32px', marginBottom: '60px' }}
            >
              <h3 style={{ fontSize: '24px', marginBottom: '30px', color: 'white', fontWeight: '800' }}>Uluslararası Bakım Paketi Dahil</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px' }}>
                <div style={{ textAlign: 'center' }}>
                  <Truck size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700', marginBottom: '4px' }}>VIP Transfer</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Havalimanı-Otel-Klinik</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Hotel size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700', marginBottom: '4px' }}>Lüks Konaklama</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>4/5 Yıldızlı Otel</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Globe size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700', marginBottom: '4px' }}>Tercüman</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Ana Dil Desteği</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <UserCheck size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700', marginBottom: '4px' }}>Yerel Asistan</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>7/24 Hasta Konsiyerji</div>
                </div>
              </div>
            </motion.div>

            {/* Related Clinics */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px', fontWeight: '800' }}>İlginizi Çekebilecek Benzer Klinikler</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {[
                  { name: "Esteworld", location: "İstanbul", rating: 4.9, img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" },
                  { name: "Acıbadem", location: "İstanbul", rating: 4.8, img: "https://images.unsplash.com/photo-1587351021759-3e566b9af922?auto=format&fit=crop&q=80&w=400" },
                  { name: "Medical Park", location: "Antalya", rating: 4.7, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" }
                ].map((c, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5 }}
                    className="glass card-hover" 
                    style={{ padding: '20px', borderRadius: '20px', display: 'flex', gap: '15px', alignItems: 'center', cursor: 'pointer' }}
                  >
                    <img src={c.img} alt={c.name} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '16px', marginBottom: '4px', fontWeight: '700' }}>{c.name}</h4>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{c.location}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700' }}>
                        <Star size={12} fill="#f59e0b" color="#f59e0b" /> {c.rating}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Sticky Form */}
          <aside id="quote-form">
            <div style={{ position: 'sticky', top: '100px' }}>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="glass" 
                style={{ padding: '30px', borderRadius: '32px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--primary)' }}
              >
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px', fontWeight: '800' }}>Ücretsiz Teklif İste</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Ortalama yanıt süresi: 2 saat</p>
                </div>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input 
                    type="text" 
                    placeholder="Adınız Soyadınız" 
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'white' }}
                  />
                  <input 
                    type="email" 
                    placeholder="E-posta Adresiniz" 
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'white' }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <select style={{ width: '80px', padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }}>
                      <option>🇹🇷 +90</option>
                      <option>🇺🇸 +1</option>
                      <option>🇬🇧 +44</option>
                    </select>
                    <input 
                      type="tel" 
                      placeholder="Telefon Numarası" 
                      style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'white' }}
                    />
                  </div>
                  <textarea 
                    placeholder="Tedavi ihtiyacınızı kısaca anlatın..." 
                    rows="4"
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', resize: 'none', background: 'white' }}
                  ></textarea>
                  
                  <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '12px', fontSize: '13px', color: '#166534', fontWeight: '600', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle size={18} /> Ön ödeme gerekmez. Klinikte ödeyin.
                  </div>

                  <button className="btn-primary" style={{ padding: '18px', fontSize: '16px', borderRadius: '15px' }}>
                    Talebi Gönder
                  </button>
                </form>

                <div style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center' }}>
                  "Talebi Gönder" butonuna tıklayarak <Link to="/safety" style={{ color: 'var(--primary)', fontWeight: '700' }}>Gizlilik Politikamızı</Link> kabul etmiş olursunuz.
                </div>
              </motion.div>

              {/* Quality Indicators */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ marginTop: '20px', padding: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <ShieldCheck size={24} color="var(--accent)" />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>Ücretsiz Kişisel Asistan</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Seyahat ve rezervasyon desteği</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Star size={24} color="#f59e0b" fill="#f59e0b" />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>En İyi Fiyat Garantisi</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Daha düşük fiyat mı buldunuz? Eşleriz.</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;
