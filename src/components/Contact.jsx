import React, { useState } from 'react'

const GOLD = '#D4AF37'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = '/gracias'
    }, 400)
    window.open('https://wa.me/', '_blank', 'noopener')
  }

  return (
    <section id="contacto" className="bg-transparent text-slate-800 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: GOLD }}>Regístrate en 30 segundos</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input required placeholder="Nombre" className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900" />
          <input required placeholder="Nombre de su empresa" className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900" />
          <input required placeholder="Teléfono" className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900" />
          <input required placeholder="WhatsApp" className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900" />
          <input required placeholder="Ciudad/Estado" className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900" />
          <select required className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900">
            <option value="">Tipo de trabajo</option>
            <option>Carpintería</option>
            <option>Remodelación</option>
            <option>Pintura</option>
            <option>Techos</option>
            <option>HVAC</option>
            <option>Landscaping</option>
            <option>Otro</option>
          </select>
          <input required type="email" placeholder="Email" className="bg-white/70 backdrop-blur border border-slate-200 rounded-lg px-4 py-3 outline-none focus:border-[rgba(212,175,55,0.6)] text-slate-900 sm:col-span-2" />
          <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold sm:col-span-2" style={{ backgroundColor: GOLD, color: '#111' }}>
            {submitted ? 'Enviando…' : 'Enviar'}
          </button>
        </form>
      </div>
    </section>
  )
}
