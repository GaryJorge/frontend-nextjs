"use client";

import { useState } from 'react';
import styles from './principal.module.css'; // Importación en minúsculas para evitar errores en Render
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Estado para el menú hamburguesa (móvil)
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  // Estado para submenús en móvil
  const [submenuActivo, setSubmenuActivo] = useState<string | null>(null);

  const toggleSubmenuMovi = (nombreMenu: string) => {
    setSubmenuActivo(submenuActivo === nombreMenu ? null : nombreMenu);
  };

  return (
    <html lang="es">
      <body className={styles.container}>
        <header className={styles.header}>
          <div className={styles.topBar}>
            <p>Afiliado idealmente al Kennel Club Peruano (KCP)</p>
          </div>
          
          <div className={styles.logoArea}>
            <h1>BÓXER CLUB DEL PERÚ</h1>
            <p className={styles.subtitle}>Dedicados a la crianza, salud y preservación de la raza</p>
            
            <button 
              className={styles.hamburger} 
              onClick={() => {
                setMenuAbierto(!menuAbierto);
                setSubmenuActivo(null);
              }}
              aria-label="Menú de navegación"
            >
              <div className={`${styles.line} ${menuAbierto ? styles.line1Active : ''}`}></div>
              <div className={`${styles.line} ${menuAbierto ? styles.line2Active : ''}`}></div>
              <div className={`${styles.line} ${menuAbierto ? styles.line3Active : ''}`}></div>
            </button>
          </div>

          <nav className={`${styles.navbar} ${menuAbierto ? styles.active : ''}`}>
            
            {/* RAZA */}
            <div className={`${styles.navGroup} ${submenuActivo === 'raza' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('raza')}>
                Raza {submenuActivo === 'raza' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'raza' ? styles.dropdownOpen : ''}`}>
                <a href="/raza/estandar">Estándar</a>
                <a href="/raza/historia">Historia de la Raza</a>
                <a href="/raza/mejor-raza">La Mejor Raza del Mundo</a>
              </div>
            </div>

            {/* SALUD */}
            <div className={`${styles.navGroup} ${submenuActivo === 'salud' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('salud')}>
                Salud {submenuActivo === 'salud' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'salud' ? styles.dropdownOpen : ''}`}>
                <a href="/salud/enfermedades">Enfermedades Comunes</a>
                <a href="/salud/cuidado">Cuidado del Bóxer</a>
              </div>
            </div>

            {/* ACTIVIDADES */}
            <div className={`${styles.navGroup} ${submenuActivo === 'actividades' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('actividades')}>
                Actividades {submenuActivo === 'actividades' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'actividades' ? styles.dropdownOpen : ''}`}>
                <a href="/actividades/agilidad">Agilidad</a>
                <a href="/actividades/trabajo">Trabajo</a>
                <a href="/actividades/fotografia">Concurso de fotografías</a>
                <a href="/actividades/caminatas">Caminatas</a>
                <a href="/actividades/encuentros">Encuentros</a>
                <a href="/actividades/calendario">Calendario de actividades</a>
              </div>
            </div>

            {/* EVENTOS */}
            <div className={`${styles.navGroup} ${submenuActivo === 'eventos' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('eventos')}>
                Eventos {submenuActivo === 'eventos' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'eventos' ? styles.dropdownOpen : ''}`}>
                <a href="/eventos/especializadas">Especializadas</a>
                <a href="/eventos/match">Match</a>
                <a href="/eventos/macho">Bóxer macho del año (según KCP)</a>
                <a href="/eventos/hembra">Bóxer hembra del año (según KCP)</a>
                <a href="/eventos/joven">Bóxer joven del año (según KCP)</a>
              </div>
            </div>

            {/* CAMADAS */}
            <div className={`${styles.navGroup} ${submenuActivo === 'camadas' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('camadas')}>
                Camadas {submenuActivo === 'camadas' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'camadas' ? styles.dropdownOpen : ''}`}>
                <a href="/camadas/preguntas">Preguntas frecuentes</a>
                <a href="/camadas/buscar">Encontrar Cachorro</a>
                <a href="/camadas/criadores">Criadores Oficiales</a>
                <a href="/camadas/montas">Servicios de Monta</a>
              </div>
            </div>

            {/* TIENDA */}
            <div className={`${styles.navGroup} ${submenuActivo === 'tienda' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('tienda')}>
                Tienda {submenuActivo === 'tienda' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'tienda' ? styles.dropdownOpen : ''}`}>
                <a href="/tienda/articulos">Artículos</a>
                <a href="/tienda/comidas">Comidas</a>
                <a href="/tienda/suplementos">Suplementos</a>
              </div>
            </div>

            {/* NOSOTROS */}
            <div className={`${styles.navGroup} ${submenuActivo === 'nosotros' ? styles.navGroupOpen : ''}`}>
              <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('nosotros')}>
                Nosotros {submenuActivo === 'nosotros' ? '▴' : '▾'}
              </span>
              <div className={`${styles.dropdown} ${submenuActivo === 'nosotros' ? styles.dropdownOpen : ''}`}>
                <a href="/nosotros/consejo">Consejo directivo</a>
                <a href="/nosotros/historia">Historia del Club</a>
                <a href="/nosotros/contactanos">Contáctanos</a>
              </div>
            </div>
          </nav>
        </header>

        {/* Contenido principal que cambia según la ruta */}
        {children}

        <footer className={styles.footer}>
          <p>&copy; {new Date().getFullYear()} Bóxer Club del Perú.</p>
          <div className={styles.footerNote}>Afiliado al Kennel Club Peruano (KCP)</div>
        </footer>
      </body>
    </html>
  );
}