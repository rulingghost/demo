import React, { useState } from 'react';
import { X, ChevronLeft, CheckCircle, Building2, MapPin, DollarSign, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const ClinicMatchQuiz = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const { t } = useLanguage();
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
  const budgets = ['Under $3,000', '$3,000 - $7,000', '$7,000 - $15,000', '$15,000+', 'Best Value'];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(15, 23, 42, 0.6)', 
      backdropFilter: 'blur(8px)',
      zIndex: 2000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="glass-premium" 
        style={{
          width: '100%',
          maxWidth: '600px',
          background: 'white',
          borderRadius: '32px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 30px 60px rgba(0,0,0,0.3)',
          border: '1px solid white'
        }}
      >
        {/* Header */}
        <div style={{ padding: '30px', background: 'var(--secondary)', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '12px', fontWeight: '800', color: 'var(--primary)', marginBottom: '4px', textTransform: 'uppercase' }}>{t('quiz.step')} {step} {t('quiz.of')} 4</div>
            <h3 style={{ fontSize: '20px', color: 'white' }}>{t('quiz.title')}</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div style={{ height: '4px', background: 'var(--surface)' }}>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${(step / 4) * 100}%` }}
            style={{ height: '100%', background: 'var(--primary)' }}
          ></motion.div>
        </div>

        {/* Content */}
        <div style={{ padding: '40px' }}>
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Building2 color="var(--primary)" /> {t('quiz.q1')}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {procedures.map(p => (
                    <motion.button 
                      key={p}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
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
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin color="var(--primary)" /> {t('quiz.q2')}
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {countries.map(c => (
                    <motion.button 
                      key={c}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
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
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <DollarSign color="var(--primary)" /> {t('quiz.q3')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {budgets.map(b => (
                    <motion.button 
                      key={b}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
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
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h4 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <User color="var(--primary)" /> {t('quiz.q4')}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <input 
                    type="text" 
                    placeholder={t('quiz.placeholderName')}
                    style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none' }}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    placeholder={t('quiz.placeholderEmail')}
                    style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none' }}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    placeholder={t('quiz.placeholderPhone')}
                    style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', outline: 'none' }}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary" 
                    style={{ padding: '18px', fontSize: '18px', borderRadius: '16px', marginTop: '10px' }}
                    onClick={() => setStep(5)}
                  >
                    {t('quiz.submit')}
                  </motion.button>
                </div>
              </motion.div>
            )}

            {step === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '20px 0' }}
              >
                 <div style={{ width: '80px', height: '80px', background: '#dcfce7', color: 'var(--accent)', borderRadius: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                   <CheckCircle size={48} />
                 </div>
                 <h3 style={{ fontSize: '28px', marginBottom: '16px' }}>{t('quiz.successTitle')}</h3>
                 <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '32px' }}>
                   {t('quiz.successDesc')}
                 </p>
                 <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="btn-primary" 
                  style={{ padding: '16px 40px' }}
                  onClick={onClose}
                 >
                   {t('quiz.close')}
                 </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {step > 1 && step < 5 && (
            <button 
              onClick={prevStep}
              style={{ background: 'none', border: 'none', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '30px', cursor: 'pointer', fontWeight: '600' }}
            >
              <ChevronLeft size={18} /> {t('quiz.prev')}
            </button>
          )}

        </div>

        {/* Footer info */}
        {step < 5 && (
          <div style={{ padding: '20px 40px', background: 'var(--surface)', fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
            {t('quiz.privacy')}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ClinicMatchQuiz;
