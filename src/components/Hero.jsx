import React, { useState, useEffect, useRef } from 'react';
import { Search, MonitorPlay, Sparkles, BookOpen, GraduationCap, ArrowRight, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const [procValue, setProcValue] = useState("");
  const [showProcList, setShowProcList] = useState(false);
  const procRef = useRef(null);

  const procedures = [
    "Rhinoplasty Masterclass", "Facial Anatomy", "Botox & Fillers", 
    "Hair Transplant Fellowship", "Dermatology", "Practice Management",
    "Liposuction Techniques", "Breast Surgery"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (procRef.current && !procRef.current.contains(event.target)) setShowProcList(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = () => {
    navigate(`/courses?q=${encodeURIComponent(procValue)}`);
  };

  return (
    <section style={{ 
      position: 'relative',
      minHeight: '90vh',
      background: '#0f172a', /* Dark Theme Base */
      display: 'flex',
      alignItems: 'center',
      paddingTop: '80px',
      overflow: 'hidden',
      color: 'white'
    }}>
      {/* Dynamic Background Elements */}
      <div className="animate-pulse-slow" style={{ position: 'absolute', top: '-20%', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%', filter: 'blur(60px)' }}></div>
      <div className="animate-pulse-slow" style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, rgba(15,23,42,0) 70%)', borderRadius: '50%', filter: 'blur(60px)', animationDelay: '2s' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'center' }}>
        
        {/* Left Side: Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '100px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '30px', fontSize: '13px', fontWeight: '700', color: '#38bdf8', backdropFilter: 'blur(10px)' }}>
               <Sparkles size={16} /> NEXT-GEN MEDICAL EDUCATION
            </div>
            
            <h1 style={{ fontSize: '64px', lineHeight: '1.1', fontWeight: '900', marginBottom: '24px', letterSpacing: '-0.03em' }}>
              Master the Art of <br/>
              <span className="text-gradient" style={{ background: 'linear-gradient(to right, #38bdf8, #818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Modern Medicine.
              </span>
            </h1>
            
            <p style={{ fontSize: '20px', color: '#94a3b8', lineHeight: '1.6', maxWidth: '550px', marginBottom: '50px', fontWeight: '400' }}>
              Join the world's most advanced learning platform for medical professionals. Accredited courses, live surgeries, and global mentorship.
            </p>

            {/* Premium Search Box */}
            <div 
              style={{ 
                background: 'rgba(255,255,255,0.05)', 
                padding: '10px', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.1)',
                backdropFilter: 'blur(20px)',
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                maxWidth: '600px',
                marginBottom: '40px'
              }}
            >
               <div ref={procRef} style={{ position: 'relative', flex: 1, paddingLeft: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                     <Search color="#94a3b8" />
                     <input 
                        type="text" 
                        placeholder={'Search for courses, specialties, or instructors...'}
                        value={procValue}
                        onChange={(e) => { setProcValue(e.target.value); setShowProcList(true); }}
                        onFocus={() => setShowProcList(true)}
                        style={{ width: '100%', background: 'transparent', border: 'none', fontSize: '16px', fontWeight: '500', outline: 'none', padding: '15px 0', color: 'white' }}
                     />
                  </div>
                  <AnimatePresence>
                    {showProcList && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        style={{ position: 'absolute', top: '120%', left: 0, right: 0, borderRadius: '16px', padding: '10px', zIndex: 200, background: '#1e293b', boxShadow: '0 20px 50px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)' }}
                      >
                        {procedures.filter(p => p.toLowerCase().includes(procValue.toLowerCase())).map((p, i) => (
                          <div key={i} onClick={() => { setProcValue(p); setShowProcList(false); }} style={{ padding: '12px 15px', borderRadius: '10px', cursor: 'pointer', fontSize: '14px', color: '#cbd5e1', transition: 'all 0.2s', display: 'flex', alignItems: 'center', gap: '10px' }} className="hover:bg-slate-700">
                             <Search size={14} color="#64748b" /> {p}
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
               <button 
                  onClick={handleSearch}
                  className="btn-primary" 
                  style={{ borderRadius: '18px', padding: '16px 36px', fontSize: '16px', fontWeight: '700' }}
               >
                  Find Course
               </button>
            </div>

            <div style={{ display: 'flex', gap: '30px' }}>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'rgba(56, 189, 248, 0.15)', padding: '10px', borderRadius: '50%' }}><MonitorPlay size={20} color="#38bdf8" /></div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px' }}>Hybrid Learning</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Online & On-site</div>
                  </div>
               </div>
               <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ background: 'rgba(34, 197, 94, 0.15)', padding: '10px', borderRadius: '50%' }}><GraduationCap size={20} color="#4ade80" /></div>
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px' }}>CME Accredited</div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Global Certification</div>
                  </div>
               </div>
            </div>

          </motion.div>
        </div>

        {/* Right Side: 3D-like Visual */}
        <div className="hide-mobile" style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               style={{ position: 'relative', width: '100%', height: '100%', maxWidth: '500px' }}
            >
               {/* Main Card */}
               <div style={{ 
                  position: 'absolute', 
                  top: '10%', 
                  left: '10%', 
                  width: '80%', 
                  height: '60%', 
                  background: 'linear-gradient(160deg, #1e293b 0%, #0f172a 100%)', 
                  borderRadius: '30px', 
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 50px 100px -20px rgba(0,0,0,0.5)',
                  overflow: 'hidden',
                  zIndex: 2
               }}>
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(15,23,42,1), transparent)' }}>
                     <div style={{ color: '#4ade80', fontSize: '12px', fontWeight: '800', marginBottom: '8px' }}>LIVE NOW</div>
                     <div style={{ color: 'white', fontSize: '20px', fontWeight: '800' }}>Structural Rhinoplasty</div>
                     <div style={{ color: '#94a3b8', fontSize: '14px' }}>Dr. Omer Buhsem • 1.2k watching</div>
                  </div>
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80px', height: '80px', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                     <PlayCircle size={40} fill="white" color="white" />
                  </div>
               </div>

               {/* Back Card 1 */}
               <div style={{ 
                  position: 'absolute', 
                  top: '5%', 
                  right: '0', 
                  width: '70%', 
                  height: '50%', 
                  background: '#334155', 
                  borderRadius: '30px', 
                  opacity: 0.6,
                  zIndex: 1,
                  transform: 'rotate(10deg)'
               }}></div>

               {/* Back Card 2 */}
               <div style={{ 
                  position: 'absolute', 
                  bottom: '10%', 
                  left: '0', 
                  width: '60%', 
                  height: '40%', 
                  background: '#475569', 
                  borderRadius: '30px', 
                  opacity: 0.4,
                  zIndex: 0,
                  transform: 'rotate(-10deg)'
               }}></div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
