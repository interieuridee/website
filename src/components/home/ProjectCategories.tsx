import SectionTitle from "../shared/SectionTitle";
const categories = {
  particulier: {
    title: "Particulier",
    description: "Voor particulieren met focus op grote opdrachten, zowel renovatie als nieuwbouw.",
    items: ["Herindeling/Herbestemming", "Nieuwbouwprojecten", "Oude huizen", "Seniorenwoningen", "Vakantiewoningen"],
    note: "Voornamelijk actief in Zuid-Holland, met nadruk op Delft en Den Haag."
  },
  zakelijk: {
    title: "Zakelijk",
    description: "Professionele interieurarchitectuur voor bedrijven en instellingen.",
    items: ["Kantoren / Bedrijfspanden", "Kopersbegeleiding nieuwbouwprojecten", "Herindeling/Herbestemming"],
    clients: ["Brandweer", "Rotterdam The Hague Airport", "Center Parcs", "Naschoolse opvang Delftse schoolvereniging"],
    note: "Voornamelijk actief in Zuid-Holland, met nadruk op Delft en Den Haag."
  }
};
export default function ProjectCategories() {
  return <section className="section bg-cream">
      <div className="container-custom">
        <SectionTitle title="Onze Specialisaties" subtitle="Interieur-Idee is specialist in het optimaliseren en herindelen van ruimtes - groot of klein. We zijn geen interieurstylist maar een gediplomeerd interieurarchitect met focus op bouwkundige oplossingen." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Particulier Section */}
          <div className="bg-white p-8 shadow-md">
            <h3 className="mb-6">{categories.particulier.title}</h3>
            <p className="mb-6">{categories.particulier.description}</p>
            
            <h4 className="font-serif text-xl mb-3">Projecttypes</h4>
            <ul className="list-disc pl-5 mb-6">
              {categories.particulier.items.map((item, index) => <li key={index} className="mb-2">{item}</li>)}
            </ul>
            
            
          </div>
          
          {/* Zakelijk Section */}
          <div className="bg-white p-8 shadow-md">
            <h3 className="mb-6">{categories.zakelijk.title}</h3>
            <p className="mb-6">{categories.zakelijk.description}</p>
            
            <h4 className="font-serif text-xl mb-3">Projecttypes</h4>
            <ul className="list-disc pl-5 mb-6">
              {categories.zakelijk.items.map((item, index) => <li key={index} className="mb-2">{item}</li>)}
            </ul>
            
            <h4 className="font-serif text-xl mb-3">Enkele van onze klanten</h4>
            <ul className="list-disc pl-5 mb-6">
              {categories.zakelijk.clients.map((client, index) => <li key={index} className="mb-2">{client}</li>)}
            </ul>
            
            
          </div>
        </div>
        
        <div className="mt-12 bg-white p-8 shadow-md">
          <h3 className="mb-6">Voor en Na: Onze Aanpak</h3>
          <p className="mb-6">
            We tonen graag concrete voorbeelden van onze aanpak met 'voor en na' 
            plattegronden om het probleem en onze oplossing te visualiseren.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-xl mb-3">Vóór renovatie</h4>
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500">
                Plattegrond voorsituatie
              </div>
            </div>
            <div>
              <h4 className="font-serif text-xl mb-3">Na renovatie</h4>
              <div className="bg-gray-100 h-64 flex items-center justify-center text-gray-500">
                Plattegrond nasituatie
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm italic">
            Bekijk meer voor- en na voorbeelden in onze projectensectie.
          </p>
        </div>
      </div>
    </section>;
}