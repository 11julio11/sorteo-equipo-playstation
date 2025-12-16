import React from 'react';

// Componente para mostrar los resultados del sorteo
export function Results({ resultado }) {
  if (resultado.length === 0) return null;

  return (
    <section id="resultado" className="resultado" aria-live="polite">
      <h3>Resultado del sorteo</h3>
      {resultado.map((r, i) => (
        <div 
          key={i} 
          className="item"
          style={{ animationDelay: `${i * 100}ms` }} /* Retraso escalonado */
        >🎮 <strong>{r.player}</strong> ➝ <img src={r.team.crest} alt={`Escudo de ${r.team.name}`} className="team-crest" /> <strong>{r.team.name}</strong></div>
      ))}
    </section>
  );
}