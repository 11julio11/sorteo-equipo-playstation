import React, { useState, useEffect } from 'react';

// Componente para mostrar los resultados del sorteo
export function Results({ resultado, t }) {
  const [flippedStates, setFlippedStates] = useState([]);

  useEffect(() => {
    if (resultado.length === 0) {
      setFlippedStates([]);
      return;
    }

    setFlippedStates(Array(resultado.length).fill(false));

    const timers = [];
    const outer = setTimeout(() => {
      resultado.forEach((_, i) => {
        const id = setTimeout(() => {
          setFlippedStates(prev => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        }, i * 300);
        timers.push(id);
      });
    }, 500);

    return () => {
      clearTimeout(outer);
      timers.forEach(id => clearTimeout(id));
    };
  }, [resultado]);

  if (resultado.length === 0) return null;

  return (
    <section id="resultado" className="resultado" aria-live="polite" key={JSON.stringify(resultado)}>
      <h3>{t.title}</h3>
      <div className="cards-container">
        {resultado.map((r, i) => (
          <div
            className="card-scene"
            key={i}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className={`card ${flippedStates[i] ? 'is-flipped' : ''}`}>
              <div className="card-face card-front">
                🎮 <strong>{r.player}</strong>
              </div>
              <div className="card-face card-back">
                {r.team && (
                  <>
                    <img src={r.team.crest} alt={`Escudo de ${r.team.name}`} className="team-crest" />
                    <strong>{r.team.name}</strong>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}