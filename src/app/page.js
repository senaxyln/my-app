export default function HomePage() {
  const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bilangan Bulat 1–20</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '1rem' }}>
        {numbers.map((num) => (
          <div
            key={num}
            style={{
              width: '60px',
              height: '60px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: num % 2 === 0 ? '#e0f7fa' : '#fce4ec',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            <div>{num}</div>
            <div style={{ fontSize: '12px', color: '#555' }}>
              {num % 2 === 0 ? 'Genap' : 'Ganjil'}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}