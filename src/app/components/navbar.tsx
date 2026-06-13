import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[var(--sky-blue)] flex items-center justify-center">
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>S</span>
              </div>
              <span className="text-xl font-semibold text-[var(--navy)]" style={{ fontFamily: 'Playfair Display, serif' }}>
                SKRTOURS
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[var(--charcoal)] hover:text-[var(--sky-blue)] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Home
            </a>
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-[var(--charcoal)] hover:text-[var(--sky-blue)] transition-colors flex items-center gap-1"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Tour Packages
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-48"
                >
                  <a href="#packages" className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--off-white)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Kailash Mansarovar
                  </a>
                  <a href="#packages" className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--off-white)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Char Dham Yatra
                  </a>
                  <a href="#packages" className="block px-4 py-2 text-[var(--charcoal)] hover:bg-[var(--off-white)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Adi Kailash
                  </a>
                </div>
              )}
            </div>
            <a href="#about" className="text-[var(--charcoal)] hover:text-[var(--sky-blue)] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              About Us
            </a>
            <a href="#contact" className="text-[var(--charcoal)] hover:text-[var(--sky-blue)] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact
            </a>
            <a href="#blog" className="text-[var(--charcoal)] hover:text-[var(--sky-blue)] transition-colors" style={{ fontFamily: 'Inter, sans-serif' }}>
              Blogs
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-lg px-6 py-2 transition-colors"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--charcoal)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-4">
            <a href="#home" className="block text-[var(--charcoal)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Home
            </a>
            <a href="#packages" className="block text-[var(--charcoal)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Tour Packages
            </a>
            <a href="#about" className="block text-[var(--charcoal)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              About Us
            </a>
            <a href="#contact" className="block text-[var(--charcoal)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Contact
            </a>
            <a href="#blog" className="block text-[var(--charcoal)] hover:text-[var(--sky-blue)]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Blogs
            </a>
            <Button
              className="w-full bg-[var(--sky-blue)] hover:bg-[var(--sky-blue-light)] text-white rounded-lg"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
