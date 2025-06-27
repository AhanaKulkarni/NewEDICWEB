import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-[var(--tcet-blue)] font-semibold text-lg">
            TCET EDIC
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-[var(--tcet-dark)]">
            <a 
              href="#about" 
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium"
            >
              About
            </a>
            <a 
              href="#team" 
              onClick={(e) => handleSmoothScroll(e, '#team')}
              className="hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium"
            >
              Team
            </a>
            <a 
              href="#resources" 
              onClick={(e) => handleSmoothScroll(e, '#resources')}
              className="hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium"
            >
              Resources
            </a>
            <a 
              href="#events" 
              onClick={(e) => handleSmoothScroll(e, '#events')}
              className="hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium"
            >
              Events
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[var(--tcet-dark)] hover:text-[var(--tcet-blue)] transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
                className="text-[var(--tcet-dark)] hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2"
              >
                About
              </a>
              <a 
                href="#team" 
                onClick={(e) => handleSmoothScroll(e, '#team')}
                className="text-[var(--tcet-dark)] hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2"
              >
                Team
              </a>
              <a 
                href="#resources" 
                onClick={(e) => handleSmoothScroll(e, '#resources')}
                className="text-[var(--tcet-dark)] hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2"
              >
                Resources
              </a>
              <a 
                href="#events" 
                onClick={(e) => handleSmoothScroll(e, '#events')}
                className="text-[var(--tcet-dark)] hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2"
              >
                Events
              </a>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
                className="text-[var(--tcet-dark)] hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
