import { Calculator, FileText,Receipt, TrendingUp, Users, Shield, UserCheck, MessageSquare, Building } from "lucide-react"
import Service from "./service"

export default function Services() {
  const serviceCategories = [
    {
      title: "Servicios Contables y Financieros",
      description: "Gestión integral de la contabilidad y finanzas empresariales",
      services: [
        { icon: Calculator, name: "Contabilidad", description: "Registro y control de operaciones contables" },
        { icon: FileText, name: "Auditoría", description: "Revisión y verificación de estados financieros" },
        { icon: Receipt, name: "Impuestos", description: "Gestión tributaria y cumplimiento fiscal" },
      ],
      gradient: "from-blue-500/10 to-indigo-500/10",
    },
    {
      title: "Gestión Empresarial",
      description: "Soluciones para la administración y crecimiento del negocio",
      services: [
        { icon: TrendingUp, name: "Administración", description: "Optimización de procesos administrativos" },
        { icon: Users, name: "Sueldos", description: "Gestión de nóminas y recursos humanos" },
        { icon: Shield, name: "Gobierno Corporativo", description: "Estructuras de control y gobernanza" },
        { icon: UserCheck, name: "Reclutamiento y Selección", description: "Búsqueda y selección de talento" },
      ],
      gradient: "from-emerald-500/10 to-teal-500/10",
    },
    {
      title: "Servicios Especializados",
      description: "Consultoría especializada para necesidades específicas",
      services: [
        {
          icon: Building,
          name: "Compliance",
          description: "Prevención de lavado de activos y financiación del terrorismo",
        },
        {
          icon: MessageSquare,
          name: "Consultoría de Negocios",
          description: "Asesoramiento estratégico para el crecimiento empresarial",
        },
      ],
      gradient: "from-purple-500/10 to-pink-500/10",
    },
  ]

  return (
    <section id="servicios" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#002443] uppercase tracking-wider mb-4">Nuestros Servicios</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#0f0a03] mb-6">
            Lo que Podemos Hacer por tu Empresa
          </h3>
          <p className="text-lg text-[#777165] max-w-3xl mx-auto leading-relaxed">
            Creamos packs de servicios a medida para compañías y emprendedores, adaptados a las particularidades de cada
            proyecto.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <Service key={categoryIndex} category={category}/>
          ))}
        </div>
      </div>
    </section>
  )
}