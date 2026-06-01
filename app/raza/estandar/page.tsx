"use client";

import React from 'react';
import styles from '../../principal.module.css';

export default function EstandarPage() {
  return (
    <main className={styles.container}>
      <section className={styles.welcomeSection}>
        <div className={styles.welcomeText}>
          <h3>Estándar Oficial de la Raza</h3>
          <div style={{ width: '60px', height: '3px', backgroundColor: '#c5a059', margin: '10px auto 20px' }}></div>
          <p>
            El Bóxer es un perro de tamaño mediano, de pelo liso, fuerte, con una estructura corta y cuadrada. 
            Su musculatura es delgada, fuertemente desarrollada y plásticamente sobresaliente.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: '900px', margin: '0 auto 60px auto', padding: '0 20px', fontFamily: 'Arial, sans-serif' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
          
          <div style={{ backgroundColor: '#fff', padding: '25px', borderLeft: '4px solid #4a0404', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#4a0404', marginTop: 0 }}>Proporciones Importantes</h4>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Estructura Cuadrada:</strong> El cuerpo, visto de perfil, es cuadrado; lo que significa que la línea horizontal del dorso es perpendicular a las líneas verticales que caen de la cruz y del isquión.
            </p>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>Profundidad de Pecho:</strong> El pecho llega hasta los codos. La profundidad del pecho corresponde a la mitad de la altura a la cruz.
            </p>
          </div>

          <div style={{ backgroundColor: '#fff', padding: '25px', borderLeft: '4px solid #c5a059', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
            <h4 style={{ color: '#4a0404', marginTop: 0 }}>La Cabeza (La característica más importante)</h4>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
              La cabeza le da al Bóxer su aspecto característico. Debe estar en perfecta proporción con el cuerpo, no debe parecer ni muy ligera ni muy pesada. 
            </p>
            <p style={{ color: '#555', fontSize: '0.95rem', lineHeight: '1.6' }}>
              <strong>El Hocico:</strong> Debe estar poderosamente desarrollado en sus tres dimensiones espaciales. No debe ser ni puntiagudo, ni estrecho, ni corto, ni plano. Su relación con el cráneo debe ser de 1:2.
            </p>
          </div>
        </div>

        <div style={{ backgroundColor: '#f9f9f9', padding: '30px', borderRadius: '4px', border: '1px solid #eee' }}>
          <h4 style={{ color: '#4a0404', textAlign: 'center', marginBottom: '20px' }}>Medidas y Pesos Oficiales</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #c5a059', color: '#4a0404' }}>
                <th style={{ padding: '10px' }}>Género</th>
                <th style={{ padding: '10px' }}>Altura a la cruz</th>
                <th style={{ padding: '10px' }}>Peso ideal</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Machos</td>
                <td style={{ padding: '12px' }}>Entre 57 y 63 cm</td>
                <td style={{ padding: '12px' }}>Mayor a 30 kg (aprox. 30-32 kg)</td>
              </tr>
              <tr>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>Hembras</td>
                <td style={{ padding: '12px' }}>Entre 53 y 59 cm</td>
                <td style={{ padding: '12px' }}>Aproximadamente 25 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}