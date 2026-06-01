"use client";

import React from 'react';
import styles from '../../principal.module.css';

export default function CuidadosPage() {
  return (
    <main className={styles.container}>
      {/* ENCABEZADO DE LA SECCIÓN */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Cuidado Integral del Bóxer</h3>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a059', margin: '10px auto 20px' }}></div>
          <p>
            El Bóxer es un atleta de élite con necesidades biológicas muy específicas. 
            Esta guía recopila los pilares de manejo recomendados por los clubes oficiales del mundo, 
            adaptados a nuestro contexto geográfico y climático en el Perú.
          </p>
        </div>
      </section>

      {/* CONTENIDO TÉCNICO EXTENDIDO */}
      <section style={{ maxWidth: '950px', margin: '0 auto 80px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
        
        {/* BLOQUE 1: ALIMENTACIÓN Y PREVENCION DE TORSION DE ESTÓMAGO */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>1. Nutrición Avanzada y Prevención de Torsión Gástrica (GDV)</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            Debido a su pecho ancho y profundo, el Bóxer tiene una predisposición anatómica crítica a sufrir el **Síndrome de Dilatación-Torsión Gástrica**. Esto ocurre cuando el estómago se llena de gas o líquido y posteriormente rota sobre su propio eje, estrangulando el riego sanguíneo y convirtiéndose en una emergencia médica mortal en cuestión de horas.
          </p>
          
          <h5 style={{ color: '#c5a059', marginBottom: '5px', fontSize: '1.05rem' }}>Protocolo de Alimentación en el Hogar:</h5>
          <ul style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '20px', marginTop: '5px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Fraccionar las raciones:</strong> Divida la cantidad diaria de comida en al menos 2 o 3 porciones al día. Jamás le dé una sola toma abundante.</li>
            <li style={{ marginBottom: '8px' }}><strong>Reposo obligatorio:</strong> Prohíba terminantemente cualquier ejercicio físico extenuante, carreras, caminatas o ingesta masiva de agua una hora antes y dos horas después de comer.</li>
            <li style={{ marginBottom: '8px' }}><strong>Calidad del alimento:</strong> Utilice balanceados de alta gama (Super Premium) con fuentes de proteína animal altamente digestibles como primer ingrediente para evitar fermentaciones excesivas en el tracto digestivo.</li>
          </ul>
        </article>

        {/* BLOQUE 2: SÍNDROME BRAQUICEFÁLICO Y EL CLIMA EN PERÚ */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #c5a059', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>2. Manejo Clínico de su Condición Braquicefálica frente al Clima Peruano</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            La morfología del cráneo del Bóxer implica que sus vías respiratorias superiores son más cortas que las de otras razas. Esto limita la eficiencia de su jadeo, el cual es el mecanismo principal que tienen los perros para regular su temperatura corporal. Por lo tanto, el Bóxer tolera muy mal el calor extremo y la humedad alta.
          </p>

          <h5 style={{ color: '#4a0404', marginBottom: '5px', fontSize: '1.05rem' }}>🇵🇪 Adaptación al Entorno Local:</h5>
          <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginTop: 0 }}>
            En ciudades con alta humedad y picos calóricos como Lima, Piura o de la selva peruana, el riesgo de **Golpe de Calor** es una constante en verano. Los paseos deben realizarse estrictamente en las primeras horas de la mañana (antes de las 7:00 AM) o durante la noche. 
          </p>
          <div style={{ backgroundColor: '#fdfaf4', padding: '15px', border: '1px dashed #c5a059', borderRadius: '4px', marginTop: '15px', fontSize: '0.9rem', color: '#444' }}>
            <strong>Alerta de Emergencia:</strong> Si nota un jadeo excesivamente ruidoso, espuma espesa en el hocico, mucosas de las encías de un color rojo brillante o tambaleo, mueva al perro inmediatamente a la sombra, refresque su cuello y axilas con agua templada (nunca helada) y acuda urgentemente a una clínica veterinaria las 24 horas.
          </div>
        </article>

        {/* BLOQUE 3: ENTRENAMIENTO FÍSICO Y EJERCICIO METÓDICO */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>3. Acondicionamiento Físico y Salud Mental</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            El American Boxer Club recalca que un Bóxer aburrido es un Bóxer destructivo. Al ser perros de trabajo, demandan estimulación mental diaria combinada con ejercicio aeróbico regular para canalizar su temperamento desbordante de manera equilibrada.
          </p>

          <h5 style={{ color: '#c5a059', marginBottom: '5px', fontSize: '1.05rem' }}>Pautas de Ejercicio:</h5>
          <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginTop: 0 }}>
            Durante la etapa de cachorro y hasta que las placas de crecimiento óseo se cierren (aproximadamente a los 15-18 meses), evite saltos de gran altura o carreras en superficies duras como el asfalto para proteger sus articulaciones del desarrollo de displasia. Una vez adulto, es un compañero ideal para caminatas dinámicas, sesiones de cobro de pelota en áreas verdes y entrenamiento de obediencia básica estructurada.
          </p>
        </article>

        {/* BLOQUE 4: HIGIENE, PIEL Y ONICOTOMÍA */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #c5a059', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>4. Cuidado de la Capa (Pelo) e Higiene Dermatológica</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            Su pelaje corto, liso y pegado al cuerpo requiere un mantenimiento relativamente bajo, pero su piel es propensa a dermatitis alérgicas o atopías si no se maneja correctamente.
          </p>
          <ul style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', paddingLeft: '20px', marginTop: '5px' }}>
            <li style={{ marginBottom: '8px' }}><strong>Cepillado Semanal:</strong> El uso de una manopla de goma o cepillo de cerdas blandas una vez por semana es suficiente para remover el pelo muerto y distribuir los aceites naturales de la dermis.</li>
            <li style={{ marginBottom: '8px' }}><strong>Higiene de Arrugas:</strong> Los pliegues del hocico acumulan saliva y residuos de comida. Deben limpiarse de forma periódica con gasas húmedas no alcohólicas y secarse a la perfección para prevenir la proliferación de hongos (malassezia).</li>
            <li style={{ marginBottom: '8px' }}><strong>Uñas Cortas:</strong> Sus pies de gato requieren que las uñas se mantengan cortas. Si las uñas chocan contra el suelo al caminar, modifican la postura natural del pie, afectando los tendones y los aplomos del perro.</li>
          </ul>
        </article>

        {/* RECOMENDACIÓN INSTITUCIONAL */}
        <div style={{ padding: '25px', backgroundColor: '#f4f4f4', borderRadius: '4px', textAlign: 'center', fontSize: '0.9rem', color: '#555' }}>
          <p style={{ margin: 0 }}>
            <strong>Crianza Ética BCP:</strong> El bienestar integral de nuestros ejemplares depende del compromiso diario de sus familias. 
            Mantener al día el calendario de vacunaciones oficiales exigido en el Perú y realizar chequeos geriátricos a partir de los 6 años 
            permite prolongar la maravillosa vida de esta noble raza.
          </p>
        </div>

      </section>
    </main>
  );
}