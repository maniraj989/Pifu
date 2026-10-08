import React from 'react';

/**
 * PiFU DERMOGUIDE Real Brand Logo Component
 * Uses the authentic official PiFU DERMOGUIDE trademark logo.
 */
export default function Logo({ className = '', height = 44, variant = 'blue' }) {
  const logoSrc = variant === 'white' 
    ? '/assets/pifu-logo-tight-white.png' 
    : '/assets/pifu-logo-tight-blue.png';

  return (
    <div 
      className={`pifu-logo-wrapper ${className}`} 
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      <img
        src={logoSrc}
        alt="PiFU DERMOGUIDE - Skincare For A Brighter Tomorrow"
        height={height}
        className="pifu-logo-img"
        style={{
          height: `${height}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

