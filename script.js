const selecciones = [
  "Argentina","Francia","Brasil","Inglaterra","España","Portugal",
  "Alemania","Italia","Países Bajos","Bélgica","Croacia","Uruguay",
  "Colombia","México","Estados Unidos","Japón","Marruecos","Suiza",
  "Dinamarca","Senegal"
];

const continueBtn = document.getElementById('continueBtn');
const sortearBtn = document.getElementById('sortearBtn');
const playersForm = document.getElementById('playersForm');
const resultadoEl = document.getElementById('resultado');

continueBtn.addEventListener('click', crearCampos);
sortearBtn.addEventListener('click', sortear);

function crearCampos(){
  const num = parseInt(document.getElementById('numPlayers').value,10);
  playersForm.innerHTML = '';
  resultadoEl.innerHTML = '';

  if (!num || num < 2 || num > selecciones.length){
    alert('Número inválido de participantes');
    return;
  }

  for (let i=1;i<=num;i++){
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Jugador ${i}`;
    input.className = 'player';
    input.required = true;
    playersForm.appendChild(input);
  }

  sortearBtn.style.display = 'block';
}

function sortear(){
  const jugadores = Array.from(document.querySelectorAll('.player'));
  const nombres = jugadores.map(i => i.value.trim());

  if (nombres.some(n => n === '')){
    alert('Completa todos los nombres');
    return;
  }

  const seleccionesMezcladas = [...selecciones].sort(()=>Math.random()-0.5);

  resultadoEl.innerHTML = '<h3>Resultado del sorteo</h3>';

  nombres.forEach((nombre, idx)=>{
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `🎮 <strong>${escapeHtml(nombre)}</strong> ➝ ⚽ <strong>${seleccionesMezcladas[idx]}</strong>`;
    resultadoEl.appendChild(div);
  });
}

function escapeHtml(str){
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}
