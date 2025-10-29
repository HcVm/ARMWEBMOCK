import Image from "next/image"

export default function RelatedContent() {
  const contentItems = [
    {
      id: 1,
      title: "Guía de uso del arado profesional",
      image: "/agricultural-guide.jpg",
      category: "Guía",
    },
    {
      id: 2,
      title: "Mantenimiento de herramientas agrícolas",
      image: "/maintenance-guide.jpg",
      category: "Tutorial",
    },
    {
      id: 3,
      title: "Mejores prácticas de arado",
      image: "/best-practices.jpg",
      category: "Artículo",
    },
    {
      id: 4,
      title: "Comparativa de herramientas",
      image: "/tools-comparison.jpg",
      category: "Comparativa",
    },
  ]

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Contenido relacionado</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <div className="relative w-full aspect-video bg-gray-100 overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                <span className="text-white text-sm font-medium">{item.category}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
