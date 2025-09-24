import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

export default function Menu(){
  return (
    <header className="w-full h-[5rem] mt-[1rem] bg-[#171717] border-b-1 md:mt-0">
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
            <Link to="/">
              <div className="flex items-center space-x-3">
                <div className="bg-[#1447e6] p-2 rounded-lg">
                  <Calculator className="h-6 w-6 text-[#fafafa]" />
                </div>
                <span className="text-2xl font-bold">I&M Gestión de Negocios</span>
              </div>
            </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-accent transition-colors font-medium">
              Inicio
            </Link>
            <Link to="/" className="hover:text-accent transition-colors font-medium">
              Servicios
            </Link>
            <Link to="/" className="hover:text-accent transition-colors font-medium">
              Contacto
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}