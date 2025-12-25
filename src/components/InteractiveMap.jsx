import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Users, TrendingUp, ShieldCheck, Plane, MapPin } from 'lucide-react';

const InteractiveMap = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null);

  // Hub: Turkey (Center Point for most connections)
  const turkeyHub = { x: 585, y: 155 };

  const hotspots = [
    {
      id: 'usa-east',
      name: 'Amerika Birleşik Devletleri',
      x: 240,
      y: 160,
      patients: '12,400+',
      savings: '%75',
      treatments: ['Diş İmplantı', 'Tüp Bebek'],
      source: true
    },
    {
      id: 'uk',
      name: 'Birleşik Krallık',
      x: 485,
      y: 115,
      patients: '8,900+',
      savings: '%65',
      treatments: ['Mide Küçültme', 'Saç Ekimi'],
      source: true
    },
    {
      id: 'germany',
      name: 'Almanya',
      x: 515,
      y: 125,
      patients: '18,200+',
      savings: '%50',
      treatments: ['Check-up', 'Ortopedi'],
      source: true
    },
    {
      id: 'russia',
      name: 'Rusya',
      x: 650,
      y: 100,
      patients: '15,600+',
      savings: '%60',
      treatments: ['Onkoloji', 'Plastik Cerrahi'],
      source: true
    },
    {
      id: 'uae',
      name: 'Birleşik Arap Emirlikleri',
      x: 635,
      y: 215,
      patients: '9,300+',
      savings: '%45',
      treatments: ['Göz Cerrahisi', 'Kardiyoloji'],
      source: true
    },
    {
      id: 'nigeria',
      name: 'Nijerya',
      x: 520,
      y: 280,
      patients: '4,100+',
      savings: '%70',
      treatments: ['Kalp Damar', 'Üroloji'],
      source: true
    },
    {
      id: 'australia',
      name: 'Avustralya',
      x: 880,
      y: 380,
      patients: '2,800+',
      savings: '%70',
      treatments: ['Diş Estetiği', 'Lazer'],
      source: true
    }
  ];

  return (
    <section style={{ 
      padding: '120px 0', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', 
      overflow: 'hidden',
      position: 'relative',
      color: 'white'
    }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '10%', left: '20%', width: '400px', height: '400px', background: 'rgba(14, 165, 233, 0.15)', filter: 'blur(100px)', borderRadius: '50%' }}></div>
      <div style={{ position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.1)', filter: 'blur(80px)', borderRadius: '50%' }}></div>

      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 2 }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '8px', 
              background: 'rgba(255,255,255,0.05)', 
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: '#38bdf8', 
              padding: '8px 20px', 
              borderRadius: '100px', 
              fontSize: '13px', 
              fontWeight: '700', 
              marginBottom: '20px' 
            }}
          >
            <Globe size={18} className="spin-slow" /> GLOBAL HASTA TRAFİĞİ
          </motion.div>
          <h2 style={{ fontSize: '42px', fontWeight: '900', color: 'white', marginBottom: '20px' }}>
            Dünya Sağlık Rotası <span style={{ color: '#38bdf8' }}>Türkiye'ye</span> Çevriliyor
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Doctora olarak, 5 kıtadan binlerce hastayı Türkiye'nin en seçkin kliniklerine taşıyoruz. 
            Gerçek zamanlı global ağımızı ve hasta yoğunluğumuzu keşfedin.
          </p>
        </div>

        <div style={{ position: 'relative', width: '100%', maxWidth: '1100px', margin: '0 auto' }}>
          {/* Detailed World Map SVG Layer */}
          <svg viewBox="0 0 1000 500" style={{ width: '100%', height: 'auto', fill: 'rgba(255,255,255,0.08)', stroke: 'rgba(255,255,255,0.1)', strokeWidth: '0.5' }}>
            <path d="M125,120 L135,115 L145,125 L160,110 L180,115 L200,105 L220,115 L240,110 L260,120 L280,110 L300,130 L290,160 L270,180 L250,210 L230,240 L210,230 L190,210 L170,190 L150,170 L130,150 Z" />
            <path d="M450,100 L470,80 L500,75 L530,85 L560,80 L590,90 L610,85 L640,100 L660,120 L650,150 L630,170 L600,175 L580,190 L560,175 L540,160 L510,140 L480,130 L460,120 Z" />
            <path d="M480,220 L510,210 L540,220 L560,240 L570,270 L560,320 L540,350 L510,360 L490,340 L470,300 L460,260 Z" />
            <path d="M820,330 L850,320 L890,340 L910,380 L880,420 L840,410 L810,370 Z" />
            <path d="M260,260 L290,250 L320,270 L340,300 L330,350 L310,400 L280,420 L260,390 L240,340 Z" />
            
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {hotspots.map((spot) => (
              <g key={`line-${spot.id}`}>
                <path 
                  d={`M ${spot.x} ${spot.y} Q ${(spot.x + turkeyHub.x) / 2} ${(spot.y + turkeyHub.y) / 2 - 100} ${turkeyHub.x} ${turkeyHub.y}`}
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="1.5"
                  strokeDasharray="5, 10"
                >
                  <animate attributeName="stroke-dashoffset" from="100" to="0" dur="3s" repeatCount="indefinite" />
                </path>
                <circle r="2" fill="#38bdf8">
                   <animateMotion 
                     path={`M ${spot.x} ${spot.y} Q ${(spot.x + turkeyHub.x) / 2} ${(spot.y + turkeyHub.y) / 2 - 100} ${turkeyHub.x} ${turkeyHub.y}`}
                     dur={`${2 + Math.random() * 2}s`}
                     repeatCount="indefinite"
                   />
                </circle>
              </g>
            ))}

            <circle cx={turkeyHub.x} cy={turkeyHub.y} r="5" fill="#ef4444" />
            <circle cx={turkeyHub.x} cy={turkeyHub.y} r="12" fill="none" stroke="#ef4444" strokeWidth="1">
               <animate attributeName="r" from="5" to="25" dur="2s" repeatCount="indefinite" />
               <animate attributeName="opacity" from="1" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
          </svg>

          {hotspots.map((spot) => (
            <div 
              key={spot.id}
              style={{
                position: 'absolute',
                top: `${(spot.y / 500) * 100}%`,
                left: `${(spot.x / 1000) * 100}%`,
                transform: 'translate(-50%, -50%)',
                zIndex: hoveredCountry === spot.id ? 100 : 10
              }}
              onMouseEnter={() => setHoveredCountry(spot.id)}
              onMouseLeave={() => setHoveredCountry(null)}
            >
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#38bdf8',
                boxShadow: '0 0 15px #38bdf8',
                cursor: 'pointer',
                border: '2px solid white'
              }} />

              <AnimatePresence>
                {hoveredCountry === spot.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    style={{
                      position: 'absolute',
                      bottom: '25px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '260px',
                      background: 'rgba(15, 23, 42, 0.95)',
                      backdropFilter: 'blur(12px)',
                      borderRadius: '24px',
                      padding: '24px',
                      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                      pointerEvents: 'none',
                      zIndex: 101,
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                      <div style={{ padding: '6px', background: 'rgba(56, 189, 248, 0.1)', borderRadius: '8px' }}>
                        <MapPin size={16} color="#38bdf8" />
                      </div>
                      <span style={{ fontWeight: '800', fontSize: '18px', color: 'white' }}>{spot.name}</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '800', letterSpacing: '0.05em' }}>HASTA AKIŞI</div>
                        <div style={{ fontSize: '14px', fontWeight: '900', color: '#38bdf8' }}>{spot.patients}</div>
                      </div>
                      <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '16px' }}>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '800', letterSpacing: '0.05em' }}>TASARRUF</div>
                        <div style={{ fontSize: '14px', fontWeight: '900', color: '#10b981' }}>{spot.savings}</div>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '800', letterSpacing: '0.05em', marginBottom: '8px' }}>POPÜLER TERCİHLER</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {spot.treatments.map(t => (
                          <span key={t} style={{ fontSize: '11px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '5px 10px', borderRadius: '8px', fontWeight: '700' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div style={{ position: 'absolute', top: '-15px', right: '20px', background: '#38bdf8', color: 'white', padding: '8px', borderRadius: '12px', boxShadow: '0 10px 20px rgba(56, 189, 248, 0.3)' }}>
                      <Plane size={14} style={{ transform: 'rotate(45deg)' }} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <div style={{
            position: 'absolute',
            top: `${(turkeyHub.y / 500) * 100}%`,
            left: `${(turkeyHub.x / 1000) * 100}%`,
            transform: 'translate(15px, -15px)',
            pointerEvents: 'none'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', padding: '4px 12px', borderRadius: '8px' }}>
              <span style={{ fontSize: '14px' }}>🇹🇷</span>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#ef4444', letterSpacing: '0.1em' }}>MERKEZ: TÜRKİYE</span>
            </div>
          </div>
        </div>

        <div style={{ 
          marginTop: '100px', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
          gap: '30px',
          background: 'rgba(255,255,255,0.02)',
          padding: '40px',
          borderRadius: '32px',
          border: '1px solid rgba(255,255,255,0.05)',
          backdropFilter: 'blur(10px)'
        }}>
          {[
            { label: 'Yıllık Uluslararası Hasta', val: '45,000+', icon: <Users color="#38bdf8" /> },
            { label: 'Sertifikalı Klinik Ağımız', val: '320+', icon: <ShieldCheck color="#10b981" /> },
            { label: 'Hizmet Verilen Ülke', val: '85+', icon: <Globe color="#f59e0b" /> },
            { label: 'Başarılı Operasyon Oranı', val: '%98.7', icon: <TrendingUp color="#38bdf8" /> }
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>{stat.icon}</div>
              <div style={{ fontSize: '28px', fontWeight: '900', color: 'white', marginBottom: '5px' }}>{stat.val}</div>
              <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .spin-slow {
            animation: spin 8s linear infinite;
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </section>
  );
};

export default InteractiveMap;
