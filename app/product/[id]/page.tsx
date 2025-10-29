"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductGallery from "@/components/product-gallery"
import ProductTabs from "@/components/product-tabs"
import ProductSpecs from "@/components/product-specs"
import RelatedProducts from "@/components/related-products"
import FAQSection from "@/components/faq-section"
import RelatedContent from "@/components/related-content"

// Datos de ejemplo - en una app real vendrían de una API
const PRODUCTS_DATA = {
  1: {
    id: 1,
    name: "Arado Profesional 500",
    brand: "ARM CORPORATIONS",
    category: "Herramientas de Agricultura",
    price: 1200,
    images: [
      "/professional-agricultural-plow.jpg",
      "/professional-agricultural-plow.jpg",
      "/professional-agricultural-plow.jpg",
      "/professional-agricultural-plow.jpg",
    ],
    description:
      "Arado de alta resistencia para terrenos difíciles. Diseñado para profesionales que buscan máxima durabilidad y eficiencia.",
    shortDescription: "Arado de alta resistencia para terrenos difíciles",
    features: [
      "Acero reforzado de alta calidad",
      "Peso: 45kg",
      "Ancho de corte: 1.5m",
      "Profundidad ajustable",
      "Garantía de 5 años",
    ],
    specs: {
      weight: "45 kg",
      width: "1.5 m",
      depth: "0.8 m",
      material: "Acero reforzado",
      warranty: "5 años",
      connectivity: ["Bluetooth"],
    },
    availability: "En stock",
    faqs: [
      {
        question: "¿Cuál es la profundidad máxima de arado?",
        answer: "La profundidad máxima es de 0.8 metros, ajustable según las necesidades del terreno.",
      },
      {
        question: "¿Es compatible con tractores de 50HP?",
        answer: "Sí, es compatible con tractores de 40HP en adelante.",
      },
      {
        question: "¿Incluye accesorios?",
        answer: "Incluye kit de accesorios básicos. Los accesorios adicionales se venden por separado.",
      },
      {
        question: "¿Cuál es el mantenimiento recomendado?",
        answer: "Se recomienda mantenimiento cada 100 horas de uso o cada 6 meses.",
      },
    ],
  },
  7: {
    id: 7,
    name: "Aspersor Rotatorio 360",
    brand: "ARM CORPORATIONS",
    category: "Aspersores",
    price: 280,
    images: [
      "/rotary-sprinkler-irrigation-system.jpg",
      "/rotary-sprinkler-irrigation-system.jpg",
      "/rotary-sprinkler-irrigation-system.jpg",
    ],
    description:
      "Aspersor rotatorio de cobertura completa. Sistema de riego profesional para agricultura de precisión.",
    shortDescription: "Aspersor rotatorio de cobertura completa",
    features: [
      "Rango de cobertura: 15 metros",
      "Presión de trabajo: 2-4 bar",
      "Material: Latón resistente",
      "Rotación 360 grados",
      "Fácil instalación",
    ],
    specs: {
      range: "15 m",
      pressure: "2-4 bar",
      material: "Latón",
      diameter: "1 pulgada",
      warranty: "2 años",
      connectivity: [],
    },
    availability: "En stock",
    faqs: [
      {
        question: "¿Cuál es el rango máximo de cobertura?",
        answer: "El rango máximo es de 15 metros de diámetro.",
      },
      {
        question: "¿Qué presión de agua necesita?",
        answer: "Funciona óptimamente entre 2 y 4 bar de presión.",
      },
    ],
  },
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = PRODUCTS_DATA[params.id as keyof typeof PRODUCTS_DATA]
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Producto no encontrado</h1>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
          <ProductGallery images={product.images} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />

          {/* Información del producto */}
          <div>
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-2">{product.brand}</p>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Tabs */}
              <ProductTabs product={product} />
            </div>

            {/* Características principales */}
            <div className="mb-8 p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Características principales</h3>
              <ul className="space-y-3">
                {product.features.map((feature, idx) => (
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
            <ProductSpecs specs={product.specs} />

            {/* Disponibilidad */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <span className="font-semibold">Disponibilidad:</span> {product.availability}
              </p>
            </div>
          </div>
        </div>

        {/* Sección de características detalladas */}
        <div className="mb-16 p-8 bg-white rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Características</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{product.description}</p>
          <p className="text-gray-600 text-sm">
            Este producto ha sido diseñado con los más altos estándares de calidad y durabilidad para garantizar el
            mejor rendimiento en todas las condiciones de trabajo.
          </p>
        </div>

        {/* FAQ */}
        <FAQSection faqs={product.faqs} />

        {/* Productos relacionados */}
        <RelatedProducts currentProductId={product.id} category={product.category} />

        {/* Contenido relacionado */}
        <RelatedContent />
      </main>

      <Footer />
    </div>
  )
}
