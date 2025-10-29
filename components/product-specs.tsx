interface ProductSpecsProps {
  specs: Record<string, any>
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">Especificaciones técnicas</h3>
      <div className="space-y-3">
        {Object.entries(specs).map(([key, value]) => (
          <div key={key} className="flex justify-between text-sm">
            <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>
            <span className="font-medium text-gray-900">
              {Array.isArray(value) ? value.join(", ") || "No disponible" : value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
