import { Calculator, FileText, Shield, TrendingUp, Users } from "lucide-react";
import Service from "./service";

export default function Services(){

  const servicesData = [
  {
    id: 1,
    title: "Servicios Contables y Financieros",
    services: [
      {
        id: 1,
        name: "Contabilidad",
        icon: FileText
      },
      {
        id: 2,
        name: "Auditoria",
        icon: FileText
      },
      {
        id: 3,
        name: "Impuestos",
        icon: Calculator
      }
    ]
  },
  {
    id: 2,
    title: "Gestión Empresarial",
    services: [
      {
        id: 1,
        name: "Administracion",
        icon: TrendingUp
      },
      {
        id: 2,
        name: "Sueldos",
        icon: Users
      },
      {
        id: 3,
        name: "Reclutamiento y seleccion de personal",
        icon: Users
      },
      {
        id: 4,
        name: "Gobierno corporativo",
        icon: Users
      }
    ]
  },
  {
    id: 3,
    title: "Servicios Especializados",
    services: [
      {
        id: 1,
        name: "Compliance: prevención de lavado de activos y financiación del terrorismo",
        icon: Shield
      },
      {
        id: 2,
        name: "Consultoria de negocios",
        icon: TrendingUp
      }
    ]
  },

]


  return(
    <section className="w-full my-6">
      <div className="w-[90%] my-4 mx-auto">
        <h2 className="text-3xl text-center text-white font-bold"> Lo que podemos hacer por tu empresa </h2>
      </div>

      <p className="w-[90%] mx-auto text-center text-xl">
        Creamos packs de servicios a medida para compañías y emprendedores, 
        adaptados a las particularidades de cada proyecto.
      </p>
      
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {
          servicesData.map((service)=> <Service key={service.id} id={service.id} title={service.title} services={service.services}/>)
        }
      </div>
    </section>
  );
}