import ContactForm from "./contactForm";

export default function Contact(){
  const email = import.meta.env.VITE_EMAIL;
  return(
    <section className="w-[90%] my-6 p-6 mx-auto rounded-xl shadow-sm bg-[#171717] md:w-[50%]">
      <div className="w-full rouded-xl mb-6">
        <h2 className="text-2xl text-center font-semibold">¿Cómo podemos ayudarte?</h2>
      </div>
      <ContactForm/>
      <p className="w-full mt-4 text-lg text-center">
        Contacto:{" "}
        <a href="mailto:contacto@imgestion.com?subject=Consulta%20desde%20la%20web" 
        className="text-[#1447e6] hover:underline">
          {email}
        </a>
      </p>
    </section>
  );
}