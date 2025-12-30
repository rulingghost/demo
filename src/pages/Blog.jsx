import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  User, 
  ArrowRight, 
  CheckCircle, 
  ChevronRight,
  Filter,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Dental', 'Esthetics', 'Cancer Care', 'IVF', 'Heart Health'];

  const articles = [
    {
      id: 1,
      title: "Cost of Dental Implants Abroad 2025: Full Price Guide",
      excerpt: "Where to get high-quality dental implants for 70% less? Compare Turkey, Mexico, Thailand and more.",
      category: "Dental",
      author: "Dr. Sarah Wilson",
      date: "May 12, 2025",
      readTime: "8 min read",
      img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      reviewed: true
    },
    {
      id: 2,
      title: "How to Choose the Right Plastic Surgeon: 10 Critical Questions",
      excerpt: "Expert advice on checking certifications, before & after galleries, and clinic hygiene standards.",
      category: "Esthetics",
      author: "Dr. Ergin Er",
      date: "May 10, 2025",
      readTime: "12 min read",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      reviewed: true
    },
    {
      id: 3,
      title: "Advancements in Robotic Surgery for Cancer Patients",
      excerpt: "New minimally invasive techniques are increasing survival rates and shortening recovery times.",
      category: "Cancer Care",
      author: "Dr. Mark Thompson",
      date: "May 8, 2025",
      readTime: "15 min read",
      img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      reviewed: true
    },
    {
      id: 4,
      title: "Safety First: Preparing for Medical Travel Post-Pandemic",
      excerpt: "Essential checklist for insurance, documentation, and choosing safe destinations for 2025.",
      category: "Safety",
      author: "Doctora Medical Team",
      date: "May 5, 2025",
      readTime: "6 min read",
      img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=800",
      reviewed: false
    }
  ];

  return (
    <div style={{ paddingTop: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      
      {/* Featured Header */}
      <section style={{ padding: '60px 0', background: 'var(--secondary)', color: 'white', marginBottom: '40px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '42px', color: 'white', marginBottom: '24px' }}>Medical Knowledge Hub</h1>
          <p style={{ color: '#94a3b8', fontSize: '18px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Evidence-based medical guides and travel advice, reviewed by our expert medical board.
          </p>
          
          <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
            <Search style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text" 
              placeholder="Search treatment guides..." 
              style={{ width: '100%', padding: '18px 20px 18px 55px', borderRadius: '100px', border: 'none', background: 'white', fontSize: '16px', outline: 'none' }}
            />
          </div>
        </div>
      </section>

      <div className="container">
        
        {/* Categories Bar */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '60px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                border: '1px solid var(--border)',
                background: activeCategory === cat ? 'var(--primary)' : 'white',
                color: activeCategory === cat ? 'white' : 'var(--text-main)',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '60px' }}>
          
          {/* Main Articles List */}
          <main>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {articles.map(art => (
                <div key={art.id} className="glass card-hover" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', overflow: 'hidden', borderRadius: '32px' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={art.img} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
                      <span style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.9)', borderRadius: '100px', fontSize: '12px', fontWeight: '800', color: 'var(--primary)' }}>{art.category}</span>
                    </div>
                  </div>
                  <div style={{ padding: '40px' }}>
                    {art.reviewed && (
                      <div className="badge-review" style={{ marginBottom: '12px' }}>
                        <CheckCircle size={12} color="var(--accent)" /> Medically Reviewed by Expert
                      </div>
                    )}
                    <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>{art.title}</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.6', marginBottom: '24px' }}>{art.excerpt}</p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '24px', borderBottom: '1px solid var(--border)', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ width: '32px', height: '32px', background: 'var(--surface)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <User size={16} />
                        </div>
                        <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-main)' }}>{art.author}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '20px', color: 'var(--text-muted)', fontSize: '14px' }}>
                         <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {art.readTime}</span>
                         <span>{art.date}</span>
                      </div>
                    </div>
                    <Link to="/blog" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>
                      Read Guide <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button className="btn-outline" style={{ padding: '15px 60px' }}>Load More Guides</button>
            </div>
          </main>

          {/* Sidebar */}
          <aside>
            {/* Trending Section */}
            <div className="glass" style={{ padding: '30px', borderRadius: '32px', marginBottom: '40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                 <TrendingUp size={20} color="var(--primary)" />
                 <h3 style={{ fontSize: '18px' }}>Trending Guides</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  "IVF Success Rates in 2025: A Global Report",
                  "Why Turkey is the #1 Destination for Hair Transplants",
                  "Cancer Treatment Costs: UK vs USA vs India",
                ].map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '15px', cursor: 'pointer' }}>
                    <div style={{ fontSize: '24px', fontWeight: '800', color: '#e2e8f0' }}>0{i+1}</div>
                    <div style={{ fontSize: '14px', fontWeight: '700', lineHeight: '1.4' }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div style={{ background: 'var(--primary)', padding: '30px', borderRadius: '32px', color: 'white' }}>
              <h3 style={{ color: 'white', marginBottom: '12px' }}>Weekly Health Digest</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', marginBottom: '24px' }}>Expert health advice and medical tourism news delivered to your inbox.</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                style={{ width: '100%', padding: '12px 20px', borderRadius: '12px', border: 'none', marginBottom: '12px', outline: 'none' }}
              />
              <button style={{ width: '100%', padding: '12px', borderRadius: '12px', border: 'none', background: 'white', color: 'var(--primary)', fontWeight: '700', cursor: 'pointer' }}>
                Join Newsletter
              </button>
            </div>

            {/* Medical Board Promo */}
            <div style={{ marginTop: '40px', padding: '20px', textAlign: 'center' }}>
               <Bookmark size={32} color="var(--primary)" style={{ marginBottom: '15px' }} />
               <h4 style={{ marginBottom: '8px' }}>Verified Content</h4>
               <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Each article is reviewed by our medical editorial board for accuracy.</p>
               <Link to="/safety" style={{ fontSize: '13px', color: 'var(--primary)', fontWeight: '700', display: 'block', marginTop: '12px' }}>Learn about our process</Link>
            </div>
          </aside>

        </div>
      </div>
    </div>
  );
};

export default Blog;
