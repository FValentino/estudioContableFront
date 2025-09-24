import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import {z} from "zod"
import { InputForm } from "../common/form/inputForm";
import { Mail } from "lucide-react";

const schema = z.object({
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido")
});

type FormValues = z.infer<typeof schema>

export default function News(){

  const {control, handleSubmit, formState:{errors}} = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues:{
      email: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
      console.log(data)
    }

  return(
    <section className="w-[90%] my-6 p-6 mx-auto rounded-xl shadow-sm bg-[#171717] md:w-[50%]">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-background border-border">
          <div className="w-full">
            <h2 className="text-3xl font-bold mb-4 text-[#1447e6] text-center ">Mantente Informado</h2>
            <p className="w-full text-lg mb-8">
              Dejanos tu mail para recibir boletines
              y data importante que te va servir
              para el día a día de tu empresa.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center space-y-4"> 
              <InputForm<FormValues> name="email" control={control} placeHolder="tu@email.com" Icon={Mail} error={errors.email} />
              <button type="submit" className="w-[90%] mx-auto bg-[#1447e6]  mt-3 py-1 rounded-lg text-lg hover:cursor-pointer">
                Suscribirse
              </button>
            </form>
            
          </div>
        </div>
      </div>
      
    </section>
  );
}