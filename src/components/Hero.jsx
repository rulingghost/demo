import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Sparkles, Star, ShieldCheck, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import LeafletMap from './LeafletMap';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [procValue, setProcValue] = useState("");
  const [countryValue, setCountryValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [showProcList, setShowProcList] = useState(false);
  const [showCountryList, setShowCountryList] = useState(false);
  
  const procRef = useRef(null);
  const countryRef = useRef(null);

  const procedures = t('hero.procedures') || [];
  const countries = t('hero.countries') || [];

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
      minHeight: '90vh',
      background: '#eaf6f6',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      {/* 1. Full-Width Leaflet Map Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 1,
      }}>
        <LeafletMap 
          searchValue={countryValue} 
          onCountrySelect={(name, data) => {
            setCountryValue(name);
            setSelectedCountry(data);
            setShowCountryList(false);
          }}
        />
      </div>

      {/* 2. Floating Content Container */}
      <div className="container" style={{ position: 'relative', zIndex: 10, pointerEvents: 'none', display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        
        {/* Left Side: Search Panel */}
        <div style={{ pointerEvents: 'auto', width: '380px' }}>
          <div 
            className="search-panel-container glass"
            style={{ 
              padding: '24px', 
              borderRadius: 'var(--radius-lg)', 
              boxShadow: 'var(--shadow-premium)', 
              display: 'flex', 
              flexDirection: 'column',
              gap: '16px',
              border: '1px solid white',
              background: 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div style={{ marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '800', fontSize: '11px', letterSpacing: '0.1em', marginBottom: '8px' }}>
                <Sparkles size={14} /> {t('hero.subtitle')}
              </div>
              <h2 style={{ fontSize: '28px', lineHeight: '1.2', fontWeight: '800', color: 'var(--secondary)' }}>
                {t('hero.title')} <br/><span className="text-gradient">{t('hero.highlight')}</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {/* Procedure Input */}
              <div ref={procRef} style={{ position: 'relative', padding: '10px 15px', background: 'rgba(0,0,0,0.03)', borderRadius: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Search size={18} color="var(--primary)" />
                  <input 
                    type="text" 
                    placeholder={t('hero.placeholderTreatment')} 
                    value={procValue}
                    onChange={(e) => { setProcValue(e.target.value); setShowProcList(true); }}
                    onFocus={() => setShowProcList(true)}
                    style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '15px', fontWeight: '600' }} 
                  />
                </div>
                {showProcList && (
                  <div className="glass" style={{ position: 'absolute', top: '110%', left: 0, right: 0, borderRadius: '16px', padding: '10px', zIndex: 200 }}>
                    {procedures.filter(p => p.toLowerCase().includes(procValue.toLowerCase())).map((p, i) => (
                      <div key={i} onClick={() => { setProcValue(p); setShowProcList(false); }} style={{ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>{p}</div>
                    ))}
                  </div>
                )}
              </div>

              {/* Country Input */}
              <div ref={countryRef} style={{ position: 'relative', padding: '10px 15px', background: 'rgba(0,0,0,0.03)', borderRadius: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={18} color="var(--primary)" />
                  <input 
                    type="text" 
                    placeholder={t('hero.placeholderCountry')} 
                    value={countryValue}
                    onChange={(e) => { setCountryValue(e.target.value); setShowCountryList(true); }}
                    onFocus={() => setShowCountryList(true)}
                    style={{ border: 'none', background: 'transparent', width: '100%', outline: 'none', fontSize: '15px', fontWeight: '600' }} 
                  />
                </div>
                {showCountryList && (
                  <div className="glass" style={{ position: 'absolute', top: '110%', left: 0, right: 0, borderRadius: '16px', padding: '10px', zIndex: 200 }}>
                    {countries.filter(c => c.toLowerCase().includes(countryValue.toLowerCase())).map((c, i) => (
                      <div key={i} onClick={() => { setCountryValue(c); setShowCountryList(false); }} style={{ padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>{c}</div>
                    ))}
                  </div>
                )}
              </div>
              
              <button onClick={handleSearch} className="btn-primary" style={{ width: '100%', padding: '15px' }}>{t('hero.findClinics')}</button>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Country Insight Panel */}
        {selectedCountry && (
          <div 
            className="animate-fade-in"
            style={{ 
              pointerEvents: 'auto', 
              width: '360px', 
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: 'var(--radius-lg)',
              padding: '24px',
              boxShadow: 'var(--shadow-premium)',
              border: '1px solid white',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '32px' }}>{selectedCountry.flag || '📍'}</span>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '800' }}>{selectedCountry.tr}</h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t('hero.excellentSupport')}</p>
                </div>
              </div>
              <button onClick={() => setSelectedCountry(null)} style={{ background: '#f1f5f9', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }}>&times;</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              <div style={{ background: 'var(--primary-light)', padding: '15px', borderRadius: '16px', textAlign: 'center' }}>
                <Star size={20} color="var(--primary)" />
                <div style={{ fontWeight: '800', fontSize: '16px' }}>{selectedCountry.quality}</div>
                <div style={{ fontSize: '10px' }}>{t('hero.quality')}</div>
              </div>
              <div style={{ background: 'var(--accent-light)', padding: '15px', borderRadius: '16px', textAlign: 'center' }}>
                <ShieldCheck size={20} color="var(--accent)" />
                <div style={{ fontWeight: '800', fontSize: '16px' }}>{selectedCountry.cost}</div>
                <div style={{ fontSize: '10px' }}>{t('hero.cost')}</div>
              </div>
            </div>

            <div>
              <h4 style={{ fontSize: '14px', marginBottom: '10px' }}>{t('hero.popularFields')}</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedCountry.fields.map((f, i) => (
                  <span key={i} style={{ background: '#f1f5f9', padding: '4px 12px', borderRadius: '100px', fontSize: '12px' }}>{f}</span>
                ))}
              </div>
            </div>

            <div style={{ background: 'var(--secondary)', color: 'white', padding: '20px', borderRadius: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                <Building2 size={18} color="var(--primary)" />
                <span style={{ fontSize: '14px' }}>120+ {t('hero.verifiedClinics')}</span>
              </div>
              <button className="btn-primary" onClick={() => navigate('/contact')} style={{ width: '100%', background: 'white', color: 'var(--secondary)' }}>{t('hero.getQuote')} &rarr;</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Hero;
