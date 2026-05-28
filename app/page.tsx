"use client";

import React from 'react';
import styles from './principal.module.css';

export default function Home() {
  return (
    <>
      {/* SECCIÓN HERO (PORTADA) */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}>
          <h2>Pasión, Estructura y Temperamento</h2>
          <p>Descubre el estándar de excelencia del Bóxer en el Perú</p>
          <a href="/raza/estandar" className={styles.btnGold}>Ver Estándar Oficial</a>
        </div>
      </section>

      {/* SECCIÓN DE BIENVENIDA */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Bienvenidos al Bóxer Club del Perú</h3>
          <p>
            Somos una comunidad organizada de criadores, propietarios y entusiastas de la raza Bóxer en el Perú. 
            Nuestro objetivo fundamental es guiar a los futuros dueños hacia una crianza responsable y ética, 
            asegurando el bienestar de nuestros ejemplares.
          </p>
        </div>
      </section>

      {/* GRILLA DE INFORMACIÓN (CARDS) */}
      <main className={styles.infoGrid}>
        {/* CARD 1: RANKING */}
        <div className={styles.card}>
          <div className={styles.cardBadge}>Ranking KCP</div>
          <img src="/ranking.jpg" alt="Ranking de ejemplares" className={styles.cardImage} />
          <h4>Ejemplares del Año</h4>
          <p>Conoce a los máximos exponentes de la raza en nuestras pistas.</p>
          <a href="/eventos/ranking" className={styles.cardLink}>Ver Ganadores →</a>
        </div>

        {/* CARD 2: CAMADAS */}
        <div className={styles.card}>
          <div className={styles.cardBadge}>Crianza Responsable</div>
          <img src="/camadas.jpg" alt="Camadas oficiales" className={styles.cardImage} />
          <h4>Próximas Camadas</h4>
          <p>Accede de manera segura a criadores certificados y registrados.</p>
          <a href="/camadas/buscar" className={styles.cardLink}>Buscar Cachorro →</a>
        </div>

        {/* CARD 3: COMUNIDAD */}
        <div className={styles.card}>
          <div className={styles.cardBadge}>Comunidad</div>
          <img src="/actividades.jpg" alt="Actividades del club" className={styles.cardImage} />
          <h4>Calendario</h4>
          <p>Entérate de nuestras próximas caminatas, encuentros y charlas.</p>
          <a href="/actividades/calendario" className={styles.cardLink}>Ver Fechas →</a>
        </div>
      </main>
    </>
  );
}