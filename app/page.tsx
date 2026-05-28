"use client";

import { useState } from 'react';
import styles from './principal.module.css';

export default function Home() {
  // Estado para el menú hamburguesa (móvil)
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  // Estado para saber qué submenú está abierto en MÓVIL
  const [submenuActivo, setSubmenuActivo] = useState<string | null>(null);

  // Función exclusiva para móviles: Clic abre, clic en el mismo cierra
  const toggleSubmenuMovi = (nombreMenu: string) => {
    setSubmenuActivo(submenuActivo === nombreMenu ? null : nombreMenu);
  };

  return (
    <div className={styles.container}>
      
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
            <div className={styles.dropdown}>
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
            <div className={styles.dropdown}>
              <a href="/salud/enfermedades">Enfermedades Comunes</a>
              <a href="/salud/cuidados">Cuidado del Bóxer</a>
            </div>
          </div>

          {/* ACTIVIDADES */}
          <div className={`${styles.navGroup} ${submenuActivo === 'actividades' ? styles.navGroupOpen : ''}`}>
            <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('actividades')}>
              Actividades {submenuActivo === 'actividades' ? '▴' : '▾'}
            </span>
            <div className={styles.dropdown}>
              <a href="/actividades/agilidad">Agilidad</a>
              <a href="/actividades/match">Match</a>
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
            <div className={styles.dropdown}>
              <a href="/eventos/especializadas">Especializadas</a>
              <a href="/eventos/match">Match</a>
              <a href="/eventos/ranking">Bóxer del Año (KCP)</a>
              <a href="/actividades/macho">Bóxer macho del año</a>
              <a href="/actividades/hembra">Bóxer hembra del año</a>
              <a href="/actividades/joven">Bóxer joven del año</a>
            </div>
          </div>

          {/* CAMADAS */}
          <div className={`${styles.navGroup} ${submenuActivo === 'camadas' ? styles.navGroupOpen : ''}`}>
            <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('camadas')}>
              Camadas {submenuActivo === 'camadas' ? '▴' : '▾'}
            </span>
            <div className={styles.dropdown}>
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
            <div className={styles.dropdown}>
              <a href="/camadas/articulos">Artículos</a>
              <a href="/camadas/comidas">Comidas</a>
              <a href="/camadas/suplementos">Suplementos</a>
            </div>
          </div>

          {/* NOSOTROS */}
          <div className={`${styles.navGroup} ${submenuActivo === 'nosotros' ? styles.navGroupOpen : ''}`}>
            <span className={styles.navLabel} onClick={() => toggleSubmenuMovi('nosotros')}>
              Nosotros {submenuActivo === 'nosotros' ? '▴' : '▾'}
            </span>
            <div className={styles.dropdown}>
              <a href="/camadas/consejo">Consejo directivo</a>
              <a href="/camadas/historia">Historia del Club</a>
              <a href="/camadas/contactanos">Contáctanos</a>
            </div>
          </div>
        </nav>
      </header>

      {/* SECCIÓN HERO */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h2>Pasión, Estructura y Temperamento</h2>
          <p>Descubre el estándar de excelencia del Bóxer en el Perú</p>
          <a href="/raza/estandar" className={styles.btnGold}>Ver Estándar Oficial</a>
        </div>
      </section>

      {/* BIENVENIDA */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Bienvenidos al Bóxer Club del Perú</h3>
          <p>
            Somos una comunidad organizada de criadores, propietarios y entusiastas de la raza Bóxer en el Perú. 
            Nuestro objetivo fundamental es guiar a los futuros dueños hacia una crianza responsable.
          </p>
        </div>
      </section>

      {/* CARDS */}
      <main className={styles.infoGrid}>
        <div className={styles.card}>
          <div className={styles.cardBadge}>Ranking KCP</div>
          <img src="/ranking.jpg" alt="Ranking" className={styles.cardImage} />
          <h4>Ejemplares del Año</h4>
          <p>Conoce a los máximos exponentes de la raza.</p>
          <a href="/eventos/ranking" className={styles.cardLink}>Ver Ganadores →</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Crianza Responsable</div>
          <img src="/camadas.jpg" alt="Camadas" className={styles.cardImage} />
          <h4>Próximas Camadas</h4>
          <p>Accede de manera segura a criadores certificados.</p>
          <a href="/camadas/buscar" className={styles.cardLink}>Buscar Cachorro →</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Comunidad</div>
          <img src="/actividades.jpg" alt="Actividades" className={styles.cardImage} />
          <h4>Calendario</h4>
          <p>Entérate de nuestras próximas caminatas y encuentros.</p>
          <a href="/actividades/calendario" className={styles.cardLink}>Ver Fechas →</a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Bóxer Club del Perú.</p>
      </footer>

    </div>
  );
}