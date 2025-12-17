"use client";
import React, { useEffect, useState } from 'react';
import { AboutProps } from './About.types';
import { Container } from '@/components/ui/Container';
import { theme } from '@/styles/theme';
import Image from 'next/image';
const recognitionPoints = [
  'Tem dias que você olha pra agenda e pensa: como encaixar tudo isso na vida de uma pessoa só?',
  'É impressionante como, às vezes, um único dia consegue caber tanta coisa... e tão pouco de você.',
  'Entre cliente, criança e prazos, talvez você também sinta que é você quem precisa de um intervalo.',
  'É trabalho, casa, criança... e você tentando respirar entre uma demanda e outra.',
  'Você dá conta, e dá mesmo, mas às vezes gostaria que alguém cuidasse de você também.',
  'No meio de tudo, você aprendeu a trabalhar no tempo que a vida te dá, mesmo quando ele é mínimo.'
];
export const About: React.FC<AboutProps> = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 900);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);
  return (
    <section id="sobre" style={{
      padding: '6rem 2rem',
      backgroundColor: theme.colors.offwhite
    }}>
      <Container>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h3 style={{
            fontFamily: theme.fonts.montserrat,
            fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
            color: theme.colors.primary,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: 600
          }}>
            Nossa Missão É
          </h3>
          <p style={{
            fontFamily: theme.fonts.montserrat,
            fontSize: '1.1rem',
            color: theme.colors.text.secondary,
            lineHeight: 1.8,
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            Sustentar os bastidores para que cada cliente tenha tempo, clareza e liberdade para crescer com consistência, oferecendo suporte estratégico, organizado e humano para mulheres e mães empreendedoras,
            garantindo rotinas leves, processos eficientes e uma presença profissional constante.
          </p>
        </div>

        <div style={{ textAlign: 'center', padding: '4rem 0', marginBottom: '4rem' }}>
          <h3 style={{
            fontFamily: theme.fonts.montserrat,
            fontSize: 'clamp(1.7rem, 4vw, 2.5rem)',
            color: theme.colors.primary,
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '3px',
            fontWeight: 600
          }}>
            Nossa Visão É
          </h3>
          <p style={{
            fontFamily: theme.fonts.montserrat,
            fontSize: '1.1rem',
            color: theme.colors.text.secondary,
            lineHeight: 1.8,
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: 400
          }}>
            Transformar o atendimento empático,
            humano, e que realmente cuida do que é essencial para você empresária e se tornar uma referência em suporte remoto para 100 mulheres que tomarão a decisão de serem mais estratégicas e avançarem em seus negócios até 2028.
          </p>
        </div>

        <div
          style={{
            backgroundImage: 'url("/about-bg.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: theme.colors.primary,
            color: theme.colors.white,
            padding: '4rem 3rem',
            borderRadius: '10px',
            marginBottom: '4rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'space-between',
              maxWidth: isMobile ? 'auto':'1600px',
              margin: '0 auto',
              flexWrap: 'wrap',
              flexDirection: isMobile ? 'column' : 'row',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            {/* Coluna do título */}
            <div style={{ flex: isMobile ? '1 1 100%' : '1 1 40%' }}>
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
                  marginBottom: '2rem',
                  fontStyle: 'italic',
                  lineHeight: 1.3,
                  fontWeight: 600,
                  textAlign: isMobile ? 'center' : 'left'
                }}
              >
                Se você se reconhece<br />
                nessas situações...<br />
                estamos aqui para aliviar sua rotina.
              </h3>
            </div>

            {/* Coluna dos cards */}
            <div
              style={{
                flex: isMobile ? '1 1 100%' : '1 1 50%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '700px' : 'none'
              }}
            >
              {recognitionPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    borderRadius: '12px',
                    padding: '1.2rem',
                    color: theme.colors.white,
                    fontFamily: theme.fonts.montserrat,
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    textAlign: isMobile ? 'center' : 'left',
                    fontWeight: 500,
                  }}
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '4rem',
          alignItems: 'center'
        }} className="reality-grid">
          <div style={{
            padding: '3rem 3.5rem',
            backgroundColor: theme.colors.white,
            borderRadius: '10px',
            border: '1px solid #E5E7EB'
          }}>
            <p style={{ listStyle: 'none', fontFamily: theme.fonts.montserrat, padding: '0px 0px 20px', margin: 0, color: theme.colors.primary,fontWeight:400 }}>Você até poderia contratar uma equipe,
              usar vários sistemas ou delegar cada ponto pra alguém diferente.</p>
            <h4 style={{
              fontFamily: theme.fonts.montserrat,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: theme.colors.primary,
              marginBottom: '2rem',
              fontWeight: 700
            }}>
              Mas vamos ser realistas?
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { title: 'Um bom CRM custa de R$ 70 a R$ 300 por mês.', desc: 'Todo mundo precisa de ajuda.' },
                { title: 'Um assistente comum cobra entre R$ 1.500 e R$ 3.000 só pra executar tarefas.', desc: 'Seu papel é liderar estrategicamente.' },
                { title: 'E pra ter estratégia, visão do todo e cuidado real, esse valor pode passar dos R$ 5.000 por mês.', desc: 'Está na hora de repensar suas prioridades.' }
              ].map((item, index) => (
                <li key={index} style={{
                  fontFamily: theme.fonts.montserrat,
                  fontSize: '0.95rem',
                  color: theme.colors.text.primary,
                  marginBottom: '2rem',
                  paddingLeft: '1.5rem',
                  position: 'relative',
                  lineHeight: 1.6,
                  fontWeight:600
                }}>
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    top: '4px',
                    width: '6px',
                    height: '6px',
                    backgroundColor: theme.colors.primary,
                    borderRadius: '50%'
                  }} />
                  <strong style={{ display: 'block', marginBottom: '0.3rem' }}>{item.title}</strong>
                </li>
              ))}
            </ul>
          </div>
          <div
            style={{
              position: 'relative',
              height: '406px',
              borderRadius: '10px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
              background: 'linear-gradient(135deg, rgba(196, 166, 136, 0.2) 0%, rgba(44, 62, 80, 0.2) 100%)',
              fontFamily: theme.fonts.body
            }}
          >
            <Image
              src="/about-bg2.png"
              alt="Profissional multitarefa usando notebook e celular"
              width={542.22}
              height={406}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              loading="lazy"
              priority={false}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: '0 20px',
                fontFamily: theme.fonts.montserrat,
                textAlign: 'center',
                color: theme.colors.white,
                fontSize: '1.1rem',
                fontWeight: 400,
                lineHeight: '1.4',
                maxWidth: '90%',
                width:'100%'
              }}
            >
              <p>
                No fim, você não precisa de dez ferramentas ou três profissionais diferentes.<br />
                Você precisa de alguém que una <strong>estratégia</strong>, <strong>execução</strong> e <strong>cuidado</strong>.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};