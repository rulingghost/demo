import React from 'react';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';
const Contact = () => {
  const supportImg = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800";
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. A medical coordinator will contact you shortly.');
  };

  return (
    <div style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '80px' }}>
            <div>
              <h1 style={{ fontSize: '48px', fontWeight: '800', marginBottom: '24px' }}>Get in Touch</h1>
              <p style={{ fontSize: '18px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: '1.6' }}>
                Have questions about your treatment? Our medical coordinators are here to help you 24/7. Choose your preferred way to connect.
              </p>
              
              <div style={{ marginBottom: '40px', borderRadius: '32px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                <img src={supportImg} alt="Support Team" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--surface)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Phone color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Call us anytime</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>+44 203 807 5678</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--surface)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mail color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Write to us</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>support@sarfea.com</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  <div style={{ width: '56px', height: '56px', background: 'var(--surface)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <MessageSquare color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)' }}>WhatsApp / Telegram</div>
                    <div style={{ fontSize: '20px', fontWeight: '700' }}>+90 530 123 45 67</div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '60px', padding: '32px', background: 'var(--secondary)', borderRadius: '24px', color: 'white' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <Clock />
                    <div>
                        <div style={{ fontWeight: '700' }}>Fast Response Guarantee</div>
                        <div style={{ fontSize: '14px', color: '#94a3b8' }}>We reply to medical inquiries within 30 mins.</div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="glass" style={{ padding: '60px', borderRadius: '40px', border: '1px solid var(--border)' }}>
              <h2 style={{ fontSize: '28px', marginBottom: '32px' }}>Send us a message</h2>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600' }}>First Name</label>
                    <input required type="text" placeholder="John" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '14px', fontWeight: '600' }}>Last Name</label>
                    <input required type="text" placeholder="Doe" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} />
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600' }}>Email Address</label>
                  <input required type="email" placeholder="john@example.com" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600' }}>Subject</label>
                  <select style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white' }}>
                    <option>General Inquiry</option>
                    <option>Clinic Cooperation</option>
                    <option>Patient Support</option>
                    <option>Media & Partnerships</option>
                  </select>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', fontWeight: '600' }}>Message</label>
                  <textarea required rows="5" placeholder="How can we help you?" style={{ padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', background: 'white', resize: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ padding: '20px', fontSize: '16px' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
