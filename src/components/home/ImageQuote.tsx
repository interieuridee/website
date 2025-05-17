import { cn } from "@/lib/utils";

interface ImageQuoteProps {
  className?: string;
}

export default function ImageQuote({ className }: ImageQuoteProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-offwhite", className)}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="/lovable-uploads/fotoss/_R6_0162 © Barbra Verbij klein.jpg"
            alt="Interieur hal met witte muren"
            className="w-full h-[400px] object-cover"
          />
          <img
            src="/lovable-uploads/fotoss/_R6_0109 © Barbra Verbij klein.jpg"
            alt="Trap met fotolijsten"
            className="w-full h-[400px] object-cover"
          />
          <div className="relative">
            <img
              src="/lovable-uploads/fotoss/_R6_0121 © Barbra Verbij klein.jpg"
              alt="Moderne keuken"
              className="w-full h-[400px] object-cover"
            />
            <p className="absolute bottom-2 right-2 text-sm text-white italic font-sans">
              fotografie: Barbra Verbij
            </p>
          </div>
        </div>
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <blockquote className="font-sans text-lg md:text-xl italic">
            "Speciaal op maat gemaakte onderdelen zorgen dat lijnen doorlopen waardoor er meer samenhang is meer rust ontstaat."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
