"use client"

import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white">
                A
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">ARM CORPORATIONS</h3>
                <p className="text-blue-300 text-xs">Soluciones Profesionales</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mt-4">
              ARM CORPORATIONS es líder en soluciones profesionales desde 2020. Ofrecemos productos de alta calidad para
              agricultura, construcción y jardinería. Compromiso y confiabilidad son nuestros valores fundamentales.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Descubre nuestra gama */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Productos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Herramientas de agricultura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Aspersores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Desbrozadoras
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Sillas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Tuberías
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Madera Contrachapada
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces útiles */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Enlaces útiles</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Distribuidor
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Noticias y eventos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Información legal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition duration-300 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-400 rounded-full"></span>
                  Catálogo de productos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="tel:+51123456789" className="hover:text-blue-400 transition">
                  +51 (1) 2345-6789
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <a href="mailto:info@armcorp.com" className="hover:text-blue-400 transition">
                  info@armcorp.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-blue-400 mt-1 flex-shrink-0" />
                <span>Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-xs text-gray-500 text-center md:text-left">
              <p>© 2025 ARM CORPORATIONS. Todos los derechos reservados.</p>
            </div>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-blue-400 transition">
                Política de cookies
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Términos de uso
              </a>
              <a href="#" className="hover:text-blue-400 transition">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
