import React from 'react';
import { Sparkles, Compass, CircleDollarSign, ShieldCheck, HeartHandshake, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/furnitureData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#D4AF37]" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#D4AF37]" />;
      case 'CircleDollarSign':
        return <CircleDollarSign className="w-5 h-5 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#121212] text-[#F5F2ED] relative overflow-hidden border-b border-[#2B2B2B]">
      {/* Background geometric grid accents */}
      <div className="absolute inset-0 geometric-grid-bg opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#A69E92] block mb-2">
            04 // The GM Standard
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FAF8F5] tracking-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-xs sm:text-sm text-[#A69E92] leading-relaxed font-light">
            We hold ourselves to an uncompromising benchmark of European craftsmanship, honest pricing,
            and white-glove personal concierge service.
          </p>
        </div>

        {/* 5 Distinct Pillars Layout (Top 3 + Bottom 2 balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {WHY_CHOOSE_US.slice(0, 3).map((item, idx) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-[#1A1A1A] rounded-none p-8 border border-white/15 hover:border-white/40 hover:bg-[#222222] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                {/* Top Row: Icon & Metric */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-none bg-[#242424] border border-white/15 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  {item.metricNumber && (
                    <div className="text-right">
                      <span className="font-mono text-xl font-bold text-[#FAF8F5] block">
                        {item.metricNumber}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A69E92]">
                        {item.metricLabel}
                      </span>
                    </div>
                  )}
                </div>

                {/* Title & Subtitle */}
                <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-xs text-[#D5CDC2] font-mono mb-3">
                  {item.subtitle}
                </h4>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A69E92] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Number indicator */}
              <div className="pt-6 mt-6 border-t border-white/10 text-[10px] text-[#736B63] font-mono uppercase tracking-widest">
                0{idx + 1} // GM PILLAR
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Pillars Centered / Expanded */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {WHY_CHOOSE_US.slice(3, 5).map((item, idx) => (
            <div
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-[#1A1A1A] rounded-none p-8 border border-white/15 hover:border-white/40 hover:bg-[#222222] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 rounded-none bg-[#242424] border border-white/15 flex items-center justify-center group-hover:border-white/30 transition-colors">
                    {getIcon(item.icon)}
                  </div>
                  {item.metricNumber && (
                    <div className="text-right">
                      <span className="font-mono text-xl font-bold text-[#FAF8F5] block">
                        {item.metricNumber}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#A69E92]">
                        {item.metricLabel}
                      </span>
                    </div>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <h4 className="text-xs text-[#D5CDC2] font-mono mb-3">
                  {item.subtitle}
                </h4>

                <p className="text-xs sm:text-sm text-[#A69E92] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10 text-[10px] text-[#736B63] font-mono uppercase tracking-widest">
                0{idx + 4} // GM PILLAR
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
