import type { ComponentType, SVGProps } from "react";

interface services{
  id: number;
  name: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>
}


interface serviceProps{
  id: number;
  title: string;
  services: services[]
}


export default function Service({title, services}: serviceProps){
  return (
    <div className="bg-[#1447e6]/10 my-4 border-2 border-[#1447e6]/20 rounded-lg p-4">
      <div className="w-full mb-4">
        <h3 className="text-lg text-[#1447e6] text-center font-semibold">{title}</h3>
      </div>
      <ul className="w-full mx-auto space-y-4">
        {
          services.map((service)=>{
            const Icon = service.icon;
            return(
              <li key={service.id} className="flex">
                <Icon className="h-6 w-6 text-[#1447e6]"/>
                <span className="ms-4 text-[white] font-medium"> {service.name} </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}