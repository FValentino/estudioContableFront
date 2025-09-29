import { Mail, MessageSquare } from "lucide-react";
import ContactForm from "./contactForm";

export default function Contact(){

  return(
    <section id="contacto" className="py-16 lg:py-24 bg-[#ebe4d6]/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          <div>
            <h2 className="text-sm font-semibold text-[#002443] uppercase tracking-wider mb-4">Contacto</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#0f0a03] mb-6">
              ¿Cómo Podemos Ayudarte?
            </h3>
            <p className="text-lg text-[#777165] mb-8 leading-relaxed">
              Estamos aquí para responder tus consultas y ayudarte a encontrar las mejores soluciones para tu empresa.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#002443]/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#002443]" />
                </div>
                <div>
                  <p className="font-medium text-[#0f0a03]">Email</p>
                  <p className="text-[#777165]">imgestiondenegocios@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border-0 shadow-lg bg-[#ffffff] text-card-foreground flex flex-col gap-6 rounded-xl py-6">
            <div data-slot="card-header"
              className={'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6'}
            >
              <div className="flex items-center space-x-2 leading-none font-semibold text-[#0f0a03]">
                <MessageSquare className="w-5 h-5 text-[#002443]" />
                <span>Envíanos tu Consulta</span>
              </div>
            </div>
            <div className="px-6">
              <ContactForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}