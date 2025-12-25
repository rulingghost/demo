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
import logo from '../assets/logo.jpg';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const footer = t('footer') || {};

  return (
    <footer style={{ background: 'var(--secondary)', color: 'white', padding: '80px 0 40px' }}>
      <div className="container" style={{ paddingTop: '40px' }}>
        
        {/* Trust Badges Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '60px' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <ShieldCheck size={24} color="var(--primary)" />
             <div style={{ fontSize: '12px', fontWeight: '700' }}>{footer.badges?.jci?.title}<br/><span style={{ color: '#94a3b8' }}>{footer.badges?.jci?.desc}</span></div>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Globe size={24} color="var(--primary)" />
             <div style={{ fontSize: '12px', fontWeight: '700' }}>{footer.badges?.global?.title}<br/><span style={{ color: '#94a3b8' }}>{footer.badges?.global?.desc}</span></div>
           </div>
           <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
             <Award size={24} color="var(--primary)" />
             <div style={{ fontSize: '12px', fontWeight: '700' }}>{footer.badges?.top?.title}<br/><span style={{ color: '#94a3b8' }}>{footer.badges?.top?.desc}</span></div>
           </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px', marginBottom: '60px' }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1.5' }}>
            <Link to="/" style={{ marginBottom: '24px', display: 'block' }}>
              <img src={logo} alt="Doctora Logo" style={{ height: '60px', width: 'auto' }} />
            </Link>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '24px', maxWidth: '300px' }}>
              {footer.about}
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Facebook size={20} /></div>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Instagram size={20} /></div>
              <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Youtube size={20} /></div>
            </div>
          </div>

          {/* Treatment Columns */}
          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '16px' }}>{footer.treatments?.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              {footer.treatments?.items && footer.treatments.items.map((item, i) => (
                <li key={i}><Link to={i === 3 ? '/courses' : '/search'} style={{ color: i === 3 ? 'var(--primary)' : '#94a3b8', fontWeight: i === 3 ? '700' : 'normal' }}>{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '16px' }}>{footer.destinations?.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              {footer.destinations?.items && footer.destinations.items.map((item, i) => (
                <li key={i}><Link to={`/${item.toLowerCase()}`} style={{ color: '#94a3b8' }}>{item}</Link></li>
              ))}
              <li><Link to="/search" style={{ color: 'var(--primary)', fontWeight: '700' }}>{footer.destinations?.viewAll}</Link></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: 'white', marginBottom: '24px', fontSize: '16px' }}>{footer.contact?.title}</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '14px' }}>
              <li style={{ display: 'flex', gap: '10px', color: '#94a3b8' }}>
                <MapPin size={18} color="var(--primary)" />
                <span>{footer.contact?.office}<br/>{footer.contact?.address}</span>
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
                <span>support@doctora.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Hubs */}
        <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '60px' }}>
           <h5 style={{ color: 'white', fontSize: '14px' }}>{footer.hubs?.title}</h5>
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
            {footer.copyright} <br className="show-mobile" />
            {footer.disclaimer}
          </p>
          <div style={{ display: 'flex', gap: '30px', fontSize: '13px', color: '#64748b' }}>
            <Link to="/safety" style={{ color: '#64748b' }}>{footer.links?.editorial}</Link>
            <Link to="/safety" style={{ color: '#64748b' }}>{footer.links?.privacy}</Link>
            <Link to="/safety" style={{ color: '#64748b' }}>{footer.links?.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
