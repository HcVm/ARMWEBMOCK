"use client"

import { useState } from "react"
import ProductGallery from "@/components/product-gallery"
import ProductTabs from "@/components/product-tabs"
import ProductSpecs from "@/components/product-specs"
import RelatedProducts from "@/components/related-products"
import FAQSection from "@/components/faq-section"
import RelatedContent from "@/components/related-content"

export default function ProductPageClient({ product }: { product: any }) {
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return <div className="text-center py-8">Producto no disponible</div>
  }

  const images = product.images || [product.image] || []
  const features = product.features || []
  const specs = product.specs || []
  const faqs = product.faqs || []

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm text-gray-600">
        <a href="/" className="hover:text-blue-600">
          Inicio
        </a>{" "}
        /{" "}
        <a href={`/category/${product.category.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-blue-600">
          {product.category}
        </a>{" "}
        / <span className="text-gray-900 font-medium">{product.name}</span>
      </div>

      {/* Producto principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Galería de imágenes */}
        <ProductGallery images={images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

        {/* Información del producto */}
        <div>
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">{product.brand || "Marca"}</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Tabs */}
            <ProductTabs product={product} />
          </div>

          {/* Características principales */}
          <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-4">Características principales</h3>
            <ul className="space-y-3">
              {features.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón de acción */}
          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 mb-6">
            SOLICITAR INFORMACIÓN
          </button>

          {/* Especificaciones */}
          <ProductSpecs specs={specs} />

          {/* Disponibilidad */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-sm text-green-800">
              <span className="font-semibold">Disponibilidad:</span> {product.availability || "Disponible"}
            </p>
          </div>
        </div>
      </div>

      {/* Sección de características detalladas */}
      <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Características</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
        <p className="text-gray-600 text-sm">
          Este producto ha sido diseñado con los más altos estándares de calidad y durabilidad para garantizar el mejor
          rendimiento en todas las condiciones de trabajo.
        </p>
      </div>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* Productos relacionados */}
      <RelatedProducts currentProductId={product.id} category={product.category} />

      {/* Contenido relacionado */}
      <RelatedContent />
    </main>
  )
}
