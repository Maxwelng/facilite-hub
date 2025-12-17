'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavigationProps } from './Navigation.types';
import { useScroll } from '@/hooks/useScroll';
import { useNavigation } from '@/hooks/useNavigation';
import { navigationItems } from '@/data/navigation.data';
import { theme } from '@/styles/theme';

export const Navigation: React.FC<NavigationProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScroll(50);
  const { scrollToSection } = useNavigation();

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  const navStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    transition: 'all 0.3s ease',
    zIndex: 1000,
    padding: '2rem 2rem',
    boxShadow: scrolled ? theme.shadows.sm : 'none'
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{
          fontFamily: theme.fonts.cinzel,
          fontSize: '2.5rem',
          color: theme.colors.primary,
          margin: 0,
          letterSpacing: '2px'
        }}>
          FACILITE HUB
        </h1>

        <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              href={item.href}
              style={{
                color: theme.colors.text.primary,
                textDecoration: 'none',
                fontFamily: theme.fonts.montserrat,
                fontSize: '0.9rem',
                fontWeight: 500,
                cursor: 'pointer',

                backgroundColor: '#FFFFFF',
                padding: '0.3rem 1.2rem;',
                borderRadius: '999px',          // bordas bem arredondadas
                border: 'none',

                boxShadow: '0 2px 6px rgba(0,0,0,0.12)'  // opcional, mesma vibe da imagem
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            color: theme.colors.primary
          }}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: theme.colors.white,
          boxShadow: theme.shadows.md,
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem'
        }}>
          {navigationItems.map((item) => (
            <a
              key={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              href={item.href}
              style={{
                color: theme.colors.text.primary,
                textDecoration: 'none',
                fontFamily: theme.fonts.body,
                fontSize: '1rem',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};