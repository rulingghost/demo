import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const faqData = [
  {
    category: 'General',
    questions: [
      { q: 'Is Sarfea free for patients?', a: 'Yes! Our service is completely free for patients. We receive commissions from clinics, so you never pay extra for using Sarfea. In many cases, you even get lower prices through us.' },
      { q: 'How do I know if a clinic is good?', a: 'We manually verify every clinic. We check for international accreditations (like JCI or ISO), doctor certifications, and actual patient reviews. We also perform on-site audits.' },
      { q: 'Can you help with my visa?', a: 'Yes, we provide medical invitation letters that can assist you in obtaining a medical visa for your treatment abroad.' }
    ]
  },
  {
    category: 'Treatments & Pricing',
    questions: [
      { q: 'Are prices fixed?', a: 'Most of our "All-inclusive" packages have fixed prices. For complex surgeries, the final price is confirmed after the surgeon reviews your medical records or photos.' },
      { q: 'How do I pay?', a: 'Typically, you pay a small deposit through Sarfea to secure your booking, and the remaining balance is paid directly to the clinic upon arrival.' },
      { q: 'Does insurance cover medical tourism?', a: 'It depends on your provider. Some international insurance plans cover treatments abroad. We can provide all necessary documentation for reimbursement claims.' }
    ]
  },
  {
    category: 'Travel & Aftercare',
    questions: [
      { q: 'Do I need a companion?', a: 'For major surgeries (like rhinoplasty or BBL), we highly recommend bringing a friend or family member. However, our local "Patient Concierge" will assist you if you travel alone.' },
      { q: 'What happens if there are complications?', a: 'Your safety is our priority. All our partner clinics have emergency protocols. Additionally, Sarfea offers an optional "Medical Travel Shield" insurance that covers corrective treatments.' },
      { q: 'How long should I stay?', a: 'Stay duration varies by procedure. Hair transplants usually require 3 days, while major plastic surgery might need 7-10 days for initial recovery and check-ups.' }
    ]
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ paddingTop: '140px', background: 'var(--surface)', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>Frequently Asked Questions</h1>
          <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
            <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              style={{ width: '100%', padding: '20px 20px 20px 60px', borderRadius: '100px', border: '1px solid var(--border)', fontSize: '16px', boxShadow: 'var(--shadow-md)' }} 
            />
          </div>
        </div>

        {faqData.map((section, sIdx) => (
          <div key={sIdx} style={{ marginBottom: '60px' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{section.category}</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {section.questions.map((faq, qIdx) => {
                const globalIdx = `${sIdx}-${qIdx}`;
                const isOpen = openIndex === globalIdx;
                return (
                  <div key={qIdx} className="glass" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid var(--border)' }}>
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : globalIdx)}
                      style={{ width: '100%', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                    >
                      <span style={{ fontSize: '18px', fontWeight: '700' }}>{faq.q}</span>
                      {isOpen ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--primary)" />}
                    </button>
                    <div style={{ 
                      maxHeight: isOpen ? '500px' : '0', 
                      overflow: 'hidden', 
                      transition: 'all 0.3s ease',
                      padding: isOpen ? '0 32px 32px 32px' : '0 32px'
                    }}>
                      <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '16px' }}>{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        
        <div style={{ textAlign: 'center', marginTop: '100px', paddingBottom: '100px' }}>
           <p style={{ marginBottom: '20px', fontSize: '18px' }}>Still have questions?</p>
           <Link to="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>Contact Support</Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
