import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/index.css'

// Inyectar favicon dinámicamente desde assets procesados por Vite
import playstationFavicon from './assets/images/paises/playstation.webp'
const link = document.createElement('link')
link.rel = 'icon'
link.href = playstationFavicon
document.head.appendChild(link)

// Renderizado del componente principal
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
