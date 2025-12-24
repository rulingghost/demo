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
  Video,
  FileText,
  CreditCard,
  Truck,
  Hotel,
  UserCheck,
  ChevronDown
} from 'lucide-react';

const ClinicDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  const clinic = {
    name: "Memorial Şişli Hospital",
    location: "Istanbul, Turkey",
    rating: 4.8,
    reviews: 1240,
    established: "2000",
    operations: "25k+ Annual Operations",
    accreditations: ["JCI Accredited", "ISO 9001", "Temos Certified"],
    images: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=600",
      "https://images.unsplash.com/photo-1581594634339-c2901ce27bac?auto=format&fit=crop&q=80&w=600"
    ],
    doctors: [
      { name: "Dr. Ergin Er", role: "Chief Surgeon", exp: "22 Years", specialty: "Facial Esthetics", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200" },
      { name: "Dr. Ayşe Yılmaz", role: "Dental Specialist", exp: "15 Years", specialty: "Implantology", img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200" }
    ],
    prices: [
      { item: "Zirconium Crown", turkey: "$180", uk: "$850", savings: "78%" },
      { item: "Full Mouth Implants", turkey: "$4,500", uk: "$18,000", savings: "75%" },
      { item: "Hollywood Smile (20 Veneers)", turkey: "$3,200", uk: "$12,000", savings: "73%" }
    ]
  };

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Header Info */}
      <section style={{ padding: '40px 0', background: 'white', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', fontWeight: '800', color: 'white', background: 'var(--primary)', padding: '4px 12px', borderRadius: '100px' }}>VERIFIED BY SARFEA</span>
                <span className="badge-verified"><ShieldCheck size={14} /> JCI Accredited</span>
              </div>
              <h1 style={{ fontSize: '36px', marginBottom: '8px' }}>{clinic.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--text-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={18} /> {clinic.location}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={18} fill="#f59e0b" color="#f59e0b" /> {clinic.rating} ({clinic.reviews} Reviews)</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={18} /> Est. {clinic.established}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '4px' }}>Free Transfer & Hotel Included</div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MessageCircle size={18} /> Chat</button>
                <button 
                  className="btn-primary" 
                  style={{ padding: '12px 32px' }}
                  onClick={() => document.getElementById('quote-form').scrollIntoView({ behavior: 'smooth' })}
                >
                  Get Free Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container" style={{ padding: '40px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 400px', gap: '40px' }}>
          
          {/* Main Content Area */}
          <div>
            {/* Gallery */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '15px', height: '450px', marginBottom: '40px', borderRadius: '24px', overflow: 'hidden' }}>
              <img src={clinic.images[0]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Clinic Main" />
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: '15px' }}>
                <img src={clinic.images[1]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Clinic View" />
                <div style={{ position: 'relative' }}>
                  <img src={clinic.images[2]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Clinic View 2" />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: '700', fontSize: '18px' }}>+12 Photos</div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border)', gap: '40px', marginBottom: '40px', position: 'sticky', top: '100px', background: '#f8fafc', zIndex: 10, padding: '10px 0' }}>
              {['Overview', 'Prices', 'Doctors', 'Reviews', 'FAQ'].map(tab => (
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
                    cursor: 'pointer'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Overview Section */}
            <div id="overview" style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>About {clinic.name}</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Building2 size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700' }}>25,000+</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Successful Operations</div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Award size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700' }}>JCI Certified</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Quality Standard</div>
                </div>
                <div className="glass" style={{ padding: '20px', borderRadius: '16px', textAlign: 'center' }}>
                  <Globe size={24} color="var(--primary)" style={{ marginBottom: '10px' }} />
                  <div style={{ fontWeight: '700' }}>90+ Countries</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Patient Source</div>
                </div>
              </div>
              <p style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '16px', marginBottom: '24px' }}>
                Memorial Healthcare Group serves patients from 92 countries. It is the first hospital in Turkey and the 21st in the world to receive the JCI Accreditation Certificate. 
                Memorial is home to world-renowned centers of excellence in Organ Transplantation, IVF, Genetics, Cardiovascular Surgery, and Oncology.
              </p>
            </div>

            {/* Price List Section */}
            <div id="prices" style={{ marginBottom: '60px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '28px' }}>Procedure Prices</h2>
                <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}><Info size={14} /> Prices are indicative</span>
              </div>
              <table style={{ width: '100%', borderCollapse: 'collapse', background: 'white', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <thead style={{ background: '#f8fafc' }}>
                  <tr>
                    <th style={{ padding: '20px', textAlign: 'left' }}>Procedure</th>
                    <th style={{ padding: '20px', textAlign: 'center' }}>At {clinic.name}</th>
                    <th style={{ padding: '20px', textAlign: 'center' }}>In UK / USA</th>
                    <th style={{ padding: '20px', textAlign: 'center' }}>Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {clinic.prices.map((p, i) => (
                    <tr key={i} style={{ borderTop: i > 0 ? '1px solid var(--border)' : 'none' }}>
                      <td style={{ padding: '20px', fontWeight: '600' }}>{p.item}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'var(--primary)', fontWeight: '800', fontSize: '18px' }}>{p.turkey}</td>
                      <td style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', textDecoration: 'line-through' }}>{p.uk}</td>
                      <td style={{ padding: '20px', textAlign: 'center' }}>
                        <span style={{ background: '#dcfce7', color: '#166534', padding: '4px 12px', borderRadius: '100px', fontWeight: '700', fontSize: '14px' }}>{p.savings}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Doctors Section */}
            <div id="doctors" style={{ marginBottom: '60px' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '24px' }}>Meet the Experts</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                {clinic.doctors.map((doc, i) => (
                  <div key={i} className="glass" style={{ display: 'flex', gap: '20px', padding: '24px', borderRadius: '24px' }}>
                    <img src={doc.img} alt={doc.name} style={{ width: '100px', height: '100px', borderRadius: '50px', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>{doc.name}</h4>
                      <p style={{ color: 'var(--primary)', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>{doc.role}</p>
                      <div style={{ fontSize: '13px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {doc.exp} Experience</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><CheckCircle size={14} /> {doc.specialty}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All-Inclusive Details */}
            <div style={{ background: 'var(--secondary)', color: 'white', padding: '40px', borderRadius: '32px', marginBottom: '60px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '30px', color: 'white' }}>International Care Package Included</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '30px' }}>
                <div style={{ textAlign: 'center' }}>
                  <Truck size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700' }}>VIP Transfer</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Airport-Hotel-Clinic</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Hotel size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700' }}>Luxury Stay</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>4/5 Star Hotel</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Globe size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700' }}>Interpreter</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>Native Language Support</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <UserCheck size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
                  <div style={{ fontWeight: '700' }}>Local Buddy</div>
                  <div style={{ fontSize: '12px', color: '#94a3b8' }}>24/7 Patient Concierge</div>
                </div>
              </div>
            </div>

            {/* Related Clinics */}
            <div style={{ marginBottom: '60px' }}>
              <h3 style={{ fontSize: '24px', marginBottom: '24px' }}>Similar Clinics You Might Like</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                {[
                  { name: "Esteworld", location: "Istanbul", rating: 4.9, img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" },
                  { name: "Acibadem", location: "Istanbul", rating: 4.8, img: "https://images.unsplash.com/photo-1587351021759-3e566b9af922?auto=format&fit=crop&q=80&w=400" },
                  { name: "Medical Park", location: "Antalya", rating: 4.7, img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=400" }
                ].map((c, i) => (
                  <div key={i} className="glass card-hover" style={{ padding: '20px', borderRadius: '20px', display: 'flex', gap: '15px', alignItems: 'center' }}>
                    <img src={c.img} alt={c.name} style={{ width: '80px', height: '80px', borderRadius: '12px', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>{c.name}</h4>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '4px' }}>{c.location}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', fontWeight: '700' }}>
                        <Star size={12} fill="#f59e0b" color="#f59e0b" /> {c.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar Sticky Form */}
          <aside id="quote-form">
            <div style={{ position: 'sticky', top: '100px' }}>
              <div className="glass" style={{ padding: '30px', borderRadius: '32px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--primary)' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Request a Free Quote</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Response time: approx. 2 hours</p>
                </div>
                
                <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }}
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <select style={{ width: '80px', padding: '15px', borderRadius: '12px', border: '1px solid var(--border)' }}>
                      <option>🇺🇸 +1</option>
                      <option>🇬🇧 +44</option>
                      <option>🇹🇷 +90</option>
                    </select>
                    <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }}
                    />
                  </div>
                  <textarea 
                    placeholder="Describe your medical needs..." 
                    rows="4"
                    style={{ padding: '15px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', resize: 'none' }}
                  ></textarea>
                  
                  <div style={{ background: '#f0fdf4', padding: '15px', borderRadius: '12px', fontSize: '13px', color: '#166534', fontWeight: '600', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle size={18} /> No prepayment required. Pay at clinic.
                  </div>

                  <button className="btn-primary" style={{ padding: '18px', fontSize: '16px', borderRadius: '15px' }}>
                    Send My Request
                  </button>
                </form>

                <div style={{ marginTop: '24px', color: 'var(--text-muted)', fontSize: '12px', textAlign: 'center' }}>
                  By clicking "Send My Request" you agree to our <Link to="/safety" style={{ color: 'var(--primary)', fontWeight: '700' }}>Terms & Privacy Policy</Link>.
                </div>
              </div>

              {/* Quality Indicators */}
              <div style={{ marginTop: '20px', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px' }}>
                  <ShieldCheck size={24} color="var(--accent)" />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>Free Personal Assistant</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Help with travel & booking</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Star size={24} color="#f59e0b" fill="#f59e0b" />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '14px' }}>Best Price Guarantee</div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Found a lower price? We'll match it.</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ClinicDetail;
