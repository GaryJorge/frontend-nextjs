// src/app/page.tsx
"use client"; // <-- IMPORTANTE: Esto le permite a Next.js usar interactividad

import { useState } from 'react';
import styles from './principal.module.css';

export default function Home() {
  // Estado para controlar si el menú hamburguesa está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div className={styles.container}>
      
      {/* HEADER E INSTITUCIONAL NAVBAR */}
      <header className={styles.header}>
        <div className={styles.topBar}>
          <p>Afiliado idealmente al Kennel Club Peruano (KCP)</p>
        </div>
        
        <div className={styles.logoArea}>
          <h1>BÓXER CLUB DEL PERÚ</h1>
          <p className={styles.subtitle}>Dedicados a la crianza, salud y preservación de la raza</p>
          
          {/* BOTÓN DE 3 LÍNEAS (Solo se verá en celulares) */}
          <button 
            className={styles.hamburger} 
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú de navegación"
          >
            <div className={`${styles.line} ${menuAbierto ? styles.line1Active : ''}`}></div>
            <div className={`${styles.line} ${menuAbierto ? styles.line2Active : ''}`}></div>
            <div className={`${styles.line} ${menuAbierto ? styles.line3Active : ''}`}></div>
          </button>
        </div>

        {/* Agregamos una clase condicional: si menuAbierto es true, añade styles.active */}
        <nav className={`${styles.navbar} ${menuAbierto ? styles.active : ''}`}>
          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Raza ▾</span>
            <div className={styles.dropdown}>
              <a href="/raza/estandar">Estándar</a>
              <a href="/raza/historia">Historia de la Raza</a>
              <a href="/raza/mejor-raza">La Mejor Raza del Mundo</a>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Salud ▾</span>
            <div className={styles.dropdown}>
              <a href="/salud/enfermedades">Enfermedades Comunes</a>
              <a href="/salud/cuidados">Cuidado del Bóxer</a>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Actividades ▾</span>
            <div className={styles.dropdown}>
              <a href="/actividades/agilidad">Agilidad</a>
              <a href="/actividades/match">Match</a>
              <a href="/actividades/fotografia">Concurso de fotografías</a>
              <a href="/actividades/caminatas">Caminatas</a>
              <a href="/actividades/encuentros">Encuentros</a>
              <a href="/actividades/calendario">Calendario de actividades</a>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Eventos ▾</span>
            <div className={styles.dropdown}>
              <a href="/eventos/especializadas">Especializadas</a>
              <a href="/eventos/match">Match</a>
              <a href="/eventos/ranking">Bóxer del Año (KCP)</a>
              <a href="/actividades/macho">Bóxer macho del año</a>
              <a href="/actividades/hembra">Bóxer hembra del año</a>
              <a href="/actividades/joven">Bóxer joven del año</a>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Camadas ▾</span>
            <div className={styles.dropdown}>
              <a href="/camadas/preguntas">Preguntas frecuentes</a>
              <a href="/camadas/buscar">Encontrar Cachorro</a>
              <a href="/camadas/criadores">Criadores Oficiales</a>
              <a href="/camadas/montas">Servicios de Monta</a>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Tienda ▾</span>
            <div className={styles.dropdown}>
              <a href="/camadas/articulos">Artículos</a>
              <a href="/camadas/comidas">Comidas</a>
              <a href="/camadas/suplementos">Suplementos</a>
            </div>
          </div>

          <div className={styles.navGroup}>
            <span className={styles.navLabel}>Nosotros ▾</span>
            <div className={styles.dropdown}>
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

      {/* CUADROS DESTACADOS (PREPARADOS PARA HACERSE DINÁMICOS DESPUÉS) */}
      <main className={styles.infoGrid}>
        <div className={styles.card}>
          <div className={styles.cardBadge}>Ranking KCP</div>
          {/* AGREGAMOS LA IMAGEN AQUÍ */}
          <img src="/ranking.jpg" alt="Ranking Boxer" className={styles.cardImage} />
          <h4>Ejemplares del Año</h4>
          <p>Conoce a los máximos exponentes de la raza en las categorías Macho, Hembra y Joven del Año según el puntaje oficial.</p>
          <a href="/eventos/ranking" className={styles.cardLink}>Ver Ganadores →</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Crianza Responsable</div>
          {/* AGREGAMOS LA IMAGEN AQUÍ */}
          <img src="/camadas.jpg" alt="Camadas Boxer" className={styles.cardImage} />
          <h4>Próximas Camadas</h4>
          <p>¿Buscas un cachorro? Accede de manera segura a criadores certificados que priorizan la salud y el temperamento.</p>
          <a href="/camadas/buscar" className={styles.cardLink}>Buscar Cachorro →</a>
        </div>

        <div className={styles.card}>
          <div className={styles.cardBadge}>Comunidad</div>
          {/* AGREGAMOS LA IMAGEN AQUÍ */}
          <img src="/actividades.jpg" alt="Actividades Boxer" className={styles.cardImage} />
          <h4>Calendario de Actividades</h4>
          <p>Entérate de nuestras próximas caminatas grupales, encuentros de socialización y competencias de agilidad en Lima.</p>
          <a href="/actividades/calendario" className={styles.cardLink}>Ver Fechas →</a>
        </div>
      </main>

      {/* PIE DE PÁGINA (FOOTER) */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Bóxer Club del Perú. Diseñado con orgullo en Perú.</p>
        <p className={styles.footerNote}>Sede Informativa - Consejo Directivo</p>
      </footer>

    </div>
  );
}