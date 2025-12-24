import React, { useState } from 'react';
import { Search, MapPin, TrendingUp, DollarSign, Users, ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

const LandingPage = ({ country = "Turkey" }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: 'Is it safe to travel for medical treatment?', a: 'Yes, if you choose JCI-accredited clinics. Sarfea only works with clinics that meet international safety standards.' },
    { q: 'How do I pay for my treatment?', a: 'Typically, a small deposit is paid online to secure the price, and the rest is paid at the clinic via credit card or cash.' },
    { q: 'Do doctors speak English?', a: 'Yes, all our partner clinics provide English-speaking doctors or dedicated medical interpreters.' },
  ];

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Search Result Style Hero */}
      <section style={{ background: 'var(--surface)', padding: '60px 0', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h1 style={{ fontSize: '42px', fontWeight: '800', marginBottom: '16px' }}>Medical Tourism in {country}</h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '800px' }}>
            Discover top-rated clinics in {country}. Over 500,000 international patients choose {country} annually for high-quality, affordable healthcare.
          </p>
        </div>
      </section>

      {/* Comparison Stats */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
              <DollarSign color="var(--primary)" size={32} style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Save up to 70%</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Treatment costs in {country} are significantly lower than in the USA, UK, or Europe.</p>
            </div>
            <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
              <TrendingUp color="var(--primary)" size={32} style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>Modern Technology</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Clinics use latest robotic surgery and imaging technologies available globally.</p>
            </div>
            <div className="glass" style={{ padding: '32px', borderRadius: '24px' }}>
              <Users color="var(--primary)" size={32} style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>No Waiting Lists</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Get your appointment and treatment within days, not months.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Comparison Table */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Cost Comparison: {country} vs Europe/USA</h2>
          <div className="glass" style={{ overflow: 'hidden', borderRadius: '24px', border: '1px solid var(--border)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead style={{ background: 'var(--surface)' }}>
                <tr>
                  <th style={{ padding: '20px', fontWeight: '700' }}>Procedure</th>
                  <th style={{ padding: '20px', fontWeight: '700' }}>{country} Price</th>
                  <th style={{ padding: '20px', fontWeight: '700' }}>UK/USA Price</th>
                  <th style={{ padding: '20px', fontWeight: '700' }}>Savings</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'Hair Transplant', country: '$2,200', west: '$12,000', save: '82%' },
                  { name: 'Full Set of Veneers', country: '$4,500', west: '$25,000', save: '80%' },
                  { name: 'Rhinoplasty', country: '$3,500', west: '$10,000', save: '65%' },
                  { name: 'Hip Replacement', country: '$12,000', west: '$40,000', save: '70%' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '20px', fontWeight: '600' }}>{row.name}</td>
                    <td style={{ padding: '20px', color: 'var(--secondary)', fontWeight: '700' }}>{row.country}</td>
                    <td style={{ padding: '20px', color: 'var(--text-muted)' }}>{row.west}</td>
                    <td style={{ padding: '20px' }}><span style={{ padding: '4px 12px', background: '#dcfce7', color: '#15803d', borderRadius: '100px', fontSize: '12px', fontWeight: '700' }}>{row.save}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Best Clinics Selection */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px' }}>Top Rated Clinics in {country}</h2>
            <Link to="/search" style={{ color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
              View all 240 clinics <ArrowRight size={18} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
             {[1, 2].map(i => (
               <div key={i} className="glass card-hover" style={{ borderRadius: '24px', overflow: 'hidden' }}>
                 <img src={`https://images.unsplash.com/photo-1519494140681-891f938c147f?auto=format&fit=crop&q=80&w=600`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Clinic" />
                 <div style={{ padding: '24px' }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <h3 style={{ fontSize: '20px' }}>Clinic Name {i}</h3>
                      <div style={{ fontWeight: '700' }}>⭐ 4.9</div>
                   </div>
                   <p style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '20px' }}>Specializing in Aesthetic surgery with over 15 years of experience in {country}.</p>
                   <Link to="/clinic/1" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>View Prices</Link>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: '32px', marginBottom: '40px', textAlign: 'center' }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((item, i) => (
              <div key={i} className="glass" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>{item.q}</span>
                  {openFaq === i ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--primary)" />}
                </button>
                <div style={{ 
                  maxHeight: openFaq === i ? '200px' : '0', 
                  overflow: 'hidden', 
                  transition: 'all 0.3s ease',
                  padding: openFaq === i ? '0 24px 24px 24px' : '0 24px'
                }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Ready to plan your trip?</h2>
          <Link to="/contact" className="btn-primary" style={{ padding: '16px 48px' }}>Contact Specialist</Link>
      </section>
    </div>
  );
};

export default LandingPage;
