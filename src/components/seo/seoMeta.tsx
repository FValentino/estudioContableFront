// SeoMeta.tsx

export default function SeoMeta () {
    // --- Valores Fijos ---
    const TITLE: string = 'I&M Gestión de Negocios | Estudio Contable y Soluciones Integrales';
    const DESCRIPTION: string = 'Soluciones empresariales integrales, dinámicas y eficientes. Conectamos con tu negocio para planificar su desarrollo, consolidación y expansión.';
    const URL_BASE: string = 'https://www.imgestion.com.ar/';
    const IMAGE: string = `${URL_BASE}share-image.jpg`;
    const BUSINESS_NAME: string = 'I&M Gestión de Negocios';
    const EMAIL: string = 'imgestiondenegocios@gmail.com'; 

    const schemaJson: string = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "I&M Gestión de Negocios",
      "url": "https://www.imgestion.com.ar/",
      "image": "https://www.imgestion.com.ar/share-image.jpg",
      "description": "Soluciones empresariales integrales, dinámicas y eficientes. Estudio Contable especializado en planificación de desarrollo, consolidación y expansión de negocios.",
      "email": {EMAIL},
      "serviceType": [
        "Estudio Contable",
        "Asesoría Empresarial",
        "Consultoría de Gestión",
        "Soluciones Contables Integrales"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Contable y Asesoría Comercial",
        "email": "imgestiondenegocios@gmail.com",
        "areaServed": "AR"
      },
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://www.imgestion.com.ar/#contacto"
      },
      "sameAs": [
        "https://www.imgestion.com.ar/"
        // 📌 Aquí van las URLs de redes sociales, ej:
        // "https://www.linkedin.com/company/imgestiondenegocios/" 
      ]
    });

    return (
        <> 
            {/* 🌐 SEO BÁSICO */}
            <title>{TITLE}</title>
            <meta name="description" content={DESCRIPTION} />
            
            {/* 💥 CANONICALIZACIÓN: SIEMPRE la raíz */}
            <link rel="canonical" href={URL_BASE} /> 
            <meta name="robots" content="index, follow" />
            
            {/* 🧠 OPEN GRAPH */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={TITLE} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:url" content={URL_BASE} /> 
            <meta property="og:image" content={IMAGE} />
            <meta property="og:site_name" content={BUSINESS_NAME} />
            <meta property="og:locale" content="es_AR" />
            
            {/* 🐦 TWITTER CARD */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={TITLE} />
            <meta name="twitter:description" content={DESCRIPTION} />
            <meta name="twitter:image" content={IMAGE} />

            {/* 🧩 DATOS ESTRUCTURADOS (Schema.org) */}
            <script type="application/ld+json">
              {schemaJson}
            </script>
        </>
    );
};