import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText, MessageCircle, Settings, LogOut, Bell, User, CreditCard, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const PatientDashboard = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('overview');

  const menuItems = [
    { id: 'overview', icon: Calendar, label: t('dashboard.upcomingAppts') },
    { id: 'records', icon: FileText, label: t('dashboard.medicalRecords') },
    { id: 'messages', icon: MessageCircle, label: t('dashboard.messages') },
    { id: 'settings', icon: Settings, label: t('dashboard.settings') },
  ];

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh', paddingBottom: '40px' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '30px' }}>
        
        {/* Sidebar */}
        <aside>
          <div className="glass" style={{ padding: '30px', borderRadius: '24px', position: 'sticky', top: '120px' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', margin: '0 auto 15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <User size={40} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800' }}>Ahmet Yılmaz</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Istanbul, TR</p>
            </div>

            <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {menuItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    borderRadius: '12px',
                    border: 'none',
                    background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                    color: activeTab === item.id ? 'white' : 'var(--secondary)',
                    fontWeight: activeTab === item.id ? '700' : '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    textAlign: 'left',
                    fontSize: '15px'
                  }}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <div style={{ height: '1px', background: 'var(--border)', margin: '15px 0' }}></div>
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: 'none',
                  background: 'transparent',
                  color: '#ef4444',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '15px'
                }}
              >
                <LogOut size={18} />
                {t('dashboard.logout')}
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <div>
              <h1 style={{ fontSize: '28px', fontWeight: '900', color: 'var(--secondary)' }}>{t('dashboard.welcome')} Ahmet</h1>
              <p style={{ color: 'var(--text-muted)' }}>Here is your health overview.</p>
            </div>
            <button className="glass" style={{ width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)', border: 'none', cursor: 'pointer' }}>
              <Bell size={20} />
            </button>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '30px' }}>
            <motion.div 
              whileHover={{ y: -5 }}
              className="glass" 
              style={{ padding: '24px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <Calendar size={20} />
                </div>
                <span className="badge-verified" style={{ background: '#dbeafe', color: 'var(--primary)' }}>2 Days</span>
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>Dental Check-up</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Memorial Hospital • 14:30</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -5 }}
              className="glass" 
              style={{ padding: '24px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#166534' }}>
                  <CreditCard size={20} />
                </div>
                <ChevronRight size={20} color="var(--text-muted)" />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px' }}>{t('dashboard.paymentStatus')}</h4>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>All invoices paid</p>
              </div>
            </motion.div>
          </div>

          <section>
             <h2 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '20px', color: 'var(--secondary)' }}>{t('dashboard.myTreatmentPlan')}</h2>
             <div className="glass" style={{ padding: '30px', borderRadius: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                   <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FileText size={24} color="var(--primary)" />
                   </div>
                   <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>Hollywood Smile Makeover</h3>
                      <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Dr. Ergin Er • Esteworld Clinic</p>
                   </div>
                   <button className="btn-outline" style={{ marginLeft: 'auto', fontSize: '14px' }}>View Details</button>
                </div>
                
                <div style={{ position: 'relative', paddingLeft: '20px' }}>
                   <div style={{ position: 'absolute', top: 0, bottom: 0, left: '7px', width: '2px', background: 'var(--border)' }}></div>
                   <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', position: 'relative' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#10b981', position: 'absolute', left: '-20px', top: '5px', border: '3px solid white', boxShadow: '0 0 0 1px #10b981' }}></div>
                      <div>
                         <div style={{ fontSize: '14px', fontWeight: '700', color: '#10b981', marginBottom: '4px' }}>COMPLETED</div>
                         <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Online Consultation</h4>
                         <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Initial assessment and treatment plan approval.</p>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', position: 'relative' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--primary)', position: 'absolute', left: '-20px', top: '5px', border: '3px solid white', boxShadow: '0 0 0 1px var(--primary)' }}></div>
                      <div>
                         <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--primary)', marginBottom: '4px' }}>UPCOMING • OCT 15</div>
                         <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>Arrival & VIP Transfer</h4>
                         <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Driver will meet you at IST Airport Gate 8.</p>
                      </div>
                   </div>
                   <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'var(--border)', position: 'absolute', left: '-20px', top: '5px', border: '3px solid white', boxShadow: '0 0 0 1px var(--border)' }}></div>
                      <div>
                         <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)', marginBottom: '4px' }}>PLANNED</div>
                         <h4 style={{ fontSize: '16px', marginBottom: '4px' }}>First Treatment Session</h4>
                         <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Preparation and temporary veneers.</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

        </main>
      </div>
    </div>
  );
};

export default PatientDashboard;
