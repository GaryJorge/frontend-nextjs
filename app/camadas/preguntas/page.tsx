"use client";

import React, { useState } from 'react';
// Importamos el CSS subiendo dos niveles desde la carpeta 'preguntas'
// Asegúrate de que el nombre coincida exactamente con tu archivo físico
import styles from '../../principal.module.css';

const FAQ_DATA = [
  {
    id: 1,
    pregunta: "¿Cómo registro una nueva camada en el Club?",
    respuesta: "Para registrar una camada, ambos padres deben tener su pedigree oficial del KCP y el criador debe presentar el certificado de monta y nacimiento dentro de los plazos establecidos."
  },
  {
    id: 2,
    pregunta: "¿Qué requisitos de salud se exigen para los reproductores?",
    respuesta: "El Bóxer Club del Perú recomienda pruebas de displasia de cadera y exámenes cardiológicos para asegurar la salud de las futuras generaciones."
  },
  {
    id: 3,
    pregunta: "¿El Club vende cachorros directamente?",
    respuesta: "No, el Club no vende ejemplares. Facilitamos el contacto entre criadores oficiales socios y posibles propietarios para fomentar la crianza ética."
  }
];

export default function PreguntasPage() {
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setAbierto(abierto === id ? null : id);
  };

  return (
    <div className={styles.container}>
      {/* Encabezado */}
      <header className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Preguntas Frecuentes</h3>
          <div style={{ 
            width: '60px', 
            height: '3px', 
            backgroundColor: '#c5a059', 
            margin: '0 auto 20px' 
          }}></div>
          <p>Resuelve tus dudas sobre la crianza, registros y adquisición de ejemplares Bóxer.</p>
        </div>
      </header>

      {/* Lista de Preguntas */}
      <main style={{ maxWidth: '800px', margin: '0 auto 60px auto', padding: '0 20px' }}>
        {FAQ_DATA.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              borderBottom: '1px solid #eee', 
              marginBottom: '10px',
              backgroundColor: '#fff' 
            }}
          >
            <button
              onClick={() => toggleFAQ(item.id)}
              style={{
                width: '100%',
                padding: '20px',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#4a0404', // Color guinda institucional
                fontSize: '1rem'
              }}
            >
              {item.pregunta}
              <span style={{ color: '#c5a059' }}>{abierto === item.id ? '−' : '+'}</span>
            </button>
            
            {abierto === item.id && (
              <div style={{ 
                padding: '0 20px 20px 20px', 
                color: '#666', 
                lineHeight: '1.6',
                fontSize: '0.95rem'
              }}>
                {item.respuesta}
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Footer Simple */}
      <footer className={styles.footer}>
        <p>¿Tienes más dudas? Contáctanos a través de nuestras redes oficiales.</p>
        <div className={styles.footerNote}>Bóxer Club del Perú</div>
      </footer>
    </div>
  );
}
