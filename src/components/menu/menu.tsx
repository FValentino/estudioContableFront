import { Calculator, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Menu(){

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navigate = useNavigate()

  const setMenu = ()=>{
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = ()=>{
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-[#e1ded7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#002443] rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-[#faf8f5]" />
            </div>
            <span className="text-xl font-bold text-[#0f0a03]">I&M</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={closeMenu} 
              className="text-[#777165] hover:text-[#0f0a03] transition-colors">
              Inicio
            </Link>
            <Link to="/servicios" onClick={closeMenu} 
              className="text-[#777165] hover:text-[#0f0a03] transition-colors">
              Servicios
            </Link>
            <Link to="/nosotros" onClick={closeMenu} 
              className="text-[#777165] hover:text-[#0f0a03] transition-colors">
              Nosotros
            </Link>
            <Link to="/contacto" onClick={closeMenu} 
              className="text-[#777165] hover:text-[#0f0a03] transition-colors">
              Contacto
            </Link>
            <button onClick={() => navigate("/contacto")}
              className="bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] h-8 
              rounded-lg gap-1.5 px-5.5 hover:cursor-pointer">
              Agendar Consulta
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={setMenu}>
            {isMenuOpen ? <X className="w-6 h-6 text-[#0f0a03]" /> : <MenuIcon className="w-6 h-6 text-[#0f0a03]" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e1ded7]">
            <nav className="flex flex-col space-y-4">
              <Link
                to="inicio" onClick={closeMenu}
                className="text-[#777165] hover:text-[#0f0a03] transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/servicios" onClick={closeMenu}
                className="text-[#777165] hover:text-[#0f0a03] transition-colors"
              >
                Servicios
              </Link>
              <Link
                to="/nosotros" onClick={closeMenu}
                className="text-[#777165] hover:text-[#0f0a03] transition-colors"
              >
                Nosotros
              </Link>
              <Link
                to="/contacto" onClick={closeMenu}
                className="text-[#777165] hover:text-[#0f0a03] transition-colors"
              >
                Contacto
              </Link>
              <button onClick={()=>{
                  navigate("/contacto");
                  closeMenu()
                }}
                className="bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] w-fit 
                rounded-md px-3 py-2 hover:cursor-pointer"
              >
                Agendar Consulta
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>

  );
}