import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductPageClient from "@/components/product-page-client"
import { getProductById } from "@/lib/products-data"

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(Number.parseInt(id))

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
      <ProductPageClient product={product} />
      <Footer />
    </div>
  )
}
