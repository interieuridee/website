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
        <title>Interieur-Idee | Interieurarchitect Delft - Guusje Bosman</title>
        <meta
          name="description"
          content="Interieur-Idee realiseert doordachte interieurontwerpen voor particulieren en bedrijven. Ontdek onze aanpak en projecten in Delft en omgeving."
        />
        <meta
          property="og:title"
          content="Interieur-Idee | Interieurarchitect Delft - Guusje Bosman"
        />
        <meta
          property="og:description"
          content="Interieur-Idee realiseert doordachte interieurontwerpen voor particulieren en bedrijven. Bekijk onze projecten en unieke aanpak."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/lovable-uploads/interieur-idee logo.webp"
        />
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
