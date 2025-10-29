"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Herramientas de agricultura",
    image: "/agricultural-tools-equipment.jpg",
    slug: "herramientas-agricultura",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 2,
    name: "Aspersores",
    image: "/professional-sprayers-equipment.jpg",
    slug: "aspersores",
    color: "from-blue-500 to-cyan-600",
  },
  {
    id: 3,
    name: "Desbrozadoras",
    image: "/brush-cutters-equipment.jpg",
    slug: "desbrozadoras",
    color: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    name: "Sillas",
    image: "/professional-industrial-chairs.jpg",
    slug: "sillas",
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    name: "Tuberías",
    image: "/industrial-pipes-tubes.jpg",
    slug: "tuberias",
    color: "from-slate-600 to-slate-800",
  },
  {
    id: 6,
    name: "Madera Contrachapada",
    image: "/plywood-wood-materials.jpg",
    slug: "madera-contrachapada",
    color: "from-amber-600 to-yellow-700",
  },
]

export default function ProductCategories() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoScroll, setIsAutoScroll] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isAutoScroll) return
    const interval = setInterval(() => {
      scroll("right")
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoScroll, scrollPosition])

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const scrollAmount = 320
      const newPosition = direction === "left" ? scrollPosition - scrollAmount : scrollPosition + scrollAmount
      containerRef.current.scrollLeft = newPosition
      setScrollPosition(newPosition)
      setActiveIndex((prev) => (direction === "left" ? Math.max(0, prev - 1) : Math.min(products.length - 1, prev + 1)))
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="flex items-center justify-between mb-12">
        <div className="space-y-2">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            Descubre nuestra gama
          </h2>
          <p className="text-slate-600 text-base font-medium">Productos de calidad premium para profesionales</p>
        </div>
        <Link
          href="#"
          className="text-blue-600 text-sm font-bold hover:text-blue-700 transition-all duration-300 flex items-center gap-2 hover:gap-3 group"
        >
          Ver todo
          <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </Link>
      </div>

      <div
        className="relative group"
        onMouseEnter={() => setIsAutoScroll(false)}
        onMouseLeave={() => setIsAutoScroll(true)}
      >
        <div className="relative">
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {products.map((product, index) => (
              <Link
                key={product.id}
                href={`/category/${product.slug}`}
                className="flex-shrink-0 w-72 group/card cursor-pointer"
              >
                <div className="relative h-80 rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-3 border border-slate-100 hover:border-blue-200">
                  {/* Background image with overlay */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover/card:scale-125 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-0 group-hover/card:opacity-40 transition-opacity duration-500`}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-500"></div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    {/* Top badge */}
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/30 group-hover/card:bg-white/30 transition-all duration-300">
                        Categoría
                      </span>
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover/card:bg-white/40 transition-all duration-300">
                        <span className="text-sm font-bold">→</span>
                      </div>
                    </div>

                    {/* Bottom content */}
                    <div className="space-y-3 transform group-hover/card:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl font-bold leading-tight drop-shadow-lg">{product.name}</h3>
                      <button className="px-4 py-2 bg-white text-slate-900 rounded-lg font-bold text-sm hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
                        Ver productos
                      </button>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover/card:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <button
            onClick={() => {
              scroll("left")
              setIsAutoScroll(false)
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 transform hover:scale-125 hover:from-blue-700 hover:to-blue-800 text-white"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={() => {
              scroll("right")
              setIsAutoScroll(false)
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full p-4 shadow-xl hover:shadow-2xl transition-all duration-300 z-10 opacity-0 group-hover:opacity-100 transform hover:scale-125 hover:from-blue-700 hover:to-blue-800 text-white"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="flex gap-2 justify-center mt-10">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveIndex(i)
                setIsAutoScroll(false)
              }}
              className={`rounded-full transition-all duration-500 cursor-pointer ${
                i === activeIndex
                  ? "w-10 h-3 bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg"
                  : "w-3 h-3 bg-slate-300 hover:bg-slate-400 hover:scale-125"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
