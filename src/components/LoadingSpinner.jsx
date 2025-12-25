import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = 'md', fullScreen = false }) => {
  const sizes = {
    sm: '24px',
    md: '48px',
    lg: '64px'
  };

  const spinner = (
    <motion.div
      style={{
        width: sizes[size],
        height: sizes[size],
        border: '4px solid rgba(0, 122, 255, 0.1)',
        borderTop: '4px solid var(--primary)',
        borderRadius: '50%',
        margin: '0 auto'
      }}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );

  if (fullScreen) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255, 255, 255, 0.9)',
        zIndex: 9999
      }}>
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
