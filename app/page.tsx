import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ProductCategories from "@/components/product-categories"
import FeaturedSection from "@/components/featured-section"
import ContentCards from "@/components/content-cards"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedSection />
      <ContentCards />
      <Footer />
    </main>
  )
}
