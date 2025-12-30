import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ShieldCheck, 
  BookOpen, 
  Video, 
  Clock, 
  Award, 
  AlertTriangle, 
  PlayCircle,
  FileText,
  User,
  Star,
  ChevronDown,
  ChevronUp,
  Microscope,
  Stethoscope,
  Globe,
  Camera,
  GraduationCap,
  MessageCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CourseDetail = () => {
  const { slug } = useParams();
  const [activeModule, setActiveModule] = useState(0);

  const course = {
    title: "Dermal Filler Master Course: Anatomical Area–Based Advanced Training",
    subtitle: "The definitive guide to safe, anatomy-driven facial injectables.",
    duration: "3 hours (180 minutes)",
    level: "Advanced / Master",
    focus: "Anatomy-driven, safety-focused, clinically applicable",
    rating: 5.0,
    reviews: 142,
    students: 850,
    price: "€850",
    instructor: {
      name: "Expert Faculty Team",
      title: "Senior Plastic Surgeons & Anatomists",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800",
      bio: "International board-certified surgeons with 20+ years of clinical excellence and academic leadership."
    },
    features: [
      "Entirely anatomy-driven curriculum",
      "Emphasis on safety and complication prevention",
      "Practical, clinic-oriented decision making",
      "Suitable for experienced injectors"
    ],
    modules: [
      {
        id: 1,
        title: "MODULE 1 – FOUNDATIONS FOR MASTER PRACTICE",
        duration: "15 minutes",
        icon: <BookOpen size={20} />,
        topics: [
          { type: 'theory', title: "Global Facial Anatomy for Fillers" },
          { type: 'theory', title: "Full-Face Assessment: Aging patterns by region" },
          { type: 'theory', title: "Lift vs Fill decision-making" },
          { type: 'theory', title: "Facial layers and depth planning" },
          { type: 'theory', title: "Bone structure and fat compartments" },
          { type: 'warning', title: "Vascular anatomy overview & danger zones" },
          { type: 'theory', title: "Product rheology and anatomical matching" },
          { type: 'theory', title: "Needle vs Cannula: Anatomical decision-making" }
        ]
      },
      {
        id: 2,
        title: "MODULE 2 – UPPER FACE",
        duration: "30 minutes",
        icon: <User size={20} />,
        topics: [
          { type: 'theory', title: "Forehead: Anatomy, safe planes & injection strategies" },
          { type: 'warning', title: "Forehead: Precautions, indications vs contraindications" },
          { type: 'video', title: "Injection Video: Forehead Technique" },
          { type: 'theory', title: "Temple: Superficial vs deep temporal compartment" },
          { type: 'theory', title: "Temple: Injection strategies & structural restoration" },
          { type: 'video', title: "Injection Video: Temple Strategies" },
          { type: 'warning', title: "Brow & Glabella: High-risk anatomy & ocular safety" },
          { type: 'theory', title: "Brow: Support and lift strategies" },
          { type: 'video', title: "Injection Video: Brow Lift" }
        ]
      },
      {
        id: 3,
        title: "MODULE 3 – MIDFACE",
        duration: "45 minutes",
        icon: <User size={20} />,
        topics: [
          { type: 'theory', title: "Zygoma, Medial & Lateral Cheek: Ligament-based lifting concepts" },
          { type: 'theory', title: "Cheek: Structural support vs volume replacement" },
          { type: 'theory', title: "Cheek: Deep medial fat compartment & Natural contour" },
          { type: 'video', title: "Injection Video: Midface Lifting" },
          { type: 'theory', title: "Tear Trough: Patient selection & safe deep-plane techniques" },
          { type: 'video', title: "Injection Video: Tear Trough" },
          { type: 'theory', title: "Nose Filler: Vascular anatomy & Natural contour restoration" },
          { type: 'video', title: "Injection Video: Dr. Buhsem’s Nose Technique" }
        ]
      },
      {
        id: 4,
        title: "MODULE 4 – LOWER FACE",
        duration: "45 mins",
        icon: <User size={20} />,
        topics: [
          { type: 'warning', title: "Nasolabial Fold: Facial artery depth variations" },
          { type: 'theory', title: "Nasolabial: Piriform fossa approach & Structural correction" },
          { type: 'video', title: "Injection Video: Nasolabial Correction" },
          { type: 'theory', title: "Lips: Superior & inferior labial arteries" },
          { type: 'theory', title: "Lips: Shape, projection, hydration balance" },
          { type: 'video', title: "Injection Video: Lip Augmentation Techniques" },
          { type: 'theory', title: "Jawline, Prejowl & Chin: Anatomical considerations" },
          { type: 'theory', title: "Jawline: Masculine vs feminine contouring" },
          { type: 'video', title: "Injection Video: Jawline Definition" }
        ]
      },
      {
        id: 5,
        title: "MODULE 5 – MASTER STRATEGIES & COMPLICATIONS",
        duration: "30 mins",
        icon: <AlertTriangle size={20} />,
        topics: [
          { type: 'warning', title: "Vascular Complications: Anatomy-Based Mechanisms" },
          { type: 'warning', title: "Ocular Occlusion mechanisms & Early recognition" },
          { type: 'theory', title: "Immediate management algorithms" },
          { type: 'theory', title: "Prevention strategies" }
        ]
      },
      {
        id: 6,
        title: "MODULE 6 – DISCUSSION",
        duration: "15 mins",
        icon: <MessageCircle size={20} />,
        topics: [
          { type: 'theory', title: "Questions and Answers" },
          { type: 'theory', title: "Case Analysis" }
        ]
      }
    ]
  };

  const topicIcon = (type) => {
      switch(type) {
          case 'video': return <PlayCircle size={18} color="#ef4444" />;
          case 'warning': return <AlertTriangle size={18} color="#f59e0b" />;
          default: return <FileText size={18} color="#3b82f6" />;
      }
  };

  const topicStyle = (type) => {
      switch(type) {
          case 'video': return { background: '#fef2f2', borderLeft: '3px solid #ef4444' };
          case 'warning': return { background: '#fffbeb', borderLeft: '3px solid #f59e0b' };
          default: return { background: '#f1f5f9', borderLeft: '3px solid #3b82f6' };
      }
  };

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Premium Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', padding: '80px 0 100px', position: 'relative', overflow: 'hidden' }}>
        {/* Abstract Background Element */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 600, height: 600, background: 'radial-gradient(circle, rgba(56, 189, 248, 0.15) 0%, transparent 70%)', borderRadius: '50%' }}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '24px' }}>
                 <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                    <Award size={14} /> CERTIFIED COURSE
                 </span>
                 <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.2)', color: '#38bdf8', padding: '6px 14px', borderRadius: '100px', fontSize: '12px', fontWeight: '700', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                    <Microscope size={14} /> ANATOMY-FOCUSED
                 </span>
              </div>

              <h1 style={{ fontSize: '48px', fontWeight: '900', marginBottom: '16px', lineHeight: '1.1', background: 'linear-gradient(to right, #ffffff, #94a3b8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {course.title}
              </h1>
              <p style={{ fontSize: '20px', color: '#cbd5e1', marginBottom: '40px', maxWidth: '650px', lineHeight: '1.6', fontWeight: '400' }}>
                {course.subtitle} A masterclass designed for precision, safety, and artistic excellence.
              </p>
              
              <div style={{ display: 'flex', gap: '40px', padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: '20px', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13px' }}><Clock size={16} /> Total Duration</div>
                   <div style={{ fontSize: '18px', fontWeight: '700' }}>3 Hours</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13px' }}><GraduationCap size={16} /> Level</div>
                   <div style={{ fontSize: '18px', fontWeight: '700' }}>{course.level}</div>
                </div>
                <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                   <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '13px' }}><ShieldCheck size={16} /> Focus</div>
                   <div style={{ fontSize: '18px', fontWeight: '700' }}>Safety First</div>
                </div>
              </div>

              <div style={{ marginTop: '40px', display: 'flex', gap: '20px' }}>
                 <Link to="/contact?type=enroll&course=dermal-filler" className="btn-primary" style={{ padding: '18px 40px', fontSize: '16px', boxShadow: '0 10px 30px -10px rgba(59, 130, 246, 0.5)', textDecoration: 'none', display: 'inline-block' }}>Enrol for {course.price}</Link>
                 <Link to="/contact?type=syllabus&course=dermal-filler" className="btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.2)', padding: '18px 40px', fontSize: '16px', textDecoration: 'none', display: 'inline-block' }}>Download Syllabus</Link>
              </div>
            </motion.div>

            {/* Video Preview Card */}
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} style={{ position: 'relative' }}>
              <div style={{ borderRadius: '32px', overflow: 'hidden', boxShadow: '0 30px 60px -12px rgba(0,0,0,0.5)', border: '4px solid rgba(255,255,255,0.1)', position: 'relative' }}>
                 <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800" alt="Course Preview" style={{ width: '100%', display: 'block', filter: 'brightness(0.8)' }} />
                 <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      style={{ width: '90px', height: '90px', background: 'rgba(255,255,255,0.25)', backdropFilter: 'blur(12px)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid rgba(255,255,255,0.4)', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}
                    >
                       <PlayCircle size={48} fill="white" color="white" />
                    </motion.div>
                    <div style={{ marginTop: '20px', fontSize: '16px', fontWeight: '600', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Watch Intro Teaser</div>
                 </div>
                 
                 {/* Live Tag */}
                 <div style={{ position: 'absolute', top: '20px', left: '20px', background: '#ef4444', color: 'white', padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: '8px', height: '8px', background: 'white', borderRadius: '50%' }}></div>
                    INCLUDES LIVE DEMO
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 380px', gap: '60px' }}>
            
            {/* Left Column: Detailed Curriculum */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                 <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a' }}>Course Curriculum</h2>
                 <span style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>6 Modules • 25+ Topics</span>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {course.modules.map((module, index) => (
                  <div 
                    key={index} 
                    className="hover-lift"
                    style={{ 
                      background: 'white', 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      boxShadow: activeModule === index ? '0 10px 30px -5px rgba(0,0,0,0.1)' : '0 4px 6px -1px rgba(0,0,0,0.05)',
                      border: activeModule === index ? '1px solid var(--primary)' : '1px solid #e2e8f0',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div 
                      onClick={() => setActiveModule(activeModule === index ? null : index)}
                      style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: activeModule === index ? '#f8fafc' : 'white' }}
                    >
                       <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                          <div style={{ width: '50px', height: '50px', background: activeModule === index ? 'var(--primary)' : '#f1f5f9', color: activeModule === index ? 'white' : '#94a3b8', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                             {module.icon}
                          </div>
                          <div>
                             <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '4px' }}>{module.title}</h3>
                             <div style={{ fontSize: '13px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Clock size={14} /> {module.duration}
                             </div>
                          </div>
                       </div>
                       {activeModule === index ? <ChevronUp color="#94a3b8" /> : <ChevronDown color="#94a3b8" />}
                    </div>
                    
                    <AnimatePresence>
                      {activeModule === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          style={{ borderTop: '1px solid #e2e8f0' }}
                        >
                           <div style={{ padding: '24px' }}>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                 {module.topics.map((topic, i) => (
                                    <li key={i} style={{ 
                                       padding: '12px 16px', 
                                       borderRadius: '10px', 
                                       display: 'flex', 
                                       alignItems: 'flex-start', 
                                       gap: '12px',
                                       fontSize: '14px', 
                                       color: '#334155',
                                       fontWeight: '500',
                                       ...topicStyle(topic.type)
                                    }}>
                                       <div style={{ marginTop: '2px' }}>{topicIcon(topic.type)}</div>
                                       <span>{topic.title}</span>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Sticky Sidebar with Instructor & Features */}
            <div>
               <div style={{ position: 'sticky', top: '120px' }}>
                  
                  {/* Instructor Widget */}
                  <div style={{ background: 'white', padding: '30px', borderRadius: '24px', boxShadow: 'var(--shadow-lg)', marginBottom: '30px', textAlign: 'center' }}>
                     <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 20px' }}>
                        <img src={course.instructor.image} alt={course.instructor.name} style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid white', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' }} />
                        <div style={{ position: 'absolute', bottom: '0', right: '0', background: 'var(--primary)', color: 'white', borderRadius: '50%', padding: '6px', border: '2px solid white' }}>
                           <Award size={14} />
                        </div>
                     </div>
                     <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>{course.instructor.name}</h3>
                     <p style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: '700', marginBottom: '12px' }}>{course.instructor.title}</p>
                     <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', marginBottom: '20px' }}>{course.instructor.bio}</p>
                     <button className="btn-outline" style={{ width: '100%', fontSize: '13px', padding: '10px' }}>View Full Profile</button>
                  </div>

                  {/* Features Widget */}
                  <div style={{ background: '#0f172a', padding: '30px', borderRadius: '24px', color: 'white' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                       <Star fill="#fbbf24" color="#fbbf24" size={20} /> Course Highlights
                    </h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
                       {course.features.map((feature, i) => (
                          <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                             <CheckCircle size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                             <span style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>{feature}</span>
                          </div>
                       ))}
                    </div>

                    <div style={{ padding: '16px', background: 'rgba(255,255,255,0.1)', borderRadius: '16px', marginBottom: '24px' }}>
                       <div style={{ margin: 0, fontSize: '28px', fontWeight: '800', color: 'white' }}>{course.price}</div>
                       <div style={{ fontSize: '12px', color: '#94a3b8' }}>Lifetime access + Certificate</div>
                    </div>

                    <Link to="/contact?type=enroll&course=dermal-filler" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px', textDecoration: 'none', display: 'flex' }}>
                       Enroll Now
                    </Link>
                  </div>

               </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};



export default CourseDetail;
