import React, { useState } from 'react';
import { X, ChevronRight, ChevronLeft, CheckCircle, Building2, MapPin, DollarSign, User } from 'lucide-react';

const ClinicMatchQuiz = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    procedure: '',
    country: '',
    budget: '',
    name: '',
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const procedures = ['Dental Implants', 'Hair Transplant', 'Aesthetic Surgery', 'Oncology', 'IVF', 'Other'];
  const countries = ['Turkey', 'Mexico', 'Poland', 'Thailand', 'Spain', 'Not Sure'];
  const budgets = ['Under $3,000', '$3,000 - $7,000', '$7,000 - $15,000', '$15,000+', 'Looking for best value'];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.8)',
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div className="glass" style={{
        width: '100%',
        maxWidth: '600px',
        background: 'white',
        borderRadius: '32px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
      }}>
        {/* Header */}
        <div style={{ padding: '30px', background: 'var(--secondary)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', marginBottom: '4px', textTransform: 'uppercase' }}>Step {step} of 4</div>
            <h3 style={{ fontSize: '20px', color: 'white' }}>Get Your Clinic Match</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '4px', background: 'var(--surface)' }}>
          <div style={{ height: '100%', background: 'var(--primary)', width: `${(step / 4) * 100}%`, transition: 'all 0.3s ease' }}></div>
        </div>

        {/* Content */}
        <div style={{ padding: '40px' }}>
          
          {step === 1 && (
            <div className="animate-fade-in">
              <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Building2 color="var(--primary)" /> What procedure do you need?
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {procedures.map(p => (
                  <button 
                    key={p}
                    onClick={() => { setFormData({...formData, procedure: p}); nextStep(); }}
                    style={{ 
                      padding: '16px', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border)', 
                      background: formData.procedure === p ? '#f0fdf4' : 'white',
                      borderColor: formData.procedure === p ? 'var(--accent)' : 'var(--border)',
                      fontWeight: '700',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-in">
              <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin color="var(--primary)" /> Preferred destination?
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {countries.map(c => (
                  <button 
                    key={c}
                    onClick={() => { setFormData({...formData, country: c}); nextStep(); }}
                    style={{ 
                      padding: '16px', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border)', 
                      background: formData.country === c ? '#f0fdf4' : 'white',
                      borderColor: formData.country === c ? 'var(--accent)' : 'var(--border)',
                      fontWeight: '700',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-in">
              <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <DollarSign color="var(--primary)" /> Your estimated budget?
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {budgets.map(b => (
                  <button 
                    key={b}
                    onClick={() => { setFormData({...formData, budget: b}); nextStep(); }}
                    style={{ 
                      padding: '16px', 
                      borderRadius: '16px', 
                      border: '1px solid var(--border)', 
                      background: formData.budget === b ? '#f0fdf4' : 'white',
                      borderColor: formData.budget === b ? 'var(--accent)' : 'var(--border)',
                      fontWeight: '700',
                      textAlign: 'left',
                      cursor: 'pointer'
                    }}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="animate-fade-in">
              <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <User color="var(--primary)" /> Where should we send your results?
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none' }}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none' }}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number (WhatsApp preferred)" 
                  style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none' }}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
                <button 
                  className="btn-primary" 
                  style={{ padding: '18px', fontSize: '18px', borderRadius: '16px', marginTop: '10px' }}
                  onClick={() => setStep(5)}
                >
                  Find My Perfect Clinic
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="animate-fade-in" style={{ textAlign: 'center', padding: '20px 0' }}>
               <div style={{ width: '80px', height: '80px', background: '#dcfce7', color: 'var(--accent)', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                 <CheckCircle size={48} />
               </div>
               <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>Request Received!</h3>
               <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                 Our medical coordinators are already reviewing your case. You will receive a personalized clinic match within 2-4 hours via email/WhatsApp.
               </p>
               <button 
                className="btn-primary" 
                style={{ padding: '16px 40px' }}
                onClick={onClose}
               >
                 Got it, thanks!
               </button>
            </div>
          )}

          {step > 1 && step < 5 && (
            <button 
              onClick={prevStep}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '30px', cursor: 'pointer', fontWeight: '600' }}
            >
              <ChevronLeft size={18} /> Previous Step
            </button>
          )}

        </div>

        {/* Footer info */}
        {step < 5 && (
          <div style={{ padding: '20px 40px', background: 'var(--surface)', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
            Protective of your data. We strictly follow HIPAA and Global Privacy Standards.
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicMatchQuiz;
