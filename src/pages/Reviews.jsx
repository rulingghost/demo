import React from 'react';
import { 
  Star, 
  MapPin, 
  Quote, 
  User, 
  ThumbsUp,
  GraduationCap
} from 'lucide-react';
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: 'Dr. Ahmet K.',
    country: 'Türkiye',
    course: 'Rhinoplasty Masterclass',
    rating: 5,
    title: 'Mesleki kariyerimde dönüm noktası',
    text: 'Dr. Ömer Buhşem\'in tekniklerini izlemek vizyonumu değiştirdi. Kadavra laboratuvarındaki pratik imkanları başka hiçbir yerde bulamamıştım.',
    date: 'Dec 12, 2024'
  },
  {
    id: 2,
    name: 'Dr. Sarah Smith',
    country: 'UK',
    course: 'Hair Transplant Fellowship',
    rating: 5,
    title: 'World class training facility',
    text: 'Travelled from London for this course. The facility is state of the art and the hands-on experience gave me the confidence to start my own clinic.',
    date: 'Nov 28, 2024'
  },
  {
    id: 3,
    name: 'Op. Dr. Mehmet Y.',
    country: 'Azerbaycan',
    course: 'Facial Aesthetics',
    rating: 4,
    title: 'Çok yoğun ve verimli',
    text: 'Eğitim süresi kısaydı ama içeriği çok doluydu. Canlı cerrahi yayınlarının kalitesi çok yüksekti.',
    date: 'Oct 15, 2024'
  }
];

const Reviews = () => {
  return (
    <div className="section" style={{ paddingTop: '140px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container">
        
        {/* Header Section */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Mezun Hikayeleri</h1>
            <p style={{ fontSize: '18px', color: 'var(--text-muted)', maxWidth: '600px' }}>
              İki Teknik Akademi'den mezun olan meslektaşlarımızın deneyimleri.
            </p>
          </div>
          <div className="glass" style={{ padding: '30px', borderRadius: '32px', textAlign: 'center' }}>
            <div style={{ fontSize: '42px', fontWeight: '900', color: 'var(--primary)', lineHeight: '1' }}>4.9</div>
            <div style={{ display: 'flex', gap: '2px', justifyContent: 'center', margin: '10px 0' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />)}
            </div>
            <div style={{ fontSize: '14px', color: 'var(--text-muted)', fontWeight: '600' }}>6,000+ Mezun Değerlendirmesi</div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '30px' }}>
          {reviews.map(review => (
            <div key={review.id} className="glass card-hover" style={{ padding: '40px', borderRadius: '32px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '28px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                    <GraduationCap size={28} />
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
                   <div style={{ fontSize: '11px', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', marginBottom: '4px' }}>Tamamlanan Eğitim</div>
                   <div style={{ fontSize: '14px', fontWeight: '700' }}>{review.course}</div>
                </div>
                <button style={{ background: '#f8fafc', border: '1px solid var(--border)', padding: '8px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <ThumbsUp size={14} /> Faydalı ({Math.floor(Math.random() * 20) + 1})
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
