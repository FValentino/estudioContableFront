"use client";

import { motion } from "framer-motion";
import banner from "../../assets/images/banner.jpg";

export default function Hero() {
  return (
    <section className="w-full h-auto  relative lg:overflow-hidden lg:h-[calc(100vh-5rem)]">
      {/* Fondo de escritorio */}
      <img
        src={banner}
        alt="Banner I&M Gestión de Negocio"
        className="hidden absolute object-contain lg:block"
      />

      {/* Gradiente circular en móvil */}
      <div className="absolute inset-0 bg-black lg:hidden"
           style={{
             background: "radial-gradient(circle, #0a0a0a 0%, #504c4c 100%)",
           }}
      />

      {/* Texto animado */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-full py-16 relative text-center flex flex-col justify-center z-10
        lg:w-[50%] lg:h-full lg:ms-4 lg:pt-0"
      >
        <h1 className="text-3xl md:text-5xl  font-bold mb-6 text-balance">
          I&M 
          <span className="block text-[#1447e6]">Gestión de Negocio</span>
        </h1>
        <p className="w-[90%] mx-auto text-justify text-md text-white max-w-3xl md:text-xl leading-relaxed">
          Ofrecemos soluciones integrales, dinámicas y eficientes, diseñadas para acompañar 
          a nuestros clientes en la consecución de sus objetivos empresariales. <br />
          <br/>
          
          Fomentando un vínculo cercano y activo que nos permite comprender en detalle la realidad 
          de cada organización y, mediante una planificación estratégica, contribuir a su desarrollo, 
          consolidación y expansión.
        </p>

        <button className="bg-[#1447e6] w-[50%] mx-auto mt-12 py-2 rounded-xl text-xl font-semibold 
          hover:cursor-pointer lg:mt-4">
          Agendá tu reunión
        </button>
      </motion.div>
    </section>
  );
}
