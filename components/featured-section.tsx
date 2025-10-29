"use client"

export default function FeaturedSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-10">En primera plana</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div
          className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{
            backgroundImage: "url(/placeholder.svg?height=350&width=400&query=agricultural equipment in field)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8 transform group-hover:translate-y-0 transition duration-300">
            <h3 className="text-white text-2xl font-bold mb-2">Herramientas Profesionales</h3>
            <p className="text-white/90 text-sm mb-4">Soluciones completas para agricultura</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-bold w-fit hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              VER PRODUCTOS
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{
            backgroundImage: "url(/placeholder.svg?height=350&width=400&query=industrial equipment professional tools)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-bold mb-2">Temporada de Ofertas</h3>
            <p className="text-white/90 text-sm mb-4">Descuentos especiales en productos seleccionados</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-bold w-fit hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              VER PROMOCIONES
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="relative h-80 rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          style={{
            backgroundImage: "url(/placeholder.svg?height=350&width=400&query=quality materials industrial supplies)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition duration-500"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <h3 className="text-white text-2xl font-bold mb-2">Materiales Premium</h3>
            <p className="text-white/90 text-sm mb-4">Madera y accesorios de alta calidad</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-xs font-bold w-fit hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              EXPLORAR
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
