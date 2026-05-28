"use client";

import React from 'react';
// Importamos el estilo global desde la raíz
import styles from '../../principal.module.css';

// Estructura de datos preparada para ser dinámica en el futuro
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
    imagen: "https://placehold.co/600x400?text=Foto+Camada+Boxer", // Reemplazar por fotos reales en /public
    contacto: "https://wa.me/51999999999"
  },
  {
    id: 2,
    titulo: "Camada 'B' del Imperio Guinda",
    criador: "Criadero Gran Bóxer (Arequipa)",
    afijo: "Afijo KCP Nº 8832",
    fechaNacimiento: "Esperada: Junio 2026",
    estado: "proxima",
    padre: "Baco de Crianza Real",
    madre: "Luna del Rímac",
    disponibilidad: "Reservas abiertas",
    imagen: "https://placehold.co/600x400?text=Proxima+Camada",
    contacto: "https://wa.me/51988888888"
  }
];

export default function BuscarCachorroPage() {
  return (
    <main className={styles.container}>
      {/* TÍTULO DE LA SECCIÓN */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Encontrar Cachorro</h3>
          <div style={{ 
            width: '60px', 
            height: '3px', 
            backgroundColor: '#c5a059', 
            margin: '10px auto 20px' 
          }}></div>
          <p>
            Listado oficial de camadas nacidas y registradas. 
            Todas las camadas aquí publicadas cumplen con los requisitos del Club y el KCP.
          </p>
        </div>
      </section>

      {/* GRILLA DE CAMADAS REUTILIZANDO LAS CARDS DEL HOME */}
      <div className={styles.infoGrid}>
        {CAMADAS_DATA.map((camada) => (
          <article key={camada.id} className={styles.card}>
            {/* Badge dinámico según el estado */}
            <div className={styles.cardBadge} style={{ 
              backgroundColor: camada.estado === 'disponible' ? '#2e7d32' : '#c5a059' 
            }}>
              {camada.estado === 'disponible' ? '¡Nacidos!' : 'Próxima Monta'}
            </div>

            <img 
              src={camada.imagen} 
              alt={camada.titulo} 
              className={styles.cardImage} 
            />

            <div style={{ padding: '0 5px' }}>
              <span style={{ 
                fontSize: '0.7rem', 
                color: '#c5a059', 
                fontWeight: 'bold', 
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {camada.criador} • {camada.afijo}
              </span>
              
              <h4 style={{ marginTop: '5px' }}>{camada.titulo}</h4>
              
              {/* Bloque de Genealogía */}
              <div style={{ 
                backgroundColor: '#f9f9f9', 
                padding: '12px', 
                fontSize: '0.85rem', 
                margin: '15px 0',
                borderLeft: '3px solid #4a0404'
              }}>
                <p style={{ margin: '3px 0' }}><strong>Padre:</strong> {camada.padre}</p>
                <p style={{ margin: '3px 0' }}><strong>Madre:</strong> {camada.madre}</p>
              </div>

              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                <strong>Fecha:</strong> {camada.fechaNacimiento}<br />
                <strong>Disponibles:</strong> <span style={{ color: '#4a0404', fontWeight: 'bold' }}>{camada.disponibilidad}</span>
              </p>

              <a 
                href={camada.contacto} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnGold}
                style={{ 
                  display: 'block', 
                  textAlign: 'center', 
                  marginTop: '20px',
                  textDecoration: 'none'
                }}
              >
                Solicitar Información
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* AVISO DE SEGURIDAD */}
      <section style={{ 
        padding: '40px 10%', 
        textAlign: 'center', 
        backgroundColor: '#f4f4f4',
        marginTop: '40px',
        fontSize: '0.85rem',
        color: '#777'
      }}>
        <p>
          El Bóxer Club del Perú recomienda siempre visitar al criador y conocer a los padres 
          antes de adquirir un cachorro. No realice depósitos sin verificar la autenticidad del afijo.
        </p>
      </section>
    </main>
  );
}