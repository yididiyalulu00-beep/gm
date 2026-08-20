import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Phone, Sparkles } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onNavigateSection: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onNavigateSection,
  activeSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', target: 'hero' },
    { label: 'Categories', target: 'categories' },
    { label: 'Products', target: 'products' },
    { label: 'About', target: 'about' },
    { label: 'Why Us', target: 'why-us' },
    { label: 'Gallery', target: 'gallery' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigateSection(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F5F2ED]/95 backdrop-blur-md shadow-sm border-b border-[#E2DDD5] py-3.5'
          : 'bg-[#F5F2ED]/85 backdrop-blur-sm border-b border-[#E2DDD5]/70 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="brand-logo-btn"
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <div className="w-10 h-10 bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center font-serif text-xl font-bold tracking-wider rounded-none group-hover:bg-[#8C6239] transition-colors border border-[#1A1A1A]">
            GM
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A]">
              GM Furniture
            </span>
            <span className="block text-[10px] tracking-[0.25em] uppercase text-[#736B63] font-mono -mt-0.5">
              Geometric & Modern
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.target;
            return (
              <button
                key={link.target}
                id={`nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className={`text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative py-1.5 focus:outline-none ${
                  isActive ? 'text-[#1A1A1A]' : 'text-[#66615B] hover:text-[#1A1A1A]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1A1A1A]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Actions: Wishlist + Contact CTA */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist Button */}
          <button
            id="navbar-wishlist-btn"
            onClick={onOpenWishlist}
            aria-label="View Saved Furniture Wishlist"
            className="relative p-2.5 rounded-none border border-[#E2DDD5] bg-[#FAF8F5] text-[#1A1A1A] hover:bg-[#EAE4DC] hover:border-[#1A1A1A] transition-all focus:outline-none"
            title="Saved Showroom Pieces"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#1A1A1A] text-[#F5F2ED] text-[10px] font-mono font-bold flex items-center justify-center border border-[#F5F2ED]">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Quick Book Appointment Button */}
          <button
            id="navbar-book-btn"
            onClick={() => handleLinkClick('contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 bg-[#1A1A1A] text-[#F5F2ED] text-xs font-bold uppercase tracking-[0.15em] rounded-none hover:bg-[#333333] transition-all border border-[#1A1A1A] focus:outline-none shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Book Visit</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Navigation"
            className="md:hidden p-2.5 rounded-none border border-[#E2DDD5] text-[#1A1A1A] hover:bg-[#EAE4DC] transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden bg-[#F5F2ED] border-b border-[#E2DDD5] px-6 py-6 space-y-4 shadow-lg animate-in slide-in-from-top-2"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.target}
                id={`mobile-nav-link-${link.target}`}
                onClick={() => handleLinkClick(link.target)}
                className={`text-left text-xs font-bold uppercase tracking-[0.15em] py-2.5 px-3 rounded-none transition-colors border-l-2 ${
                  activeSection === link.target
                    ? 'border-[#1A1A1A] bg-[#EAE4DC] text-[#1A1A1A]'
                    : 'border-transparent text-[#66615B] hover:text-[#1A1A1A] hover:bg-[#EAE4DC]/50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#E2DDD5] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#736B63]">
              <Phone className="w-3.5 h-3.5 text-[#1A1A1A]" />
              <span>Showroom: {SHOWROOM_INFO.phone}</span>
            </div>
            <button
              id="mobile-book-visit-btn"
              onClick={() => handleLinkClick('contact')}
              className="w-full py-3 bg-[#1A1A1A] text-[#F5F2ED] text-xs font-bold uppercase tracking-[0.15em] rounded-none hover:bg-[#333333] transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span>Book Showroom Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
