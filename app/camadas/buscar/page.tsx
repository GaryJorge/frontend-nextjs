"use client";

import React from 'react';
// Importamos el CSS subiendo dos niveles desde la carpeta 'buscar'
import styles from '../../principal.module.css';

// Estructura de datos preparada para ser reemplazada por una API en el futuro
const CAMADAS_DATA = [
  {
    id: 1,
    titulo: "Camada 'A' de Villa del Bóxer",
    criador: "Villa del Bóxer (Lima)",
    afijo: "Afijo KCP Nº 4521",
    fechaNacimiento: "15/05/2026",
    estado: "disponible",
    padre: "Ch. Multi. BIS Jano de los Morritos",
    madre: "Kira de la Altiplanicie",
    disponibilidad: "2 Machos / 3 Hembras",
    imagen: "https://placehold.co/600x400?text=Foto+Camada", 
    contacto: "https://wa.me/51999999999"
  }
];

export default function BuscarCachorroPage() {
  return (
    <div className={styles.container}>
      {/* Encabezado de la Sección */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Encontrar Cachorro</h3>
          <div style={{ 
            width: '60px', 
            height: '3px', 
            backgroundColor: '#c5a059', 
            margin: '0 auto 20px' 
          }}></div>
          <p>
            Listado oficial de camadas nacidas y registradas ante el Kennel Club Peruano. 
            Fomentamos la crianza responsable y ética.
          </p>
        </div>
      </section>

      {/* Grilla de Camadas - Reutilizando clases de tu archivo CSS principal */}
      <main className={styles.infoGrid}>
        {CAMADAS_DATA.map((camada) => (
          <article key={camada.id} className={styles.card}>
            {/* Badge de estado (Usando el color dorado de tu CSS) */}
            <span className={styles.cardBadge}>
              {camada.estado === 'disponible' ? '¡Nacidos!' : 'Próximamente'}
            </span>

            <img 
              src={camada.imagen} 
              alt={camada.titulo} 
              className={styles.cardImage} 
            />

            <div style={{ marginBottom: '15px' }}>
              <span style={{ 
                fontSize: '0.75rem', 
                color: '#c5a059', 
                fontWeight: 'bold', 
                textTransform: 'uppercase' 
              }}>
                {camada.criador}
              </span>
              <h4>{camada.titulo}</h4>
            </div>

            <div style={{ 
              backgroundColor: '#f9f9f9', 
              padding: '10px', 
              fontSize: '0.9rem', 
              marginBottom: '15px',
              borderLeft: '3px solid #c5a059'
            }}>
              <p style={{ margin: '5px 0' }}><strong>Padre:</strong> {camada.padre}</p>
              <p style={{ margin: '5px 0' }}><strong>Madre:</strong> {camada.madre}</p>
            </div>

            <p className={styles.cardP}>
              <strong>Fecha Nacimiento:</strong> {camada.fechaNacimiento}<br />
              <strong>Disponibles:</strong> {camada.disponibilidad}
            </p>

            <a 
              href={camada.contacto} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.btnGold}
              style={{ display: 'block', textAlign: 'center', marginTop: '10px' }}
            >
              Contactar Criador
            </a>
          </article>
        ))}
      </main>

      {/* Nota Institucional Inferior */}
      <footer className={styles.footer} style={{ borderTop: '1px solid #333' }}>
        <p>
          Recuerde que el Bóxer Club del Perú no vende perros directamente. 
          Cada criador es responsable de la salud y garantías de sus ejemplares.
        </p>
        <div className={styles.footerNote}>Afiliado al Kennel Club Peruano (KCP)</div>
      </footer>
    </div>
  );
}