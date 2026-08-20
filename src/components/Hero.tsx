import React from 'react';
import { ArrowRight, Sparkles, Shield, Award, Compass, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreCollection: () => void;
  onContactUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection, onContactUs }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#121212] text-[#F5F2ED]"
    >
      {/* Background Image with Layered Gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=85"
          alt="GM Furniture Modern Luxury Showroom"
          className="w-full h-full object-cover object-center brightness-[0.40] scale-105 transform duration-1000 ease-out transition-transform"
          loading="eager"
        />
        {/* Subtle vignette and geometric ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-[#121212]/80" />
        <div className="absolute inset-0 geometric-grid-bg opacity-15" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Architectural Badge */}
        <div
          id="hero-badge"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/25 text-[#EAE5DE] text-[11px] font-mono tracking-[0.2em] uppercase mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Architectural Furnishings • 2026 Collection</span>
        </div>

        {/* Main Title */}
        <h1
          id="hero-main-title"
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#FAF8F5] mb-4 drop-shadow-sm leading-[1.05]"
        >
          GM Furniture
        </h1>

        {/* Subtitle */}
        <p
          id="hero-subtitle"
          className="text-lg sm:text-xl md:text-2xl font-light text-[#D5CDC2] max-w-2xl mx-auto tracking-wide mb-8 leading-relaxed font-sans"
        >
          Modern Furniture for Modern Living
        </p>

        {/* Supporting Narrative */}
        <p className="text-xs sm:text-sm text-[#A69E92] max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Designed with pure geometric balance, sustainable American hardwoods, and Italian leathers.
          Crafted to transform residential and executive spaces into timeless sanctuaries.
        </p>

        {/* Two Main Action Buttons */}
        <div id="hero-actions" className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            id="hero-explore-btn"
            onClick={onExploreCollection}
            className="w-full sm:w-auto px-8 py-4 bg-[#F5F2ED] text-[#1A1A1A] font-bold text-xs tracking-[0.18em] uppercase rounded-none hover:bg-white active:scale-[0.98] transition-all shadow-lg flex items-center justify-center gap-3 group focus:outline-none border border-[#F5F2ED]"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={onContactUs}
            className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-[#FFFFFF]/10 text-[#F5F2ED] font-bold text-xs tracking-[0.18em] uppercase rounded-none border border-[#FFFFFF]/35 hover:border-[#FFFFFF]/70 active:scale-[0.98] backdrop-blur-sm transition-all flex items-center justify-center focus:outline-none"
          >
            <span>Contact Us</span>
          </button>
        </div>

        {/* Luxury Trust Indicators */}
        <div
          id="hero-trust-indicators"
          className="mt-14 pt-8 border-t border-[#FFFFFF]/15 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-3xl text-left"
        >
          <div className="flex items-center gap-3 p-3 bg-[#FFFFFF]/5 rounded-none border border-white/10">
            <Shield className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED]">10-Yr Warranty</div>
              <div className="text-[10px] font-mono text-[#A69E92]">Solid structural timber</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#FFFFFF]/5 rounded-none border border-white/10">
            <Award className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED]">Direct Pricing</div>
              <div className="text-[10px] font-mono text-[#A69E92]">No retail markups</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#FFFFFF]/5 rounded-none border border-white/10">
            <Compass className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED]">Spatial Design</div>
              <div className="text-[10px] font-mono text-[#A69E92]">3D room consultation</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-[#FFFFFF]/5 rounded-none border border-white/10">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#F5F2ED]">White-Glove</div>
              <div className="text-[10px] font-mono text-[#A69E92]">In-room installation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        onClick={onExploreCollection}
        aria-label="Scroll down to featured categories"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-[#D8CEBF]/60 hover:text-[#FAF6F0] transition-colors p-2 focus:outline-none animate-bounce"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};
