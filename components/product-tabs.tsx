"use client"

import { useState } from "react"

interface ProductTabsProps {
  product: any
}

export default function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("datos")

  const tabs = [
    { id: "datos", label: "Datos" },
    { id: "funcionamiento", label: "Cómo funciona" },
    { id: "accesorios", label: "Accesorios" },
  ]

  return (
    <div className="mb-8">
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-3 font-medium transition-colors duration-200 ${
              activeTab === tab.id ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-gray-700">
        {activeTab === "datos" && (
          <div>
            <p className="text-sm">
              Especificaciones técnicas y detalles del producto disponibles en la sección de especificaciones.
            </p>
          </div>
        )}
        {activeTab === "funcionamiento" && (
          <div>
            <p className="text-sm">
              Este producto está diseñado para proporcionar máxima eficiencia y durabilidad. Consulte el manual de
              usuario para instrucciones detalladas de funcionamiento.
            </p>
          </div>
        )}
        {activeTab === "accesorios" && (
          <div>
            <p className="text-sm">
              Accesorios disponibles para este producto. Contáctenos para más información sobre opciones de
              personalización.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
