import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ProjectCard from "@/components/shared/ProjectCard";
import SectionTitle from "@/components/shared/SectionTitle";

const projects = [
	{
		id: "woonhuis1910",
		title: "Woonhuis Delft 1910",
		category: "VERBOUWING",
		imageUrl: "/woonhuis1910/0.jpg",
	},
	{
		id: "zondagsschool",
		title: "Woning in voormalige zondagsschool",
		category: "Herbestemming",
		imageUrl: "/Zondagschoolfotos/mastenstraatheader.webp",
	},
	{
		id: "woonark",
		title: "Woonark in het Spaarne",
		category: "Ontwerp",
		imageUrl: "/woonarkfotos/woonarkheader.webp",
	},
	{
		id: "brandweerkazerne",
		title: "Projectinrichting en kleuradvies brandweerkazerne",
		category: "Zakelijk",
		imageUrl: "/brandweerkazernefotos/20250513_132149.webp",
	},
	{
		id: "vakantiehuisMaas",
		title: "Vakantiehuis aan de Maas",
		category: "Herindeling",
		imageUrl: "/vakantiehuisMaas/20240827_100219.webp",
	},
	{
		id: "penthousedenhaag",
		title: "Penthouse Den Haag",
		category: "VERBOUWING",
		imageUrl: "/penthousedenhaag/headerenprojectkaart/projectkaartafbeeldingpenthouse.webp",
	},
];

export default function Projecten() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Helmet>
				<title>Interieurprojecten | Interieur-Idee | Verbouwing & Ontwerp</title>
				<meta
					name="description"
					content="Bekijk onze portfolio van gerealiseerde interieurprojecten. ✓ Verbouwingen ✓ Herbestemmingen ✓ Zakelijke projecten. Inspiratie voor woningen, woonarken en meer in Delft en omgeving."
				/>
				<meta
					name="keywords"
					content="interieurontwerp, verbouwing, herbestemming, interieurarchitect delft, woningverbouwing, zakelijke projecten, interieuradvies"
				/>
				<link rel="canonical" href="https://interieur-idee.nl/projecten" />
				<meta property="og:title" content="Interieurprojecten | Interieur-Idee | Verbouwing & Ontwerp" />
				<meta
					property="og:description"
					content="Bekijk onze portfolio van gerealiseerde interieurprojecten. Verbouwingen, herbestemmingen en zakelijke projecten in Delft en omgeving."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://interieur-idee.nl/projecten" />
			</Helmet>

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
		</>
	);
}
