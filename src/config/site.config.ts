export const siteConfig = {
  name: 'Facilite Hub',
  title: 'Facilite Hub - Assistência Virtual',
  description: 'Soluções estratégicas para mulheres empreendedoras.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  contact: {
    email: process.env.NEXT_PUBLIC_EMAIL || 'facilitehub@virtualassistencia.com.br',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '551392012884',
  },
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM || 'https://www.instagram.com/facilitehub?igsh=MWl2Y3huajBucDAwdg%3D%3D',
  },
} as const;