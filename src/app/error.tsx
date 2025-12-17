'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
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
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#2C3E50' }}>
        Algo deu errado!
      </h2>
      <button
        onClick={reset}
        style={{
          padding: '1rem 2rem',
          fontSize: '1rem',
          backgroundColor: '#2C3E50',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer'
        }}
      >
        Tentar novamente
      </button>
    </div>
  );
}
