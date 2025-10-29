"use client"

export default function ContentCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:scale-105 hover:-translate-y-2">
          <div className="w-40 h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-8 flex items-center justify-center shadow-md overflow-hidden">
            <img src="/manual-guide-book-documentation.jpg" alt="Manual" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">Recibe manuales y asistencia para tu equipo ARM</h3>
          <p className="text-slate-600 text-sm mb-6">Acceso a documentación completa y soporte técnico</p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg text-sm font-bold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            VER MANUALES Y ASISTENCIA
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl p-10 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-blue-200 transform hover:scale-105 hover:-translate-y-2">
          <div className="w-40 h-48 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-8 flex items-center justify-center shadow-md overflow-hidden">
            <img src="/professional-distributor-sales-representative.jpg" alt="Distributor" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-4">¿Buscas un distribuidor ARM?</h3>
          <p className="text-slate-600 text-sm mb-6">Encuentra el distribuidor más cercano a tu ubicación</p>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg text-sm font-bold hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            ENCONTRAR DISTRIBUIDOR
          </button>
        </div>
      </div>
    </section>
  )
}
