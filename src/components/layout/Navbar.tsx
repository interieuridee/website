import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Onze aanpak', href: '/aanpak' },
    { name: 'Projecten', href: '/projecten' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-[#dcd9d0] py-5 relative z-10">
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/interieur-idee logo.png" 
            alt="Interieur-Idee Logo" 
            className="h-8 md:h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                'text-sm uppercase tracking-wider font-medium text-charcoal transition-colors',
                location.pathname === link.href ? 'font-bold' : ''
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center text-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[69px] left-0 right-0 bg-[#dcd9d0] shadow-md animate-fade-in z-50">
          <div className="container-custom py-4 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm uppercase tracking-wider py-2 text-center font-medium text-charcoal transition-colors',
                  location.pathname === link.href ? 'font-bold' : ''
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
