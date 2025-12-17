'use client';

import React, { useEffect, useState } from 'react';
import { theme } from '@/styles/theme';

export const ValuesTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 900);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div
      style={{
        padding: '6rem 2rem',
        backgroundColor: theme.colors.beigeBg,
        textAlign: 'center'
      }}
    >
      <div style={{ margin: '0 auto' }}>
        <img
          src={isMobile ? '/timeline-desktop.png' : '/timeline-desktop.png'}
          alt="Nossos valores"
          style={{
            width:  '100%',   // maior no mobile
            height: 'auto',
            maxWidth: isMobile ? '1000px' : '800px', // limite maior no mobile
            margin: '0 auto',
            display: 'block',
            imageRendering: 'crisp-edges' // força nitidez em alguns navegadores
          }}
        />
      </div>
    </div>
  );
};
