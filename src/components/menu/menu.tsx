import { Calculator, MenuIcon, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Menu(){

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const closeMenu = ()=>{
    setIsMenuOpen(false)
  }

  return (
    <header className={`bg-[#171717] ${isMenuOpen ? 'w-full h-screen bg-[#171717] overflow-hidden' : 'w-full '}`}>
      <div className={`${isMenuOpen ? 'w-full h-auto bg-[#171717]' : ''}`}>
        <div className={`${isMenuOpen ? 'w-full md:hidden py-4' : 'w-full md:flex md:justify-between md:items-center'}`}>
          
          <div className={`${isMenuOpen ? 'w-full flex flex-col pb-4 border-b-2 border-dashed' 
                                        : 'w-full flex justify-between items-center h-16 '}`}>

            <div className={`${isMenuOpen ? 'px-4 flex justify-between items-center border-b-2 pb-2' 
                                          : 'w-[90%] mx-auto h-auto flex justify-between items-center md:w-1/2 '}`}>
              <Link to="/" className=" flex items-center md:ms-4">
                <Calculator className="h-10 w-10 text-[#fafafa]"/> {" "} 
                <span className="text-2xl font-bold ms-2"> I&G </span>
              </Link>
              <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="w-6 h-6 me-4" /> : <MenuIcon className="w-8 h-8 me-4"/>}
              </button>
            </div>
            <nav className={`${isMenuOpen ? 'flex flex-col space-y-4 mt-6 mx-4' 
                                          : 'hidden md:flex md:w-1/2 md:justify-around '}`}>
              <Link to="/" onClick={closeMenu} className={`font-medium ${isMenuOpen ? 'text-xl' : ''}`}>
                Inicio
              </Link>
              <Link to="/servicios" onClick={closeMenu} className={`font-medium ${isMenuOpen ? 'text-xl' : ''}`}>
                Servicios
              </Link>
              <Link to="/contacto" onClick={closeMenu} className={`font-medium ${isMenuOpen ? 'text-xl' : ''}`}>
                Contacto
              </Link>
              <Link to="/suscribirse" onClick={closeMenu} className={`font-medium ${isMenuOpen ? 'text-xl' : ''}`}>
                Suscribirse
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}