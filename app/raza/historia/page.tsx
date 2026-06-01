"use client";

import React from 'react';
import styles from '../../principal.module.css';

export default function HistoriaPage() {
  return (
    <main className={styles.container}>
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Historia de la Raza</h3>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a059', margin: '10px auto 20px' }}></div>
          <p>
            El antepasado inmediato del Bóxer fue el Pequeño Bullenbeisser (mordedor de toros), una raza de perros de caza 
            empleada en la Alemania medieval y del siglo XIX.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto 60px auto', padding: '0 20px', color: '#444', lineHeight: '1.8' }}>
        <div style={{ marginBottom: '30px' }}>
          <h4 style={{ color: '#4a0404', fontSize: '1.2rem' }}>Los Orígenes: El Bullenbeisser</h4>
          <p>
            Los Bullenbeisser eran perros criados por cazadores para sujetar firmemente las presas salvajes (como jabalíes, osos o toros) 
            que habían sido acorraladas por los sabuesos, hasta que el cazador llegaba y terminaba la faena. Para este trabajo, el perro 
            necesitaba una boca ancha con una alineación de dientes fuerte que le permitiera morder firmemente y seguir respirando al mismo tiempo.
          </p>
        </div>

        <div style={{ borderLeft: '3px solid #c5a059', paddingLeft: '20px', margin: '40px 0', backgroundColor: '#fdfaf4', padding: '20px' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.1rem' }}>1895: El Nacimiento Moderno</h4>
          <p style={{ margin: 0, fontSize: '0.95rem' }}>
            A finales del siglo XIX, con la modernización y el fin de las grandes cacerías señoriales, el Bullenbeisser se cruzó con razas de tipo 
            Bulldog inglés para adaptarse a nuevas tareas de pastoreo y guardia urbana. En 1895 se fundó en Múnich el primer Club del Bóxer (Deutscher Boxer Club), 
            fijando las bases de la raza que conocemos hoy en día.
          </p>
        </div>

        <div>
          <h4 style={{ color: '#4a0404', fontSize: '1.2rem' }}>Evolución Universal</h4>
          <p>
            Durante la Primera y Segunda Guerra Mundial, el Bóxer demostró capacidades excepcionales como perro militar, mensajero y de salvamento, 
            lo que atrajo las miradas de entusiastas de todo el mundo. Su inteligencia y lealtad inquebrantables consolidaron su transición de perro 
            de trabajo rudo a uno de los guardianes familiares más valorados del planeta.
          </p>
        </div>
      </section>
    </main>
  );
}