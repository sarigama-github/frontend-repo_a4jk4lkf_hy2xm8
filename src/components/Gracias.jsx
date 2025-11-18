import React from 'react'

const GOLD = '#D4AF37'

export default function Gracias() {
  return (
    <div className="min-h-screen bg-transparent text-slate-800 flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center bg-white/80 backdrop-blur rounded-2xl border border-slate-200 p-10 shadow-sm">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full" style={{ backgroundColor: GOLD }} />
        <h1 className="text-4xl font-extrabold mb-4 text-slate-900" style={{ color: GOLD }}>¡Gracias!</h1>
        <p className="text-slate-700 mb-6">Hemos recibido tus datos. En minutos te contactaremos y también recibirás un mensaje por WhatsApp.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold" style={{ backgroundColor: GOLD, color: '#111' }}>
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
