import ReviewCard from "../shared/ReviewCard";

export default function Philosophy() {
  return (
    <section className="section bg-white">
      <div className="container-custom">

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Ontzorging van A tot Z</h3>
            <p className="text-sm">
              Wij begeleiden graag het volledige traject, van het eerste schetsontwerp tot en met
              de oplevering. Liever een deeltraject? Ook dat is mogelijk, zoals uitsluitend het
              ontwerp of enkel esthetische bouwbegeleiding.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Persoonlijk en helder contact</h3>
            <p className="text-sm">
              Tijdens het hele proces is er één vast
              aanspreekpunt. Iemand die niet alleen de planning en
              coördinatie bewaakt, maar ook helder en proactief met
              u communiceert.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Onafhankelijk en transparant</h3>
            <p className="text-sm">
              Wij kiezen leveranciers op basis van kwaliteit en prijs.
              Dankzij onze werkwijze met open begrotingen is er altijd
              volledig inzicht in de kosten, zonder verrassingen
              achteraf.
            </p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center bg-cream">
              <span className="material-icons text-3xl">✓</span>
            </div>
            <h3 className="text-xl mb-3 text-center">Gedreven door vakmanschap</h3>
            <p className="text-sm">
              Met meer dan dertig jaar ervaring combineren wij
              creativiteit met technische expertise. Elk ontwerp is
              functioneel, esthetisch en tot in detail doordacht.
            </p>
          </div>
        </div>

        {/* Kopersbegeleiding Section */}
        <div className="mt-24 flex flex-col md:flex-row items-center gap-12 bg-[#f4f4f0] p-12 rounded-lg">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/public/lovable-uploads/Afbeelding6.png"
              alt="Kopersbegeleiding"
              className="w-[90%] h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl mb-6 text-left">Kopersbegeleiding</h3>
            <p className="text-lg mb-4">
              Bij de ontwikkeling van een nieuwbouwwoning zijn tijdige beslissingen essentieel. Door begeleiding te bieden op
              cruciale momenten over indeling, elektraplan, keuken, sanitair en maatwerk kunnen aanpassingen in een later
              stadium worden voorkomen. Dit resulteert in lagere kosten en een hogere opleverkwaliteit dan als dit achteraf
              aangepast zou moeten worden.
            </p>
            <p className="text-lg">
              Met onze begeleiding worden dure aanpassingen achteraf voorkomen én krijg je een interieur dat écht bij je past en zal het uiteindelijk beter aansluiten bij de wensen.
            </p>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-24">
          <h2 className="text-4xl font-serif mb-4 text-center">Wat onze opdrachtgevers zeggen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <ReviewCard 
              text="De samenwerking ging eigenlijk vanzelf. Ik had mijn wensen maar geen idee hoe ik dit moest omzetten in een comfortabel drijvend paleis. Vanaf de 1e tekening zat Guus in de juiste richting. Het resultaat is inderdaad bijzonder verrassend, het is een juweeltje op het water geworden."
              author="Gerard Wielenga"
            />
            <ReviewCard 
              text="Guusje heeft heel goed inzicht in hoe je ruimtes goed kan indelen. Zelfs bij een gewoon standaard huis, heeft ze er iets bijzonders van gemaakt. Ze is ook praktisch en luistert goed naar wat jij wil. Dus haar eigen smaak, kennis en expertise combineert ze heel goed met de wensen van de klant."
              author="Nanette"
            />
            <ReviewCard 
              text="Guusje heeft ons tijdens het bouwproces van ons nieuwbouw vakantiehuis professioneel begeleid. Dankzij haar advies beschikken wij over een functionele, ruimer opgezette keuken en een onderscheidende indeling. Zij ondersteunde ons bij de keuze van vloerafwerkingen, keuken, tegels, sanitair en ontwierp het vaste interieur."
              author="Peter en Marian"
            />
            <ReviewCard 
              text="Door Guusje voelt het echt als 'thuiskomen'! Na onze begane grond verbouwing zijn we weer terug gekomen bij Guusje om onze badkamer te verbouwen. Ze werkt snel, netjes en denkt altijd mee aan creatieve ideeën!"
              author="Andy en Babiche"
            />
          </div>
        </div>
      </div>
    </section>
  );
}