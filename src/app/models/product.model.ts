export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  tag?: string;
  slug: string;
  image?: string;
}

export interface ProductCategory {
  id: number;
  title: string;
  description: string;
  badge?: string;
  icon: 'gun' | 'ammo' | 'gear' | 'parts';
  targetId?: string;
}