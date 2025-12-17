"use client";
import React, { useEffect, useState } from 'react';
import { HeroProps } from './Hero.types';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { theme } from '@/styles/theme';
import Image from 'next/image';

export const Hero: React.FC<HeroProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 900);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section
      style={{
        backgroundImage: 'url("/backgroud-hero.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: isMobile ? 'center' : 'top',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 2rem',
        flexDirection: 'column',
        maxHeight: '722px',
        position: 'relative',
      }}
    >
      <hr
        style={{
          width: '100%',
          border: 'none',
          borderTop: '1px solid rgba(255, 255, 255, 0.9)',
          margin: '2rem 0',
        }}
      />

      <Container maxWidth="1400px">
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              width: '100%',
              position: 'relative',
              minHeight: '287px',
            }}
          >
            {/* Texto à esquerda */}
            <div
              style={{
                maxWidth: '55%',
                paddingLeft: '0.5rem',
                paddingBottom: '1rem',
              }}
            >
              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
                  color: theme.colors.white,
                  marginBottom: '1rem',
                  lineHeight: 1.2,
                  fontStyle: 'italic',
                }}
              >
                Sua rotina mais leve,<br />
                seu negócio mais próspero.
              </h2>
              <p
                style={{
                  fontFamily: theme.fonts.montserrat,
                  fontSize: '0.9rem',
                  color: theme.colors.white,
                  lineHeight: 1.5,
                  marginBottom: '1rem',
                  fontWeight: 500
                }}
              >
                Suporte estratégico para que mulheres empreendedoras tenham rotinas leves,
                processos organizados e mais tempo para crescer com consistência.
              </p>
            </div>

            {/* Imagem à direita encostando na base */}
            <div
              style={{
                position: 'absolute',
                bottom: isMobile ? '-36px' : 0,
                right: '-22px',
                width: '45%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                paddingRight: '0.5rem',
              }}
            >
              <Image
                src="/mask-hero.png"
                alt="Descrição"
                width={180}
                height={300}
                style={{
                  objectFit: 'contain',
                  position: 'relative',
                }}
              />
            </div>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '6rem',
              alignItems: 'center',
              width: '100%',
            }}
            className="hero-grid"
          >
            <div>
              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(2.2rem, 5vw, 3.04rem)',
                  color: theme.colors.white,
                  marginBottom: '1.5rem',
                  lineHeight: 1.2,
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                Sua rotina mais leve,<br />
                seu negócio mais próspero.
              </h2>
              <p
                style={{
                  fontFamily: theme.fonts.montserrat,
                  fontSize: '1.05rem',
                  color: theme.colors.white,
                  lineHeight: 1.8,
                  marginBottom: '2.5rem',
                  maxWidth: '520px',
                  fontWeight: 500
                }}
              >
                Suporte estratégico para que mulheres empreendedoras tenham rotinas leves,
                processos organizados e mais tempo para crescer com consistência.
              </p>
            </div>
            <div
              style={{
                borderRadius: '10px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.colors.text.secondary,
                fontFamily: theme.fonts.body,
                fontSize: '0.9rem',
              }}
            >
              <Image
                src="/mask-hero.png"
                alt="Descrição"
                width={326.21}
                height={534.77}
                style={{
                  objectFit: 'contain',
                  maxHeight: '75%',
                  position: 'absolute',
                  bottom: 0,
                  right: 220,
                }}
              />
            </div>
          </div>
        )}
      </Container>

      <hr
        style={{
          width: '100%',
          border: 'none',
          borderTop: '1px solid rgba(255, 255, 255, 0.9)',
          margin: '2rem 0',
        }}
      />
    </section>
  );
};
