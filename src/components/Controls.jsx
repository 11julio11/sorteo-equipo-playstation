import React from 'react';

// Componente de controles para la aplicación
export function Controls({ num, setNum, names, handleNameChange, crearCampos, sortear, maxPlayers, category, setCategory, t }) {
  return (
    <section className="controls">
      <label htmlFor="datasetSelect">{t.category}</label>
      <select id="datasetSelect" value={category} onChange={e => setCategory(e.target.value)}>
        <option value="paises">{t.countries}</option>
        <option value="clubes">{t.clubs}</option>
      </select>

      <label htmlFor="numPlayers">{t.numParticipants}</label>
      <input
        id="numPlayers"
        type="number"
        min="2"
        max={maxPlayers}
        placeholder="Ej: 4"
        value={num}
        onChange={e => setNum(e.target.value)}
      />
      <button type="button" onClick={crearCampos}>{t.createInputs}</button>
      {/* Mostrar campos de entrada para nombres si ya se creó el arreglo de nombres */}
      {names.length > 0 && (
        <form className="players-form" onSubmit={e => e.preventDefault()}>
          {names.map((_, idx) => (
            <input key={idx} value={names[idx]} onChange={e => handleNameChange(idx, e.target.value)} placeholder={`${t.player} ${idx + 1}`} />
          ))}
        </form>
      )}
      {/* Mostrar botón de sorteo si ya se ingresaron los nombres*/}
      {names.length > 0 && (
        <button className="primary" onClick={sortear}>🎲 {t.draw}</button>
      )}
    </section>
  );
}
