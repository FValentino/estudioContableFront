"use client"

import { useTransition } from "react";
import { useForm, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import toast, { Toaster } from "react-hot-toast";
import { emailContactFormValues, emailContactSchema } from "@/schemas/contactEmailSchema";
import { InputForm } from "../common/form/inputForm";
import { TextAreaForm } from "../common/form/textAreaForm";
import { Mail, Phone, Send } from "lucide-react";
import { contactEmailAction } from "@/actions/contactEmail";


export default function ContactForm(){

  const {control, handleSubmit, reset, formState:{errors}} = useForm<emailContactFormValues>({
    resolver: zodResolver(emailContactSchema),
    defaultValues:{
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<emailContactFormValues> = (data: emailContactFormValues) => {

    startTransition(async () => {
    
      const res = await contactEmailAction(data);

      if(res.success) {
        toast.success("Email enviado correctamente 🎉");
        reset();
      }else {
        toast.error("Ocurrió un error al enviar el mensaje ❌");
      }
    });

  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4"> 
        <InputForm<emailContactFormValues> name="name" control={control} placeHolder="Nombre completo" Icon={Mail} error={errors.name} />
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <InputForm<emailContactFormValues> name="email" control={control} placeHolder="Email" Icon={Mail} error={errors.email}/>
          </div>
          <div>
            <InputForm<emailContactFormValues> name="phone" control={control} placeHolder="Teléfono" Icon={Phone} error={errors.phone} />
            <p className="w-[90%] mx-auto text-xs text-[#0f0a03] font-bold lg:text-center">*Ingrese el teléfono sin 0 ni 15</p>
          </div>
        </div>
        <TextAreaForm<emailContactFormValues> name="message" control={control} 
        placeHolder="Cuentanos sobre tu proyecto o consulta" error={errors.message} />

        <button 
          type="submit" 
          disabled={isPending} 
          className="w-full flex items-center justify-center h-10 rounded-md px-6 bg-[linear-gradient(135deg,#002443_0%,#00464b_100%)] text-[#faf8f5] hover:cursor-pointer disabled:opacity-50"
        >
          {isPending ? (
            <div className="animate-spin w-6 h-6 rounded-full me-2 border-gray-800 border-2 border-s-3"></div>
          ) : (
            <>
              Enviar Consulta
              <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>

      <Toaster position="bottom-right" /> 
    </>
  );
}