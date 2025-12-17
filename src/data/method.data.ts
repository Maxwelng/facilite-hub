export interface MethodPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  footer?: string;
  listContent?: string[];
}

export const methodPillars: MethodPillar[] = [
  {
    id: 'ESSÊNCIA DA ROTINA',
    title: 'ORGANIZAÇÃO PRÁTICA PARA UM CRESCIMENTO LEVE',
    subtitle: 'Eu assumo as tarefas que te sobrecarregam e te prendem no operacional:',
    description: '',
    footer: 'Mais previsibilidade, clareza e tempo real para liderar o seu negócio sem viver apagando incêndios.',
    listContent: ['Gestão de agenda e compromissos;', 
      'Organização de pagamentos, baixas e notas fiscais;', 
      'Atualização de fichas, documentos, cronogramas e Trello;', 
      'Check-in semanal com o resumo de tudo.'
    ]
  },
  {
    id: 'ESSÊNCIA DO RELACIONAMENTO',
    title: 'CLIENTES INDICANDO E VALORIZANDO O SEU TRABALHO',
    subtitle: 'Eu cuido do vínculo que mantém sua marca viva:',
    description: '',
    listContent: ['Recepção calorosa de novos clientes;',
      'Mensagens de boas-vindas e acompanhamentos;',
      'Reativação estratégica de clientes antigos;',
      'CRM sempre atualizado.'],
      footer:'Mais fidelização e vendas com menos esforço e uma experiência que eleva o valor da sua entrega.'
  },
  {
    id: 'ESSÊNCIA DA PRESENÇA',
    title: 'SUA MARCA VIVA, MESMO QUANDO VOCÊ NÃO ESTÁ ONLINE',
    subtitle: 'Eu sustento sua comunicação com cuidado e consistência:',
    description: '',
    listContent: [
      'Respostas e lembretes no seu tom de voz;',
      'Organização de links e instruções;',
      'Mensagens claras e alinhadas ao seu estilo;',
      'Suporte em inglês, quando necessário.'
    ],
      footer:'Você se liberta da necessidade de estar disponível o tempo todo, mantendo sua marca forte e seu cliente bem cuidado.'

  }
];
