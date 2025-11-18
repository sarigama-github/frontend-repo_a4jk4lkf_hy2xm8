import React from 'react'

const GOLD = '#D4AF37'

export default function Problem() {
  return (
    <section className="bg-transparent text-slate-800 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: GOLD }}>El problema</h2>
        <p className="text-slate-700 mb-8">Tu trabajo es excelente, pero no te encuentran porque:</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-lg border border-slate-200 p-3 shadow-sm"><span className="text-[#D4AF37]">•</span> <span>No tienes página web</span></li>
          <li className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-lg border border-slate-200 p-3 shadow-sm"><span className="text-[#D4AF37]">•</span> <span>Tu logo no representa la calidad de tu trabajo</span></li>
          <li className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-lg border border-slate-200 p-3 shadow-sm"><span className="text-[#D4AF37]">•</span> <span>Los clientes nuevos no confían sin ver pruebas</span></li>
          <li className="flex items-start gap-3 bg-white/70 backdrop-blur rounded-lg border border-slate-200 p-3 shadow-sm"><span className="text-[#D4AF37]">•</span> <span>Otros contratistas con menos talento te están quitando trabajo</span></li>
        </ul>
      </div>
    </section>
  )
}
