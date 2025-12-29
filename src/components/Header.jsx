import React from 'react';

// Componente de encabezado de la aplicación
export function Header({ title, language, setLanguage, t }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <h1>🎮 {title}</h1>
        <div className="language-switcher">
          <button 
            onClick={() => setLanguage('es')} 
            className={language === 'es' ? 'active' : ''}
            aria-label="Cambiar a español"
          >
            ES
          </button>
          <button 
            onClick={() => setLanguage('en')} 
            className={language === 'en' ? 'active' : ''}
            aria-label="Switch to English"
          >
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
