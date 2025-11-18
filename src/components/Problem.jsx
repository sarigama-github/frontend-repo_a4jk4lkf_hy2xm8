import React from 'react'

const GOLD = '#D4AF37'

export default function Problem() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: GOLD }}>El problema</h2>
        <p className="text-white/90 mb-8">Tu trabajo es excelente, pero no te encuentran porque:</p>
        <ul className="space-y-3 text-white/90">
          <li className="flex items-start gap-3"><span className="text-[#D4AF37]">•</span> No tienes página web</li>
          <li className="flex items-start gap-3"><span className="text-[#D4AF37]">•</span> Tu logo no representa la calidad de tu trabajo</li>
          <li className="flex items-start gap-3"><span className="text-[#D4AF37]">•</span> Los clientes nuevos no confían sin ver pruebas</li>
          <li className="flex items-start gap-3"><span className="text-[#D4AF37]">•</span> Otros contratistas con menos talento te están quitando trabajo</li>
        </ul>
      </div>
    </section>
  )
}
