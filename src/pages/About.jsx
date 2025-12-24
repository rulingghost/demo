import React from 'react';
import { Target, Heart, Users, ShieldCheck, Globe, Star } from 'lucide-react';

const About = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
          <h1 style={{ fontSize: '56px', fontWeight: '800', marginBottom: '24px' }}>Empowering Patients, Transforming Lives</h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            Sarfea is a leading global medical tourism platform that connects patients with the world's best doctors and clinics. Since 2020, we have helped over 10,000 patients find safe, affordable, and high-quality medical care abroad.
          </p>
        </div>
      </section>

      <section style={{ background: 'var(--surface)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
                alt="Our Office" 
                style={{ width: '100%', borderRadius: '32px', boxShadow: 'var(--shadow-xl)' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>Our Mission</h2>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.7' }}>
                We believe that high-quality healthcare shouldn't be a luxury. Our mission is to provide transparency in medical pricing and quality, ensuring that every patient has the information and support they need to make the best decision for their health.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <ShieldCheck color="var(--primary)" />, title: 'Transparency', desc: 'No hidden fees. You pay the clinic directly.' },
                  { icon: <Heart color="var(--primary)" />, title: 'Care', desc: 'Personal coordinator available 24/7 for you.' },
                  { icon: <Users color="var(--primary)" />, title: 'Reliability', desc: 'Only JCI-accredited and verified clinics.' }
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ padding: '12px', background: 'white', borderRadius: '12px', height: 'fit-content' }}>{item.icon}</div>
                    <div>
                      <h4 style={{ fontSize: '18px', marginBottom: '4px' }}>{item.title}</h4>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px' }}>Our Global Reach</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>25+</div>
                <div style={{ color: 'var(--text-muted)' }}>Countries Covered</div>
             </div>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>1,200+</div>
                <div style={{ color: 'var(--text-muted)' }}>Verified Clinics</div>
             </div>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>15k+</div>
                <div style={{ color: 'var(--text-muted)' }}>Happy Patients</div>
             </div>
             <div>
                <div style={{ fontSize: '48px', fontWeight: '800', color: 'var(--primary)' }}>4.9/5</div>
                <div style={{ color: 'var(--text-muted)' }}>Trustpilot Rating</div>
             </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--secondary)', color: 'white', textAlign: 'center' }}>
          <div className="container">
              <h2 style={{ color: 'white', fontSize: '36px', marginBottom: '24px' }}>Expert Care is Just a Click Away</h2>
              <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 32px' }}>
                Join thousands of patients who trust Sarfea for their medical journey.
              </p>
              <Link to="/contact" className="btn-primary" style={{ padding: '16px 48px' }}>Start Your Journey</Link>
          </div>
      </section>
    </div>
  );
};

export default About;
