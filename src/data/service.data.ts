import { 
	Calculator, FileText, Receipt, 
	TrendingUp, Users, Shield, 
	UserCheck, MessageSquare, Building 
} from "lucide-react"


export const serviceCategories = [
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