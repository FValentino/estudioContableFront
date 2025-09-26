import type { ComponentType, SVGProps } from "react";
import { Controller, type Control, type FieldError, type FieldValues, type Path } from "react-hook-form";
interface Props<T extends FieldValues = FieldValues>{
  name: Path<T>
  control: Control<T>; 
  placeHolder?: string;
  Icon: ComponentType<SVGProps<SVGSVGElement> >
  type?: string;
  error?: FieldError
}

export function InputForm <T extends FieldValues = FieldValues>({name, control, placeHolder, Icon, type, error}: Props<T>){

  return(
    <div className="w-[90%] mx-auto flex flex-col mt-2 lg:mx-0">
      <div className="w-full relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white" />
        <Controller
          name={name}
          control={control}
          render={({ field })=>
            <input id={name} type={type} {...field} placeholder={placeHolder}
              className={`border rounded-lg px-2 py-2 pl-10 w-full 
                ${error ? "border-red-500" : "border-gray-300"}
                ${field.value ? "border-white border-3" : "border-gray-300"}`} 
            />}
        />
      </div>
      {error && <p className="text-sm text-[red]">{error.message}</p>}
    </div>
  );
}