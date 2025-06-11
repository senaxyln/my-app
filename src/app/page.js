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
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: '8px',
              boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            }}
          >
            {num}
          </div>
        ))}
      </div>
    </main>
  );
}