import { Calculator } from "lucide-react";

export default function Footer(){

  return(
    <footer className="bg-[#002443] text-[#faf8f5] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-[#faf8f5]/10 rounded-lg flex items-center justify-center">
              <Calculator className="w-5 h-5 text-[#faf8f5]" />
            </div>
            <span className="text-xl font-bold">I&M Gestión de Negocios</span>
          </div>

          {/* Copyright */}
          <p className="text-[#faf8f5]/80 mb-">
            © 2025 I&M Gestión de Negocios. Todos los derechos reservados.
          </p>

          {/* Contact */}
          <p className="text-[#faf8f5]/60">
            Para consultas y contacto:{" "}
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=imgestiondenegocios@gmail.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#faf8f5] hover:underline">
              imgestiondenegocios@gmail.com
            </a>
          </p>

          <p className="text-[#faf8f5]/60 mt-3">
            Contacto del desarrollador:{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=fariasvalentino25@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:border-b-[0.5px] text-[#faf8f5]"
            >
              fariasvalentino25@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}