import { Lightbulb, Target, Users } from "lucide-react"

interface Principle {
  id: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  number: string
  title: string
  description: string
}


export function About() {
  const principles: Principle[] = [
    {
      id: "strategy",
      icon: Target,
      number: "01",
      title: "Enfoque Estratégico",
      description: "Acompañamos a las empresas en su transición hacia nuevas prácticas durables y sostenibles.",
    },
    {
      id: "relationship",
      icon: Users,
      number: "02",
      title: "Vínculo Cercano",
      description:
        "Fomentamos un vínculo cercano y activo que nos permite comprender en detalle la realidad de cada organización.",
    },
  ]

  return (
    <section id="nosotros" className="py-16 lg:py-24 bg-[#ebe4d6]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-[#002443] uppercase tracking-wider mb-4">
            Nuestros Principios
          </h2>
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0f0a03] mb-6">
            Nuestra Filosofía de Trabajo
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle) => (
            <div key={principle.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#ffffff] text-[#0f0a03] flex flex-col gap-6 rounded-xl py-6">
              <div className="p-8 px-6">
                <div className="flex items-start space-x-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 bg-[#002443]/10 rounded-2xl flex items-center justify-center">
                      <principle.icon className="w-8 h-8 text-[#002443]" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-6xl font-bold text-[#002443]/20 mb-2">
                      {principle.number}
                    </div>
                    <h4 className="text-xl font-semibold text-[#0f0a03] mb-3">{principle.title}</h4>
                    <p className="text-[#777165] leading-relaxed">{principle.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Innovation Section */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#002443]/10 rounded-full mb-6">
            <Lightbulb className="w-10 h-10 text-[#002443]" />
          </div>
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0f0a03] mb-4">
            Innovación, Experiencia y Resultados
          </h3>
          <p className="text-lg text-[#777165] max-w-3xl mx-auto leading-relaxed">
            Mediante una planificación estratégica, contribuimos al desarrollo, consolidación y expansión de su empresa.
            Ofrecemos soluciones integrales adaptadas a las necesidades específicas de cada cliente.
          </p>
        </div>
      </div>
    </section>
  )
}