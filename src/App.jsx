import React, { useState } from 'react';
import { SELECCIONES } from './teams.js';
import { Header } from './Header.jsx';
import { Controls } from './Controls.jsx';
import { Results } from './Results.jsx';

// Componente principal de la aplicación
export default function App() {
  const [num, setNum] = useState('');
  const [names, setNames] = useState([]);
  const [resultado, setResultado] = useState([]);
// Función para crear campos de entrada según el número de participantes
  function crearCampos() {
    const n = parseInt(num, 10);
    if (!n || n < 2 || n > SELECCIONES.length) {
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
    const shuffled = [...SELECCIONES].sort(() => Math.random() - 0.5);
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
          names={names}
          handleNameChange={handleNameChange}
          crearCampos={crearCampos}
          sortear={sortear}
          maxPlayers={SELECCIONES.length}
        />
        <Results resultado={resultado} />
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2025 Sorteo PlayStation</p>
        </div>
      </footer>

      {/* CORRECCIÓN: Con Vite, los archivos en la carpeta `public` se sirven desde la raíz.
          La ruta correcta no debe incluir `/public`. */}
      <img src="/assets/fifa.jpg" alt="fondo decorativo" className="page-bg" />
    </div>
  )
}
