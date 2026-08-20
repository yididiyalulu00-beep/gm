import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { WishlistDrawer } from './components/WishlistDrawer';
import { Footer } from './components/Footer';
import { PRODUCTS } from './data/furnitureData';
import { CategoryId, Product, ContactFormState } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [wishlist, setWishlist] = useState<string[]>(['gm-sofa-aurora', 'gm-chair-vienna']);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Contact prefill state when coming from a specific piece
  const [prefillMessage, setPrefillMessage] = useState('');
  const [prefillInterest, setPrefillInterest] = useState<ContactFormState['interest']>('showroom_visit');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'categories', 'products', 'about', 'why-us', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCategory = (categoryId: CategoryId) => {
    setSelectedCategory(categoryId);
    handleNavigateSection('products');
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const handleInquirePiece = (product: Product) => {
    setPrefillInterest('showroom_visit');
    setPrefillMessage(
      `I am interested in scheduling a showroom viewing for the "${product.name}" ($${product.price.toLocaleString()}). Please let me know available slots.`
    );
    handleNavigateSection('contact');
  };

  const handleInquireWishlist = (products: Product[]) => {
    const names = products.map((p) => `• ${p.name} ($${p.price})`).join('\n');
    setPrefillInterest('custom_furniture');
    setPrefillMessage(
      `Hello, I would like to request a formal quotation and showroom consultation for the following saved pieces:\n${names}`
    );
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] flex flex-col selection:bg-[#1A1A1A] selection:text-[#F5F2ED]">
      {/* Sticky Top Navigation */}
      <Navbar
        wishlistCount={wishlist.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onNavigateSection={handleNavigateSection}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreCollection={() => handleNavigateSection('products')}
          onContactUs={() => handleNavigateSection('contact')}
        />

        {/* 2. Featured Categories */}
        <Categories onSelectCategory={handleSelectCategory} />

        {/* 3. Featured Products */}
        <FeaturedProducts
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewProductDetails={(product) => setSelectedProduct(product)}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* 4. About GM Furniture */}
        <AboutSection
          onContactClick={() => handleNavigateSection('contact')}
          onExploreProducts={() => handleNavigateSection('products')}
        />

        {/* 5. Why Choose Us */}
        <WhyChooseUs />

        {/* 6. Gallery */}
        <GallerySection />

        {/* 7. Contact Section */}
        <ContactSection
          prefillMessage={prefillMessage}
          prefillInterest={prefillInterest}
        />
      </main>

      {/* 8. Footer */}
      <Footer onNavigateSection={handleNavigateSection} />

      {/* Interactive Modals and Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onInquirePiece={handleInquirePiece}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProductIds={wishlist}
        allProducts={PRODUCTS}
        onRemoveFromWishlist={handleToggleWishlist}
        onViewProduct={(product) => setSelectedProduct(product)}
        onInquireWishlist={handleInquireWishlist}
      />
    </div>
  );
}
