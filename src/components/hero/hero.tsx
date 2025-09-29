"use client";
import { motion, easeInOut, type Variants, type Transition } from "framer-motion";
import heroImage from "../../assets/images/heroImage.jpg"
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {

  const navigate = useNavigate();

  const entranceTransition: Transition = {
    type: "spring",      // ✅ TS ahora sabe que es un tipo válido
    stiffness: 200,
    damping: 12,
    delay: 1
  };

  const entrance: Variants = {
    hidden: { opacity: 0, scale: 0.6 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: entranceTransition
    }
  };

  const float = {
    animate: { y: [0, -10, 0] },
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: easeInOut
    }
  };


  return (
    <motion.section
      id="inicio"
      className="pt-24 pb-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8f5] via-[#ebe4d6]/20 to-[#e1d6c2]/30" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#002443]/5 rounded-full blur-3xl" />
      <div
        className="absolute bottom-20 left-10 w-96 h-96 bg-[#e1d6c2]/10 rounded-full blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Texto principal */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-[#002443]/10 rounded-full text-sm font-medium text-[#002443] mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Soluciones Empresariales Integrales
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-[#0f0a03] mb-6">
              I&M <span className="text-[#002443]">Gestión de Negocios</span>
            </h1>

            <p className="text-xl text-[#777165] mb-8 leading-relaxed">
              Ofrecemos soluciones integrales, dinámicas y eficientes, diseñadas
              para acompañar a nuestros clientes en la consecución de sus
              objetivos empresariales.
            </p>

            <p className="text-lg text-[#777165] mb-10 leading-relaxed">
              Fomentamos un vínculo cercano y activo que nos permite comprender
              en detalle la realidad de cada organización y, mediante una
              planificación estratégica, contribuir a su desarrollo,
              consolidación y expansión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={()=>{navigate("/contacto")}}
                className="bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] 
                group rounded-md px-5 py-3 font-medium flex items-center hover:cursor-pointer">
                Agendar tu Reunión
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={()=>{navigate("/servicios")}}
                className="text-[#002443] border border-[#002443] px-5 py-3 rounded-md hover:bg-[#002443] 
                hover:text-[#faf8f5] hover:cursor-pointer transition-colors">
                Conocer Servicios
              </button>
            </div>
          </motion.div>

          {/* Imagen principal */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Servicios empresariales digitales y gestión de negocios moderna"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002443]/20 to-transparent" />
              </div>

              {/* Tarjeta superior */}
              <motion.div
                variants={entrance}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...float}
                className=" absolute top-8 right-8 bg-[#ffffff]/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-[#e1ded7]/50"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#0f0a03]">+25% Crecimiento</span>
                </div>
              </motion.div>

              {/* Tarjeta inferior */}
              <motion.div
                variants={entrance}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                {...float}
                className="absolute bottom-8 left-8 bg-[#ffffff]/95 backdrop-blur-sm rounded-xl shadow-lg p-4 border border-[#e1ded7]/50"
              >
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#002443]" />
                  <span className="text-sm font-medium text-[#0f0a03]">
                    Resultados Garantizados
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
