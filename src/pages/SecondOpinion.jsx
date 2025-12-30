import React, { useState } from 'react';
import { Calendar, Video, FileText, CheckCircle, Shield, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Telemedicine = () => {
  const { t } = useLanguage();
  const [selectedSpec, setSelectedSpec] = useState('');

  const specialties = [
    { name: "Dermatology", price: "400₺", icon: "🧴" },
    { name: "Pediatrics", price: "500₺", icon: "👶" },
    { name: "Internal Med", price: "450₺", icon: "🩺" },
    { name: "Psychiatry", price: "800₺", icon: "🧠" },
    { name: "Nutrition", price: "300₺", icon: "🥗" },
    { name: "Cardiology", price: "600₺", icon: "❤️" }
  ];

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '100px',
              fontSize: '12px', fontWeight: '700', marginBottom: '24px', color: '#38bdf8'
            }}>
              <Video size={16} /> ONLINE MEDICAL CONSULTATION
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.2' }}>
              Expert Medical Advice, <br />
              <span style={{ color: '#38bdf8' }}>From the Comfort of Home.</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
              Connect with certified specialists via secure high-quality video call. Get diagnoses, prescriptions, and second opinions without waiting.
            </p>
            <button 
              className="btn-primary" 
              style={{ padding: '16px 40px', fontSize: '18px' }} 
              onClick={() => document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              <div className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
                 <div style={{ background: '#dbeafe', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Shield color="#2563eb" />
                 </div>
                 <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Private & Secure</h3>
                 <p style={{ color: '#64748b' }}>End-to-end encrypted video calls complying with HIPAA and GDPR standards.</p>
              </div>
              <div className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
                 <div style={{ background: '#dcfce7', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <FileText color="#16a34a" />
                 </div>
                 <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Digital Prescriptions</h3>
                 <p style={{ color: '#64748b' }}>Receive valid e-prescriptions and medical reports instantly after your call.</p>
              </div>
              <div className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
                 <div style={{ background: '#f3e8ff', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <Globe color="#9333ea" />
                 </div>
                 <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '10px' }}>Global Access</h3>
                 <p style={{ color: '#64748b' }}>Access top specialists from Turkey regardless of your current location.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Booking Widget */}
      <section id="booking-section" style={{ padding: '40px 0 80px' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div className="glass" style={{ padding: '40px', borderRadius: '32px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
               <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '10px' }}>Select a Specialty</h2>
               <p style={{ color: '#64748b' }}>Choose the department you need help with.</p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '20px', marginBottom: '40px' }}>
               {specialties.map((spec, i) => (
                  <div 
                    key={i}
                    onClick={() => setSelectedSpec(spec.name)}
                    style={{ 
                       border: selectedSpec === spec.name ? '2px solid var(--primary)' : '1px solid var(--border)',
                       background: selectedSpec === spec.name ? '#eff6ff' : 'white',
                       borderRadius: '20px',
                       padding: '20px',
                       cursor: 'pointer',
                       textAlign: 'center',
                       transition: 'all 0.2s'
                    }}
                  >
                     <div style={{ fontSize: '32px', marginBottom: '10px' }}>{spec.icon}</div>
                     <div style={{ fontWeight: '700', fontSize: '14px', marginBottom: '4px' }}>{spec.name}</div>
                     <div style={{ fontSize: '12px', color: '#64748b' }}>Start {spec.price}</div>
                  </div>
               ))}
            </div>

            {selectedSpec && (
               <div className="animate-fade-in">
                  <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '20px' }}>Available Doctors for {selectedSpec}</h3>
                  <div style={{ display: 'grid', gap: '20px' }}>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'white', borderRadius: '20px', border: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                           <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e2e8f0' }}></div>
                           <div>
                              <div style={{ fontWeight: '800', fontSize: '18px' }}>Dr. Selin Yılmaz</div>
                              <div style={{ color: '#64748b', fontSize: '14px' }}>Senior Dermatologist • 12 Yrs Exp</div>
                           </div>
                        </div>
                        <button className="btn-primary" style={{ padding: '10px 24px' }}>Book 14:00 Today</button>
                     </div>
                     <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px', background: 'white', borderRadius: '20px', border: '1px solid var(--border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                           <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#e2e8f0' }}></div>
                           <div>
                              <div style={{ fontWeight: '800', fontSize: '18px' }}>Dr. Mert Demir</div>
                              <div style={{ color: '#64748b', fontSize: '14px' }}>Dermatology Specialist • 8 Yrs Exp</div>
                           </div>
                        </div>
                        <button className="btn-outline" style={{ padding: '10px 24px' }}>Next Availability</button>
                     </div>
                  </div>
               </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Telemedicine;
