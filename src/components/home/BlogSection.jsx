import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const BlogSection = () => {
  const { t } = useLanguage();
  const blog = t('home.blog') || { items: [] };

  const blogImages = [
    'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600',
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600'
  ];

  return (
    <section style={{ padding: '120px 0', background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h2 className="text-gradient" style={{ fontSize: '42px', fontWeight: '900', marginBottom: '15px' }}>{blog.title}</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>{blog.desc}</p>
          </div>
          <Link to="/blog" className="btn-outline">{blog.readAll}</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '30px' }}>
          {blog.items && blog.items.map((post, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="glass hover-lift" 
              style={{ borderRadius: '32px', overflow: 'hidden', border: '1px solid var(--border-light)' }}
            >
              <div style={{ position: 'relative', height: '240px' }}>
                <img src={blogImages[i]} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: '20px', left: '20px', background: 'white', padding: '8px 16px', borderRadius: '100px', fontSize: '12px', fontWeight: '800', color: 'var(--primary)', boxShadow: 'var(--shadow-md)' }}>
                  {post.cat}
                </span>
              </div>
              <div style={{ padding: '30px' }}>
                <div style={{ fontSize: '13px', color: 'var(--text-light)', marginBottom: '12px', fontWeight: '600' }}>{post.date} • 5 {blog.readTime}</div>
                <h3 style={{ fontSize: '22px', lineHeight: '1.4', marginBottom: '20px', fontWeight: '800' }}>{post.title}</h3>
                <a href="#" style={{ color: 'var(--primary)', fontWeight: '800', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {blog.readMore} <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
