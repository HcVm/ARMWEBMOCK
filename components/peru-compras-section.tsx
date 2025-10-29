"use client"

import { CheckCircle2 } from "lucide-react"

export default function PeruComprasSection() {
  const catalogs = [
    {
      code: "EXT-CE-2024-26",
      title: "Máquinas, equipos y herramientas para jardinería, silvicultura y agricultura",
      backgroundImage: "/peru-compras-agricultura.jpg",
    },
    {
      code: "EXT-CE-2024-11",
      title: "Mobiliario en general",
      backgroundImage: "/peru-compras-mobiliario.jpg",
    },
    {
      code: "EXT-CE-2024-16",
      title: "Accesorios domésticos y bienes para usos diversos",
      backgroundImage: "/peru-compras-accesorios.jpg",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-semibold text-sm">Certificado y Verificado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Catálogos Electrónicos de Perú Compras</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos proveedores certificados en los catálogos electrónicos de Perú Compras, garantizando calidad y
            confiabilidad en nuestros productos y servicios.
          </p>
        </div>

        {/* Catalogs Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {catalogs.map((catalog) => (
            <div
              key={catalog.code}
              className="relative rounded-lg border-2 border-blue-200 overflow-hidden hover:shadow-lg transition-shadow h-64"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${catalog.backgroundImage})` }}
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-between">
                <div>
                  <div className="bg-blue-600 text-white font-mono font-bold text-sm px-3 py-2 rounded mb-3 inline-block">
                    {catalog.code}
                  </div>
                </div>
                <h3 className="font-semibold text-white text-sm leading-snug">{catalog.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">¿Por qué elegir nuestros productos?</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Certificación Oficial</h4>
                <p className="text-gray-600 text-sm">
                  Registrados en los catálogos electrónicos de Perú Compras, cumpliendo con todos los estándares de
                  calidad requeridos.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Productos Verificados</h4>
                <p className="text-gray-600 text-sm">
                  Todos nuestros productos cumplen con las especificaciones técnicas y normativas establecidas.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Confiabilidad Garantizada</h4>
                <p className="text-gray-600 text-sm">
                  Somos proveedores confiables para instituciones públicas y privadas en todo el país.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Disponibilidad Permanente</h4>
                <p className="text-gray-600 text-sm">
                  Nuestros productos están disponibles en los catálogos electrónicos para consulta y compra en línea.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
