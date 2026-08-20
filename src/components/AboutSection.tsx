import React, { useState } from 'react';
import { Award, Compass, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onContactClick: () => void;
  onExploreProducts: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick, onExploreProducts }) => {
  const [activeTab, setActiveTab] = useState<'craft' | 'materials' | 'sustainability'>('craft');

  const swatches = [
    { name: 'American Walnut', desc: 'Hand-rubbed natural organic oils', hex: '#4A3728' },
    { name: 'Roman Travertine', desc: 'Subterranean honed Italian stone', hex: '#E2D9CB' },
    { name: 'Italian Bouclé', desc: 'Dense, stain-resistant textured wool', hex: '#F0EBE1' },
    { name: 'Tuscan Leather', desc: 'Full-grain vegetable-tanned hides', hex: '#874C23' },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F5F2ED] relative overflow-hidden border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: Story & Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Composition (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Primary Large Image */}
            <div className="relative rounded-none overflow-hidden shadow-xl border border-[#E2DDD5] aspect-[4/5] bg-[#ECE6DD]">
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1000&q=80"
                alt="GM Furniture Artisan Craftsmanship & Showroom"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#FAF8F5]/95 backdrop-blur-md p-5 rounded-none border border-[#E2DDD5] shadow-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-none bg-[#1A1A1A] text-[#F5F2ED] flex items-center justify-center text-xs font-serif font-bold border border-[#1A1A1A]">
                    GM
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#1A1A1A]">Handcrafted Heritage</h4>
                    <span className="text-[10px] font-mono text-[#736B63] uppercase tracking-wider">Milan & Scandinavia</span>
                  </div>
                </div>
                <p className="text-xs text-[#66615B] font-light leading-relaxed">
                  Every silhouette is calibrated for ergonomic comfort, geometric symmetry, and heirloom durability.
                </p>
              </div>
            </div>

            {/* Secondary Floating Image */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-44 h-44 rounded-none overflow-hidden shadow-xl border-4 border-[#F5F2ED] z-10">
              <img
                src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=600&q=80"
                alt="Dining setting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Tabs (7 cols) */}
          <div className="lg:col-span-7">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#736B63] block mb-2">
              03 // Heritage & Vision
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-6 leading-tight">
              About GM Furniture
            </h2>

            {/* Primary Core Statement */}
            <p className="text-base sm:text-lg text-[#1A1A1A] font-normal leading-relaxed mb-6">
              At <strong>GM Furniture</strong>, we believe modern spaces deserve more than ordinary furnishings.
              We are dedicated to providing stylish, high-quality, comfortable, and modern furniture
              meticulously designed for distinguished homes, luxury apartments, and modern executive offices.
            </p>

            <p className="text-xs sm:text-sm text-[#66615B] font-light leading-relaxed mb-8">
              By harmonizing clean architectural proportions with organic materials—such as sustainably harvested
              hardwoods, Roman travertine, and top-grain leathers—our pieces embody a quiet luxury that
              elevates daily living while standing the test of time.
            </p>

            {/* Interactive Pillar Selector Tabs */}
            <div className="bg-[#EAE4DC] p-1 rounded-none inline-flex items-center gap-1 mb-6 border border-[#E2DDD5]">
              <button
                onClick={() => setActiveTab('craft')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-none transition-all ${
                  activeTab === 'craft'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#66615B] hover:text-[#1A1A1A]'
                }`}
              >
                Artisan Joinery
              </button>
              <button
                onClick={() => setActiveTab('materials')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-none transition-all ${
                  activeTab === 'materials'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#66615B] hover:text-[#1A1A1A]'
                }`}
              >
                Tactile Finishes
              </button>
              <button
                onClick={() => setActiveTab('sustainability')}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-none transition-all ${
                  activeTab === 'sustainability'
                    ? 'bg-[#1A1A1A] text-white shadow-sm'
                    : 'text-[#66615B] hover:text-[#1A1A1A]'
                }`}
              >
                Sustainable Soul
              </button>
            </div>

            {/* Tab Content Panels */}
            <div className="bg-white p-6 sm:p-7 rounded-none border border-[#E2DDD5] shadow-sm mb-8">
              {activeTab === 'craft' && (
                <div className="space-y-3">
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    Traditional Mortise & Tenon Precision
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66615B] font-light leading-relaxed">
                    Our master artisans employ time-tested woodworking joinery alongside modern CNC precision.
                    Each frame is reinforced with corner-blocked kiln-dried timber to eliminate creaking and ensure decades of structural integrity.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#1A1A1A] font-medium">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]" /> 100% Kiln-Dried Hardwood
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]" /> High-Resilience Cloud Foam
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'materials' && (
                <div className="space-y-4">
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    Curated Earthen & Textural Palette
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {swatches.map((swatch, idx) => (
                      <div key={idx} className="p-3 bg-[#FAF8F5] rounded-none border border-[#E2DDD5] text-left">
                        <div
                          className="w-5 h-5 rounded-none mb-2 border border-black/15 shadow-inner"
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <div className="text-xs font-bold text-[#1A1A1A] leading-tight">{swatch.name}</div>
                        <div className="text-[10px] text-[#736B63] font-mono mt-0.5">{swatch.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'sustainability' && (
                <div className="space-y-3">
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    Forest Stewardship & Low-VOC Finishes
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66615B] font-light leading-relaxed">
                    We exclusively partner with certified responsibly managed forests. All wood seals, oils,
                    and stain protectors are organic, water-based, and free of harmful VOC emissions for a healthier living environment.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-2 text-xs text-[#1A1A1A] font-medium">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]" /> 100% FSC Forest Certified
                    </span>
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1A1A1A]" /> Non-Toxic Eco Glazes
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                id="about-explore-btn"
                onClick={onExploreProducts}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-none hover:bg-[#333333] transition-colors flex items-center justify-center gap-2 shadow-sm border border-[#1A1A1A]"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                id="about-contact-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white text-xs font-bold uppercase tracking-[0.15em] rounded-none transition-colors flex items-center justify-center"
              >
                <span>Schedule Showroom Walkthrough</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
