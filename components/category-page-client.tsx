"use client"

import { useState, useMemo } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductFilters from "@/components/product-filters"
import ProductGrid from "@/components/product-grid"
import PaginationCustom from "@/components/pagination-custom"

export default function CategoryPageClient({ slug, categoryData }: { slug: string; categoryData: any }) {
  const [filters, setFilters] = useState<{ priceRange: [number, number]; connectivity: string[] }>({
    priceRange: [0, 2000] as [number, number],
    connectivity: [] as string[],
  })
  const [sortBy, setSortBy] = useState("relevance")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    let products = categoryData ? categoryData.products : []

    // Filtro de precio
    products = products.filter((p: any) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1])

    // Filtro de conectividad
    if (filters.connectivity.length > 0) {
      products = products.filter((p: any) => filters.connectivity.some((conn) => p.connectivity.includes(conn)))
    }

    // Ordenamiento
    if (sortBy === "price-low") {
      products.sort((a: any, b: any) => a.price - b.price)
    } else if (sortBy === "price-high") {
      products.sort((a: any, b: any) => b.price - a.price)
    } else if (sortBy === "name") {
      products.sort((a: any, b: any) => a.name.localeCompare(b.name))
    }

    return products
  }, [filters, sortBy, categoryData])

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
