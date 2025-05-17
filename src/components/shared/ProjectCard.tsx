import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl?: string;
  className?: string;
}

export default function ProjectCard({
  id,
  title,
  category,
  imageUrl = "/placeholder.svg",
  className,
}: ProjectCardProps) {
  return (
    <Link
      to={`/projecten/${id}`}
      className={cn(
        "group block overflow-hidden relative h-[400px] md:h-[450px] shadow-md",
        className
      )}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
        <div className="transform transition-transform duration-300 translate-y-2 group-hover:translate-y-0">
          <div className="text-left">
            <p className="text-white/80 text-sm uppercase tracking-wider font-light mb-2">
              {category}
            </p>
            <h3 className="text-white font-bold font-sans text-xl md:text-2xl tracking-wide text-left">
              {title}
            </h3>
            <div className="h-0.5 w-12 bg-taupe mt-4 mb-2 transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Bekijk project details
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
