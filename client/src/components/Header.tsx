import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/10 dark:bg-black/10 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-[var(--tcet-blue)] font-semibold text-lg hover:text-blue-700 transition-colors duration-200">
            TCET EDIC
          </Link>
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex space-x-6 text-[var(--tcet-dark)] dark:text-white">
            <Link 
              href="/"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/about"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/about' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              About
            </Link>
            <Link 
              href="/team"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/team' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              Team
            </Link>
            <Link 
              href="/events"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/events' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              Events
            </Link>
            <Link 
              href="/students-corner"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/students-corner' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              Student's Corner
            </Link>
            <Link 
              href="/resources"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/resources' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              Resources
            </Link>
            <Link 
              href="/contact"
              className={`hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium ${
                location === '/contact' ? 'text-[var(--tcet-blue)]' : ''
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>
            
            <button 
              className="md:hidden text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/about' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                About
              </Link>
              <Link 
                href="/team" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/team' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                Team
              </Link>
              <Link 
                href="/events" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/events' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                Events
              </Link>
              <Link 
                href="/students-corner" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/students-corner' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                Student's Corner
              </Link>
              <Link 
                href="/resources" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/resources' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                Resources
              </Link>
              <Link 
                href="/contact" 
                onClick={closeMobileMenu}
                className={`text-[var(--tcet-dark)] dark:text-white hover:text-[var(--tcet-blue)] transition-colors duration-200 font-medium py-2 ${
                  location === '/contact' ? 'text-[var(--tcet-blue)]' : ''
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
