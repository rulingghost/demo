import React, { useState } from 'react';
import { FileText, Upload, Brain, CheckCircle, AlertCircle, ArrowRight, Shield } from 'lucide-react';

const SecondOpinion = () => {
  const [step, setStep] = useState(1);

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '80px 0' }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px', 
              background: 'rgba(255,255,255,0.1)', padding: '6px 16px', borderRadius: '100px',
              fontSize: '12px', fontWeight: '700', marginBottom: '24px', color: '#38bdf8'
            }}>
              <Brain size={16} /> NEW MEDICAL SERVICE
            </div>
            <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px', lineHeight: '1.2' }}>
              Unsure about your diagnosis? <br />
              <span style={{ color: '#38bdf8' }}>Get a Second Opinion.</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#94a3b8', marginBottom: '40px', lineHeight: '1.6' }}>
              Upload your medical reports and get a detailed review from top international professors in Oncology, Neurology, or Cardiology within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '20px' }}>
               <button className="btn-primary" style={{ padding: '16px 40px' }} onClick={() => document.getElementById('upload-form').scrollIntoView({behavior: 'smooth'})}>
                 Start Consultation
               </button>
               <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
                 <Shield size={18} /> HIPAA Compliant & Secure
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '32px', marginBottom: '16px' }}>Expert Review Process</h2>
            <p style={{ color: 'var(--text-muted)' }}>Three simple steps to peace of mind.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            {[
              { icon: <Upload size={32} />, title: "1. Upload Reports", desc: "Share your MRI, CT scans, or epicrisis securely." },
              { icon: <Brain size={32} />, title: "2. Expert Analysis", desc: "A top professor reviews your case in detail." },
              { icon: <FileText size={32} />, title: "3. Receive Report", desc: "Get a comprehensive treatment plan & video call." }
            ].map((s, i) => (
              <div key={i} className="glass" style={{ padding: '40px', borderRadius: '24px', textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'var(--surface)', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--primary)' }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upload Form Section */}
      <section id="upload-form" style={{ padding: '80px 0', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="glass" style={{ padding: '60px', borderRadius: '40px', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--border)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
               <h2 style={{ fontSize: '32px', marginBottom: '12px' }}>Submit Your Case</h2>
               <p style={{ color: 'var(--text-muted)' }}>Our medical coordinators will contact you within 2 hours.</p>
            </div>

            <form style={{ display: 'grid', gap: '24px' }} onSubmit={(e) => { e.preventDefault(); alert("Reports uploaded safely!"); }}>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                 <div>
                   <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Patient Name</label>
                   <input type="text" placeholder="Full Name" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }} />
                 </div>
                 <div>
                   <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Phone Number</label>
                   <input type="tel" placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none' }} />
                 </div>
               </div>

               <div>
                 <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Medical Department</label>
                 <select style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', background: 'white' }}>
                   <option>Oncology (Cancer Care)</option>
                   <option>Neurology & Neurosurgery</option>
                   <option>Cardiology</option>
                   <option>Orthopedics</option>
                   <option>IVF & Fertility</option>
                   <option>Other</option>
                 </select>
               </div>

               <div>
                 <label style={{ display: 'block', fontSize: '14px', fontWeight: '700', marginBottom: '8px' }}>Describe Diagnosis</label>
                 <textarea rows="4" placeholder="Please describe your current diagnosis and what questions you have..." style={{ width: '100%', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', outline: 'none', resize: 'none' }}></textarea>
               </div>

               <div style={{ border: '2px dashed var(--border)', borderRadius: '24px', padding: '40px', textAlign: 'center', cursor: 'pointer', background: '#f8fafc' }}>
                  <Upload size={40} color="var(--text-muted)" style={{ marginBottom: '16px' }} />
                  <div style={{ fontWeight: '700', marginBottom: '8px' }}>Click to upload reports</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>PDF, JPG, DICOM (Max 50MB)</div>
               </div>

               <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '13px', color: 'var(--text-muted)' }}>
                  <AlertCircle size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
                  By submitting this form, you agree to allow our medical board to review your sensitive health data in accordance with HIPAA regulations.
               </div>

               <button className="btn-primary" style={{ padding: '20px', fontSize: '18px', marginTop: '20px' }}>
                 Request Second Opinion
               </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default SecondOpinion;
