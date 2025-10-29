import Image from "next/image"
import Link from "next/link"
import { getRelatedProducts } from "@/lib/products-data"

interface RelatedProductsProps {
  currentProductId: number
  category: string
}

export default function RelatedProducts({ currentProductId, category }: RelatedProductsProps) {
  const relatedProducts = getRelatedProducts(currentProductId, 3)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Mira también</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-blue-600 font-bold">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
