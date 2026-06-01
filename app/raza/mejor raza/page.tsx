"use client";

import React from 'react';
import styles from '../../principal.module.css';

export default function MejorRazaPage() {
  return (
    <main className={styles.container}>
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>La Mejor Raza del Mundo</h3>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a059', margin: '10px auto 20px' }}></div>
          <p>
            ¿Por qué quienes tienen un Bóxer jamás cambian de raza? Descubre las virtudes que lo convierten 
            en el compañero ideal de vida.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        <div className={styles.infoGrid}>
          
          {/* VIRTUD 1 */}
          <div className={styles.card} style={{ textAlign: 'left', padding: '25px' }}>
            <div style={{ fontSize: '1.8rem', color: '#c5a059', marginBottom: '10px' }}>♥</div>
            <h4 style={{ color: '#4a0404', marginTop: 0 }}>El Eterno Cachorro</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
              El Bóxer destaca por su temperamento alegre y juguetón. Conserva su energía y espíritu joven durante casi toda su vida adulta, trayendo un dinamismo inigualable al hogar.
            </p>
          </div>

          {/* VIRTUD 2 */}
          <div className={styles.card} style={{ textAlign: 'left', padding: '25px' }}>
            <div style={{ fontSize: '1.8rem', color: '#4a0404', marginBottom: '10px' }}>🛡️</div>
            <h4 style={{ color: '#4a0404', marginTop: 0 }}>Guardián por Instinto</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Es inofensivo con su entorno familiar pero desconfiado y firme ante extraños. Su valor e intrepidez para defender a los suyos son legendarios, actuando siempre con discernimiento equilibrado.
            </p>
          </div>

          {/* VIRTUD 3 */}
          <div className={styles.card} style={{ textAlign: 'left', padding: '25px' }}>
            <div style={{ fontSize: '1.8rem', color: '#c5a059', marginBottom: '10px' }}>👶</div>
            <h4 style={{ color: '#4a0404', marginTop: 0 }}>Devoción por los Niños</h4>
            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6' }}>
              Es reconocido mundialmente como una de las mejores razas para convivir con infantes. Su paciencia, apego y sentido de protección hacia los niños del núcleo familiar lo hacen único.
            </p>
          </div>
          
        </div>

        <div style={{ marginTop: '5px', padding: '30px', backgroundColor: '#4a0404', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>
          <h4 style={{ color: '#c5a059', marginTop: 0 }}>Un Vínculo para Toda la Vida</h4>
          <p style={{ fontSize: '0.95rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            "El Bóxer no es solo un perro, es un miembro más de la familia que se mimetiza con tus emociones. Su mirada expresiva 
            y su limpia devoción demuestran una nobleza difícil de equiparar."
          </p>
        </div>
      </section>
    </main>
  );
}