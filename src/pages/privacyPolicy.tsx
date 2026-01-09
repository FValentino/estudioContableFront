export default function PrivacyPolicy() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Política de Privacidad</h1>
      <p>En I&amp;M: Gestión de negocios, respetamos la privacidad de nuestros usuarios.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Información que recolectamos</h2>
      <p>Recolectamos únicamente la información necesaria para enviar correos electrónicos autorizados por el usuario a través de Gmail mediante OAuth2.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Uso de la información</h2>
      <p>La información recolectada se utiliza exclusivamente para el envío de correos solicitados por el usuario y nunca se comparte con terceros sin consentimiento.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Protección de la información</h2>
      <p>Implementamos medidas de seguridad para proteger los datos de los usuarios.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
      <p>Si tenés preguntas sobre esta política, podés contactarnos en: <a className="text-blue-600 underline" href={`mailto:${process.env.VITE_MAIL}`}>{process.env.VITE_MAIL}</a></p>
    </div>
  );
}
