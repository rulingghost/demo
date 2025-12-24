import React from 'react';
import { 
  ClipboardList, 
  MessageSquare, 
  Building2, 
  CreditCard, 
  Plane, 
  Home as HomeIcon,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const steps = [
    {
      title: "Submit a Request",
      desc: "Leave a request on our website. It's free and non-binding. Tell us about your medical needs.",
      icon: <ClipboardList size={32} />
    },
    {
      title: "Get Medical Consultation",
      desc: "Our medical coordinator calls you, answers all questions, and helps you choose the best hospital.",
      icon: <MessageSquare size={32} />
    },
    {
      title: "Select Clinic & Doctor",
      desc: "Receive personalized offers from top clinics. Compare prices, methods, and doctor portfolios.",
      icon: <Building2 size={32} />
    },
    {
      title: "Arrange Cost & Logistics",
      desc: "We help with visa documents, hotel booking, and provide an official cost estimate from the clinic.",
      icon: <CreditCard size={32} />
    },
    {
      title: "Treatment & Stay",
      desc: "You arrive at the hospital. We assist with transfers, translation, and any help you need locally.",
      icon: <Plane size={32} />
    },
    {
      title: "Return & Recovery",
      desc: "You go home with your medical results. We stay in touch for follow-up care and recovery monitoring.",
      icon: <HomeIcon size={32} />
    }
  ];

  return (
    <div style={{ paddingTop: '120px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Your Care Journey</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
            We guide you through every step of your medical travel. Professional, transparent, and 100% free of charge.
          </p>
        </div>

        {/* Timeline */}
        <div style={{ position: 'relative', maxWidth: '900px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '0', 
            bottom: '0', 
            width: '2px', 
            background: 'var(--border)', 
            transform: 'translateX(-50%)' 
          }} className="hide-mobile"></div>

          {steps.map((step, i) => (
            <div key={i} style={{ 
              display: 'flex', 
              justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end', 
              marginBottom: '60px',
              position: 'relative'
            }}>
              {/* Dot on line */}
              <div style={{ 
                position: 'absolute', 
                left: '50%', 
                top: '20px', 
                width: '40px', 
                height: '40px', 
                background: 'white', 
                border: '4px solid var(--primary)', 
                borderRadius: '20px', 
                transform: 'translateX(-50%)',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '800',
                color: 'var(--primary)'
              }} className="hide-mobile">{i + 1}</div>

              <div className="glass card-hover" style={{ 
                width: '420px', 
                padding: '40px', 
                borderRadius: '32px',
                position: 'relative',
                zIndex: 1
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  background: 'var(--primary)', 
                  color: 'white', 
                  borderRadius: '16px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  marginBottom: '24px' 
                }}>
                  {step.icon}
                </div>
                <h3 style={{ fontSize: '22px', marginBottom: '16px' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '15px' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <section style={{ padding: '100px 0' }}>
          <div className="container">
            <div style={{ background: 'var(--secondary)', borderRadius: '40px', padding: '60px', textAlign: 'center', color: 'white' }}>
              <h2 style={{ fontSize: '32px', color: 'white', marginBottom: '20px' }}>Ready to Get Started?</h2>
              <p style={{ color: '#94a3b8', marginBottom: '40px' }}>Join over 900,000 patients who found care through Sarfea.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>
                  Send Your Request
                </Link>
                <Link to="/search" className="btn-outline" style={{ padding: '16px 40px', borderColor: 'white', color: 'white' }}>
                  Browse Clinics
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default HowItWorks;
