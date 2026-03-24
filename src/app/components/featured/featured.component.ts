import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-featured',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.scss'
})
export class FeaturedComponent {
  products: Product[] = [
  {
    id: 1,
    name: 'Cyma m4 v2 High-End Unit',
    description: '🗹Metal gear 🗹Metal tube 🗹Prime Magazine 🗹Adjustable butt 🗹Free Scope 🗹Free Gel 🗹Free Charger 🗹Free holo sight 🗹Free Mini Hop up',
    price: 1299,
    unit: '+ shipping',
    tag: 'Hot',
    slug: 'M4A1',
    image: 'products/m4a1.jpeg'
  },
  {
    id: 2,
    name: 'tg SLR V2',
    description: '🗹METAL GEAR 🗹METAL INNER/OUTER BARREL 🗹METAL TUBE 🗹METAL MAG HIGH END UPGRADABLE  🗹FREE GEL BATTERY CHARGER',
    price: 1499,
    unit: '+ shipping',
    tag: 'Popular',
    slug: 'AKM',
    image: 'products/4.jpg'
  },
  {
    id: 3,
    name: 'Bohan mk8 v2',
    description: '🗹METAL GEAR 🗹METAL INNER/OUTER BARREL 🗹METAL TUBE 🗹METAL MAG HIGH END UPGRADABLE  🗹FREE GEL BATTERY CHARGER',
    price: 2000,
    unit: '+ shipping',
    tag: 'New',
    slug: 'GLK',
    image: 'products/5.jfif'
  },
  {
    id: 4,
    name: 'JINGJI SLR V5',
    description: '🗹METAL GEAR 🗹METAL INNER/OUTER BARREL 🗹METAL TUBE 🗹METAL MAG HIGH END UPGRADABLE  🗹FREE GEL BATTERY CHARGER',
    price: 2000,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/2.jfif'
  }
];

  scrollToOrder(): void {
    const el = document.getElementById('order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
