"use client";

import React, { useState } from 'react';
// Importación del CSS subiendo dos niveles (de preguntas -> camadas -> app)
import styles from '../../principal.module.css';

// Datos de las preguntas frecuentes (Fácil de editar o conectar a una API después)
const FAQ_DATA = [
  {
    id: 1,
    pregunta: "¿Cómo puedo registrar una camada ante el Club?",
    respuesta: "Para registrar una camada, ambos padres deben contar con su pedigree oficial emitido por el Kennel Club Peruano (KCP). El criador debe presentar el certificado de monta y nacimiento dentro de los plazos establecidos por el reglamento de crianza."
  },
  {
    id: 2,
    pregunta: "¿Qué requisitos de salud deben tener los padres?",
    respuesta: "El Bóxer Club del Perú promueve la crianza responsable. Se recomienda que los reproductores tengan placas de displasia de cadera con resultado 'A' o 'B' y exámenes cardiológicos (Ecocardiograma Doppler) para descartar estenosis aórtica o pulmonar."
  },
  {
    id: 3,
    pregunta: "¿A qué edad puedo separar un cachorro de su madre?",
    respuesta: "Por bienestar animal y una correcta socialización, los cachorros no deben ser entregados antes de las 8 o 9 semanas de vida. Para esa fecha, ya deben contar con su primera vacunación y desparasitación al día."
  },
  {
    id: 4,
    pregunta: "¿Cómo verifico si un criador es oficial?",
    respuesta: "Puede consultar nuestra sección de 'Criadores Oficiales' en este sitio web. Todos los criadores listados son socios activos que han registrado su afijo ante el KCP y se comprometen a seguir el código de ética del Club."
  },
  {
    id: 5,
    pregunta: "¿Qué documentos debo recibir al comprar un cachorro?",
    respuesta: "El criador debe entregarte el Certificado de Origen (Pedigree) o el documento de transferencia oficial firmado. Además, debe entregarte una cartilla de vacunación firmada por un médico veterinario colegiado."
  }
];

export default function PreguntasPage() {
  // Estado para controlar qué pregunta está abierta
  const [abierto, setAbierto] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setAbierto(abierto === id ? null : id);
  };

  return (
    <main className={styles.container}>
      {/* SECCIÓN DE ENCABEZADO */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Preguntas Frecuentes</h3>
          <div style={{ 
            width: '60px', 
            height: '3px', 
            backgroundColor: '#c5a059', 
            margin: '10px auto 20px' 
          }}></div>
          <p>
            Encuentra respuestas a las dudas más comunes sobre la raza, la adquisición de cachorros 
            y los trámites ante el Bóxer Club del Perú.
          </p>
        </div>
      </section>

      {/* CONTENEDOR DE PREGUNTAS (TIPO ACORDEÓN) */}
      <section style={{ maxWidth: '850px', margin: '0 auto 80px auto', padding: '0 20px' }}>
        {FAQ_DATA.map((item) => (
          <div 
            key={item.id} 
            style={{ 
              marginBottom: '15px', 
              border: '1px solid #eee', 
              borderRadius: '4px',
              overflow: 'hidden',
              backgroundColor: '#fff',
              boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
            }}
          >
            <button
              onClick={() => toggleFAQ(item.id)}
              style={{
                width: '100%',
                padding: '20px',
                textAlign: 'left',
                background: abierto === item.id ? '#fdfaf4' : 'white',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'background 0.3s ease'
              }}
            >
              <span style={{ 
                fontWeight: 'bold', 
                color: '#4a0404', 
                fontSize: '1rem',
                fontFamily: 'Arial, sans-serif'
              }}>
                {item.pregunta}
              </span>
              <span style={{ 
                color: '#c5a059', 
                fontSize: '1.4rem',
                fontWeight: 'bold'
              }}>
                {abierto === item.id ? '−' : '+'}
              </span>
            </button>
            
            {/* Respuesta animada/condicional */}
            {abierto === item.id && (
              <div style={{ 
                padding: '0 20px 20px 20px', 
                color: '#555', 
                lineHeight: '1.7',
                fontSize: '0.95rem',
                backgroundColor: '#fdfaf4',
                borderTop: '1px solid #f2ede4'
              }}>
                {item.respuesta}
              </div>
            )}
          </div>
        ))}

        {/* BOTÓN DE CONTACTO ADICIONAL */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '15px' }}>
            ¿No encontraste lo que buscabas?
          </p>
          <a 
            href="/nosotros/contactanos" 
            className={styles.btnGold}
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            Escríbenos directamente
          </a>
        </div>
      </section>
    </main>
  );
}