export interface Value {
  id: string;
  name: string;
  description: string;
  cx: number;
  cy: number;
  position: React.CSSProperties;
  textAlign: 'left' | 'center' | 'right';
}

export const valuesData: Value[] = [
  {
    id: 'cuidado-humano',
    name: 'CUIDADO HUMANO',
    description: 'Atendimento próximo, empático e adaptado à sua realidade.',
    cx: 200,
    cy: 20,
    position: { top: '-80px', left: '50%', transform: 'translateX(-50%)', width: '200px' },
    textAlign: 'center'
  },
  {
    id: 'organizacao-estrategica',
    name: 'ORGANIZAÇÃO ESTRATÉGICA',
    description: 'Processos claros, estruturados e orientados a resultados.',
    cx: 310,
    cy: 70,
    position: { top: '10px', right: '-220px', width: '200px' },
    textAlign: 'left'
  },
  {
    id: 'confianca-responsabilidade',
    name: 'CONFIANÇA E RESPONSABILIDADE',
    description: 'Compromisso com sigilo, segurança e entrega consistente.',
    cx: 356,
    cy: 180,
    position: { top: '45%', right: '-235px', transform: 'translateY(-50%)', width: '220px' },
    textAlign: 'left'
  },
  {
    id: 'presenca-consistencia',
    name: 'PRESENÇA E CONSISTÊNCIA',
    description: 'Suporte contínuo para manter o negócio fluindo diariamente.',
    cx: 280,
    cy: 320,
    position: { bottom: '-75px', right: '35px', width: '210px' },
    textAlign: 'center'
  },
  {
    id: 'leveza-equilibrio',
    name: 'LEVEZA E EQUILÍBRIO',
    description: 'Rotinas funcionais que respeitam sua vida real.',
    cx: 165,
    cy: 345,
    position: { bottom: '-95px', left: '60px', width: '200px' },
    textAlign: 'center'
  },
  {
    id: 'transparencia-parceria',
    name: 'TRANSPARÊNCIA E PARCERIA',
    description: 'Comunicação clara e decisões feitas em conjunto.',
    cx: 72,
    cy: 260,
    position: { top: '52%', left: '-220px', transform: 'translateY(-50%)', width: '200px' },
    textAlign: 'right'
  },
  {
    id: 'excelencia-evolucao',
    name: 'EXCELÊNCIA E EVOLUÇÃO',
    description: 'Aprimoramento constante com ferramentas inteligentes.',
    cx: 72,
    cy: 95,
    position: { top: '30px', left: '-220px', width: '200px' },
    textAlign: 'right'
  }
];