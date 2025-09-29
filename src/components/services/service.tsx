import type { ComponentType, SVGProps } from "react";

interface services{
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>
  description: string;
}

interface CategoryProps{
  title: string;
  description: string;
  services: services[];
  gradient: string;
}

interface ServiceProps{
  category: CategoryProps;
}


export default function Service({category}: ServiceProps){
  return (
    <div 
      className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group
                bg-[#ffffff] text-[#0f0a03] flex flex-col gap-6 rounded-xl py-6">
      <div data-slot="card-header"
        className={`bg-gradient-to-br ${category.gradient} rounded-t-lg py-4
          @container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start 
          gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6
        `}>
        <div className="text-xl font-semibold text-[#0f0a03] mb-2 leading-none">
          {category.title}
        </div>
        <p className="text-sm text-[#777165]">{category.description}</p>
      </div>
      <div className="p-6 px-6">
        <div className="space-y-4">
          {category.services.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-[#ebe4d6]/50 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-[#002443]/10 rounded-lg flex items-center justify-center">
                <service.icon className="w-5 h-5 text-[#002443]" />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-foreground mb-1">{service.name}</h4>
                <p className="text-sm text-[#777165]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}