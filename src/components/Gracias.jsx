import React from 'react'

const GOLD = '#D4AF37'

export default function Gracias() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <div className="w-14 h-14 mx-auto mb-6 rounded-full" style={{ backgroundColor: GOLD }} />
        <h1 className="text-4xl font-extrabold mb-4" style={{ color: GOLD }}>¡Gracias!</h1>
        <p className="text-white/90 mb-6">Hemos recibido tus datos. En minutos te contactaremos y también recibirás un mensaje por WhatsApp.</p>
        <a href="/" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold" style={{ backgroundColor: GOLD, color: '#111' }}>
          Volver al inicio
        </a>
      </div>
    </div>
  )
}
