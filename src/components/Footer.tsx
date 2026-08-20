import React, { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Heart } from 'lucide-react';
import { SHOWROOM_INFO } from '../data/furnitureData';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-[#F5F2ED] pt-20 pb-12 border-t border-[#333333]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Philosophy (lg: 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-[#1A1A1A] flex items-center justify-center font-serif text-xl font-bold rounded-none border border-white">
                GM
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold text-white tracking-tight">
                  GM Furniture
                </span>
                <span className="block text-[9px] font-mono tracking-[0.25em] uppercase text-[#A69E92] font-medium -mt-0.5">
                  Modern Furniture for Modern Living
                </span>
              </div>
            </div>

            <p className="text-xs text-[#A69E92] font-light leading-relaxed max-w-sm pt-2">
              Dedicated to designing stylish, high-quality, comfortable, and modern furniture.
              Crafted with organic hardwoods, refined stone, and timeless European sensibility.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#736B63]">
              Showroom Certified • FSC Sustainable Timbers • 10-Year Warranty
            </div>
          </div>

          {/* Column 2: Quick Links (lg: 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A69E92]">
              {['hero', 'categories', 'products', 'about', 'why-us', 'gallery', 'contact'].map((target) => (
                <li key={target}>
                  <button
                    onClick={() => onNavigateSection(target)}
                    className="hover:text-white transition-colors capitalize text-left focus:outline-none"
                  >
                    {target === 'hero' ? 'Home' : target === 'why-us' ? 'Why Choose Us' : target}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em]">
              Showroom Contact
            </h4>
            <div className="space-y-3 text-xs text-[#A69E92]">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  {SHOWROOM_INFO.address}<br />
                  {SHOWROOM_INFO.cityStateZip}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${SHOWROOM_INFO.phone}`} className="hover:text-white transition-colors font-mono">
                  {SHOWROOM_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${SHOWROOM_INFO.email}`} className="hover:text-white transition-colors">
                  {SHOWROOM_INFO.email}
                </a>
              </p>
            </div>
          </div>

          {/* Column 4: Newsletter (lg: 3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-[0.2em]">
              Architectural Gazette
            </h4>
            <p className="text-xs text-[#A69E92] font-light leading-relaxed">
              Receive seasonal lookbooks, invitation-only showroom viewings, and bespoke design previews.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#242424] rounded-none border border-white/20 text-xs text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                <span>You are subscribed to the GM Gazette.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="w-full px-3.5 py-2.5 bg-[#262626] rounded-none border border-white/15 text-xs text-white placeholder-[#736B63] focus:outline-none focus:border-white transition-all font-mono"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none bg-white hover:bg-[#E2DDD5] text-[#1A1A1A] flex items-center justify-center transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] font-mono text-[#736B63] block">
                  We respect your privacy. No spam.
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#736B63] gap-4">
          <p>© {new Date().getFullYear()} GM Furniture Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Showroom Warranty</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
