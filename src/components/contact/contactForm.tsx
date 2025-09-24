import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import {z} from "zod"
import { InputForm } from "../common/form/inputForm";
import { TextAreaForm } from "../common/form/textAreaForm";
import { Mail, Phone } from "lucide-react";


const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido"),
  phone: z.string().min(1, "El telefono es obligatorio").regex(/^\d+$/, "Telefono no puede contener caracteres").min(8, "El telefono es muy corto").max(10, "El telefono es muy largo"),
  message: z.string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});

type FormValues = z.infer<typeof schema>

export default function ClientRegisterForm(){


  const {control, handleSubmit, formState:{errors}} = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues:{
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data)
  }

  return(
    <div className="w-full ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center space-y-4"> 
        <InputForm<FormValues> name="name" control={control} placeHolder="Nombre completo" Icon={Mail} error={errors.name} />
        <div className="w-[90%] flex justify-around">
          <div className="w-[50%] ">
            <InputForm<FormValues> name="email" control={control} placeHolder="Email" Icon={Mail} error={errors.email}/>
          </div>
          <div className="w-[50%] flex justify-end">
            <InputForm<FormValues> name="phone" control={control} placeHolder="Telefono" Icon={Phone} error={errors.phone} />
          </div>
        </div>
        <TextAreaForm<FormValues> name="message" control={control} 
        placeHolder="Cuentanos sobre tu proyecto o consulta" error={errors.message} />

        <button type="submit" className="w-[90%] mx-auto bg-[#1447e6]  mt-3 py-1 rounded-lg text-lg hover:cursor-pointer">
          Enviar Consulta
        </button>
      </form>
    </div>
  );
}