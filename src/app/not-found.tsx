import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#2C3E50' }}>404</h2>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#6B7280' }}>
        Página não encontrada
      </p>
      <Link href="/" style={{
        padding: '1rem 2rem',
        fontSize: '1rem',
        backgroundColor: '#2C3E50',
        color: 'white',
        borderRadius: '50px'
      }}>
        Voltar para home
      </Link>
    </div>
  );
}
