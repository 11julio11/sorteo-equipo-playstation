import React from 'react';

export function Results({ resultado }) {
  if (resultado.length === 0) return null;

  return (
    <section id="resultado" className="resultado" aria-live="polite">
      <h3>Resultado del sorteo</h3>
      {resultado.map((r, i) => (
        <div key={i} className="item">🎮 <strong>{r.player}</strong> ➝ ⚽ <strong>{r.team}</strong></div>
      ))}
    </section>
  );
}