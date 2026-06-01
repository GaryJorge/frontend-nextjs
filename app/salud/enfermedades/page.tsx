"use client";

import React from 'react';
import styles from '../../principal.module.css';

export default function EnfermedadesPage() {
  return (
    <main className={styles.container}>
      {/* ENCABEZADO DE LA SECCIÓN */}
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Salud: Enfermedades Comunes y Protocolos</h3>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a059', margin: '10px auto 20px' }}></div>
          <p>
            Guía técnica extendida sobre el diagnóstico y prevención de las afecciones más relevantes del Bóxer, 
            bajo el marco regulatorio de crianza selectiva en el Perú.
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL EXTRA EXTENSO */}
      <section style={{ maxWidth: '950px', margin: '0 auto 80px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
        
        {/* SECCIÓN 1: DISPLASIA DE CADERA */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>1. Displasia de Cadera (HD - Hip Dysplasia)</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            La displasia de cadera es una enfermedad del desarrollo de naturaleza multifactorial y origen poligénico. Se caracteriza por una incongruencia biomecánica entre la cabeza del fémur y el acetábulo de la pelvis. Esta inestabilidad articular genera un desgaste acelerado del cartílago, microfracturas subcondrales y el desarrollo de osteoartrosis crónica dolorosa. 
          </p>
          
          <h5 style={{ color: '#c5a059', marginBottom: '5px', fontSize: '1.05rem' }}>Síntomas y Evolución Clínica:</h5>
          <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginTop: 0 }}>
            Durante la etapa de crecimiento rápido (entre los 4 y 9 meses), los cachorros afectados pueden presentar cojera intermitente, dificultad notable para levantarse del reposo, fatiga inusual tras el ejercicio moderado y un andar característico "en salto de conejo" donde mueven ambas extremidades posteriores en simultáneo. En adultos, evoluciona hacia una pérdida evidente de masa muscular (atrofia) en los cuartos traseros y rigidez articular severa en climas fríos.
          </p>

          <div style={{ backgroundColor: '#fdfaf4', padding: '20px', border: '1px dashed #c5a059', borderRadius: '4px', marginTop: '20px' }}>
            <h5 style={{ color: '#4a0404', marginTop: 0, fontSize: '1rem', fontWeight: 'bold' }}>
              🇵🇪 Protocolo de Prevención Obligatorio en el Perú:
            </h5>
            <p style={{ color: '#444', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Siguiendo las directrices del <strong>Kennel Club Peruano (KCP)</strong> y la FCI, el descarte oficial no se puede certificar antes de los 12 meses de edad. En el Perú, el propietario debe gestionar el trámite ante el KCP para obtener el formato oficial de Displasia Coxofemoral y acudir obligatoriamente a la red de <strong>Médicos Veterinarios Comisionados Autorizados</strong> por la institución. Las radiografías se evalúan bajo sedación profunda en proyección ventrodorsal extendida. Solo los ejemplares con grados permisibles (A, B y en ciertos casos evaluados C) obtienen el Certificado de Apto para Cría.
            </p>
          </div>
        </article>

        {/* SECCIÓN 2: ESPONDILOSIS DEFORMANTE */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #c5a059', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>2. Espondilosis Deformante</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            La espondilosis es una patología ósea de carácter degenerativo que ataca directamente a la columna vertebral. El proceso patológico inicia con la degeneración de los discos intervertebrales, lo que estimula la proliferación de nuevo tejido óseo (osteofitos) en los bordes de los cuerpos vertebrales. Con el avance de la edad, estas excrecencias forman "puentes óseos" continuos que unen mecánicamente una vértebra con otra.
          </p>

          <h5 style={{ color: '#4a0404', marginBottom: '5px', fontSize: '1.05rem' }}>Manifestaciones y Diagnóstico:</h5>
          <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', marginTop: 0 }}>
            Aunque muchos Bóxers toleran la formación inicial de osteofitos sin mostrar signos clínicos obvios (asintomáticos), el peligro crítico radica en la pérdida de flexibilidad de la columna cervical y lumbosacra. En estadios avanzados, los puentes óseos pueden fisurarse o ejercer presión mecánica directa sobre las raíces nerviosas de la médula espinal, provocando episodios de dolor agudo, debilidad propioceptiva (incoordinación al andar) e incluso renuencia total a realizar actividades simples como subir escaleras o subirse al automóvil.
          </p>

          <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderLeft: '3px solid #4a0404', marginTop: '20px' }}>
            <h5 style={{ color: '#4a0404', marginTop: 0, fontSize: '1rem', fontWeight: 'bold' }}>
              Criterio de Crianza Responsable:
            </h5>
            <p style={{ color: '#444', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              El diagnóstico definitivo se efectúa mediante estudios radiológicos digitales en proyección lateral de toda la columna vertebral. En la cinofilia peruana, los criadores experimentados realizan este tamizaje de forma paralela al descarte de cadera para catalogar el grado de espondilosis de las líneas reproductoras, evitando combinar ejemplares con alta predisposición de puentes prematuros para preservar la funcionalidad anatómica de la descendencia.
            </p>
          </div>
        </article>

        {/* SECCIÓN 3: CARDIOPATÍAS */}
        <article style={{ backgroundColor: '#fff', padding: '35px', marginBottom: '40px', borderRadius: '4px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <h4 style={{ color: '#4a0404', marginTop: 0, fontSize: '1.4rem' }}>3. Cardiopatías Congénitas y Hereditarias</h4>
          <p style={{ color: '#444', lineHeight: '1.8', fontSize: '0.95rem' }}>
            El Bóxer presenta una predisposición racial muy documentada a nivel mundial por los principales organismos (como el American Boxer Club) hacia patologías cardíacas específicas de carácter estructural y eléctrico:
          </p>

          <div style={{ paddingLeft: '15px', marginBottom: '25px' }}>
            <h5 style={{ color: '#4a0404', margin: '15px 0 5px 0', fontSize: '1.1rem' }}>• Estenosis Aórtica Subvalvular (SAS)</h5>
            <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
              Consiste en la presencia de un anillo de tejido fibroso justo debajo de la válvula aórtica que obstruye el flujo normal de sangre oxigenada desde el ventrículo izquierdo hacia la arteria aorta. Esta barrera física obliga al ventrículo a generar presiones muy elevadas para vencer la resistencia, desencadenando una hipertrofia concéntrica del miocardio, isquemia y riesgo elevado de síncope o muerte súbita durante el juego intenso.
            </p>

            <h5 style={{ color: '#4a0404', margin: '25px 0 5px 0', fontSize: '1.1rem' }}>• Cardiomiopatía Arritmogénica del Bóxer (ARVC / BCM)</h5>
            <p style={{ color: '#555', lineHeight: '1.7', fontSize: '0.95rem', margin: 0 }}>
              Es una enfermedad miocárdica única caracterizada por el reemplazo progresivo de los miocitos (células musculares) del ventrículo derecho por tejido graso y fibroso. Este cambio altera de forma drástica la conducción eléctrica, manifestando arritmias ventriculares complejas. Se transmite de manera autosómica dominante con penetrancia variable.
            </p>
          </div>

          <div style={{ backgroundColor: '#fdfaf4', padding: '20px', border: '1px dashed #c5a059', borderRadius: '4px' }}>
            <h5 style={{ color: '#4a0404', marginTop: 0, fontSize: '1rem', fontWeight: 'bold' }}>
              🩺 Realidad del Control Cardiológico en el Ámbito Peruano:
            </h5>
            <p style={{ color: '#444', fontSize: '0.9rem', lineHeight: '1.6', margin: 0 }}>
              Para la prevención de la SAS y la ARVC, el examen clínico primario indispensable en el Perú es la auscultación rigurosa por parte de un especialista en cardiología veterinaria para detectar soplos sistólicos. No obstante, el estándar de excelencia para ejemplares reproductores de alta selección exige la realización de un <strong>Ecocardiograma Doppler Color</strong> (para medir la velocidad del flujo aórtico y descartar regurgitaciones) y el uso de estudios de monitoreo **Holter de 24 horas** para contabilizar contracciones ventriculares prematuras (CVP) antes de planificar un cruce.
            </p>
          </div>
        </article>

        {/* NOTA INSTITUCIONAL DE ADVERTENCIA */}
        <div style={{ padding: '30px', backgroundColor: '#f4f4f4', borderRadius: '4px', textAlign: 'center', fontSize: '0.9rem', color: '#555', lineHeight: '1.6' }}>
          <p style={{ margin: 0, fontWeight: 'bold', color: '#4a0404', marginBottom: '5px' }}>
            ADVERTENCIA SANITARIA OFICIAL
          </p>
          <p style={{ margin: 0 }}>
            <em>La cría indiscriminada sin exámenes de salud perpetúa el sufrimiento en la raza. Exija siempre ver los certificados oficiales 
            de control de displasia de caderas validados por el Kennel Club Peruano e informes cardiológicos emitidos por veterinarios especialistas 
            colegiados y habilitados en el Perú antes de adquirir un cachorro.</em>
          </p>
        </div>

      </section>
    </main>
  );
}