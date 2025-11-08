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
				<title>Projecten | Interieur-Idee</title>
				<meta
					name="description"
					content="Bekijk een selectie van gerealiseerde interieurprojecten door Interieur-Idee. Inspiratie voor woningen, woonarken, vakantiehuizen en meer."
				/>
				<meta property="og:title" content="Projecten | Interieur-Idee" />
				<meta
					property="og:description"
					content="Inspiratie en voorbeelden van interieurprojecten door Interieur-Idee. Bekijk onze gerealiseerde projecten."
				/>
				<meta property="og:type" content="website" />
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
