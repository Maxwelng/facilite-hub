'use client';

import React, { useState, useEffect } from 'react';
import { FooterProps } from './Footer.types';
import { siteConfig } from '@/config/site.config';
import { theme } from '@/styles/theme';
import Image from 'next/image';
export const Footer: React.FC<FooterProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <footer
      style={{
        backgroundColor: theme.colors.contactBg,
        padding: '3rem 2rem',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between',
          alignItems: isMobile ? 'center' : 'center',
          textAlign: isMobile ? 'center' : 'left',
          flexWrap: 'wrap',
          gap: isMobile ? '2.5rem' : '2rem'
        }}
      >

        {/* Logo + nome */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexDirection: isMobile ? 'column' : 'row'
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              //border: `2px solid ${theme.colors.primary}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
              
            }}
          >
            <Image
             src="/logo-facilite-hub.png"
              alt="Logo Facilite Hub"
              color={theme.colors.primary}
              width={90}
              height={90}
              style={{ backgroundSize: 'cover', objectFit:'contain'}}
              >
             
            </Image>
          </div>
        </div>

        {/* E-mail */}
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: theme.fonts.body,
              fontSize: '0.9rem',
              color: theme.colors.text.primary,
              margin: 0,
              textAlign: isMobile ? 'center' : 'end'
            }}
          >
            {siteConfig.contact.email}
          </p>
        </div>

        {/* Ícones */}
        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-end',
            width: isMobile ? '100%' : 'auto'
          }}
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <Image
            src={'/image-wp.png'}
            width={30}
            height={30}
            alt="WhatsApp Logo"
            style={{ objectFit: 'contain' }}
            ></Image>
          </a>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: '1.5rem', textDecoration: 'none' }}
          >
            <Image
            src={'/image-insta.png'}
            width={30}
            height={30}
            alt="WhatsApp Logo"
            style={{ objectFit: 'contain' }}
            ></Image>
          </a>
        </div>
      </div>
    </footer>
  );
};
