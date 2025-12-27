import React, { useState } from 'react';
import fifaImg from './assets/images/fifa.jpg';
import { SELECCIONES } from './data/teams.js';
import { CLUBS } from './data/clubs.js';
import { Header } from './components/Header.jsx';
import { Controls } from './components/Controls.jsx';
import { Results } from './components/Results.jsx';

// Componente principal de la aplicación
export default function App() {
  const [num, setNum] = useState('');
  const [names, setNames] = useState([]);
  const [resultado, setResultado] = useState([]);
  const [category, setCategory] = useState('paises');
  const currentList = category === 'paises' ? SELECCIONES : CLUBS;
// Función para crear campos de entrada según el número de participantes
  function crearCampos() {
    const n = parseInt(num, 10);
    if (!n || n < 2 || n > currentList.length) {
      alert('Número inválido de participantes');
      return;
    }
    setNames(Array.from({ length: n }, () => ''));
    setResultado([]);
  }
// Función para manejar el cambio de nombres de jugadores
  function handleNameChange(i, value){
    const next = [...names]
    next[i]=value
    setNames(next)
  }
// Función para realizar el sorteo
  function sortear(){
    if (names.some(n => n.trim() === '')) {
      alert('Completa todos los nombres');
      return;
    }
    const shuffled = [...currentList].sort(() => Math.random() - 0.5);
    setResultado(names.map((n, i) => ({ player: n, team: shuffled[i] })));
  }
// Renderizado del componente
  return (
    <div className="app-root">
      <Header />

      <main className="container main-content">
        <Controls
          num={num}
          setNum={setNum}
          category={category}
          setCategory={setCategory}
          names={names}
          handleNameChange={handleNameChange}
          crearCampos={crearCampos}
          sortear={sortear}
          maxPlayers={currentList.length}
        />
        <Results resultado={resultado} />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2025 Sorteo Equipos</p>
        </div>
      </footer>

        {/* Imagen de fondo importada desde src/assets/images */}
        <img src={fifaImg} alt="fondo decorativo" className="page-bg" />
    </div>
  )
}
