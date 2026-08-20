import React from 'react';
import { X, Trash2, ArrowRight, Heart, Sparkles, ShoppingBag } from 'lucide-react';
import { Product } from '../types';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistProductIds: string[];
  allProducts: Product[];
  onRemoveFromWishlist: (productId: string) => void;
  onViewProduct: (product: Product) => void;
  onInquireWishlist: (products: Product[]) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistProductIds,
  allProducts,
  onRemoveFromWishlist,
  onViewProduct,
  onInquireWishlist,
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = allProducts.filter((p) => wishlistProductIds.includes(p.id));
  const totalPrice = wishlistedProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div
      id="wishlist-drawer-overlay"
      className="fixed inset-0 z-50 bg-[#111111]/70 backdrop-blur-sm flex justify-end animate-in fade-in"
      onClick={onClose}
    >
      <div
        id="wishlist-drawer-panel"
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between p-6 text-[#1A1A1A] border-l border-[#E2DDD5] animate-in slide-in-from-right duration-300 rounded-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#E2DDD5] mb-4">
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-[#1A1A1A] fill-current" />
              <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                Saved Showroom Pieces
              </h3>
              <span className="px-2 py-0.5 rounded-none bg-[#1A1A1A] text-white text-[10px] font-mono font-bold">
                {wishlistedProducts.length}
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close saved items drawer"
              className="p-2 rounded-none text-[#736B63] hover:bg-[#E2DDD5] hover:text-[#1A1A1A] transition-colors border border-transparent hover:border-[#E2DDD5]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#736B63] font-light mb-4">
            Items saved here can be brought into your private showroom appointment or submitted for an all-in-one quotation.
          </p>
        </div>

        {/* Product Items List */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-3 my-2">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <div className="w-12 h-12 rounded-none bg-white text-[#1A1A1A] border border-[#E2DDD5] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <p className="text-xs font-mono font-semibold uppercase tracking-wider text-[#1A1A1A]">Your showroom wishlist is empty.</p>
              <p className="text-xs text-[#736B63]">
                Click the heart icon on any sofa, table, or executive desk to save pieces for consultation.
              </p>
            </div>
          ) : (
            wishlistedProducts.map((prod) => (
              <div
                key={prod.id}
                className="flex items-center gap-3 p-3 bg-white rounded-none border border-[#E2DDD5] shadow-sm hover:border-[#1A1A1A] transition-all group"
              >
                <div
                  onClick={() => {
                    onViewProduct(prod);
                    onClose();
                  }}
                  className="w-16 h-16 rounded-none overflow-hidden bg-[#ECE6DD] shrink-0 cursor-pointer border border-[#E2DDD5]"
                >
                  <img src={prod.images[0]} alt={prod.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-mono uppercase font-bold text-[#736B63] block">
                    {prod.category}
                  </span>
                  <h4
                    onClick={() => {
                      onViewProduct(prod);
                      onClose();
                    }}
                    className="font-serif text-sm font-bold text-[#1A1A1A] truncate cursor-pointer hover:text-[#8C6239] transition-colors"
                  >
                    {prod.name}
                  </h4>
                  <div className="text-xs font-mono font-bold text-[#1A1A1A] mt-0.5">
                    ${prod.price.toLocaleString()}
                  </div>
                </div>

                <button
                  onClick={() => onRemoveFromWishlist(prod.id)}
                  aria-label="Remove item"
                  className="p-2 text-[#8C8377] hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer with Summary & Action */}
        {wishlistedProducts.length > 0 && (
          <div className="pt-4 border-t border-[#E2DDD5] space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#736B63]">EST. VALUE ({wishlistedProducts.length} PIECES):</span>
              <span className="font-bold text-base text-[#1A1A1A]">${totalPrice.toLocaleString()}</span>
            </div>

            <button
              id="wishlist-inquire-btn"
              onClick={() => {
                onInquireWishlist(wishlistedProducts);
                onClose();
              }}
              className="w-full py-3.5 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.18em] rounded-none hover:bg-[#333333] transition-all flex items-center justify-center gap-2 shadow-sm border border-[#1A1A1A]"
            >
              <span>Inquire on All Saved Pieces</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
