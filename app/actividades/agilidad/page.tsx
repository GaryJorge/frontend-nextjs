"use client";

import React from 'react';
import styles from '../../principal.module.css';

export default function AgilidadPage() {
  return (
    <main className={styles.container}>
      {/* ENCABEZADO DE LA SECCIÓN */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>El Bóxer en el Deporte de Agilidad (Agility)</h3>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a059', margin: '10px auto 20px' }}></div>
          <p>
            Análisis deportivo y técnico sobre la versatilidad del Bóxer en las pistas de obstáculos, 
            basado en los estándares del American Boxer Club y regulado localmente en el Perú.
          </p>
        </div>
      </section>

      {/* CONTENIDO TÉCNICO EXTENSO */}
      <section style={{ maxWidth: '950px', margin: '0 auto 80px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif', color: '#333' }}>
        
        {/* INTRODUCCIÓN GENERAL AL DEPORTE */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>Un Atleta por Naturaleza</h4>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
            El "Agility" es un deporte canino dinámico y de ritmo rápido en el que un guía dirige a un perro sin correa a través de una carrera de obstáculos contrarreloj y con un orden preestablecido. El circuito incluye saltos de vallas, túneles rígidos y colapsables, pasarelas, empalizadas (A-frame), balancines, neumáticos y los exigentes postes de eslalon (weave poles).
          </p>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
            Para el Bóxer, esta disciplina no es solo un pasatiempo; es una canalización perfecta de sus rasgos genéticos históricos. Su anatomía corta, compacta y de musculatura plásticamente sobresaliente le permite realizar giros cerrados a altas velocidades, mientras que su agudeza mental responde de inmediato a los comandos de voz y lenguaje corporal de su binomio (guía).
          </p>
        </article>

        {/* REQUISITOS FÍSICOS Y EDAD DE INICIO */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #c5a059', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>Acondicionamiento Seguro y Edades de Crecimiento</h4>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
            El American Boxer Club enfatiza que la seguridad del perro es la prioridad absoluta. Debido al impacto que los saltos repetitivos y las zonas de contacto ejercen sobre los cartílagos, las reglas oficiales de competencia exigen una edad mínima para participar de manera competitiva.
          </p>
          <ul style={{ lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '10px' }}>
              <strong>Entrenamiento Temprano (Cachorros):</strong> Antes de los 12 a 15 meses de edad, el entrenamiento debe enfocarse estrictamente en la obediencia base, socialización en pista, el paso por túneles planos y el paso de postes de eslalon de forma muy suave. Las vallas deben colocarse al ras del suelo o retirarse por completo para evitar microtraumatismos en las placas de crecimiento óseo.
            </li>
            <li style={{ marginBottom: '10px' }}>
              <strong>Evaluación de Salud Previa:</strong> Antes de someter a un Bóxer a un entrenamiento intenso de Agility, se recomienda validar de forma estricta sus radiografías oficiales de cadera y exámenes cardíacos. Un perro con soplos o displasia severa no debe realizar este tipo de esfuerzos de alto impacto.
            </li>
          </ul>
        </article>

        {/* CATEGORÍAS Y TÍTULOS OFICIALES */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>Estructura de Clases y Títulos de Competencia</h4>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
            Siguiendo los lineamientos internacionales, las competencias se dividen en niveles de dificultad creciente y categorías basadas en la altura a la cruz del ejemplar. El Bóxer compite habitualmente en las categorías de talla más alta debido a su morfología física.
          </p>

          <h5 style={{ color: '#c5a059', marginBottom: '5px', fontSize: '1.1rem' }}>Niveles de Dificultad Regular:</h5>
          <ol style={{ lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '20px', marginTop: '5px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Novicio (Novice):</strong> Diseñado para perros que inician en la competición. El circuito cuenta con menos obstáculos (generalmente entre 14 y 16) y los giros son más amplios y directos.</li>
            <li style={{ marginBottom: '8px' }}><strong>Abierto / Intermedio (Open):</strong> El circuito se torna más complejo, requiriendo mayor control a distancia. Cuenta con entre 16 y 18 obstáculos con trampas visuales y cambios de trayectoria oblicuos.</li>
            <li style={{ marginBottom: '8px' }}><strong>Excelente y Maestro (Excellent / Master):</strong> El estándar de oro del deporte. Circuitos técnicos de hasta 20 obstáculos donde se evalúa la velocidad pura, la precisión milimétrica y la sincronización total del binomio.</li>
          </ol>

          <h5 style={{ color: '#c5a059', marginBottom: '5px', fontSize: '1.1rem', marginTop: '20px' }}>Variantes de Pista Especiales:</h5>
          <p style={{ lineHeight: '1.7', fontSize: '0.95rem', marginTop: 0 }}>
            Además de las clases estándar, existen modalidades como **Jumpers con Tejedores (FAST / Time 2 Beat)**, circuitos de velocidad pura enfocados en saltos y túneles donde se eliminan las rampas de contacto para evaluar la fluidez rítmica del perro.
          </p>
        </article>

        {/* CONTEXTO PERUANO (KCP) */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #c5a059', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>🇵🇪 Práctica y Regulación del Agility en el Perú</h4>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
            En el ámbito de la cinofilia peruana, las pruebas oficiales de Agility están reguladas e inspeccionadas por la <strong>Comisión de Agility del Kennel Club Peruano (KCP)</strong>, bajo la normativa de la Federation Cynologique Internationale (FCI). 
          </p>
          <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
            Para que un Bóxer pueda competir en los rankings nacionales oficiales en el Perú, debe contar con su CPR (Certificado de Pureza Racial) o Pedigree oficial emitido por el KCP. Las competencias dividen a los perros en tres tallas (Small, Medium y Large); el Bóxer encaja de forma unánime en la categoría <strong>Large (Grande)</strong>, saltando vallas con alturas oficiales estipuladas entre los 55 y 60 centímetros.
          </p>
          <div style={{ backgroundColor: '#fdfaf4', padding: '15px', border: '1px dashed #c5a059', borderRadius: '4px', fontSize: '0.9rem', color: '#444', marginTop: '15px' }}>
            <strong>Requisito Técnico Local:</strong> Antes de debutar en las canchas peruanas en Grado 1, el binomio debe aprobar un examen básico previo de temperamento y control social, asegurando que el ejemplar es equilibrado y seguro tanto dentro como fuera de la pista de obstáculos.
          </div>
        </article>

        {/* LLAMADO A LA ACCIÓN / INSCRIPCIÓN */}
        <div style={{ padding: '30px', backgroundColor: '#4a0404', color: '#fff', borderRadius: '4px', textAlign: 'center' }}>
          <h4 style={{ color: '#c5a059', marginTop: 0, marginBottom: '10px' }}>¿Deseas iniciar a tu Bóxer en Agility?</h4>
          <p style={{ fontSize: '0.95rem', maxWidth: '750px', margin: '0 auto 20px auto', lineHeight: '1.6' }}>
            El Bóxer Club del Perú fomenta la participación de sus socios en las escuelas de entrenamiento aliadas de la capital y provincias. Fortalece el vínculo con tu compañero mediante el deporte de manera lúdica y segura.
          </p>
          <a 
            href="/nosotros/contactanos" 
            className={styles.btnGold}
            style={{ textDecoration: 'none', display: 'inline-block', fontWeight: 'bold' }}
          >
            Solicitar Información de Escuelas Aliadas
          </a>
        </div>

      </section>
    </main>
  );
}