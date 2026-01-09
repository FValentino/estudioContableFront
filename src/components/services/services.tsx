import { serviceCategories } from "@/data/service.data"
import Service from "./service"

export default function Services() {


  return (
    <section id="servicios" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#002443] uppercase tracking-wider mb-4">Nuestros Servicios</h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f0a03] mb-6">
            Lo que Podemos Hacer por tu Empresa
          </h2>
          <p className="text-lg text-[#777165] max-w-3xl mx-auto leading-relaxed">
            Creamos packs de servicios a medida para compañías y emprendedores, adaptados a las particularidades de cada
            proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category) => (
            <Service key={category.title} category={category}/>
          ))}
        </div>
      </div>
    </section>
  )
}