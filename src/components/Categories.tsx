import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/furnitureData';
import { CategoryId } from '../types';

interface CategoriesProps {
  onSelectCategory: (categoryId: CategoryId) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categories" className="py-20 sm:py-28 bg-[#F5F2ED] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#736B63] block mb-2">
              01 // Curated Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Featured Categories
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#66615B] max-w-md leading-relaxed font-light">
            Architecturally designed collections tailored to establish proportional harmony in every room of your residence and executive workspace.
          </p>
        </div>

        {/* 4 Featured Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CATEGORIES.map((cat, index) => (
            <div
              key={cat.id}
              id={`category-card-${cat.id}`}
              onClick={() => onSelectCategory(cat.id)}
              className="group relative h-[440px] rounded-none overflow-hidden cursor-pointer bg-[#1A1A1A] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-end p-6 sm:p-7 border border-[#E2DDD5] hover:border-[#1A1A1A]"
            >
              {/* Background Category Image with Hover Zoom */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 group-hover:brightness-90 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Gradient Overlays for optimal geometric readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/40 to-transparent group-hover:via-[#111111]/30 transition-all duration-500" />
              </div>

              {/* Category Card Content */}
              <div className="relative z-10 text-left">
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-1 rounded-none bg-[#F5F2ED]/90 backdrop-blur-md text-[#1A1A1A] text-[10px] font-mono font-bold tracking-widest uppercase">
                    {cat.featuredPill}
                  </span>
                  <span className="text-[11px] font-mono text-[#EAE4DC]/70">
                    0{index + 1}
                  </span>
                </div>

                {/* Name & Arrow */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                  <div className="w-8 h-8 rounded-none bg-[#F5F2ED] text-[#1A1A1A] flex items-center justify-center group-hover:bg-[#FFFFFF] transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 shadow-sm">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Subtitle / Description */}
                <p className="text-xs text-[#D5CDC2] font-light line-clamp-2 mb-3 leading-relaxed">
                  {cat.subtitle}
                </p>

                {/* Item Count & Action Label */}
                <div className="flex items-center justify-between pt-2.5 border-t border-white/20 text-[11px] font-mono text-[#A69E92]">
                  <span>{cat.itemCount} Designs</span>
                  <span className="text-[#F5F2ED] group-hover:underline font-bold">Explore &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
