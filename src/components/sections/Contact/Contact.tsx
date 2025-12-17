'use client';

import React, { useState, useEffect } from 'react';
import { ContactProps } from './Contact.types';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { theme } from '@/styles/theme';
import Image from 'next/image';

export const Contact: React.FC<ContactProps> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 900);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <section id="contato">

      {/* Fundo com imagem */}
      <div
        style={{
          padding: isMobile ? '3rem 1.5rem' : '6rem 2rem',
          backgroundImage: 'url("/bg-camilaventura.png")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px 20px 0 0'
        }}
      >
        <Container>

          <div
            style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: isMobile ? '100%' : '75%',
              margin: '0 auto',
              position: 'relative'
            }}
          >

            {/* Imagem */}
            <div
              style={{
                zIndex: 2,
                marginRight: isMobile ? 0 : '-80px',
                marginBottom: isMobile ? '2rem' : 0,
                display: 'flex',
                justifyContent: isMobile ? 'center' : 'flex-start'
              }}
            >
              <Image
                src="/camila-ventura.png"
                alt="Foto da fundadora Camila Ventura"
                width={isMobile ? 280 : 400}
                height={isMobile ? 420 : 600}
                style={{
                  objectFit: 'cover',
                  borderRadius: '12px',
                  width: isMobile ? '70%' : undefined
                }}
                priority
              />
            </div>

            {/* Card */}
            <div
              style={{
                zIndex: 1,
                borderRadius: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                padding: isMobile ? '2rem' : '8rem',
                lineHeight: 1.8,
                color: theme.colors.text.primary,
                fontFamily: theme.fonts.montserrat,
                width: isMobile ? '100%' : 'min(680px, 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems:  'center' ,
                textAlign:  'start',
                border: `3px solid ${theme.colors.primary}`
              }}
            >
              <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                Eu sou <strong>Camila Ventura</strong>, Secretária Remota e Fundadora da Facilite Hub,
                graduada em Comércio Exterior e pós-graduada em Gestão Empresarial.
              </p>

              <p style={{ fontSize: '1rem', marginBottom: '1.5rem' }}>
                Ofereço suporte estratégico e humano para mulheres que querem crescer com leveza,
                sem depender de uma grande equipe. Meu foco é cuidar da base do seu negócio,
                enquanto você foca no que realmente transforma.
              </p>

              <p style={{ fontSize: '1rem', marginBottom: '2rem' }}>
                Estou aqui para sustentar a base do seu negócio.<br />
                A escolha agora é sua.
              </p>

              <Button size="medium">Eu quero agendar uma conversa!</Button>
            </div>

          </div>
        </Container>
      </div>

      {/* Sessão branca abaixo */}
      <div
        style={{
          backgroundColor: theme.colors.contactBg,
          textAlign: 'center',
          padding: '5rem 2rem 3rem',
          margin: '0 auto'
        }}
      >
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: theme.colors.primary,
            fontStyle: 'italic',
            lineHeight: 1.4,
            marginBottom: '0.5rem',
            fontWeight:'Medium'
          }}
        >
          Você não precisa fazer tudo sozinha.
        </h2>
        <p
          style={{
            fontFamily: theme.fonts.heading,
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            color: theme.colors.primary,
            fontStyle: 'italic',
            lineHeight: 1.4,
            fontWeight:'Medium'
          }}
        >
          Dê o primeiro passo: estou aqui para te acompanhar.
        </p>
      </div>

    </section>
  );
};
