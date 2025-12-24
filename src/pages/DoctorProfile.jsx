import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Star, ShieldCheck, MapPin, Calendar, Globe, Award, 
  CheckCircle, Clock, Stethoscope, GraduationCap, 
  MessageCircle, ThumbsUp, ChevronRight, User, 
  ArrowRight, Heart, Share2, Bookmark, FileText, 
  PlayCircle, Medal, HeartPulse, Microscope, Camera, Building2
} from 'lucide-react';

const DoctorProfile = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Multi-doctor data support
  const doctorsData = {
    'tarik-akar': {
      id: 1,
      name: "Dr. Tarik Akar",
      title: "Gastroenterologist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400",
      clinic: "Liv Hospital Ulus",
      location: "Istanbul, Turkey",
      rating: 4.9,
      reviews: 124,
      experience: "18 Years",
      languages: ["English", "Turkish", "German"],
      specialties: ["Gastroenterology", "Hepatology", "Endoscopy", "Colon cancer"],
      priceFrom: "€1,200",
      about: `Dr. Tarik Akar is a highly experienced Gastroenterologist with over 18 years of practice. He is renowned for his expertise in advanced endoscopic procedures and the treatment of complex gastrointestinal disorders. Dr. Akar has performed over 15,000 successful endoscopies and colonoscopies.

      He graduated from the prestigious Hacettepe University Faculty of Medicine and completed his specialization at Gazi University. Dr. Akar is an active member of the European Society of Gastrointestinal Endoscopy (ESGE) and has published numerous research papers in international medical journals.`,
      education: [
        { year: "2008 - 2012", degree: "Gastroenterology Specialization", school: "Gazi University Faculty of Medicine" },
        { year: "2002 - 2008", degree: "Medical Doctor (M.D.)", school: "Hacettepe University Faculty of Medicine" }
      ],
      experience_timeline: [
        { year: "2018 - Present", role: "Senior Gastroenterologist", place: "Liv Hospital Ulus" },
        { year: "2012 - 2018", role: "Specialist Doctor", place: "Ankara Training and Research Hospital" }
      ],
      certificates: ["ESGE Member", "Turkish Gastroenterology Association", "Advanced Endoscopy Certification"],
      achievements: [
        "Performed 15,000+ Endoscopies",
        "European Board of Gastroenterology Certified",
        "Best Doctor of the Year 2021 nominee",
        "Published 30+ Academic Papers"
      ],
      publications: [
        "Advanced Endoscopy Techniques in Early GI Cancer (2022)",
        "Hepatology: A Modern Approach to Fatty Liver Disease (2021)",
        "Microbiome and Longevity: The Gastric Connection (2019)"
      ],
      faq: [
        { q: "How long is the recovery from a colonoscopy?", a: "Typically, recovery is fast. Most patients return to their normal diet after the procedure if no polyps were removed. Some mild bloating might occur." },
        { q: "Do I need a referral to see Dr. Tarik Akar?", a: "No, you can book a direct consultation through Sarfea for a fast track expert opinion." }
      ],
      gallery: [
        { before: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400", title: "Gastric Health Recovery" },
        { before: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400", title: "Liver Treatment Results" }
      ],
      clinic_images: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1512678080530-7760d81faba6?auto=format&fit=crop&q=80&w=600"
      ],
      procedures: [
        { name: "Diagnostic Endoscopy", price: "€450", time: "30-45 mins" },
        { name: "Colonoscopy (Full)", price: "€750", time: "1 hour" },
        { name: "Gastric Botox", price: "€1,200", time: "20 mins" },
        { name: "Hepatitis C Treatment Package", price: "€2,500", time: "Variable" }
      ]
    },
    'bulent-cihantimur': {
      id: 2,
      name: "Dr. Bülent Cihantimur",
      title: "Plastic Surgeon",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400&h=400",
      clinic: "Estetik International",
      location: "Istanbul, Turkey",
      rating: 5.0,
      reviews: 856,
      experience: "25 Years",
      languages: ["English", "Turkish", "French"],
      specialties: ["Vaser Liposuction", "BBL", "Spider Web Technique", "Rhinoplasty"],
      priceFrom: "€3,500",
      about: `Dr. Bülent Cihantimur (Doctor B) is a world-renowned Plastic Surgeon known for his innovative techniques and artistic approach to aesthetics. He is the founder of Estetik International and the developer of several globally recognized techniques like the Spider Web Technique.

      With over 25 years of experience, he has treated thousands of international patients, including celebrities. He is a frequent speaker at international congresses and has been awarded the 'Golden Bistoury' for his contributions to aesthetic surgery.`,
      education: [
        { year: "1995 - 1999", degree: "Plastic Surgery Specialization", school: "Uludag University" },
        { year: "1988 - 1994", degree: "M.D.", school: "Istanbul University" }
      ],
      experience_timeline: [
        { year: "1999 - Present", role: "Founder & Chief Surgeon", place: "Estetik International" }
      ],
      certificates: ["ISAPS Member", "ASPS Candidate Member", "Turkish Aesthetic Surgery Association"],
      achievements: [
        "Golden Bistoury Award Winner",
        "Developer of Spider Web Technique",
        "Author of 'Aesthetic Philosophy'",
        "100k+ Successful Procedures in Clinic"
      ],
      publications: [
        "The Aesthetic Spine: Spider Web Technique (2018)",
        "Natural Fat Transfer: Long-term Results (2020)"
      ],
      faq: [
        { q: "What is the Spider Web Technique?", a: "It is a non-surgical face lift technique developed by Dr. B using special medical threads to trigger collagen production." }
      ],
      gallery: [
        { before: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?auto=format&fit=crop&q=80&w=400", title: "Hair Transformation" },
        { before: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400", after: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400", title: "Facial Aesthetics" }
      ],
      clinic_images: [
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600"
      ],
      procedures: [
        { name: "Spider Web Face Lift", price: "€2,500", time: "1 hour" },
        { name: "Vaser Liposuction (1 Zone)", price: "€1,800", time: "2 hours" },
        { name: "Rhinoplasty", price: "€3,200", time: "3 hours" },
        { name: "Brazillian Butt Lift", price: "€4,500", time: "4 hours" }
      ]
    }
  };

  const doctor = doctorsData[id] || doctorsData['tarik-akar']; // Fallback

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      {/* Breadcrumb */}
      <div className="container" style={{ padding: '20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#64748b' }}>Home</Link>
          <ChevronRight size={14} />
          <Link to="/doctors" style={{ textDecoration: 'none', color: '#64748b' }}>Doctors</Link>
          <ChevronRight size={14} />
          <span style={{ color: 'var(--primary)', fontWeight: '600' }}>{doctor.name}</span>
        </div>
      </div>

      {/* Hero Profile Header */}
      <section className="container" style={{ marginBottom: '40px' }}>
        <div style={{ background: 'white', borderRadius: '32px', padding: '40px', boxShadow: '0 4px 20px rgba(0,0,0,0.04)', display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '40px' }}>
          
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              style={{ width: '220px', height: '220px', borderRadius: '40px', objectFit: 'cover', border: '6px solid white', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }} 
            />
            <div style={{ position: 'absolute', bottom: '15px', right: '15px', background: '#10b981', color: 'white', padding: '10px', borderRadius: '15px', border: '4px solid white', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', fontWeight: '800' }}>
              <ShieldCheck size={18} /> VERIFIED
            </div>
          </div>

          {/* Info */}
          <div style={{ padding: '10px 0' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '16px' }}>
              <span style={{ background: '#f0fdf4', color: '#15803d', fontSize: '11px', fontWeight: '800', padding: '6px 14px', borderRadius: '100px', letterSpacing: '0.05em' }}>ACCEPTING NEW PATIENTS</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px', color: '#fbbf24', fontWeight: '700' }}>
                <Star size={16} fill="#fbbf24" stroke="none" /> {doctor.rating} ({doctor.reviews} Reviews)
              </div>
            </div>
            
            <h1 style={{ fontSize: '42px', fontWeight: '900', color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>{doctor.name}</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '20px', color: '#64748b', marginBottom: '28px' }}>
              <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{doctor.title}</span>
              <span>•</span>
              <span style={{ fontWeight: '500' }}>{doctor.clinic}</span>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', marginBottom: '35px' }}>
              {[
                { icon: <MapPin size={20} />, label: doctor.location },
                { icon: <Globe size={20} />, label: doctor.languages.join(", ") },
                { icon: <Medal size={20} />, label: `${doctor.experience} Exp.` }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#475569', fontSize: '15px', fontWeight: '500' }}>
                  <div style={{ background: '#f1f5f9', padding: '10px', borderRadius: '12px', color: 'var(--primary)' }}>{item.icon}</div>
                  {item.label}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
               <button 
                  className="btn-primary" 
                  onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}
                  style={{ padding: '16px 40px', fontSize: '16px', fontWeight: '800' }}
                >
                  Book Free Consult
               </button>
               <button className="btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '16px 30px' }}>
                 <MessageCircle size={20} /> Ask a Question
               </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', minWidth: '220px' }}>
             {[
               { icon: <Award size={28} />, title: "Top 1%", sub: "Global Expert", color: "#fbbf24", bg: "#fff7ed" },
               { icon: <HeartPulse size={28} />, title: "2500+", sub: "Successful Ops", color: "#ef4444", bg: "#fef2f2" },
               { icon: <Microscope size={28} />, title: "30+", sub: "Research Papers", color: "#3b82f6", bg: "#eff6ff" }
             ].map((m, i) => (
                <div key={i} style={{ background: m.bg, padding: '20px', borderRadius: '24px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                   <div style={{ color: m.color }}>{m.icon}</div>
                   <div>
                      <div style={{ fontWeight: '800', color: '#0f172a', fontSize: '18px' }}>{m.title}</div>
                      <div style={{ fontSize: '12px', color: '#64748b' }}>{m.sub}</div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Grid Content */}
      <section className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '50px' }}>
          
          <div>
            {/* Tabs */}
            <div style={{ position: 'sticky', top: '90px', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(20px)', padding: '10px', borderRadius: '20px', border: '1px solid #e2e8f0', marginBottom: '35px', display: 'flex', gap: '8px', zIndex: 10 }}>
              {['overview', 'specialties', 'gallery', 'pricing', 'experience', 'faq'].map(tab => (
                 <button 
                   key={tab}
                   onClick={() => setActiveTab(tab)}
                   style={{ 
                     flex: 1, 
                     padding: '12px 10px', 
                     borderRadius: '15px', 
                     border: 'none', 
                     background: activeTab === tab ? 'var(--primary)' : 'transparent',
                     color: activeTab === tab ? 'white' : '#64748b',
                     fontWeight: '800',
                     fontSize: '13px',
                     textTransform: 'capitalize',
                     cursor: 'pointer',
                     transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                   }}
                 >
                   {tab}
                 </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* Profile Bio */}
              <div style={{ background: 'white', padding: '45px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px', color: '#0f172a' }}>
                  <User size={28} color="var(--primary)" fill="rgba(var(--primary-rgb), 0.1)" /> Professional Summary
                </h2>
                <p style={{ whiteSpace: 'pre-line', color: '#475569', lineHeight: '1.8', fontSize: '17px', marginBottom: '30px' }}>
                  {doctor.about}
                </p>

                <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '25px', border: '1px solid #f1f5f9' }}>
                   <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '20px' }}>Top Achievements</h3>
                   <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                      {doctor.achievements.map((ach, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', color: '#334155' }}>
                           <CheckCircle size={18} color="#10b981" /> {ach}
                        </div>
                      ))}
                   </div>
                </div>
              </div>

              {/* Before & After Gallery */}
              <div style={{ background: 'white', padding: '45px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Camera size={28} color="var(--primary)" /> Transformation Gallery
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                  {doctor.gallery.map((item, i) => (
                    <div key={i} className="card-hover" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid #f1f5f9' }}>
                       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: '#e2e8f0' }}>
                          <div style={{ position: 'relative' }}>
                             <img src={item.before} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="Before" />
                             <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '800' }}>BEFORE</div>
                          </div>
                          <div style={{ position: 'relative' }}>
                             <img src={item.after} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="After" />
                             <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'var(--primary)', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', fontWeight: '800' }}>AFTER</div>
                          </div>
                       </div>
                       <div style={{ padding: '15px', textAlign: 'center', fontWeight: '700', color: '#0f172a' }}>{item.title}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specialist Treatments */}
              <div style={{ background: 'white', padding: '45px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <HeartPulse size={28} color="var(--primary)" /> Procedures & Specialties
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginBottom: '30px' }}>
                  {doctor.specialties.map((spec, i) => (
                    <div key={i} style={{ padding: '20px', background: '#f0f9ff', borderRadius: '20px', textAlign: 'center', border: '1px solid #e0f2fe' }}>
                      <div style={{ fontWeight: '800', color: '#0369a1', fontSize: '15px' }}>{spec}</div>
                    </div>
                  ))}
                </div>

                <h3 style={{ fontSize: '20px', fontWeight: '900', marginBottom: '20px', color: '#0f172a' }}>Detailed Price List</h3>
                <div style={{ display: 'grid', gap: '15px' }}>
                   {doctor.procedures.map((proc, i) => (
                      <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 25px', background: '#f8fafc', borderRadius: '15px', border: '1px solid #f1f5f9' }}>
                         <div>
                            <div style={{ fontWeight: '800', color: '#0f172a' }}>{proc.name}</div>
                            <div style={{ fontSize: '13px', color: '#94a3b8' }}>Duration: {proc.time}</div>
                         </div>
                         <div style={{ fontSize: '18px', fontWeight: '900', color: 'var(--primary)' }}>{proc.price}</div>
                      </div>
                   ))}
                </div>
              </div>

              {/* Education & Timeline */}
              <div style={{ background: 'white', padding: '45px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '35px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <GraduationCap size={28} color="var(--primary)" /> Resume & Education
                </h2>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                   <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '25px', color: '#64748b' }}>Experience</h3>
                      <div style={{ position: 'relative', paddingLeft: '24px', borderLeft: '2px solid #e2e8f0' }}>
                        {doctor.experience_timeline.map((item, i) => (
                          <div key={i} style={{ marginBottom: '30px', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-31px', top: '0', width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%', border: '4px solid white', boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.1)' }}></div>
                            <div style={{ fontSize: '14px', color: 'var(--primary)', fontWeight: '800', marginBottom: '4px' }}>{item.year}</div>
                            <div style={{ fontSize: '17px', fontWeight: '800', color: '#0f172a' }}>{item.role}</div>
                            <div style={{ fontSize: '14px', color: '#64748b' }}>{item.place}</div>
                          </div>
                        ))}
                      </div>
                   </div>
                   <div>
                      <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '25px', color: '#64748b' }}>Academic</h3>
                      <div style={{ display: 'grid', gap: '25px' }}>
                        {doctor.education.map((edu, i) => (
                          <div key={i} style={{ display: 'flex', gap: '18px', alignItems: 'start' }}>
                            <div style={{ background: '#f8fafc', padding: '12px', borderRadius: '15px' }}><FileText size={20} color="#64748b" /></div>
                            <div>
                               <div style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>{edu.degree}</div>
                               <div style={{ fontSize: '14px', color: '#64748b' }}>{edu.school}</div>
                               <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px' }}>Class of {edu.year.split(' - ')[1]}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              </div>

              {/* Clinic Infrastructure Gallery */}
              <div style={{ background: 'white', padding: '45px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Building2 size={28} color="var(--primary)" /> Clinic Infrastructure
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                  {doctor.clinic_images.map((img, i) => (
                    <img key={i} src={img} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '15px' }} alt="Facility" />
                  ))}
                </div>
                <div style={{ marginTop: '20px', padding: '15px', background: '#f0fdf4', borderRadius: '15px', color: '#15803d', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '10px' }}>
                   <ShieldCheck size={18} /> JCI Accredited Facility • High-End Medical Equipment
                </div>
              </div>

              {/* Why Choose Section */}
              <div style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', padding: '45px', borderRadius: '35px', color: 'white' }}>
                 <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '30px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <ThumbsUp size={28} color="#fbbf24" /> Why Choose Dr. {doctor.name.split(' ')[1]}?
                 </h2>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {[
                      { t: "Expertise", d: "Top-tier specialist with international board certifications." },
                      { t: "Modern Tech", d: "Uses the latest minimally invasive surgical robots." },
                      { t: "Personal Care", d: "Every patient receives a customized treatment protocol." },
                      { t: "Global Trust", d: "Trusted by thousands of international patients annually." }
                    ].map((item, i) => (
                       <div key={i} style={{ padding: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                          <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#fbbf24', marginBottom: '8px' }}>{item.t}</h4>
                          <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.5' }}>{item.d}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* FAQ */}
              <div style={{ background: 'white', padding: '45px', borderRadius: '35px', border: '1px solid #e2e8f0' }}>
                 <h2 style={{ fontSize: '28px', fontWeight: '900', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                   <MessageCircle size={28} color="var(--primary)" /> Frequently Asked Questions
                 </h2>
                 <div style={{ display: 'grid', gap: '20px' }}>
                   {doctor.faq.map((item, i) => (
                     <div key={i} style={{ padding: '25px', background: '#f8fafc', borderRadius: '25px' }}>
                       <h4 style={{ fontSize: '17px', fontWeight: '800', marginBottom: '10px', color: '#0f172a' }}>{item.q}</h4>
                       <p style={{ color: '#475569', fontSize: '15px', lineHeight: '1.6' }}>{item.a}</p>
                     </div>
                   ))}
                 </div>
              </div>

              {/* Patient Journey */}
              <div style={{ background: '#f0f9ff', padding: '45px', borderRadius: '35px', border: '1px solid #e0f2fe', marginTop: '40px' }}>
                 <h2 style={{ fontSize: '24px', fontWeight: '900', marginBottom: '30px', textAlign: 'center', color: '#0f172a' }}>Treatment Journey with Dr. {doctor.name.split(' ')[1]}</h2>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr auto 1fr', alignItems: 'center', gap: '15px' }}>
                    <div style={{ textAlign: 'center' }}>
                       <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', border: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: '900', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>1</div>
                       <div style={{ fontWeight: '800', fontSize: '14px', marginBottom: '5px', color: '#0f172a' }}>Online Consult</div>
                       <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>Share reports & get a customized quote</div>
                    </div>
                    <ArrowRight color="#94a3b8" />
                    <div style={{ textAlign: 'center' }}>
                       <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', border: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: '900', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>2</div>
                       <div style={{ fontWeight: '800', fontSize: '14px', marginBottom: '5px', color: '#0f172a' }}>Arrival & Ops</div>
                       <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>VIP transfer, tests & expert surgery</div>
                    </div>
                    <ArrowRight color="#94a3b8" />
                    <div style={{ textAlign: 'center' }}>
                       <div style={{ background: 'white', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 15px', border: '2px solid var(--primary)', color: 'var(--primary)', fontWeight: '900', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>3</div>
                       <div style={{ fontWeight: '800', fontSize: '14px', marginBottom: '5px', color: '#0f172a' }}>Recovery</div>
                       <div style={{ fontSize: '11px', color: '#64748b', lineHeight: '1.4' }}>12 months dedicated medical follow-up</div>
                    </div>
                 </div>
              </div>

            </div>
          </div>

          {/* Sidebar */}
          <div style={{ position: 'relative' }}>
             <div style={{ position: 'sticky', top: '90px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                
                {/* Book Card */}
                <div style={{ background: '#0f172a', padding: '35px', borderRadius: '35px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)', color: 'white' }}>
                   <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                      <div style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Estimated Treatment Cost</div>
                      <div style={{ fontSize: '42px', fontWeight: '900', color: 'white' }}>{doctor.priceFrom} <span style={{ fontSize: '16px', color: '#64748b', fontWeight: '500' }}>/ start</span></div>
                   </div>

                   <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '0 0 30px' }} />

                   <div style={{ display: 'grid', gap: '18px', marginBottom: '35px' }}>
                     {[
                       "Personal Medical Coordinator",
                       "Treatment Plan in 24 Hours",
                       "International Patient Guard",
                       "VIP Transfer & Logistics Support"
                     ].map((t, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '14px', color: '#cbd5e1' }}>
                           <div style={{ background: 'rgba(16, 185, 129, 0.2)', padding: '5px', borderRadius: '50%' }}><CheckCircle size={15} color="#10b981" /></div>
                           {t}
                        </div>
                     ))}
                   </div>

                   <button 
                     className="btn-primary" 
                     style={{ width: '100%', padding: '20px', fontSize: '16px', fontWeight: '900', boxShadow: 'none' }}
                     onClick={() => window.dispatchEvent(new CustomEvent('openClinicQuiz'))}
                   >
                     Get A Free Quote
                   </button>
                   <p style={{ textAlign: 'center', fontSize: '11px', color: '#64748b', marginTop: '20px' }}>
                     *Prices are estimates based on initial assessment. Final prices depend on tests and clinic selection.
                   </p>
                </div>

                {/* Video Call Promo */}
                <div style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', padding: '30px', borderRadius: '35px', color: 'white', position: 'relative', overflow: 'hidden' }}>
                   <div style={{ position: 'relative', zIndex: 1 }}>
                      <PlayCircle size={40} style={{ marginBottom: '15px', opacity: 0.8 }} />
                      <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '10px' }}>Video Consultation</h3>
                      <p style={{ fontSize: '14px', opacity: 0.9, marginBottom: '20px', lineHeight: '1.5' }}>
                        Talk to Dr. {doctor.name.split(' ')[1]} from your home. Get a second opinion before you travel.
                      </p>
                      <button style={{ background: 'white', color: '#2563eb', border: 'none', padding: '12px 25px', borderRadius: '100px', fontWeight: '800', fontSize: '13px', cursor: 'pointer' }}>
                        Book Video Call
                      </button>
                   </div>
                   <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '150px', height: '150px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}></div>
                </div>

             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default DoctorProfile;
