import React from 'react';

export function Controls({ num, setNum, names, handleNameChange, crearCampos, sortear, maxPlayers }) {
  return (
    <section className="controls">
      <label htmlFor="numPlayers">Número de participantes</label>
      <input
        id="numPlayers"
        type="number"
        min="2"
        max={maxPlayers}
        placeholder="Ej: 4"
        value={num}
        onChange={e => setNum(e.target.value)}
      />
      <button type="button" onClick={crearCampos}>Continuar</button>

      {names.length > 0 && (
        <form className="players-form" onSubmit={e => e.preventDefault()}>
          {names.map((_, idx) => (
            <input key={idx} value={names[idx]} onChange={e => handleNameChange(idx, e.target.value)} placeholder={`Jugador ${idx + 1}`} />
          ))}
        </form>
      )}

      {names.length > 0 && (
        <button className="primary" onClick={sortear}>🎲 Sortear selecciones</button>
      )}
    </section>
  );
}