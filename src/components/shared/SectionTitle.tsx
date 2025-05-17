import { cn } from "@/lib/utils";
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}
export default function SectionTitle({
  title,
  subtitle,
  alignment = "left",
  className
}: SectionTitleProps) {
  return <div className={cn("mb-12", {
    "text-left": alignment === "left",
    "text-center": alignment === "center",
    "text-right": alignment === "right"
  }, className)}>
      <h2 className="mb-4 text-center font-bold">{title}</h2>
      {subtitle && <p className="text-lg md:text-xl max-w-3xl mx-auto text-center">{subtitle}</p>}
    </div>;
}