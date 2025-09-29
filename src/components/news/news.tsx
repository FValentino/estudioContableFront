import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import {z} from "zod"
import { InputForm } from "../common/form/inputForm";
import { Bell, Mail } from "lucide-react";
import { useSendEmailNews } from "../../hooks/useSendEmail";
import toast from "react-hot-toast";

const schema = z.object({
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido")
});

type FormValues = z.infer<typeof schema>

export default function News(){

  const {mutate, isPending} = useSendEmailNews();

  const {control, handleSubmit, formState:{errors}} = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues:{
      email: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {

    const emaildata ={
      subject: "novedades",
      ...data
    }

    console.log(emaildata)

    mutate(emaildata, {
      onSuccess: () => {
        toast.success("Te has suscripto correctamente 🎉");
      },
      onError: () => {
        toast.error("Ocurrió un error al suscribirse ❌");
      },
    });

  }

  return(
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-[#0f0a03] flex flex-col gap-6 rounded-xl py-6 
        border-0 shadow-lg bg-[#e5dcca]">
          <div className="p-8 px-6 lg:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#002443]/10 rounded-full mb-6">
              <Bell className="w-8 h-8 text-[#002443]" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-[#0f0a03] mb-4 ">
              Mantente Informado
            </h3>

            <p className="text-lg text-[#777165] mb-8 max-w-2xl mx-auto leading-relaxed">
              Déjanos tu email para recibir boletines y data importante que te va servir para el día a día de tu
              empresa.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto"> 
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <InputForm<FormValues> name="email" control={control} placeHolder="tu@email.com" Icon={Mail} error={errors.email}/>
                </div>
                <button type="submit" className="flex items-center justify-center h-10 rounded-md px-6 has-[>svg]:px-4
                    bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer">
                  {
                    isPending && <div className="animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"></div>
                  }
                  Suscribirse
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}