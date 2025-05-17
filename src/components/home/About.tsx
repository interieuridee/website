import { Link } from "react-router-dom";

export default function About() {
  return <section id="about" className="section bg-offwhite">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center">
            <h3 className="text-xl mb-6 text-left">Over Interieur-Idee</h3>
            <div className="space-y-6">
              <p>
                Met een scherp oog voor esthetiek en
                functionaliteit vertalen wij uw wensen naar een
                interieur dat past bij uw levensstijl of
                merkidentiteit. Van woningen en woonarken tot
                horecazaken, kantoren en zorginstellingen.
              </p>
              <p>
                Wij creëren ruimtes die verrassen, verbinden en
                toekomstbestendig zijn. Interieur-Idee draagt
                creatieve en vaak kostenbesparende oplossingen aan
                door de contacten die door de jaren heen verworven
                zijn.
              </p>
              <p>
                Guusje Bosman is de interieurarchitect bij
                Interieur-Idee. Zij is sinds 1990 een
                gediplomeerd interieurarchitect en staat
                geregistreerd in het landelijk register voor
                interieurarchitecten.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-6 py-2 border border-taupe text-charcoal hover:bg-taupe hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-[300px] bg-cover bg-center" style={{
              backgroundImage: "url('/lovable-uploads/fotoss/_R6_0224 © Barbra Verbij klein.jpg')",
              aspectRatio: "9 / 16"
            }}></div>
          </div>
        </div>
      </div>
    </section>;
}