import React, { useState } from 'react';
import { X, Heart, Shield, Sparkles, Check, Truck, Ruler, Layers, ArrowRight } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
  onInquirePiece: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onInquirePiece,
}) => {
  if (!product) return null;

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  return (
    <div
      id="product-detail-modal-overlay"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#111111]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        id="product-detail-modal-content"
        className="relative bg-white w-full max-w-5xl rounded-none shadow-2xl border border-[#E2DDD5] overflow-hidden my-6 text-[#1A1A1A] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="modal-close-btn"
          onClick={onClose}
          aria-label="Close product details"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-none bg-black/70 text-white hover:bg-black flex items-center justify-center transition-colors focus:outline-none border border-white/20"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left Column: Image Gallery (lg: 7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] p-4 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E2DDD5]">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/3] w-full rounded-none overflow-hidden shadow-sm bg-[#ECE6DD] mb-4 border border-[#E2DDD5]">
              <img
                src={product.images[selectedImageIndex] || product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-300"
              />
              <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/85 backdrop-blur-md text-[#F5F2ED] text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-none border border-white/15">
                Showroom Grade Preview
              </div>
            </div>

            {/* Thumbnail Carousel */}
            {product.images.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`relative w-20 h-16 rounded-none overflow-hidden border shrink-0 transition-all ${
                      selectedImageIndex === idx
                        ? 'border-[#1A1A1A] shadow-md scale-105'
                        : 'border-[#E2DDD5] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Quality Badges */}
            <div className="mt-6 pt-4 border-t border-[#E2DDD5] grid grid-cols-2 gap-4 text-xs text-[#66615B] font-mono">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span>White-Glove In-Home Assembly</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#1A1A1A] shrink-0" />
                <span>10-Year Master Frame Guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Specifications & Actions (lg: 5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] bg-white">
            <div className="space-y-6">
              {/* Category & Rating */}
              <div>
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] uppercase text-[#736B63] block mb-1">
                  {product.category}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] leading-tight">
                  {product.name}
                </h2>
                <p className="text-xs text-[#736B63] font-light mt-1 italic">
                  {product.tagline}
                </p>
              </div>

              {/* Pricing Section */}
              <div className="flex items-baseline gap-3 pb-4 border-b border-[#E2DDD5]">
                <span className="text-3xl font-bold text-[#1A1A1A] font-mono">
                  ${product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-sm font-mono text-[#8C8377] line-through">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                <span className="ml-auto text-[11px] font-mono px-2.5 py-1 bg-[#1A1A1A] text-[#F5F2ED] font-semibold rounded-none flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#D4AF37]" /> In Stock
                </span>
              </div>

              {/* Story Narrative */}
              <div>
                <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                  Design Narrative
                </h4>
                <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed font-light">
                  {product.detailedDescription}
                </p>
              </div>

              {/* Color & Finish Selection */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-mono font-bold uppercase tracking-wider text-[#1A1A1A] text-[11px]">
                      Curated Finish
                    </span>
                    <span className="text-[#8C6239] font-mono text-xs font-medium">
                      {product.colors[selectedColorIndex]?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedColorIndex(idx)}
                        className={`group relative p-0.5 rounded-none border transition-all ${
                          selectedColorIndex === idx
                            ? 'border-[#1A1A1A] scale-110'
                            : 'border-transparent hover:border-[#E2DDD5]'
                        }`}
                      >
                        <span
                          className="block w-6 h-6 rounded-none shadow-inner border border-black/15"
                          style={{ backgroundColor: color.hex }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Dimensions & Materials */}
              <div className="space-y-3 bg-[#FAF8F5] p-4 rounded-none border border-[#E2DDD5] text-xs">
                <div className="flex items-start gap-2.5">
                  <Ruler className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1A1A1A] block font-mono text-[11px]">Dimensions:</span>
                    <span className="text-[#66615B]">{product.dimensions} ({product.weight})</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Layers className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#1A1A1A] block font-mono text-[11px]">Materials:</span>
                    <span className="text-[#66615B]">{product.materials.join(' • ')}</span>
                  </div>
                </div>
              </div>

              {/* Specifications List */}
              {product.specs && (
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#1A1A1A] mb-2">
                    Showroom Specifications
                  </h4>
                  <div className="divide-y divide-[#E2DDD5] text-xs">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="py-2 flex justify-between">
                        <span className="text-[#736B63]">{spec.label}</span>
                        <span className="font-mono font-medium text-[#1A1A1A] text-right">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-[#E2DDD5] flex flex-col sm:flex-row items-center gap-3">
              {/* Inquire CTA Button */}
              <button
                id="modal-inquire-btn"
                onClick={() => {
                  onInquirePiece(product);
                  onClose();
                }}
                className="w-full sm:flex-1 py-3.5 px-6 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-none hover:bg-[#333333] active:scale-95 transition-all flex items-center justify-center gap-2 shadow-sm border border-[#1A1A1A]"
              >
                <span>Inquire / Book Viewing</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Wishlist Button */}
              <button
                id="modal-toggle-wishlist-btn"
                onClick={() => onToggleWishlist(product.id)}
                className={`w-full sm:w-auto p-3.5 rounded-none border flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isWishlisted
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-white text-[#1A1A1A] border-[#E2DDD5] hover:bg-[#F5F2ED]'
                }`}
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                <span className="sm:hidden">{isWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
