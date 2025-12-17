export const theme = {
  colors: {
    primary: '#2C3E50',
    secondary: '#C4A688',
    accent: '#34495E',
    lightBg: '#F5F1ED',
    darkBg: '#4A5568',
    beigeBg: '#D8D4CF',
    contactBg: '#E8E4DF',
    white: '#FFFFFF',
    offwhite:'#E3E3E3',
    text: {
      primary: '#2C3E50',
      secondary: '#6B7280',
      tertiary: '#5A5A5A',
      light: '#FFFFFF',
      
    }
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', 'Poppins', sans-serif",
    chilanka: "var(--font-chilanka)",
    montserrat: "var(--font-montserrat)",
    cinzel: "var(--font-cinzel)",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem'
  },
  shadows: {
    sm: '0 2px 10px rgba(0,0,0,0.1)',
    md: '0 4px 15px rgba(0,0,0,0.15)',
    lg: '0 20px 60px rgba(0,0,0,0.1)'
  }
} as const;

export type Theme = typeof theme;