"use client"

import { useState } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  specs: string[]
  connectivity: string[]
}

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No se encontraron productos con los filtros seleccionados.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/product/${product.id}`}
          onMouseEnter={() => setHoveredId(product.id)}
          onMouseLeave={() => setHoveredId(null)}
          className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group"
        >
          {/* Imagen */}
          <div className="relative h-64 bg-gray-100 overflow-hidden">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {product.connectivity.length > 0 && (
              <div className="absolute top-3 right-3 flex gap-2">
                {product.connectivity.map((conn) => (
                  <Badge key={conn} className="bg-blue-600 text-white text-xs">
                    {conn}
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Contenido */}
          <div className="p-4">
            <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

            {/* Especificaciones */}
            <div className="mb-4 space-y-1">
              {product.specs.slice(0, 2).map((spec, idx) => (
                <p key={idx} className="text-xs text-gray-500">
                  {spec}
                </p>
              ))}
            </div>

            {/* Precio y botón */}
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-blue-600">S/.{product.price}</span>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                Más info
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
