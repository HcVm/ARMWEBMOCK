import CategoryPageClient from "@/components/category-page-client"
import { getProductsByCategory } from "@/lib/products-data"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryData = getProductsByCategory(slug)

  return <CategoryPageClient slug={slug} categoryData={categoryData} />
}
