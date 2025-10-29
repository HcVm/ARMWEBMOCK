"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductFilters from "@/components/product-filters"
import ProductGrid from "@/components/product-grid"
import PaginationCustom from "@/components/pagination-custom"

// Datos de ejemplo de productos
const PRODUCTS_DATA = {
  "herramientas-agricultura": {
    name: "Herramientas de Agricultura",
    description: "Encuentra la mejor selección de herramientas agrícolas profesionales",
    products: [
      {
        id: 1,
        name: "Arado Profesional 500",
        category: "Herramientas de Agricultura",
        price: 1200,
        image: "/professional-agricultural-plow.jpg",
        description: "Arado de alta resistencia para terrenos difíciles",
        specs: ["Acero reforzado", "Peso: 45kg", "Ancho: 1.5m"],
        connectivity: ["Bluetooth"],
      },
      {
        id: 2,
        name: "Cultivador Eléctrico 300",
        category: "Herramientas de Agricultura",
        price: 850,
        image: "/electric-cultivator-agricultural-tool.jpg",
        description: "Cultivador eléctrico para pequeñas y medianas parcelas",
        specs: ["Motor 2.5HP", "Peso: 28kg", "Ancho: 1.2m"],
        connectivity: ["WiFi"],
      },
      {
        id: 3,
        name: "Rastrillo Mecánico 400",
        category: "Herramientas de Agricultura",
        price: 650,
        image: "/mechanical-rake-agricultural-equipment.jpg",
        description: "Rastrillo mecánico de precisión",
        specs: ["Acero inoxidable", "Peso: 35kg", "Ancho: 1.8m"],
        connectivity: [],
      },
      {
        id: 4,
        name: "Azadón Profesional Plus",
        category: "Herramientas de Agricultura",
        price: 450,
        image: "/professional-hoe-agricultural-tool.jpg",
        description: "Azadón ergonómico para trabajo intensivo",
        specs: ["Mango de madera", "Peso: 3.5kg", "Hoja: 25cm"],
        connectivity: [],
      },
      {
        id: 5,
        name: "Arado Eléctrico 600",
        category: "Herramientas de Agricultura",
        price: 1500,
        image: "/electric-plow-agricultural-equipment.jpg",
        description: "Arado eléctrico de última generación",
        specs: ["Motor 3HP", "Peso: 52kg", "Ancho: 1.6m"],
        connectivity: ["Bluetooth", "WiFi"],
      },
      {
        id: 6,
        name: "Cultivador Manual 200",
        category: "Herramientas de Agricultura",
        price: 320,
        image: "/manual-cultivator-hand-tool.jpg",
        description: "Cultivador manual de precisión",
        specs: ["Acero templado", "Peso: 2.8kg", "Ancho: 0.8m"],
        connectivity: [],
      },
    ],
  },
  aspersores: {
    name: "Aspersores",
    description: "Sistemas de riego profesionales para agricultura",
    products: [
      {
        id: 7,
        name: "Aspersor Rotatorio 360",
        category: "Aspersores",
        price: 280,
        image: "/rotary-sprinkler-irrigation-system.jpg",
        description: "Aspersor rotatorio de cobertura completa",
        specs: ["Rango: 15m", "Presión: 2-4 bar", "Material: Latón"],
        connectivity: [],
      },
      {
        id: 8,
        name: "Aspersor Inteligente WiFi",
        category: "Aspersores",
        price: 450,
        image: "/smart-wifi-sprinkler-system.jpg",
        description: "Aspersor con control remoto vía WiFi",
        specs: ["Rango: 20m", "Presión: 2-5 bar", "Control app"],
        connectivity: ["WiFi"],
      },
      {
        id: 9,
        name: "Aspersor Oscilante Pro",
        category: "Aspersores",
        price: 320,
        image: "/oscillating-sprinkler-professional.jpg",
        description: "Aspersor oscilante para áreas grandes",
        specs: ["Rango: 25m", "Presión: 2-4 bar", "Ancho: 2m"],
        connectivity: [],
      },
    ],
  },
  desbrozadoras: {
    name: "Desbrozadoras",
    description: "Desbrozadoras profesionales para mantenimiento de terrenos",
    products: [
      {
        id: 10,
        name: "Desbrozadora Gasolina 50cc",
        category: "Desbrozadoras",
        price: 580,
        image: "/gasoline-brush-cutter-50cc.jpg",
        description: "Desbrozadora de gasolina de alta potencia",
        specs: ["Motor: 50cc", "Potencia: 2.5HP", "Peso: 8.5kg"],
        connectivity: [],
      },
      {
        id: 11,
        name: "Desbrozadora Eléctrica 1800W",
        category: "Desbrozadoras",
        price: 420,
        image: "/electric-brush-cutter-1800w.jpg",
        description: "Desbrozadora eléctrica silenciosa",
        specs: ["Potencia: 1800W", "Peso: 5.2kg", "Cable: 50m"],
        connectivity: [],
      },
      {
        id: 12,
        name: "Desbrozadora Batería 40V",
        category: "Desbrozadoras",
        price: 650,
        image: "/battery-powered-brush-cutter-40v.jpg",
        description: "Desbrozadora a batería recargable",
        specs: ["Batería: 40V", "Autonomía: 45min", "Peso: 4.8kg"],
        connectivity: ["Bluetooth"],
      },
    ],
  },
  sillas: {
    name: "Sillas",
    description: "Sillas ergonómicas y profesionales",
    products: [
      {
        id: 13,
        name: "Silla Ergonómica Pro",
        category: "Sillas",
        price: 380,
        image: "/ergonomic-professional-office-chair.jpg",
        description: "Silla ergonómica con soporte lumbar",
        specs: ["Material: Malla", "Altura ajustable", "Peso máx: 150kg"],
        connectivity: [],
      },
      {
        id: 14,
        name: "Silla Ejecutiva Premium",
        category: "Sillas",
        price: 520,
        image: "/premium-executive-office-chair.jpg",
        description: "Silla ejecutiva de cuero genuino",
        specs: ["Material: Cuero", "Reclinable", "Peso máx: 180kg"],
        connectivity: [],
      },
    ],
  },
  tuberias: {
    name: "Tuberías",
    description: "Tuberías de alta calidad para sistemas de riego",
    products: [
      {
        id: 15,
        name: 'Tubería PVC 1"',
        category: "Tuberías",
        price: 45,
        image: "/pvc-pipe-1-inch-irrigation.jpg",
        description: "Tubería PVC de 1 pulgada por metro",
        specs: ["Material: PVC", 'Diámetro: 1"', "Presión: 10 bar"],
        connectivity: [],
      },
      {
        id: 16,
        name: 'Tubería Polietileno 3/4"',
        category: "Tuberías",
        price: 35,
        image: "/placeholder.svg?height=300&width=300",
        description: "Tubería de polietileno flexible",
        specs: ["Material: PE", 'Diámetro: 3/4"', "Presión: 8 bar"],
        connectivity: [],
      },
    ],
  },
  "madera-contrachapada": {
    name: "Madera Contrachapada",
    description: "Madera contrachapada de calidad premium",
    products: [
      {
        id: 17,
        name: "Contrachapado 18mm Premium",
        category: "Madera Contrachapada",
        price: 85,
        image: "/placeholder.svg?height=300&width=300",
        description: "Lámina de contrachapado de 18mm",
        specs: ["Espesor: 18mm", "Tamaño: 2.44x1.22m", "Grado: A/B"],
        connectivity: [],
      },
      {
        id: 18,
        name: "Contrachapado 12mm Estándar",
        category: "Madera Contrachapada",
        price: 55,
        image: "/placeholder.svg?height=300&width=300",
        description: "Lámina de contrachapado estándar",
        specs: ["Espesor: 12mm", "Tamaño: 2.44x1.22m", "Grado: C/D"],
        connectivity: [],
      },
    ],
  },
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [filters, setFilters] = useState({
    priceRange: [0, 2000],
    connectivity: [] as string[],
  })
  const [sortBy, setSortBy] = useState("relevance")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const categoryData = PRODUCTS_DATA[params.slug as keyof typeof PRODUCTS_DATA]

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let products = categoryData ? categoryData.products : []

    // Filtro de precio
    products = products.filter((p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Filtro de conectividad
    if (filters.connectivity.length > 0) {
      products = products.filter((p) => filters.connectivity.some((conn) => p.connectivity.includes(conn)))
    }

    // Ordenamiento
    if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price)
    } else if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price)
    } else if (sortBy === "name") {
      products.sort((a, b) => a.name.localeCompare(b.name))
    }

    return products
  }, [filters, sortBy])

  // Paginación
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage)

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
          <span className="text-gray-900 font-medium">
            {categoryData ? categoryData.name : "Categoría no encontrada"}
          </span>
        </div>

        {/* Título y descripción */}
        {categoryData ? (
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{categoryData.name}</h1>
            <p className="text-gray-600">{categoryData.description}</p>
          </div>
        ) : (
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Categoría no encontrada</h1>
          </div>
        )}

        {categoryData && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar de filtros */}
            <div className="lg:col-span-1">
              <ProductFilters filters={filters} setFilters={setFilters} />
            </div>

            {/* Productos */}
            <div className="lg:col-span-3">
              {/* Controles de ordenamiento */}
              <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-200">
                <p className="text-sm text-gray-600">
                  Mostrando {startIndex + 1} de {filteredProducts.length}
                </p>
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-600">Ordenar por:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value)
                      setCurrentPage(1)
                    }}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="relevance">Relevancia</option>
                    <option value="price-low">Precio: Menor a Mayor</option>
                    <option value="price-high">Precio: Mayor a Menor</option>
                    <option value="name">Nombre A-Z</option>
                  </select>
                </div>
              </div>

              {/* Grid de productos */}
              <ProductGrid products={paginatedProducts} />

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="mt-12">
                  <PaginationCustom currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
