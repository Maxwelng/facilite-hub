"use client";
import React, { useEffect, useState } from 'react';
import { MethodProps } from './Method.types';
import { Container } from '@/components/ui/Container';
import { methodPillars } from '@/data/method.data';
import { theme } from '@/styles/theme';

export const Method: React.FC<MethodProps> = () => {
   const [isMobile, setIsMobile] = useState(false);
  
    useEffect(() => {
      const checkSize = () => setIsMobile(window.innerWidth < 900);
      checkSize();
      window.addEventListener('resize', checkSize);
      return () => window.removeEventListener('resize', checkSize);
    }, []);
  return (
    <section id="metodo" style={{
      padding: '6rem 2rem',
      backgroundColor: theme.colors.primary,
      color: theme.colors.white
    }}>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: theme.fonts.heading,
            fontSize: '2.0rem',
            letterSpacing: '2px',
            marginBottom: '1rem',
            fontStyle: 'italic',
            opacity: 0.9,
            fontWeight:600
          }}>
            Foi por isso que eu criei o
          </p>
          <h2 style={{
            fontFamily: theme.fonts.cinzel,
            fontSize: 'clamp(4.0rem, 12vw, 8rem)',
            marginBottom: '1rem',
            fontWeight: 400

          }}>
            MÉTODO ESSÊNCIA
          </h2>
          <p style={{
            fontFamily: theme.fonts.montserrat,
            fontSize: '1.1rem',
            lineHeight: 1.8,
            maxWidth: '900px',
            margin: '0 auto 4rem',
            opacity: 0.95,
            fontWeight:400
          }}>
            Ser mulher, empreendedora e mãe é equilibrar muitos mundos. O Método Essência nasceu para dar suporte ao que sustenta seu negócio: organização, cuidado e presença.
            É o suporte silencioso que devolve leveza e tempo, enquanto você foca no que realmente transforma.
          </p>
          <h2>São três pilares, contratáveis juntos ou separados.</h2>
          <section
            aria-label="Pilares do método Essência LEV"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginTop: '3rem'
            }}
          >
            {methodPillars.map((pillar) => (
              <div key={pillar.id}>
                {/* ID fora do card */}
                <h2
                  style={{
                    fontFamily: theme.fonts.cinzel,
                    fontSize: '1rem',
                    fontWeight: 400,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: theme.colors.text.light,
                    opacity: 0.9,
                    marginBottom: '0.75rem'
                  }}
                >
                  {pillar.id}
                </h2>

                {/* Card */}
                <article
                  role="region"
                  aria-labelledby={`pillar-title-${pillar.id}`}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '15px',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: isMobile? 'auto': '100%',
                    minHeight: isMobile? 'auto': '520px',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease'
                  }}
                >
                  <div style={{ padding: '2rem' }}>
                    {/* Título */}
                    <h3
                      id={`pillar-title-${pillar.id}`}
                      style={{
                        fontFamily: theme.fonts.montserrat,
                        fontSize: '1.1rem',
                        margin: 0,
                        color: theme.colors.text.light,
                        fontWeight: 500
                      }}
                    >
                      {pillar.title}
                    </h3>

                    {/* Linha decorativa */}
                    <div
                      style={{
                        height: '1px',
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.35)',
                        margin: '0.6rem 0 1rem'
                      }}
                    />

                    {/* Subtítulo */}
                    <p
                      style={{
                        fontFamily: theme.fonts.montserrat,
                        fontSize: '0.9rem',
                        display: 'flex',
                        marginBottom: '1rem',
                        opacity: 0.85,
                        letterSpacing: '0.5px',
                        fontWeight: 400
                      }}
                    >
                      {pillar.subtitle}
                    </p>

                    {/* Lista de conteúdo */}
                    <ul
                      style={{
                        fontFamily: theme.fonts.montserrat,
                        fontSize: '0.95rem',
                        lineHeight: isMobile ? 1.7 : 3.7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        opacity: 0.95,
                        paddingLeft: '1.2rem',
                        margin: 0,
                        fontWeight:400
                      }}
                    >
                      {pillar.listContent?.map((item, index) => (
                        <li key={index} style={{ marginBottom: '0.5rem', textAlign: isMobile ? 'left' : 'center' }}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Rodapé com fundo diferente */}
                  {pillar.footer && (
                    <div
                      style={{
                        backgroundColor: theme.colors.white,
                        padding: '1rem 2rem',
                        fontSize: '0.85rem',
                        fontFamily: theme.fonts.montserrat,
                        color: theme.colors.text.primary,
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        fontWeight:400
                      }}
                    >
                      {pillar.footer}
                    </div>
                  )}
                </article>
              </div>
            ))}
          </section>
        </div>
      </Container>
    </section>
  );
};