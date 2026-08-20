import React, { useState, useMemo } from 'react';
import { Heart, Search, Eye, Sparkles, SlidersHorizontal, Check } from 'lucide-react';
import { Product, CategoryId } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  selectedCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
  onViewProductDetails: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onViewProductDetails,
  wishlist,
  onToggleWishlist,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'All Furnishings' },
    { id: 'living-room', label: 'Living Room' },
    { id: 'bedroom', label: 'Bedroom' },
    { id: 'dining-room', label: 'Dining Room' },
    { id: 'office', label: 'Office' },
  ];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.categorySlug === selectedCategory;
        const matchesSearch =
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.materials.some((m) => m.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-asc') return a.price - b.price;
        if (sortBy === 'price-desc') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-20 sm:py-28 bg-[#FAF8F5] border-b border-[#E2DDD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#736B63] block mb-2">
            02 // The Master Catalog
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] tracking-tight mb-4">
            Featured Products
          </h2>
          <p className="text-xs sm:text-sm text-[#66615B] leading-relaxed font-light">
            Every piece is precision-engineered from organic timbers, honed stone, and top-tier upholstery.
            Explore our signature modern showroom collection.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10 bg-[#F5F2ED] p-3 sm:p-4 rounded-none border border-[#E2DDD5] shadow-sm">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-cat-${cat.id}`}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] rounded-none whitespace-nowrap transition-all focus:outline-none border ${
                    active
                      ? 'bg-[#1A1A1A] text-[#F5F2ED] border-[#1A1A1A] shadow-sm'
                      : 'text-[#66615B] hover:text-[#1A1A1A] hover:bg-[#EAE4DC] border-transparent'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Search & Sort Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-60">
              <Search className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="product-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search materials, styles..."
                className="w-full pl-9 pr-3.5 py-2 bg-white rounded-none border border-[#E2DDD5] text-xs text-[#1A1A1A] placeholder-[#8C8377] focus:outline-none focus:border-[#1A1A1A] transition-colors"
              />
            </div>

            {/* Sort Select */}
            <div className="relative w-full sm:w-auto flex items-center gap-2 bg-white px-3 py-2 rounded-none border border-[#E2DDD5] text-xs text-[#66615B]">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#1A1A1A] shrink-0" />
              <select
                id="product-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#1A1A1A] font-medium focus:outline-none cursor-pointer pr-2"
              >
                <option value="featured">Featured First</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#F5F2ED] rounded-none border border-[#E2DDD5] p-8">
            <p className="text-base text-[#1A1A1A] font-serif font-bold mb-2">No furniture items matched your search.</p>
            <p className="text-xs text-[#736B63] mb-6">Try searching for other terms like "sofa", "walnut", "leather", or reset filters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                onSelectCategory('all');
              }}
              className="px-6 py-3 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-[0.15em] rounded-none hover:bg-[#333333] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => {
              const isWishlisted = wishlist.includes(product.id);
              return (
                <div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  className="group bg-white rounded-none overflow-hidden border border-[#E2DDD5] shadow-sm hover:shadow-xl hover:border-[#1A1A1A] transition-all duration-300 flex flex-col"
                >
                  {/* Product Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#ECE6DD]">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5">
                      {product.isBestSeller && (
                        <span className="px-2.5 py-0.5 rounded-none bg-[#1A1A1A]/90 backdrop-blur-sm text-[#F5F2ED] text-[10px] font-mono font-bold tracking-wider uppercase flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5 text-[#D4AF37]" />
                          Best Seller
                        </span>
                      )}
                      {product.isNewArrival && (
                        <span className="px-2.5 py-0.5 rounded-none bg-[#8C6239]/90 backdrop-blur-sm text-[#F5F2ED] text-[10px] font-mono font-bold tracking-wider uppercase">
                          New Release
                        </span>
                      )}
                    </div>

                    {/* Wishlist Button */}
                    <button
                      id={`wishlist-btn-${product.id}`}
                      onClick={() => onToggleWishlist(product.id)}
                      aria-label={`Save ${product.name} to wishlist`}
                      className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-none flex items-center justify-center backdrop-blur-md transition-all border ${
                        isWishlisted
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-md'
                          : 'bg-[#F5F2ED]/90 text-[#1A1A1A] border-[#E2DDD5] hover:bg-white hover:border-[#1A1A1A]'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>

                    {/* Quick Preview Hover Overlay */}
                    <div className="absolute inset-0 bg-[#1A1A1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="px-4 py-2 bg-[#F5F2ED] text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.15em] rounded-none shadow-md flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform border border-[#1A1A1A]">
                        <Eye className="w-3.5 h-3.5 text-[#1A1A1A]" />
                        Quick View
                      </span>
                    </div>
                  </div>

                  {/* Product Details Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between text-xs text-[#736B63] mb-2">
                        <span className="uppercase tracking-[0.2em] text-[10px] font-mono font-bold text-[#736B63]">
                          {product.category}
                        </span>
                        <span className="font-mono text-xs font-medium text-[#1A1A1A] flex items-center gap-1">
                          ★ {product.rating.toFixed(1)} <span className="text-[#8C8377]">({product.reviewsCount})</span>
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3
                        onClick={() => onViewProductDetails(product)}
                        className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] mb-2 cursor-pointer hover:text-[#8C6239] transition-colors leading-snug"
                      >
                        {product.name}
                      </h3>

                      {/* Short Description */}
                      <p className="text-xs sm:text-sm text-[#66615B] line-clamp-2 mb-4 font-light leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Color Swatch Dots */}
                      {product.colors && product.colors.length > 0 && (
                        <div className="flex items-center gap-2 mb-5">
                          <span className="text-[10px] font-mono text-[#736B63] uppercase tracking-wider">Finishes:</span>
                          <div className="flex items-center gap-1.5">
                            {product.colors.map((c, i) => (
                              <span
                                key={i}
                                title={c.name}
                                className="w-3.5 h-3.5 rounded-none border border-black/20 shadow-inner"
                                style={{ backgroundColor: c.hex }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price and View Details Action */}
                    <div className="pt-4 border-t border-[#E2DDD5] flex items-center justify-between gap-3">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg sm:text-xl font-bold text-[#1A1A1A] font-mono">
                            ${product.price.toLocaleString()}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs font-mono text-[#8C8377] line-through">
                              ${product.originalPrice.toLocaleString()}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] font-mono text-[#8C8377] block">10-Yr Guarantee</span>
                      </div>

                      {/* View Details Button */}
                      <button
                        id={`view-details-btn-${product.id}`}
                        onClick={() => onViewProductDetails(product)}
                        className="px-4 py-2.5 bg-[#1A1A1A] text-[#F5F2ED] text-xs font-bold tracking-[0.15em] uppercase rounded-none hover:bg-[#333333] active:scale-95 transition-all flex items-center gap-1.5 shadow-sm border border-[#1A1A1A] focus:outline-none"
                      >
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
