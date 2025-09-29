import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { InputForm } from "../common/form/inputForm";
import { TextAreaForm } from "../common/form/textAreaForm";
import { Mail, Phone, Send } from "lucide-react";
import { useSendEmail } from "../../hooks/useSendEmail";


const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido"),
  phone: z.string().min(1, "El teléfono es obligatorio").regex(/^\d+$/, "Teléfono solo debe contener numeros").min(8, "El teléfono es muy corto").max(10, "El teléfono es muy largo"),
  message: z.string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});

type FormValues = z.infer<typeof schema>

export default function ContactForm(){

  const {mutate, isPending} = useSendEmail();


  const {control, handleSubmit, reset, formState:{errors}} = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues:{
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    
    const emaildata ={
      subject: "contacto",
      message: `
        <h2>Me comunico desde la web:</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone}</p>
        <p><strong>Mensaje:</strong><br/>${data.message}</p>
      `
    }

    mutate(emaildata, {
      onSuccess: () => {
        toast.success("Email enviado correctamente 🎉");
        reset();
      },
      onError: () => {
        toast.error("Ocurrió un error al enviar el mensaje ❌");
      },
    });

  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
        <InputForm<FormValues> name="name" control={control} placeHolder="Nombre completo" Icon={Mail} error={errors.name} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <InputForm<FormValues> name="email" control={control} placeHolder="Email" Icon={Mail} error={errors.email}/>
          </div>
          <div>
            <InputForm<FormValues> name="phone" control={control} placeHolder="Teléfono" Icon={Phone} error={errors.phone} />
            <p className="w-[90%] mx-auto text-xs text-[#0f0a03] font-bold lg:text-center">*Ingrese el teléfono sin 0 ni 15</p>
          </div>
        </div>
        <TextAreaForm<FormValues> name="message" control={control} 
        placeHolder="Cuentanos sobre tu proyecto o consulta" error={errors.message} />

        <button type="submit" className="w-full flex items-center justify-center h-10 rounded-md px-6 has-[>svg]:px-4
                  bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer">
          {
            isPending && <div className="animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"></div>
          }
          Enviar Consulta
          <Send className={isPending? "hidden" : "w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"} />
        </button>
      </form>

      <Toaster position="bottom-right" /> 
    </>
  );
}