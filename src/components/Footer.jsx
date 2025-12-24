import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ShieldCheck, 
  CheckCircle,
  Globe,
  Award,
  ChevronRight,
  Building2,
  MessageCircle
} from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: 'var(--secondary)', color: 'white', padding: '80px 0 40px' }}>
      <div className="container">
        
        {/* Trust Badges Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '60px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <ShieldCheck size={24} color="var(--primary)" />
             <div style={{ fontSize: '12px', fontWeight: '700' }}>JCI ACCREDITED<br/><span style={{ color: '#94a3b8' }}>Partner Hospitals</span></div>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Globe size={24} color="var(--primary)" />
             <div style={{ fontSize: '12px', fontWeight: '700' }}>GLOBAL REACH<br/><span style={{ color: '#94a3b8' }}>Patients from 92+ countries</span></div>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Award size={24} color="var(--primary)" />
             <div style={{ fontSize: '12px', fontWeight: '700' }}>TOP 1% CLINICS<br/><span style={{ color: '#94a3b8' }}>Strict Selection Process</span></div>
           </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1.5' }}>
            <Link to="/" style={{ fontSize: '28px', fontWeight: '900', color: 'var(--primary)', marginBottom: '24px', display: 'block', letterSpacing: '-1px' }}>
              SARFEA
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '300px' }}>
              Sarfea is a global medical tourism platform connecting patients with the best medical care worldwide. 
              Our service is 100% free for patients.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Facebook size={20} /></div>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Instagram size={20} /></div>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Youtube size={20} /></div>
            </div>
          </div>

          {/* Treatment Columns */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '16px' }}>Top Treatments</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <li><Link to="/search" style={{ color: '#94a3b8' }}>Dental Implants</Link></li>
              <li><Link to="/search" style={{ color: '#94a3b8' }}>Hair Transplant</Link></li>
              <li><Link to="/search" style={{ color: '#94a3b8' }}>Breast Augmentation</Link></li>
              <li><Link to="/search" style={{ color: '#94a3b8' }}>In Vitro Fertilization</Link></li>
              <li><Link to="/search" style={{ color: '#94a3b8' }}>All Treatments</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '16px' }}>Top Destinations</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <li><Link to="/turkey" style={{ color: '#94a3b8' }}>Turkey</Link></li>
              <li><Link to="/thailand" style={{ color: '#94a3b8' }}>Thailand</Link></li>
              <li><Link to="/mexico" style={{ color: '#94a3b8' }}>Mexico</Link></li>
              <li><Link to="/germany" style={{ color: '#94a3b8' }}>Germany</Link></li>
              <li><Link to="/search" style={{ color: '#94a3b8', fontWeight: '700', color: 'var(--primary)' }}>View All Countries</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '16px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '14px' }}>
              <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
                <MapPin size={18} color="var(--primary)" />
                <span>London Office:<br/>Baker St 221B, London, UK</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
                <Phone size={18} color="var(--primary)" />
                <span>+44 20 3807 5678</span>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
                <MessageCircle size={18} color="var(--primary)" />
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href="#" style={{ color: '#94a3b8' }}>WhatsApp</a>
                  <span style={{ color: '#475569' }}>•</span>
                  <a href="#" style={{ color: '#94a3b8' }}>Telegram</a>
                  <span style={{ color: '#475569' }}>•</span>
                  <a href="#" style={{ color: '#94a3b8' }}>Viber</a>
                </div>
              </li>
              <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
                <Mail size={18} color="var(--primary)" />
                <span>support@sarfea.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Hubs */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '60px' }}>
           <h5 style={{ color: 'white', fontSize: '14px' }}>Our Global Support Hubs</h5>
           <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
             {['London, UK', 'Istanbul, TR', 'Dubai, UAE', 'Kiev, UA', 'Berlin, DE'].map(city => (
               <div key={city} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '13px' }}>
                 <CheckCircle size={14} color="var(--accent)" /> {city}
               </div>
             ))}
           </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ color: '#64748b', fontSize: '13px' }}>
            © 2025 Sarfea Global Ltd. All rights reserved. <br className="show-mobile" />
            Medical Disclaimer: Content is for information only.
          </p>
          <div style={{ display: 'flex', gap: '30px', fontSize: '13px', color: '#64748b' }}>
            <Link to="/safety" style={{ color: '#64748b' }}>Editorial Policy</Link>
            <Link to="/safety" style={{ color: '#64748b' }}>Privacy Policy</Link>
            <Link to="/safety" style={{ color: '#64748b' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
