import { Calculator } from "lucide-react";

export default function Footer(){
  return(
    <footer className="w-full py-12 bg-[#171717] ">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Calculator className="h-6 w-6" />
          <span className="text-xl font-bold">I&M Gestión de Negocios</span>
        </div>
        <p className="text-sm opacity-80">&copy; 2024 I&M Gestión de Negocios. Todos los derechos reservados.</p>
        <br />
        <p className="text-md opacity-80"> Para consultas y contacto: imgestiondenegocios@gmail.com</p>
      </div>
    </footer>
  );
}