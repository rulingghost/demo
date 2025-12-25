import React from 'react';
import { motion } from 'framer-motion';

const SkeletonCard = ({ type = 'doctor' }) => {
  const shimmer = {
    background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
    backgroundSize: '200% 100%',
    animation: 'shimmer 1.5s infinite'
  };

  if (type === 'doctor') {
    return (
      <div className="glass" style={{ padding: '30px', borderRadius: '24px', height: '400px' }}>
        <div style={{ ...shimmer, width: '120px', height: '120px', borderRadius: '50%', margin: '0 auto 20px' }} />
        <div style={{ ...shimmer, height: '24px', width: '70%', margin: '0 auto 12px', borderRadius: '8px' }} />
        <div style={{ ...shimmer, height: '16px', width: '50%', margin: '0 auto 20px', borderRadius: '8px' }} />
        <div style={{ ...shimmer, height: '40px', width: '100%', borderRadius: '12px' }} />
      </div>
    );
  }

  if (type === 'clinic') {
    return (
      <div className="glass" style={{ padding: '0', borderRadius: '24px', overflow: 'hidden', height: '450px' }}>
        <div style={{ ...shimmer, height: '200px', width: '100%' }} />
        <div style={{ padding: '24px' }}>
          <div style={{ ...shimmer, height: '24px', width: '80%', marginBottom: '12px', borderRadius: '8px' }} />
          <div style={{ ...shimmer, height: '16px', width: '60%', marginBottom: '20px', borderRadius: '8px' }} />
          <div style={{ ...shimmer, height: '40px', width: '100%', borderRadius: '12px' }} />
        </div>
      </div>
    );
  }

  return null;
};

export const SkeletonGrid = ({ count = 3, type = 'doctor' }) => {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} type={type} />
        ))}
      </div>
    </>
  );
};

export default SkeletonCard;
