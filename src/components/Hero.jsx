import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const procedures = [
  "Hair Transplant", "Rhinoplasty", "Dental Implants", "Breast Augmentation", 
  "Liposuction", "Veneers", "IVF", "Gastric Sleeve", "BBL"
];

const countries = [
  "Turkey", "Thailand", "Germany", "Mexico", "South Korea", "Spain", "Poland", "United Kingdom"
];

const Hero = () => {
  const navigate = useNavigate();
  const heroImg = "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1600";
  
  const [procValue, setProcValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [showProcList, setShowProcList] = useState(false);
  const [showCountryList, setShowCountryList] = useState(false);
  
  const procRef = useRef(null);
  const countryRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (procRef.current && !procRef.current.contains(event.target)) setShowProcList(false);
      if (countryRef.current && !countryRef.current.contains(event.target)) setShowCountryList(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    navigate('/search');
  };

  return (
    <section style={{ 
      position: 'relative', 
      minHeight: '85vh', 
      display: 'flex', 
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden',
      background: 'white'
    }}>
      {/* Background Image with Gradient Overlay */}
      <div style={{
        position: 'absolute',
        right: 0,
        top: 0,
        bottom: 0,
        width: '55%',
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 1
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, white 10%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)'
        }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '650px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: '#f1f5f9', 
            padding: '8px 16px', 
            borderRadius: '100px',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: '700',
            color: 'var(--primary)'
          }}>
            <Sparkles size={16} /> THE WORLD'S #1 MEDICAL TOURISM PLATFORM
          </div>
          
          <h1 style={{ fontSize: '72px', lineHeight: '1', marginBottom: '24px', letterSpacing: '-2px' }}>
            Safe Medical Travel, <span style={{ color: 'var(--primary)' }}>Simplified.</span>
          </h1>
          
          <p style={{ fontSize: '20px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
            Book the world's best clinics for your treatment. Save up to 70% with verified safety and 24/7 personal support.
          </p>

          <div className="glass" style={{ 
            padding: '12px', 
            borderRadius: '24px', 
            boxShadow: 'var(--shadow-xl)', 
            display: 'flex', 
            gap: '12px',
            border: '1px solid var(--border)',
            background: 'white',
            position: 'relative',
            zIndex: 50
          }}>
            <div ref={procRef} style={{ flex: 1, position: 'relative', padding: '0 20px', borderRight: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '100%' }}>
                <Search size={20} color="var(--text-muted)" />
                <input 
                  type="text" 
                  placeholder="Procedure (e.g. Veneers)" 
                  value={procValue}
                  onChange={(e) => { setProcValue(e.target.value); setShowProcList(true); }}
                  onFocus={() => setShowProcList(true)}
                  style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '16px' }} 
                />
              </div>
              {showProcList && (
                <div style={{
                  position: 'absolute',
                  top: '120%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  padding: '10px',
                  zIndex: 100,
                  border: '1px solid var(--border)'
                }}>
                  {procedures.filter(p => p.toLowerCase().includes(procValue.toLowerCase())).map((p, i) => (
                    <div 
                      key={i}
                      onClick={() => { setProcValue(p); setShowProcList(false); }}
                      style={{ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#334155' }}
                      onMouseEnter={(e) => e.target.style.background = '#f1f5f9'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      {p}
                    </div>
                  ))}
                  {procedures.filter(p => p.toLowerCase().includes(procValue.toLowerCase())).length === 0 && (
                     <div style={{ padding: '10px', color: '#94a3b8', fontSize: '14px' }}>No matches found</div>
                  )}
                </div>
              )}
            </div>

            <div ref={countryRef} style={{ flex: 1, position: 'relative', padding: '0 20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '100%' }}>
                <MapPin size={20} color="var(--text-muted)" />
                <input 
                  type="text" 
                  placeholder="Country (e.g. Turkey)" 
                  value={countryValue}
                  onChange={(e) => { setCountryValue(e.target.value); setShowCountryList(true); }}
                  onFocus={() => setShowCountryList(true)}
                  style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '16px' }} 
                />
              </div>
               {showCountryList && (
                <div style={{
                  position: 'absolute',
                  top: '120%',
                  left: 0,
                  right: 0,
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                  padding: '10px',
                  zIndex: 100,
                  border: '1px solid var(--border)'
                }}>
                  {countries.filter(c => c.toLowerCase().includes(countryValue.toLowerCase())).map((c, i) => (
                    <div 
                      key={i}
                      onClick={() => { setCountryValue(c); setShowCountryList(false); }}
                      style={{ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px', color: '#334155' }}
                      onMouseEnter={(e) => e.target.style.background = '#f1f5f9'}
                      onMouseLeave={(e) => e.target.style.background = 'transparent'}
                    >
                      {c}
                    </div>
                  ))}
                   {countries.filter(c => c.toLowerCase().includes(countryValue.toLowerCase())).length === 0 && (
                     <div style={{ padding: '10px', color: '#94a3b8', fontSize: '14px' }}>No matches found</div>
                  )}
                </div>
              )}
            </div>
            
            <button onClick={handleSearch} className="btn-primary" style={{ padding: '16px 32px', borderRadius: '16px' }}>Find Clinics</button>
          </div>

          <div style={{ display: 'flex', gap: '32px', marginTop: '48px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={24} color="#10b981" />
              <div>
                <div style={{ fontWeight: '800', fontSize: '18px' }}>1,200+</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Verified Clinics</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map(i => <div key={i} style={{ width: '12px', height: '12px', background: '#f59e0b', borderRadius: '2px' }}></div>)}
              </div>
              <div>
                <div style={{ fontWeight: '800', fontSize: '18px' }}>4.9/5</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
