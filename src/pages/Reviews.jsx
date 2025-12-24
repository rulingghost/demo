import React from 'react';
import { 
  Star, 
  MapPin, 
  Search, 
  Filter, 
  CheckCircle, 
  Quote, 
  User, 
  Building2, 
  ThumbsUp,
  MessageSquare,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    country: 'United Kingdom',
    procedure: '20 E-max Veneers',
    clinic: 'Istanbul Aesthetic Center',
    clinicId: 1,
    rating: 5,
    title: 'Life changing results!',
    text: 'I was nervous about traveling for dental work, but Sarfea made everything so easy. From the airport pick-up to the final result, it was professional and welcoming.',
    date: 'Dec 12, 2024'
  },
  {
    id: 2,
    name: 'Michael R.',
    country: 'Germany',
    procedure: 'Hair Transplant',
    clinic: 'Bircan Clinic',
    clinicId: 2,
    rating: 5,
    title: 'Excellent care and value',
    text: 'Saved thousands of Euros compared to local clinics. The technology used was even more advanced. 6 months later and my results are amazing.',
    date: 'Nov 28, 2024'
  },
  {
    id: 3,
    name: 'Elena D.',
    country: 'Italy',
    procedure: 'Rhinoplasty',
    clinic: 'Medical Park Hospital',
    clinicId: 3,
    rating: 4,
    title: 'Very professional but busy',
    text: 'The surgeon was an artist. The hospital was like a 5-star hotel. Only downside was the clinic was very busy, so waiting times were a bit long.',
    date: 'Oct 15, 2024'
  },
  {
    id: 4,
    name: 'David W.',
    country: 'USA',
    procedure: 'Dental Implants',
    clinic: 'Smile Center',
    clinicId: 1,
    rating: 5,
    title: 'Top Notch Dental Work',
    text: 'Travelled from Texas to Turkey. The coordinates handled everything. The savings were enough to pay for my vacation and more.',
    date: 'Sept 20, 2024'
  },
  {
    id: 5,
    name: 'Sophia L.',
    country: 'France',
    procedure: 'IVF Treatment',
    clinic: 'Bahçeci IVF Center',
    clinicId: 4,
    rating: 5,
    title: 'Our dream came true',
    text: 'The care and compassion we received was unmatched. The success rate and modern labs gave us the confidence we needed.',
    date: 'Aug 05, 2024'
  }
];

const Reviews = () => {
  return (
    <div className="section" style={{ paddingTop: '140px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Patient Reviews</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px' }}>
              Real stories from patients who found world-class care through Sarfea.
            </p>
          </div>
          <div className="glass" style={{ padding: '30px', borderRadius: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: '900', color: 'var(--primary)', lineHeight: '1' }}>4.9</div>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', margin: '10px 0' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600' }}>Based on 6,000+ reviews</div>
          </div>
        </div>

        {/* Video Stories Promo */}
        <div style={{ background: 'var(--secondary)', borderRadius: '32px', padding: '40px', color: 'white', marginBottom: '60px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
          <div>
            <h2 style={{ color: 'white', marginBottom: '10px' }}>Watch Video Testimonials</h2>
            <p style={{ color: '#94a3b8' }}>See the results for yourself in our high-quality video interviews.</p>
          </div>
          <button className="btn-primary" style={{ padding: '16px 40px' }}>Watch Stories</button>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '30px' }}>
          {reviews.map(review => (
            <div key={review.id} className="glass card-hover" style={{ padding: '40px', borderRadius: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '28px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={28} color="var(--text-muted)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: '800', fontSize: '18px' }}>{review.name}</div>
                    <div style={{ fontSize: '14px', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={12} /> {review.country}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '6px' }}>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill={i < review.rating ? "#f59e0b" : "#e2e8f0"} color={i < review.rating ? "#f59e0b" : "#e2e8f0"} />
                    ))}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: '600' }}>{review.date}</div>
                </div>
              </div>
              
              <div style={{ flex: 1, position: 'relative' }}>
                <Quote size={40} color="var(--primary)" style={{ opacity: 0.1, position: 'absolute', top: '-10px', left: '-10px' }} />
                <h3 style={{ fontSize: '20px', marginBottom: '16px', position: 'relative' }}>{review.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: '1.7', fontStyle: 'italic' }}>
                  "{review.text}"
                </p>
              </div>

              <div style={{ marginTop: '30px', borderTop: '1px solid var(--border)', paddingTop: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                   <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>Treatment</div>
                   <div style={{ fontSize: '14px', fontWeight: '700' }}>{review.procedure}</div>
                   <Link to="/search" style={{ fontSize: '13px', color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                     at <span style={{ color: 'var(--secondary)', textDecoration: 'underline' }}>{review.clinic}</span>
                   </Link>
                </div>
                <button style={{ background: '#f8fafc', border: '1px solid var(--border)', padding: '8px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <ThumbsUp size={14} /> Helpful
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
