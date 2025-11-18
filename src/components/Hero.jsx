import React from 'react'
import Spline from '@splinetool/react-spline'

const GOLD = '#D4AF37'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette + gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 pt-28 pb-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full" style={{ backgroundColor: GOLD }} />
            <span className="text-white/80 tracking-widest text-xs uppercase">LaunchPro Latino</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ color: GOLD }}>
            Lanza Tu Negocio Profesional en 24 Horas — Logo, Página Web y WhatsApp Automático
          </h1>

          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mb-8">
            Los clientes no te encuentran porque no tienes presencia online… Nosotros te construimos tu marca completa en un solo día.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a href="#contacto" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-semibold shadow-[0_0_0_2px_rgba(212,175,55,0.2)] hover:shadow-[0_0_0_3px_rgba(212,175,55,0.35)] transition-shadow" style={{ backgroundColor: GOLD, color: '#111' }}>
              Empezar Ahora
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-colors">
              <span className="underline decoration-[#D4AF37]/50 underline-offset-4">Enviar Mensaje por WhatsApp</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={GOLD} strokeWidth="2" className="w-5 h-5"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-white/90">
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">✔</span> Disponible en todo EE.UU.</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">✔</span> Español 100%</div>
            <div className="flex items-center gap-2"><span className="text-[#D4AF37]">✔</span> Entrega en 24 horas</div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 aspect-video rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm hidden lg:block" />
      </div>
    </section>
  )
}
