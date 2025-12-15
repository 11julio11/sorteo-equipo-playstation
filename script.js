// Lista de selecciones disponibles
const selecciones = [
  "Argentina",
  "Francia",
  "Brasil",
  "Alemania",
  "Italia",
  "España",
  "Inglaterra",
  "Portugal",
  "Países Bajos",
  "Bélgica",
  "Croacia",
  "Uruguay",
  "Marruecos",
  "Japón",
  "Colombia",
  "México",
  "Senegal",
  "Chile",
  "Suiza",
  "Dinamarca"
];
// Elementos del DOM
const continueBtn = document.getElementById('continueBtn');
const sortearBtn = document.getElementById('sortearBtn');
const playersForm = document.getElementById('playersForm');
const resultadoEl = document.getElementById('resultado');
// Eventos de botones
continueBtn.addEventListener('click', crearCampos);
sortearBtn.addEventListener('click', sortear);
// Función para crear campos de entrada según el número de participantes
function crearCampos(){
  const num = parseInt(document.getElementById('numPlayers').value,10);
  playersForm.innerHTML = '';
  resultadoEl.innerHTML = '';
// Validar número de participantes
  if (!num || num < 2 || num > selecciones.length){
    alert('Número inválido de participantes');
    return;
  }
// Crear campos de entrada para nombres de jugadores
  for (let i=1;i<=num;i++){
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = `Jugador ${i}`;
    input.className = 'player';
    input.required = true;
    playersForm.appendChild(input);
  }
// Mostrar botón de sorteo
  sortearBtn.style.display = 'block';
}
// Función para realizar el sorteo
function sortear(){
  const jugadores = Array.from(document.querySelectorAll('.player'));
  const nombres = jugadores.map(i => i.value.trim());
// Validar que todos los nombres estén completos
  if (nombres.some(n => n === '')){
    alert('Completa todos los nombres');
    return;
  }
// Mezclar selecciones
  const seleccionesMezcladas = [...selecciones].sort(()=>Math.random()-0.5);

  resultadoEl.innerHTML = '<h3>Resultado del sorteo</h3>';
// Mostrar solo las selecciones necesarias
  nombres.forEach((nombre, idx)=>{
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `🎮 <strong>${escapeHtml(nombre)}</strong> ➝ ⚽ <strong>${seleccionesMezcladas[idx]}</strong>`;
    resultadoEl.appendChild(div);
  });
}
// Función para escapar caracteres HTML
function escapeHtml(str){
  return str.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[c]));
}
