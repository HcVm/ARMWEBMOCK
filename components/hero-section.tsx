"use client"

import { useState, useEffect } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-cyan-400 font-semibold text-lg tracking-widest uppercase">
              Bienvenido a ARM CORPORATIONS
            </p>
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Equipos Profesionales de{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Clase Mundial
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
              Descubre nuestra línea completa de herramientas y equipos diseñados para profesionales que exigen lo
              mejor. Calidad, durabilidad y rendimiento garantizados.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105">
              <span className="relative z-10">Explorar Productos</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30">
              Ver Catálogo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-700">
            <div>
              <p className="text-3xl font-bold text-cyan-400">500+</p>
              <p className="text-slate-400 text-sm">Productos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">10K+</p>
              <p className="text-slate-400 text-sm">Clientes Satisfechos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-400">5+</p>
              <p className="text-slate-400 text-sm">Años de Experiencia</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
          <div
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
            style={{
              backgroundImage:
                "url(/placeholder.svg?height=600&width=600&query=professional industrial equipment machinery showcase)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
