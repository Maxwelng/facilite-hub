"use client";
import React, { useState, useEffect } from 'react';
import { HowItWorksProps } from './HowItWorks.types';
import { Container } from '@/components/ui/Container';
import { ValuesTimeline } from '@/components/ui/ValuesTimeline';
import { theme } from '@/styles/theme';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const steps = [
  'Apenas um pilar;',
  'Dois pilares combinados;',
  'Os três pilares, trabalhando de forma integrada para transformar sua rotina e o seu negócio.',
];

export const HowItWorks: React.FC<HowItWorksProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 900);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section id="como-funciona" aria-label="Como funciona o serviço">
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: isMobile ? theme.colors.contactBg : '',
        }}
      >
        <Image
          src={isMobile ? "/CF-mobile-bg.png" : "/como-funciona-bg.png"}
          alt="Profissional explicando como funciona o serviço"
          fill
          style={{ objectFit: 'cover', zIndex: 0, position: 'absolute', top: 0, bottom: 0 }}
          priority={false}
        />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            padding: '6rem 2rem',
          }}
        >
          <Container>
            {isMobile ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  gap: '2rem',
                  width: '100%',
                  maxWidth: '500px',
                }}
              >
                <h2
                  style={{
                    fontFamily: theme.fonts.heading,
                    fontSize: 'clamp(2rem, 5vw, 4rem)',
                    color: theme.colors.primary,
                    fontStyle: 'italic',
                  }}
                >
                  Como funciona?
                </h2>

                <p
                  style={{
                    fontFamily: theme.fonts.montserrat,
                    fontSize: '1rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: theme.colors.primary,
                  }}
                >
                  Você pode contratar:
                </p>

                <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {steps.map((step, index) => (
                    <li
                      key={index}
                      style={{
                        fontFamily: theme.fonts.montserrat,
                        fontSize: '1.1rem',
                        color: theme.colors.primary,
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        justifyContent: 'flex-start',
                      }}
                    >
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          backgroundColor: theme.colors.primary,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: theme.colors.white,
                          fontSize: '0.8rem',
                          fontWeight: 'bold',
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <p
                  style={{
                    fontFamily: theme.fonts.montserrat,
                    fontSize: '0.95rem',
                    color: theme.colors.primary,
                    opacity: 0.9,
                  }}
                >
                  Também desenvolvemos um plano totalmente personalizado, alinhado às necessidades e ao momento da sua empresa.
                </p>

                <Button variant="primary" size="medium">
                  Eu quero agendar uma conversa!
                </Button>
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: '2rem',
                  }}
                >
                  <h2
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontSize: 'clamp(2rem, 5vw, 4rem)',
                      color: theme.colors.primary,
                      marginBottom: '1rem',
                      fontStyle: 'italic',
                      fontWeight: 600
                    }}
                  >
                    Como funciona?
                  </h2>

                  <Button variant="primary" size="medium">
                    Eu quero agendar uma conversa!
                  </Button>
                </div>

                <div />

                <div style={{ textAlign: 'left' }}>
                  <p
                    style={{
                      fontFamily: theme.fonts.montserrat,
                      fontSize: '1rem',
                      fontWeight: 400,
                      textTransform: 'uppercase',
                      color: theme.colors.primary,
                      marginBottom: '1rem',
                    }}
                  >
                    Você pode contratar:
                  </p>

                  <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {steps.map((step, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: theme.fonts.montserrat,
                          fontSize: '1.1rem',
                          color: theme.colors.primary,
                          marginBottom: '1.5rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          justifyContent: 'flex-start',
                        }}
                      >
                        <span
                          style={{
                            width: '24px',
                            height: '24px',
                            backgroundColor: theme.colors.primary,
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: theme.colors.white,
                            fontSize: '0.8rem',
                            fontWeight: 'Regular',
                            flexShrink: 0,
                          }}
                        >
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>

                  <p
                    style={{
                      fontFamily: theme.fonts.montserrat,
                      fontSize: '0.95rem',
                      color: theme.colors.primary,
                      opacity: 0.9,
                      marginTop: '1.5rem',
                      fontWeight: 'regular'
                    }}
                  >
                    Também desenvolvemos um plano totalmente personalizado, alinhado às necessidades e ao momento da sua empresa.
                  </p>
                </div>
              </div>
            )}
          </Container>
        </div>
      </div>

      <div>
        <Container>
          <ValuesTimeline />
        </Container>
      </div>
    </section>
  );
};
