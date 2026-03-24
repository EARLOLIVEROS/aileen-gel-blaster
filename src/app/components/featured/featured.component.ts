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
    description: 'Full metal gears, metal inner & outer barrel, and metal tube for durability. High-end metal mag, fully upgradable. Includes FREE gel battery charger.',
    price: 3500,
    unit: '+ shipping',
    tag: 'Hot',
    slug: 'M4A1',
    image: 'products/m4a1.jpeg'
  },
  {
    id: 2,
    name: 'tg SLR V2',
    description: 'Full metal gears, metal inner & outer barrel, metal tube, and metal mag. High-end and fully upgradable. Includes FREE gel battery charger.',
    price: 3800,
    unit: '+ shipping',
    tag: 'Popular',
    slug: 'AKM',
    image: 'products/a.jfif'
  },
  {
    id: 3,
    name: 'Bohan MK8 v2',
    description: 'Metal gears, metal tube, prime mag, high-end and upgradable. Includes FREE gel battery charger and holo sight.',
    price: 3500,
    unit: '+ shipping',
    tag: 'New',
    slug: 'GLK',
    image: 'products/d.jfif'
  },
  {
    id: 4,
    name: 'JINGJI SLR V5',
    description: 'Metal gears, metal gearbox, metal barrel, bolt catch, and blowback. Includes prime & long mag, metal muzzle. Premium, upgradable unit with gel battery charger.',
    price: 8900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/c.jfif'
  },
  {
    id: 4,
    name: 'PDX V4',
    description: 'Metal gears, metal gearbox, metal barrel, bolt catch, and blowback. Includes prime & long mag, metal muzzle. Premium, upgradable unit with gel battery charger.',
    price: 5300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/b.jfif'
  }
];

  scrollToOrder(): void {
    const el = document.getElementById('order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
