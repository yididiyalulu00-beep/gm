import React, { useState } from 'react';
import { Maximize2, MapPin, X, ArrowUpRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/furnitureData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedSpace, setSelectedSpace] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const spaceCategories = ['all', 'Living Room', 'Bedroom', 'Dining Room', 'Office Furniture'];

  const filteredGallery = GALLERY_ITEMS.filter((item) =>
    selectedSpace === 'all' ? true : item.spaceType === selectedSpace
  );

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#736B63] block mb-2">
              05 // Architectural Showcases
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Furniture Gallery
            </h2>
          </div>

          {/* Space Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none bg-[#F5F2ED] p-1.5 rounded-none border border-[#E2DDD5]">
            {spaceCategories.map((space) => {
              const active = selectedSpace === space;
              return (
                <button
                  key={space}
                  id={`gallery-filter-${space}`}
                  onClick={() => setSelectedSpace(space)}
                  className={`px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.15em] rounded-none transition-all whitespace-nowrap focus:outline-none border ${
                    active
                      ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm'
                      : 'text-[#66615B] hover:text-[#1A1A1A] hover:bg-[#EAE4DC] border-transparent'
                  }`}
                >
                  {space === 'all' ? 'All Spaces' : space}
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry / Grid Gallery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => setLightboxItem(item)}
              className="group relative rounded-none overflow-hidden bg-[#1A1A1A] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E2DDD5] hover:border-[#1A1A1A]"
            >
              {/* Image with zoom effect */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-95 group-hover:brightness-100"
                loading="lazy"
              />

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Meta info */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-none bg-[#F5F2ED]/90 backdrop-blur-md text-[#1A1A1A] text-[10px] uppercase font-mono font-bold tracking-widest border border-[#E2DDD5]">
                  {item.spaceType}
                </span>

                <div className="w-8 h-8 rounded-none bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all border border-white/20">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#D4AF37] mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                  {item.dimensions && (
                    <>
                      <span className="text-white/40">•</span>
                      <span className="text-[#D5CDC2]">{item.dimensions}</span>
                    </>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#D5CDC2] line-clamp-2 font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div
          id="gallery-lightbox-overlay"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1A1A1A] rounded-none overflow-hidden shadow-2xl border border-white/20 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxItem(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 z-20 w-9 h-9 rounded-none bg-black/60 text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center focus:outline-none border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative aspect-[16/10] w-full bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-[#141414] border-t border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#D4AF37] uppercase tracking-wider mb-1">
                  <span>{lightboxItem.spaceType}</span>
                  <span>•</span>
                  <span>{lightboxItem.location}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  {lightboxItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A69E92] font-light max-w-2xl">
                  {lightboxItem.caption}
                </p>
              </div>

              <button
                onClick={() => {
                  setLightboxItem(null);
                  const contactEl = document.getElementById('contact');
                  if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-[#F5F2ED] hover:bg-white text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.15em] rounded-none transition-colors whitespace-nowrap flex items-center gap-2 border border-[#F5F2ED]"
              >
                <span>Inquire About Layout</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
