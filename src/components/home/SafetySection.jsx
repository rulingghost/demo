import React from 'react';
import { ShieldCheck, Award, FileCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const SafetySection = () => {
  return (
    <section style={{ padding: '120px 0', background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px', alignItems: 'center' }}>
          
          {/* Content Side */}
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', color: '#16a34a', padding: '8px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: '700', marginBottom: '24px' }}>
               <ShieldCheck size={16} /> ACCREDITATION & QUALITY
            </div>
            <h2 style={{ fontSize: '42px', fontWeight: '900', marginBottom: '24px', color: '#0f172a', lineHeight: '1.2' }}>
              Globally Recognized <br/> Medical Certifications.
            </h2>
            <p style={{ color: '#64748b', fontSize: '18px', marginBottom: '40px', lineHeight: '1.6' }}>
              Our courses are accredited by leading medical boards, ensuring that the skills you acquire are recognized internationally and meet the highest standards of safety and efficacy.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
               <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ padding: '12px', background: '#eff6ff', borderRadius: '14px', height: 'fit-content' }}><Award size={24} color="#2563eb" /></div>
                  <div>
                     <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', color: '#1e293b' }}>CME Accredited</h4>
                     <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.5' }}>Earn Continuing Medical Education credits accepted worldwide.</p>
                  </div>
               </div>
               <div style={{ display: 'flex', gap: '20px' }}>
                  <div style={{ padding: '12px', background: '#f5f3ff', borderRadius: '14px', height: 'fit-content' }}><Globe size={24} color="#7c3aed" /></div>
                  <div>
                     <h4 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '8px', color: '#1e293b' }}>International Board Certified</h4>
                     <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.5' }}>Curriculum aligned with European and American medical standards.</p>
                  </div>
               </div>
            </div>
          </div>
          
          {/* Visual Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ position: 'relative' }}
          >
             <div style={{ background: '#0f172a', borderRadius: '40px', padding: '60px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 60px -15px rgba(15, 23, 42, 0.3)' }}>
                {/* Background Pattern */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                <ShieldCheck size={120} color="white" style={{ opacity: 0.1, margin: '0 auto 40px' }} />
                
                <h3 style={{ fontSize: '32px', marginBottom: '20px', fontWeight: '900', color: 'white' }}>100% Validated</h3>
                <p style={{ color: '#cbd5e1', marginBottom: '40px', fontSize: '16px', lineHeight: '1.6' }}>
                  Every certificate issued is cryptographically secured and verifiable online by institutions.
                </p>
                
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', background: 'white', color: '#0f172a' }}>Verify a Certificate</button>
             </div>
             
             {/* Floating Badge */}
             <div className="animate-float" style={{ position: 'absolute', top: '40px', right: '-30px', background: 'white', padding: '15px 25px', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileCheck size={24} color="#16a34a" />
                <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>ISO 9001 Certified</div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default SafetySection;
