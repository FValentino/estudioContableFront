export default function TermsAndConditions() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Términos y Condiciones</h1>
      <p>Bienvenido a I&amp;M: Gestión de negocios. Al utilizar nuestra aplicación, aceptás estos términos y condiciones.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Uso de la aplicación</h2>
      <p>La app permite enviar correos electrónicos autorizados por el usuario mediante Gmail y OAuth2. No está permitido usar la aplicación para enviar spam o contenido ilegal.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Responsabilidades</h2>
      <p>El usuario es responsable de otorgar autorización de manera legítima. Nosotros nos comprometemos a proteger los datos y a no usarlos con fines distintos a los autorizados.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Modificaciones</h2>
      <p>Podemos actualizar estos términos en cualquier momento, notificando cambios en nuestro sitio web.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Contacto</h2>
      <p>Para consultas sobre los términos, escribinos a: <a className="text-blue-600 underline" href={`mailto:${process.env.VITE_MAIL}`}>{process.env.VITE_MAIL}</a></p>
    </div>
  );
}
