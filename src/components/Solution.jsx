import React from 'react'

const GOLD = '#D4AF37'

const benefits = [
  'Logo profesional moderno',
  'Página web completa',
  'Formulario + WhatsApp conectado',
  'Conexión a Google Maps',
  'Automatización de mensajes',
  'En español',
  'Entrega lista en 24 horas',
]

export default function Solution() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: GOLD }}>La solución — LaunchPro Latino</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/[0.03]">
              <span className="mt-0.5" style={{ color: GOLD }}>✔</span>
              <span className="text-white/90">{b}</span>
            </div>
          ))}
        </div>
        <p className="text-white/90 mt-8">Con una presencia profesional, podrás cobrar más y cerrar trabajos más grandes.</p>
      </div>
    </section>
  )
}
