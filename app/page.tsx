"use client";

import { useState } from 'react';
import styles from './principal.module.css';

export default function Home() {
  // Estado para el menú hamburguesa (celulares)
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  // Estado para rastrear qué submenú está desplegado
  const [submenuActivo, setSubmenuActivo] = useState<string | null>(null);

  // Lógica de "Interruptor": Si haces clic en el que ya está abierto, se vuelve null (se cierra)
  const toggleSubmenu = (nombreMenu: string) => {
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
              setSubmenuActivo(null); // Al cerrar el menú móvil, cerramos cualquier submenú abierto
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
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('raza')}>
              Raza {submenuActivo === 'raza' ? '▴' : '▾'}
            </span>
            <div className={`${styles.dropdown} ${submenuActivo === 'raza' ? styles.dropdownOpen : ''}`}>
              <a href="/raza/estandar">Estándar</a>
              <a href="/raza/historia">Historia de la Raza</a>
              <a href="/raza/mejor-raza">La Mejor Raza del Mundo</a>
            </div>
          </div>

          {/* SALUD */}
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('salud')}>
              Salud {submenuActivo === 'salud' ? '▴' : '▾'}
            </span>
            <div className={`${styles.dropdown} ${submenuActivo === 'salud' ? styles.dropdownOpen : ''}`}>
              <a href="/salud/enfermedades">Enfermedades Comunes</a>
              <a href="/salud/cuidados">Cuidado del Bóxer</a>
            </div>
          </div>

          {/* ACTIVIDADES */}
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('actividades')}>
              Actividades {submenuActivo === 'actividades' ? '▴' : '▾'}
            </span>
            <div className={`${styles.dropdown} ${submenuActivo === 'actividades' ? styles.dropdownOpen : ''}`}>
              <a href="/actividades/agilidad">Agilidad</a>
              <a href="/actividades/match">Match</a>
              <a href="/actividades/fotografia">Concurso de fotografías</a>
              <a href="/actividades/caminatas">Caminatas</a>
              <a href="/actividades/encuentros">Encuentros</a>
              <a href="/actividades/calendario">Calendario de actividades</a>
            </div>
          </div>

          {/* EVENTOS */}
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('eventos')}>
              Eventos {submenuActivo === 'eventos' ? '▴' : '▾'}
            </span>
            <div className={`${styles.dropdown} ${submenuActivo === 'eventos' ? styles.dropdownOpen : ''}`}>
              <a href="/eventos/especializadas">Especializadas</a>
              <a href="/eventos/match">Match</a>
              <a href="/eventos/ranking">Bóxer del Año (KCP)</a>
              <a href="/actividades/macho">Bóxer macho del año</a>
              <a href="/actividades/hembra">Bóxer hembra del año</a>
              <a href="/actividades/joven">Bóxer joven del año</a>
            </div>
          </div>

          {/* CAMADAS */}
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('camadas')}>
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
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('tienda')}>
              Tienda {submenuActivo === 'tienda' ? '▴' : '▾'}
            </span>
            <div className={`${styles.dropdown} ${submenuActivo === 'tienda' ? styles.dropdownOpen : ''}`}>
              <a href="/camadas/articulos">Artículos</a>
              <a href="/camadas/comidas">Comidas</a>
              <a href="/camadas/suplementos">Suplementos</a>
            </div>
          </div>

          {/* NOSOTROS */}
          <div className={styles.navGroup}>
            <span className={styles.navLabel} onClick={() => toggleSubmenu('nosotros')}>
              Nosotros {submenuActivo === 'nosotros' ? '▴' : '▾'}
            </span>
            <div className={`${styles.dropdown} ${submenuActivo === 'nosotros' ? styles.dropdownOpen : ''}`}>
              <a href="/camadas/consejo">Concejo directivo</a>
              <a href="/camadas/historia">Historia del Bóxer club del Perú</a>
              <a href="/camadas/contactanos">Contáctanos</a>
            </div>
          </div>

        </nav>
      </header>

      {/* SECCIÓN HERO (PORTADA PRINCIPAL) */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h2>Pasión, Estructura y Temperamento</h2>
          <p>Descubre el estándar de excelencia del Bóxer en el Perú</p>
          <a href="/raza/estandar" className={styles.btnGold}>Ver Estándar Oficial</a>
        </div>
      </section>

      {/* SECCIÓN DE BIENVENIDA / HISTORIA BREVE */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Bienvenidos al Bóxer Club del Perú</h3>
          <p>
            Somos una comunidad organizada de criadores, propietarios y entusiastas de la raza Bóxer en el Perú. 
            Nuestro objetivo fundamental es guiar a los futuros dueños hacia una crianza responsable, protegiendo la salud 
            genética de nuestros ejemplares y promoviendo eventos oficiales regulados bajo los estándares internacionales.
          </p>
        </div>
      </section>

      {/* CUADROS DESTACADOS */}
      <main className={styles.infoGrid}>
        <div className={styles.card}>
          <div className={styles.cardBadge}>Ranking KCP</div>
          <img src="/ranking.jpg" alt="Ranking Boxer" className={styles.cardImage} />
          <h4>Ejemplares del Año</h4>
          <p>Conoce a los máximos exponentes de la raza en las categorías Macho, Hembra y Joven del Año según el puntaje oficial.</p>
          <a href="/eventos/ranking" className={styles.cardLink}>Ver Ganadores →</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Crianza Responsable</div>
          <img src="/camadas.jpg" alt="Camadas Boxer" className={styles.cardImage} />
          <h4>Próximas Camadas</h4>
          <p>¿Buscas un cachorro? Accede de manera segura a criadores certificados que priorizan la salud y el temperamento.</p>
          <a href="/camadas/buscar" className={styles.cardLink}>Buscar Cachorro →</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Comunidad</div>
          <img src="/actividades.jpg" alt="Actividades Boxer" className={styles.cardImage} />
          <h4>Calendario de Actividades</h4>
          <p>Entérate de nuestras próximas caminatas grupales, encuentros de socialización y competencias de agilidad en Lima.</p>
          <a href="/actividades/calendario" className={styles.cardLink}>Ver Fechas →</a>
        </div>
      </main>

      {/* PIE DE PÁGINA (FOOTER) */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Bóxer Club del Perú.</p>
        <p className={styles.footerNote}>Sede Informativa</p>
      </footer>

    </div>
  );
}