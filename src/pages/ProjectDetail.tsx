import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionTitle from "@/components/shared/SectionTitle";
import { useIsMobile } from "@/hooks/use-mobile";
import Quote from "@/components/shared/Quote";

// Project data
const projectData = {
  "zondagsschool": {
    title: "Woning in voormalige zondagsschool",
    subtitle: "Transformatie van een gesloten pand naar een woonhuis met een licht en open karakter",
    coverImage: "/lovable-uploads/fotoss/mastenstraat header.webp",
    description: `Een voormalige zondagsschool uit 1952 is getransformeerd tot een comfortabele woning. Oorspronkelijk bestond het pand uit kantoor- en vergaderruimtes op de begane grond en een grote open ruimte op de verdieping, bereikbaar via binnen- en buitentrap. Het pand is met respect voor de oorspronkelijke structuur herbestemd tot een comfortabele en eigentijdse woning.`,
    challenge: `Het pand had een gesloten zijgevel, een ongelukkig geplaatste trap in een hoek en geen entree aan de straatzijde. Daarnaast ontbrak isolatie in vloer, dak en ramen en bestond de tuin volledig uit stoeptegels.`,
    solution: `Er zijn extra ramen in de zijgevel en dak geplaatst en de trap is centraal in de woning gebracht, wat een open indeling boven mogelijk maakte. De overloop fungeert nu als tweede zitkamer. Het verlaagde plafond is verwijderd en het dak is van buitenaf geïsoleerd, waardoor het originele dakbeschot zichtbaar is gebleven. Alle ramen en vloeren zijn vernieuwd en geïsoleerd. Op de begane grond is een nieuwe entree aan de straatzijde gerealiseerd, wat het pand een duidelijker aanzicht geeft. Tot slot zijn de stoeptegels in de tuin deels vervangen door gras, en zijn er tussenliggend klinkertjes geplaatst.`,
    details: {
      locatie: "Delft, centrum",
      jaar: "2013",
      oppervlak: "200 m2"
    },
    impressies: [
      "/Zondagschoolfotos/voor foto groot eetkamer.webp",
      "/Zondagschoolfotos/vd Mastenstraat zijgevel na  (1).webp",
      "/Zondagschoolfotos/vd Mastenstraat voor.webp",
      "/Zondagschoolfotos/vd Mastenstraat vóór (22).webp",
      "/Zondagschoolfotos/vd Mastenstraat vóór (18).webp",
      "/Zondagschoolfotos/vd Mastenstraat vóór (11).webp",
      "/Zondagschoolfotos/vd Mastenstraat vóór (9).webp",
      "/Zondagschoolfotos/vd Mastenstraat na  (1).webp",
      "/Zondagschoolfotos/mastenstraatheader.webp",
      "/Zondagschoolfotos/DSC_7332.webp",
      "/Zondagschoolfotos/vd Mastensraat na .webp"
    ]
  },
  "penthousedenhaag": {
    title: "Penthouse Den Haag",
    subtitle: "Herindeling en renovatie jaren 70 appartement",
    coverImage: "/penthousedenhaag/headerenprojectkaart/headerpenthouse.webp",
    description: `Een 3 kamer Penthouse uit de jaren 70 was in oorspronkelijke
staat en werd verkocht door de eerste bewoner.
Het appartement is verbouwd tot een eigentijdse woning voor 1
persoon.`,
    challenge: `Bij binnenkomst kwam je in een wat donkere hal. Het penthouse
heeft ongeveer dezelfde indeling als de onderliggende
appartementen, maar is aan de voor- en achterzijde 1 meter
korter, om plaats te maken voor de balkons. Hierdoor was de
keuken en één van de slaapkamers wel erg krap.`,
    solution: `Om meer licht in de entreehal te brengen kreeg de hal een
glazen wand naar de keuken op het extra brede aanrechtblad
dat doorloopt in de hal als dressoir. Hierdoor komt er daglicht in
de hal en lijkt de keuken ruimtelijker. De dubbele deuren van de
hal naar de zitkamer zijn verwijderd. Verder is de deuropening
van de keuken naar de eetkamer breder gemaakt en het
keukenblad loopt iets de kamer in.
De badkamer is verkleind en de gang verwijderd, waardoor de
slaapkamer ruimer geworden is en er plaats is voor kastruimte. De werkkamer kreeg een nieuwe toegang via de zitkamer.`,
    details: {
      locatie: "Den Haag, Benoordenhout",
      oppervlak: "121 m2"
    },
    impressies: [
      "/penthousedenhaag/voor/1oud.webp",
      "/penthousedenhaag/voor/2oud.webp",
      "/penthousedenhaag/voor/3oud.webp",
      "/penthousedenhaag/voor/4oud.webp",
      "/penthousedenhaag/voor/5oud.webp",
      "/penthousedenhaag/voor/6oud.webp",
      "/penthousedenhaag/na/1.webp",
      "/penthousedenhaag/na/2.webp",
      "/penthousedenhaag/na/3.webp",
      "/penthousedenhaag/na/4.webp",
      "/penthousedenhaag/na/5.webp",
      "/penthousedenhaag/na/6.webp"
    ],
    review: {
      text: `
“Ik kwam in contact met Guusje door een appartement wat zij geflipt had, maar ik zocht iets met meer 
buitenruimte. Guusje heeft niet alleen deze flat voor mij gevonden, maar ook de renovatie op zich genomen 
met haar team. Samen hebben wij de indeling bedacht zoals hij nu is. Zonder de hulp en toewijding van 
Guusje zou mijn flat geen paleis(je) zijn geworden.”`,
      author: "Theda"
    }
  },
  "woonark": {
    title: "Woonark in het Spaarne",
    subtitle: "Nieuw ontworpen woonark met twee lagen",
    coverImage: "/woonarkfotos/woonarkheader.webp",
    description: `Voor deze nieuwe woonark ontwierpen we een licht en open alternatief ter vervanging van een oudere ark met vaste maximale afmetingen. Het nieuwe ontwerp speelt in op de wens voor een licht, ruimtelijk en flexibel geheel.`,
    challenge: `Hoewel de ark bedoeld is voor één persoon, bleek een twee-laagse opzet financieel gunstiger. De wens was een ruimtelijk, loftachtig gevoel en geen gang met kleine kamers. Functionele eisen waren o.a. een entree op kadeniveau, een terras maximaal 40 cm boven het water en een directe verbinding tussen eetkamer en terras.`,
    solution: `Door verschillende niveaus te laten verspringen met telkens 40 cm, ontstonden logische overgangen. De entree en slaapkamer op kadeniveau, keuken en terras iets lager, de zitkamer op waterniveau. Beneden wordt twee derde van de ruimte benut als woonverdieping, de rest als berging. Beneden zijn de ramen in de slaapkamers boven het betonnen casco geplaatst, wat resulteert in verhoogde kozijnen met daglichttoetreding van bovenaf. De uitspringende koven die hierdoor boven ontstaan, worden daar als zitbanken gebruikt. De indeling is flexibel, twee slaapkamers zijn eenvoudig samen te voegen tot één royale ruimte.`,
    details: {
      locatie: "Haarlem, Spaarne",
      jaar: "2021",
      oppervlak: "150 m2"
    }
  },
  "brandweerkazerne": {
    title: "Projectinrichting en kleuradvies brandweerkazerne",
    subtitle: "Een tweede thuis op het werk",
    coverImage: "/brandweerkazernefotos/20250513_132149.webp",
    description: `Voor de nieuwe kazerne was nog geen kleur- en materiaalplan opgesteld voor het vaste en losse meubilair, evenals de stoffering. De opdracht richtte zich op de inrichting van diverse ruimten, waaronder de entree, zitkamer, woonkeuken, slaapkamers, kantoren en leslokalen.`,
    challenge: `Binnen de kazerne werken drie teams in ploegendienst. Omdat de kazerne fungeert als hun tweede thuis, was het essentieel dat alle teams zich prettig voelen in de ruimtes ondanks uiteenlopende voorkeuren. Met name het zitcomfort en de robuustheid van de relaxstoelen in de zitkamer waren cruciaal. Daaruit moest men snel kunnen opstaan bij een noodoproep.`,
    solution: `Door vanaf de start alle teams actief te betrekken bij het ontwerpproces, ontstond er draagvlak voor een gezamenlijke visie. De gekozen kleuren en materialen sloten aan op het bestaande architectonisch ontwerp, zodat een harmonieus geheel ontstond. Na het testen van diverse modellen, kozen de teams unaniem voor een relaxstoel met vier poten en een los voetenbankje, uitgevoerd in vier kleuren kunstleer. Daarnaast kregen persoonlijke elementen een plek in het ontwerp. Ingezonden foto’s van medewerkers werden verwerkt tot fotobehang op meerdere locaties in het gebouw.`,
    details: {
      locatie: "Rotterdam, RTHA",
      jaar: "2020",
      oppervlak: null
    }
  },
  "vakantiehuisMaas": {
    title: "Vakantiehuis aan de Maas",
    subtitle: "Verbouwing van chalet op palen",
    coverImage: "/vakantiehuisMaas/20240827_130503.webp",
    description: `Een chalet op palen aan de afgedamde maas met 3 slaapplaatsen is verbouwd tot een 4-persoons vakantiehuis door een deel van de berging bij het woongedeelte te trekken.`,
    challenge: `In de bestaande indeling zat de toegang naar de badkamer in de grotere slaapkamer. In de kleinere slaapkamer kon slechts een 1-persoonsbed staan. De gehele woning had een verlaagd plafond en ademde niet de sfeer uit van wonen aan het water. Er was aan de achterzijde geen toegang tot het terras. Voor de verbouwing was maar een zeer beperkt budget.`,
    solution: `Door een deel van de naastgelegen berging bij de woning te trekken, kon de grote slaapkamer doorschuiven en de kleine slaapkamer groter gemaakt worden. Deze aanpassing is zodanig uitgevoerd dat de badkamer op de oorspronkelijke locatie kon blijven, maar nu via een gang toegankelijk is. Aan de achterzijde zijn 2e hands openslaande deuren geplaatst. Het verlaagde plafond in de zitkamer/keuken is verwijderd, de keuken vervangen door een iets groter model dat afkomstig is uit een showroomverkoop.`,
    details: {
      locatie: "Veen, afgedamde maas",
      jaar: "2021",
      oppervlak: "40 m2"
    },
    impressies: [
      "/vakantiehuisMaas/20240827_100219.webp",
      "/vakantiehuisMaas/20250502_103131.webp",
      "/vakantiehuisMaas/20250502_120715.webp",
      "/vakantiehuisMaas/20250505_091759.webp",
      "/vakantiehuisMaas/9- Veense Put 262 - 264 Veen.webp",
      "/vakantiehuisMaas/10- Veense Put 262 - 264 Veen.webp",
      "/vakantiehuisMaas/13- Veense Put 262 - 264 Veen.webp",
      "/vakantiehuisMaas/20240827_130503.webp",
      "/vakantiehuisMaas/20250502_104112.webp",
      "/vakantiehuisMaas/20250502_121323.webp"
    ]
  },
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const isMobile = useIsMobile();
  
  const project = id && projectData[id as keyof typeof projectData] 
    ? projectData[id as keyof typeof projectData]
    : undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <main className="pt-32 pb-16">
        <div className="container-custom">
          <h2 className="text-3xl font-serif text-left">Project niet gevonden</h2>
        </div>
      </main>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{`${project.title} | Projecten | Interieur-Idee`}</title>
        <meta name="description" content={project.description} />
        <meta property="og:title" content={`${project.title} | Projecten | Interieur-Idee`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={project.coverImage} />
      </Helmet>
      {/* Hero Section */}
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            id === "vakantiehuisMaas"
              ? "/vakantiehuisMaas/20240827_100219.webp"
              : id === "zondagsschool"
              ? "/Zondagschoolfotos/mastenstraatheader.webp"
              : project.coverImage
          })`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="container-custom relative z-10 h-full flex flex-col justify-end pb-8 text-left">
          <h1 className="text-white text-4xl font-serif mb-2 text-left">{project.title}</h1>
          <p className="text-white text-lg text-left">{project.subtitle}</p>
        </div>
      </section>
      
      {/* Project Info */}
      <section className="section bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif mb-6 text-left">Over dit project</h2>
              <p className="mb-6">{project.description}</p>
              <div className="mb-8">
                <h3 className="text-2xl font-serif mb-4 text-left">De uitdaging</h3>
                <p>{project.challenge}</p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4 text-left">Onze oplossing</h3>
                <p>{project.solution}</p>
              </div>
            </div>
            
            <div className="bg-white p-6 shadow-md self-start">
              <h3 className="text-2xl font-serif mb-4 text-left">Projectdetails</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500">Locatie</p>
                  <p>{project.details.locatie}</p>
                </div>
                {project.details.oppervlak && (
                  <div>
                    <p className="text-sm text-gray-500">Oppervlak</p>
                    <p>{project.details.oppervlak}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Impressie */}
      <section className="section bg-cream">
        <div className="container-custom">
          <h2 className="text-3xl font-serif mb-8 text-left">Impressie</h2>
          {id === "penthousedenhaag" ? (
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-6 text-left">Voor verbouwing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "/penthousedenhaag/voor/1oud.webp",
                    "/penthousedenhaag/voor/2oud.webp",
                    "/penthousedenhaag/voor/3oud.webp",
                    "/penthousedenhaag/voor/4oud.webp",
                    "/penthousedenhaag/voor/5oud.webp",
                    "/penthousedenhaag/voor/6oud.webp"
                  ].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Penthouse Den Haag voor verbouwing"
                      className="w-full h-[250px] object-cover shadow-md"
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-6 text-left">Na verbouwing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "/penthousedenhaag/na/1.webp",
                    "/penthousedenhaag/na/2.webp",
                    "/penthousedenhaag/na/3.webp",
                    "/penthousedenhaag/na/4.webp",
                    "/penthousedenhaag/na/5.webp",
                    "/penthousedenhaag/na/6.webp"
                  ].map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt="Penthouse Den Haag na verbouwing"
                      className="w-full h-[250px] object-cover shadow-md"
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : id === "vakantiehuisMaas" ? (
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium mb-6 text-left">Voor verbouwing</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "/Zondagschoolfotos/Voor/vd Mastenstraat voor.webp",
                    "/Zondagschoolfotos/Voor/voor1.JPG",
                    "/Zondagschoolfotos/Voor/vd Mastenstraat vóór (11).jpg",
                    "/Zondagschoolfotos/Voor/vd Mastenstraat vóór (9).jpg",
                    "/Zondagschoolfotos/Voor/vd Mastenstraat vóór (18).jpg",
                    "/Zondagschoolfotos/Voor/vd Mastenstraat vóór (22).jpg"
                  ].map((image, index) => (
                    <img
                      key={index}
                      src={image.replace(/\.(jpg|jpeg|png)$/i, ".webp")}
                      alt="Zondagsschool voor verbouwing"
                      className={
                        index === 0
                          ? "w-full h-[400px] object-cover object-left shadow-md"
                          : "w-full h-[400px] object-cover shadow-md"
                      }
                    />
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-6 text-left">Na verbouwing</h3>
                <p className="text-sm text-gray-500 italic text-left mb-6">fotografie: Barbra Verbij</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    "/Zondagschoolfotos/Na/_R6_0075 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0065 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/Afbeelding van WhatsApp op 2025-05-17 om 09.18.17_4863698a.jpg",
                    "/Zondagschoolfotos/Na/_R6_0104 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0109 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0121 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0162 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/Afbeelding van WhatsApp op 2025-05-17 om 10.28.49_cf28d9df.jpg",
                    "/Zondagschoolfotos/Na/_R6_0147 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0125 3 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0149 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0138 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0178 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0181 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/_R6_0173 langer 2 © Barbra Verbij klein.jpg",
                    "/Zondagschoolfotos/Na/tuin zondagsschool extra 1.jpg",
                    "/Zondagschoolfotos/Na/vd Mastensraat na .jpg",
                    "/Zondagschoolfotos/Na/tuin zondagsschool extra 2.jpg"
                  ].map((image, index) => (
                    <img
                      key={index}
                      src={image.replace(/\.(jpg|jpeg|png)$/i, ".webp")}
                      alt="Zondagsschool na verbouwing"
                      className={
                        image === "/Zondagschoolfotos/Na/_R6_0173 langer 2 © Barbra Verbij klein.jpg"
                          ? "w-full h-[400px] object-cover object-left shadow-md"
                          : image === "/Zondagschoolfotos/Na/_R6_0181 © Barbra Verbij klein.jpg"
                          ? "w-full h-[400px] object-cover object-bottom shadow-md"
                          : "w-full h-[400px] object-cover shadow-md"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {id === "woonark" && [
                "/woonarkfotos/WATERZIJDE.JPG",
                "/woonarkfotos/WALZIJDE.JPG",
                "/woonarkfotos/ZIJGEVELS.JPG",
                "/woonarkfotos/Afbeelding van WhatsApp op 2025-05-21 om 18.06.35_5ed5e667.jpg",
                "/woonarkfotos/woonarkheader.jpg",
                "/woonarkfotos/maps voorgevel.jpg",
                "/woonarkfotos/Afbeelding van WhatsApp op 2025-05-21 om 14.18.11_6debfe8a.jpg",
                "/woonarkfotos/IMG-20211111-WA0031.jpg",
                "/woonarkfotos/IMG-20211111-WA0030.jpg"
              ].map((image, index) => (
                <img 
                  key={index} 
                  src={image.replace(/\.(jpg|jpeg|png)$/i, ".webp")} 
                  alt="Impressie Woonark" 
                  className={`w-full shadow-md ${
                    index < 3 
                      ? "h-[300px] md:h-[400px] object-contain bg-white" 
                      : "h-[250px] object-cover"
                  }`}
                />
              ))}
              {id === "brandweerkazerne" && [
                "/brandweerkazernefotos/20250513_132149.jpg",
                "/brandweerkazernefotos/IMG-20200730-WA0003.jpg",
                "/brandweerkazernefotos/20200730_105546.jpg",
              ].map((image, index) => (
                <img key={index} src={image.replace(/\.(jpg|jpeg|png)$/i, ".webp")} alt="Impressie Brandweerkazerne" className="w-full h-auto shadow-md" />
              ))}
              {/* Extra WhatsApp foto's */}
              {id === "brandweerkazerne" && [
                "/brandweerkazernefotos/Afbeelding van WhatsApp op 2025-05-16 om 17.01.45_1be2a254.jpg",
                "/brandweerkazernefotos/Afbeelding van WhatsApp op 2025-05-16 om 17.01.45_4c3d3256.jpg",
                "/brandweerkazernefotos/Afbeelding van WhatsApp op 2025-05-16 om 17.01.45_c3af1056.jpg",
                "/brandweerkazernefotos/Afbeelding van WhatsApp op 2025-05-16 om 17.01.45_29296cd8.jpg",
                "/brandweerkazernefotos/Afbeelding van WhatsApp op 2025-05-16 om 17.01.45_960fc76a.jpg",
                "/brandweerkazernefotos/Afbeelding van WhatsApp op 2025-05-16 om 17.01.46_eabe12a5.jpg"
              ].map((image, index) => (
                <img key={"whatsapp-"+index} src={image.replace(/\.(jpg|jpeg|png)$/i, ".webp")} alt="Impressie Brandweerkazerne extra" className="w-full h-auto shadow-md" />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* Plattegronden voor zondagsschool */}
      {id === "zondagsschool" && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif mb-8 text-left">Plattegronden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8">
              <img src="/plattegronden/vakantiehuisplattegrond (2).webp" alt="Plattegrond Zondagsschool 1" className="w-full h-[260px] md:h-[500px] object-contain bg-white rounded-lg" />
              <img src="/plattegronden/vakantiehuisplattegrond5 (1).webp" alt="Plattegrond Zondagsschool 2" className="w-full h-[260px] md:h-[500px] object-contain bg-white rounded-lg" />
            </div>
          </div>
        </section>
      )}

      {/* Plattegronden voor penthousedenhaag */}
      {id === "penthousedenhaag" && (
        <section className="section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-serif mb-8 text-left">Plattegronden</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <img 
                src="/penthousedenhaag/plattegronden/plattegrondvoor.webp" 
                alt="Plattegrond Penthouse Den Haag Voor" 
                className="w-full md:w-1/2 h-[600px] object-contain bg-white rounded-lg" 
              />
              <img 
                src="/penthousedenhaag/plattegronden/plattegrondna.webp" 
                alt="Plattegrond Penthouse Den Haag Na" 
                className="w-full md:w-1/2 h-[600px] object-contain bg-white rounded-lg" 
              />
            </div>
          </div>
        </section>
      )}
      {/* Review for penthousedenhaag */}
      {id === "penthousedenhaag" && project.review && (
        <section className="section bg-white">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif mb-8 text-center">Review van de opdrachtgever</h2>
            <div className="bg-white p-6 lg:p-8 rounded-lg shadow-md h-full relative">
              <div className="flex flex-col h-full relative">
                {/* Quote mark */}
                <div className="absolute -left-1 -top-4">
                  <span className="text-7xl font-serif text-taupe opacity-80">"</span>
                </div>
                {/* Review text */}
                <div className="flex-grow relative z-10 pt-8">
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed whitespace-pre-line">
                    {project.review.text}
                  </p>
                </div>
                {/* Author section */}
                <div className="mt-4 flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-taupe flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="font-serif text-base font-bold text-charcoal">{project.review.author}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* WhatsApp Button */}
      <a 
        href={`https://wa.me/31654994964`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="whatsapp-button"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "28"} height={isMobile ? "24" : "28"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z"/>
          <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2Z"/>
          <path d="M12 9.5c.5 0 1 .1 1 .5v1c0 .4-.5.5-1 .5s-1-.1-1-.5v-1c0-.4.5-.5 1-.5Z"/>
        </svg>
      </a>
    </>
  );
}
