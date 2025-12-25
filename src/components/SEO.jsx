import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = 'Doctora - Dünya Çapında Sağlık Turizmi Platformu',
  description = 'Türkiye, Tayland, Almanya ve daha fazlasında en iyi doktorlar ve kliniklerle bağlantı kurun. Saç ekimi, rinoplasti, diş implantı ve daha fazlası için %70\'e varan tasarruf.',
  keywords = 'sağlık turizmi, medikal turizm, saç ekimi, rinoplasti, diş implantı, türkiye sağlık, estetik cerrahi, tüp bebek, ucuz tedavi',
  image = 'https://doctora.com/og-image.jpg',
  url = 'https://doctora.com',
  type = 'website',
  author = 'Doctora Medical Tourism',
  locale = 'tr_TR',
  siteName = 'Doctora'
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": "Doctora",
          "description": description,
          "url": url,
          "logo": "https://doctora.com/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-20-3807-5678",
            "contactType": "Customer Service",
            "availableLanguage": ["Turkish", "English", "German", "Arabic"]
          },
          "sameAs": [
            "https://facebook.com/doctora",
            "https://instagram.com/doctora",
            "https://twitter.com/doctora"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
