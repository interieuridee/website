import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import FeaturedQuote from "@/components/home/FeaturedQuote";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ImageQuote from "@/components/home/ImageQuote";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Interieur-Idee | Interieurarchitect Delft - Expert in Verbouwing & Styling</title>
        <meta
          name="description"
          content="Interieur-Idee realiseert doordachte interieurontwerpen voor particulieren en bedrijven. ✓ 15+ jaar ervaring ✓ Persoonlijke aanpak ✓ Delft en omgeving. Bekijk onze projecten!"
        />
        <meta
          name="keywords"
          content="interieurarchitect delft, interieurontwerp, verbouwing, herbestemming, interieuradvies, woningverbouwing, guusje bosman"
        />
        <link rel="canonical" href="https://interieur-idee.nl" />
        <meta
          property="og:title"
          content="Interieur-Idee | Interieurarchitect Delft - Expert in Verbouwing & Styling"
        />
        <meta
          property="og:description"
          content="Interieur-Idee realiseert doordachte interieurontwerpen voor particulieren en bedrijven. Bekijk onze projecten en unieke aanpak in Delft en omgeving."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interieur-idee.nl" />
        <meta
          property="og:image"
          content="/lovable-uploads/interieur-idee logo.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Interieur-Idee",
            "image": "/lovable-uploads/interieur-idee logo.webp",
            "description": "Interieurarchitect in Delft, specialist in interieurontwerp en verbouwingen",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Delft",
              "addressRegion": "Zuid-Holland",
              "addressCountry": "NL"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "52.011577",
              "longitude": "4.357068"
            },
            "url": "https://interieur-idee.nl",
            "telephone": "+31654994964",
            "priceRange": "€€€",
            "sameAs": [
              "https://www.linkedin.com/company/interieur-idee"
            ]
          })}
        </script>
      </Helmet>
      <Hero />
      <About />
      <FeaturedQuote />
      <ImageQuote />
      <Philosophy />
      <FeaturedProjects />
    </>
  );
};

export default Index;
