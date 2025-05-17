import { cn } from "@/lib/utils";
export default function Hero() {
  return <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{
      backgroundImage: "url('/lovable-uploads/fotoss/_R6_0149 © Barbra Verbij klein.jpg')",
      backgroundPosition: "center center"
    }}>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute bottom-0 right-0 m-4 text-white text-sm italic font-sans">
          fotografie: Barbra Verbij
        </div>
      </div>
      
      <div className="container-custom relative z-10 mt-20 md:mt-0">
        <div className="max-w-3xl">
          <h1 className="text-white mb-6 drop-shadow-md text-left font-bold font-sans">
            Interieur-Idee
          </h1>
          <p className="text-white text-xl md:text-2xl max-w-2xl leading-relaxed drop-shadow-md">
            Als creatief bureau voor interieurarchitectuur
            realiseren wij doordachte ontwerpen voor
            zowel particuliere als zakelijke opdrachtgevers.
          </p>
          <div className="mt-8">
            <a href="#about" className="inline-block px-8 py-3 bg-white text-charcoal uppercase text-sm tracking-wider hover:bg-cream transition-colors duration-300">
              Ontdek meer
            </a>
          </div>
        </div>
      </div>
    </section>;
}