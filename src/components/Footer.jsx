import React from 'react'

const GOLD = '#D4AF37'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full" style={{ backgroundColor: GOLD }} />
          <span className="text-white/80 font-semibold">LaunchPro Latino</span>
        </div>
        <div className="text-white/70 text-sm flex flex-col sm:flex-row items-center gap-4">
          <span>Email: contacto@launchpro.lat</span>
          <span>WhatsApp: +1 (000) 000-0000</span>
          <span className="text-white/50">© {new Date().getFullYear()} LaunchPro Latino. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
