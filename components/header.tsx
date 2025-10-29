"use client"

import { Search, User, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-lg shadow-md">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg">ARM</span>
            <span className="text-xs text-blue-300">CORPORATIONS</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition duration-300 relative group">
            Productos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300 relative group">
            Precios y garantía
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#" className="hover:text-blue-400 transition duration-300 relative group">
            Ayuda y Manuales
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
          </a>
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-4">
          <button className="hover:text-blue-400 transition duration-300 hover:scale-110">
            <Search size={20} />
          </button>
          <button className="hover:text-blue-400 transition duration-300 hover:scale-110">
            <User size={20} />
          </button>
          <button
            className="md:hidden hover:text-blue-400 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 px-4 py-4 space-y-3">
          <a href="#" className="block hover:text-blue-400 transition">
            Productos
          </a>
          <a href="#" className="block hover:text-blue-400 transition">
            Precios y garantía
          </a>
          <a href="#" className="block hover:text-blue-400 transition">
            Ayuda y Manuales
          </a>
        </div>
      )}
    </header>
  )
}
