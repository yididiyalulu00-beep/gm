export type CategoryId = 'all' | 'living-room' | 'bedroom' | 'dining-room' | 'office';

export interface Category {
  id: CategoryId;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: number;
  featuredPill: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  imageIndex?: number;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: string;
  categorySlug: CategoryId;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  shortDescription: string;
  detailedDescription: string;
  dimensions: string;
  weight: string;
  materials: string[];
  colors: ProductColor[];
  images: string[];
  inStock: boolean;
  featured: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  specs: ProductSpecification[];
}

export interface GalleryItem {
  id: string;
  title: string;
  spaceType: string;
  image: string;
  caption: string;
  location: string;
  featuredProductIds?: string[];
  dimensions?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metricNumber?: string;
  metricLabel?: string;
}

export interface ContactFormState {
  fullName: string;
  email: string;
  phone: string;
  interest: 'showroom_visit' | 'custom_furniture' | 'interior_consult' | 'bulk_corporate' | 'general';
  preferredDate?: string;
  message: string;
}

export interface ShowroomDetails {
  brandName: string;
  tagline: string;
  address: string;
  cityStateZip: string;
  phone: string;
  email: string;
  hoursWeekday: string;
  hoursWeekend: string;
  virtualTourAvailable: boolean;
}
