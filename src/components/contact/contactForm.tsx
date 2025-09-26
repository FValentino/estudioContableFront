import toast, { Toaster } from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod"
import {z} from "zod"
import { useForm, type SubmitHandler } from "react-hook-form"
import { InputForm } from "../common/form/inputForm";
import { TextAreaForm } from "../common/form/textAreaForm";
import { Mail, Phone } from "lucide-react";
import { useSendEmail } from "../../hooks/useSendEmail";


const schema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().min(1, "El correo es obligatorio").email("Correo inválido"),
  phone: z.string().min(1, "El teléfono es obligatorio").regex(/^\d+$/, "Teléfono solo debe contener numeros").min(8, "El teléfono es muy corto").max(10, "El teléfono es muy largo"),
  message: z.string().min(1, "El mensaje es obligatorio").min(10, "El mensaje debe tener al menos 10 caracteres")
});

type FormValues = z.infer<typeof schema>

export default function ClientRegisterForm(){

  const {mutate, isPending} = useSendEmail();


  const {control, handleSubmit, formState:{errors}} = useForm<FormValues>({
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
      ...data
    }

    mutate(emaildata, {
      onSuccess: () => {
        toast.success("Email enviado correctamente 🎉");
      },
      onError: () => {
        toast.error("Ocurrió un error al enviar el mensaje ❌");
      },
    });

  }

  return(
    <div className="w-full ">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center space-y-4"> 
        <InputForm<FormValues> name="name" control={control} placeHolder="Nombre completo" Icon={Mail} error={errors.name} />
        <div className="w-full flex flex-col justify-around lg:flex-row lg:w-[90%]">
          <div className="w-full lg:w-[50%]">
            <InputForm<FormValues> name="email" control={control} placeHolder="Email" Icon={Mail} error={errors.email}/>
          </div>
          <div className="w-full flex flex-col justify-end items-end lg:w-[50%]">
            <InputForm<FormValues> name="phone" control={control} placeHolder="Teléfono" Icon={Phone} error={errors.phone} />
            <p className="w-[90%] text-sm font-bold">*Ingrese el teléfono sin 0 ni 15</p>
          </div>
        </div>
        <TextAreaForm<FormValues> name="message" control={control} 
        placeHolder="Cuentanos sobre tu proyecto o consulta" error={errors.message} />

        <button type="submit" className="w-[90%] mx-auto bg-[#1447e6] flex items-center justify-center mt-3 py-1 rounded-lg text-lg hover:cursor-pointer">
          {
            isPending && <div className="animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"></div>
          }
          Enviar Consulta
        </button>
      </form>

      <Toaster position="bottom-right" /> 
    </div>
  );
}