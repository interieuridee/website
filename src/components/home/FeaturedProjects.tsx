import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "../shared/ProjectCard";
import { Link } from "react-router-dom";

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
		id: "vakantiehuisMaas",
		title: "Vakantiehuis aan de Maas",
		category: "Herindeling",
		imageUrl: "/vakantiehuisMaas/20240827_100219.jpg",
	},
];

export default function FeaturedProjects() {
	return (
		<section className="section bg-offwhite">
			<div className="container-custom">
				<SectionTitle
					title="Projecten"
					subtitle="Een aantal van onze projecten uitgelicht"
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<ProjectCard key={project.id} {...project} />
					))}
				</div>

				<div className="mt-12 text-center">
					<Link
						to="/projecten"
						className="inline-block px-8 py-3 border border-taupe text-charcoal hover:bg-taupe hover:text-white transition-colors uppercase tracking-wider text-sm"
					>
						Bekijk projecten
					</Link>
				</div>
			</div>
		</section>
	);
}
