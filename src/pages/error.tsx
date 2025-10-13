import { Link } from "react-router-dom"
import { FileQuestion, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F1E8] flex flex-col">
      {/* Header */}
      <header className="border-b border-[#0A2540]/10 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="flex items-center gap-2 w-fit">
            <div className="w-8 h-8 bg-[#0A2540] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" />
                <path d="M9 9h6M9 15h6" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#0A2540]">I&M</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <FileQuestion className="w-12 h-12 text-[#0A2540]" />
            </div>
          </div>

          {/* Error Code */}
          <div className="mb-6">
            <h1 className="text-8xl font-bold text-[#0A2540] mb-2">404</h1>
            <h2 className="text-3xl font-bold text-[#0A2540] mb-4">Página No Encontrada</h2>
          </div>

          {/* Description */}
          <p className="text-lg text-[#6B5E4F] mb-8 leading-relaxed max-w-lg mx-auto">
            Lo sentimos, la página que estás buscando no existe o ha sido movida. Verifica la URL o regresa al inicio
            para encontrar lo que necesitas.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
            className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white px-8 h-10 rounded-md has-[>svg]:px-4">
              <Link to="/" className="flex items-center gap-2">
                <Home className="w-5 h-5" />
                Volver al Inicio
              </Link>
            </button>
          </div>

        </div>
      </main>
    </div>
  )
}
