import { useEffect } from "react";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionTitle from "@/components/shared/SectionTitle";

const projects = [
  {
    id: "zondagsschool",
    title: "Woning in voormalige zondagsschool",
    category: "Herbestemming",
    imageUrl: "/Zondagschoolfotos/mastenstraatheader.jpg",
  },
  {
    id: "woonark",
    title: "Woonark in het Spaarne",
    category: "Ontwerp",
    imageUrl: "/woonarkfotos/woonarkheader.jpg",
  },
  {
    id: "brandweerkazerne",
    title: "Projectinrichting en kleuradvies brandweerkazerne",
    category: "Zakelijk",
    imageUrl: "/brandweerkazernefotos/20250513_132149.jpg",
  },
  {
    id: "vakantiehuisMaas",
    title: "Vakantiehuis aan de Maas",
    category: "Herindeling",
    imageUrl: "/vakantiehuisMaas/20240827_100219.jpg",
  },
];

export default function Projecten() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-custom">
          <SectionTitle
            title="Onze projecten"
            subtitle="Bekijk een selectie van onze projecten voor zowel particuliere als zakelijke opdrachtgevers."
          />
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
