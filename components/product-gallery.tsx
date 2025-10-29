"use client"

import Image from "next/image"
import { useState } from "react"

interface ProductGalleryProps {
  images: string[]
  selectedImage: number
  setSelectedImage: (index: number) => void
}

export default function ProductGallery({ images, selectedImage, setSelectedImage }: ProductGalleryProps) {
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="space-y-4">
      {/* Imagen principal */}
      <div
        className="relative w-full aspect-square bg-white rounded-lg border border-gray-200 overflow-hidden group cursor-zoom-in"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
      >
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Producto"
          fill
          className={`object-contain p-8 transition-transform duration-300 ${isZoomed ? "scale-150" : "scale-100"}`}
        />
        {isZoomed && (
          <div className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 rounded text-sm">Zoom</div>
        )}
      </div>

      {/* Miniaturas */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedImage(idx)}
            className={`relative aspect-square rounded-lg border-2 overflow-hidden transition-all duration-200 ${
              selectedImage === idx ? "border-blue-600 shadow-lg" : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Image src={image || "/placeholder.svg"} alt={`Miniatura ${idx + 1}`} fill className="object-contain p-2" />
          </button>
        ))}
      </div>
    </div>
  )
}
