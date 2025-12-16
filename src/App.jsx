import React, {useState} from 'react'

const selecciones = [
  "Argentina","Francia","Brasil","Inglaterra","España","Portugal",
  "Alemania","Italia","Países Bajos","Bélgica","Croacia","Uruguay",
  "Colombia","México","Estados Unidos","Japón","Marruecos","Suiza",
  "Dinamarca","Senegal"
]

export default function App(){
  const [num, setNum] = useState('')
  const [names, setNames] = useState([])
  const [resultado, setResultado] = useState([])

  function crearCampos(){
    const n = parseInt(num,10)
    if (!n || n < 2 || n > selecciones.length){
      alert('Número inválido de participantes')
      return
    }
    setNames(Array.from({length:n}, ()=>''))
    setResultado([])
  }

  function handleNameChange(i, value){
    const next = [...names]
    next[i]=value
    setNames(next)
  }

  function sortear(){
    if (names.some(n=>n.trim()==='')){ alert('Completa todos los nombres'); return }
    const shuffled = [...selecciones].sort(()=>Math.random()-0.5)
    setResultado(names.map((n,i)=>({player:n, team:shuffled[i]})))
  }

  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <h1>🎮 Sorteo PlayStation</h1>
        </div>
      </header>

      <main className="container main-content">
        <section className="controls">
          <label htmlFor="numPlayers">Número de participantes</label>
          <input id="numPlayers" type="number" min="2" max={selecciones.length} placeholder="Ej: 4" value={num} onChange={e=>setNum(e.target.value)} />
          <button type="button" onClick={crearCampos}>Continuar</button>

          <form className="players-form" onSubmit={e=>e.preventDefault()}>
            {names.map((_,idx)=> (
              <input key={idx} value={names[idx]} onChange={e=>handleNameChange(idx, e.target.value)} placeholder={`Jugador ${idx+1}`} />
            ))}
          </form>

          {names.length>0 && (
            <button className="primary" onClick={sortear}>🎲 Sortear selecciones</button>
          )}
        </section>

        <section id="resultado" className="resultado" aria-live="polite">
          {resultado.length>0 && <h3>Resultado del sorteo</h3>}
          {resultado.map((r, i)=> (
            <div key={i} className="item">🎮 <strong>{r.player}</strong> ➝ ⚽ <strong>{r.team}</strong></div>
          ))}
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>&copy; 2025 Sorteo PlayStation</p>
        </div>
      </footer>

      <img src="/bg.svg" alt="fondo decorativo" className="page-bg" />
    </div>
  )
}
