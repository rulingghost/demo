import React from 'react';
import { Shield, CheckCircle, Award, Lock, FileText, Scale, Info } from 'lucide-react';

const Safety = () => {
  return (
    <div className="section" style={{ paddingTop: '140px', background: '#f8fafc' }}>
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <header style={{ textAlign: 'center', marginBottom: '80px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', fontSize: '14px', marginBottom: '16px' }}>
              <Shield size={20} /> DOCTORA SAFETY PROTOCOL
            </div>
            <h1 style={{ fontSize: '52px', fontWeight: '800', marginBottom: '24px' }}>Patient Safety & Quality Guarantee</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
              We take the responsibility of your health seriously. Every clinic on Doctora undergoes a rigorous 14-step verification process before being listed.
            </p>
          </header>

          <section style={{ marginBottom: '80px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '32px' }}>How We Select Clinics</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { 
                  title: 'Medical Licensing & Accreditation', 
                  desc: 'We verify national licenses and international accreditations such as JCI, ISO, and TEMOS.',
                  icon: <Award color="var(--primary)" />
                },
                { 
                  title: 'Doctor Expertise', 
                  desc: 'Every surgeon\'s CV, successful case history, and board certifications are manually checked by our medical doctors.',
                  icon: <CheckCircle color="var(--primary)" />
                },
                { 
                  title: 'On-Site Inspections', 
                  desc: 'Our representatives visit clinics to ensure hygiene standards, technology level, and patient care quality.',
                  icon: <Info color="var(--primary)" />
                },
                { 
                  title: 'Real Patient Feedback', 
                  desc: 'We only publish reviews from patients who actually traveled through our platform. No fake reviews.',
                  icon: <FileText color="var(--primary)" />
                }
              ].map((item, i) => (
                <div key={i} className="glass" style={{ padding: '32px', borderRadius: '24px', display: 'flex', gap: '24px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section style={{ padding: '60px', borderRadius: '40px', background: 'var(--secondary)', color: 'white', marginBottom: '80px' }}>
            <h2 style={{ color: 'white', fontSize: '32px', marginBottom: '24px' }}>Data Privacy & Security</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Lock size={24} />
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>HIPAA Compliant</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '15px' }}>Your medical records are encrypted and stored according to international healthcare data privacy standards.</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <Scale size={24} />
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>Legal Protection</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '15px' }}>We provide legal assistance and support in case of disputes between the patient and the clinic.</p>
              </div>
            </div>
          </section>

          <section style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', marginBottom: '40px' }}>Our Medical Advisory Board</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
              {[1, 2, 3].map(i => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ width: '120px', height: '120px', borderRadius: '50%', background: 'var(--surface)', marginBottom: '16px', margin: '0 auto 16px' }}>
                    <img 
                      src={`https://i.pravatar.cc/150?u=doc${i}`} 
                      alt="Advisor" 
                      style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ fontWeight: '700' }}>Dr. Alex Johnson</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Chief Medical Officer</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Safety;
