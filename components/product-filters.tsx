"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { ChevronDown } from "lucide-react"

interface ProductFiltersProps {
  filters: {
    priceRange: [number, number]
    connectivity: string[]
  }
  setFilters: (filters: any) => void
}

export default function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const [expandedSections, setExpandedSections] = useState({
    price: true,
    connectivity: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const handlePriceChange = (value: number[]) => {
    setFilters({
      ...filters,
      priceRange: [value[0], value[1]],
    })
  }

  const handleConnectivityChange = (option: string) => {
    setFilters({
      ...filters,
      connectivity: filters.connectivity.includes(option)
        ? filters.connectivity.filter((c) => c !== option)
        : [...filters.connectivity, option],
    })
  }

  const handleReset = () => {
    setFilters({
      priceRange: [0, 2000],
      connectivity: [],
    })
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-lg font-bold text-gray-900 mb-6">Filtros</h3>

      {/* Rango de Precio */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("price")}
          className="flex items-center justify-between w-full mb-4 text-gray-900 font-semibold hover:text-blue-600 transition"
        >
          <span>Rango de Precio</span>
          <ChevronDown size={18} className={`transition-transform ${expandedSections.price ? "rotate-180" : ""}`} />
        </button>
        {expandedSections.price && (
          <div className="space-y-4">
            <Slider
              min={0}
              max={2000}
              step={50}
              value={filters.priceRange}
              onValueChange={handlePriceChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>S/.{filters.priceRange[0]}</span>
              <span>S/.{filters.priceRange[1]}</span>
            </div>
          </div>
        )}
      </div>

      {/* Conectividad */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection("connectivity")}
          className="flex items-center justify-between w-full mb-4 text-gray-900 font-semibold hover:text-blue-600 transition"
        >
          <span>Conectividad</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${expandedSections.connectivity ? "rotate-180" : ""}`}
          />
        </button>
        {expandedSections.connectivity && (
          <div className="space-y-3">
            {["Bluetooth", "WiFi"].map((option) => (
              <label key={option} className="flex items-center gap-3 cursor-pointer">
                <Checkbox
                  checked={filters.connectivity.includes(option)}
                  onCheckedChange={() => handleConnectivityChange(option)}
                />
                <span className="text-sm text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Botón Resetear */}
      <Button
        onClick={handleReset}
        variant="outline"
        className="w-full text-gray-700 border-gray-300 hover:bg-gray-50 bg-transparent"
      >
        Resetear Filtros
      </Button>
    </div>
  )
}
