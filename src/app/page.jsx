'use client';
import { useState } from 'react';

export default function Home() {
  const [input, setInput] = useState('');

  const appendInput = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input);
      setInput(String(result));
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>PWA Calculator</h1>
      <input
        style={{ width: '100%', fontSize: '2rem', marginBottom: '1rem', padding: '0.5rem', textAlign: 'right' }}
        type="text"
        value={input}
        readOnly
        placeholder="0"
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
        {'1234567890+-*/.'.split('').map((char) => (
          <button key={char} style={{ fontSize: '1.5rem', padding: '1rem', cursor: 'pointer' }} onClick={() => appendInput(char)}>
            {char}
          </button>
        ))}
        <button style={{ fontSize: '1.5rem', padding: '1rem', cursor: 'pointer' }} onClick={calculate}>=</button>
        <button style={{ fontSize: '1.5rem', padding: '1rem', cursor: 'pointer' }} onClick={clearInput}>
          Clear
        </button>
      </div>
    </div>
  );
}
