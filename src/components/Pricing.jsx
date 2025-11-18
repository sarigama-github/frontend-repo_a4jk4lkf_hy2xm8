import React from 'react'

const GOLD = '#D4AF37'

const plans = [
  {
    name: 'Plan Básico',
    price: '$379',
    desc: 'Logo + Sitio Web + WhatsApp',
  },
  {
    name: 'Plan Profesional',
    price: '$594',
    desc: 'Logo + Sitio Web + WhatsApp + Automatizaciones',
    featured: true,
  },
  {
    name: 'Plan Elite',
    price: '$1200',
    desc: 'Todo lo anterior + Branding completo + Set up avanzado',
  },
]

export default function Pricing() {
  return (
    <section className="bg-transparent text-slate-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10" style={{ color: GOLD }}>Planes y Precios</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <div key={i} className={`rounded-2xl border bg-white/70 backdrop-blur p-6 flex flex-col shadow-sm ${p.featured ? 'border-[rgba(212,175,55,0.6)] shadow-[0_0_25px_rgba(212,175,55,0.15)]' : 'border-slate-200'}`}>
              <div className="text-xl font-semibold mb-2 text-slate-900">{p.name}</div>
              <div className="text-4xl font-extrabold mb-2" style={{ color: GOLD }}>{p.price}</div>
              <div className="text-slate-700 mb-6">{p.desc}</div>
              <a href="#contacto" className="mt-auto inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold" style={{ backgroundColor: GOLD, color: '#111' }}>
                Empezar Mi Negocio
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
