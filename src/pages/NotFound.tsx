
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-offwhite pt-20">
      <div className="text-center">
        <h1 className="text-5xl font-serif mb-4">404</h1>
        <p className="text-xl text-charcoal mb-8">Oeps! Deze pagina bestaat niet.</p>
        <a href="/" className="inline-block px-8 py-3 bg-taupe text-white hover:bg-charcoal transition-colors">
          Terug naar home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
