import React from 'react'

const GOLD = '#D4AF37'

const items = [
  { title: 'Carpintero de Florida', quote: '“Ahora me contactan clientes todos los días por WhatsApp.”' },
  { title: 'Pintor de Texas', quote: '“Cerré 3 trabajos grandes la primera semana.”' },
  { title: 'Remodelador de Carolina del Norte', quote: '“Mi marca se ve profesional y cobro mejor.”' },
]

export default function Testimonials() {
  return (
    <section className="bg-transparent text-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ color: GOLD }}>Lo que dicen otros contratistas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6 shadow-sm">
              <div className="text-slate-800 mb-3">{t.quote}</div>
              <div className="text-sm text-slate-600">{t.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
