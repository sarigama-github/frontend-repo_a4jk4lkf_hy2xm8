import React from 'react'

const GOLD = '#D4AF37'

export default function Urgency() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ color: GOLD }}>Oferta por Tiempo Limitado</h2>
        <p className="text-white/90 mb-8">Estamos lanzando LaunchPro Latino a nivel nacional. Cupos limitados por día para garantizar entregas en 24 horas.</p>
        <a href="#contacto" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold" style={{ backgroundColor: GOLD, color: '#111' }}>
          Asegura tu cupo hoy
        </a>
      </div>
    </section>
  )
}
