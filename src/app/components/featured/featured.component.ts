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
    name: 'M4A1 Gel Blaster Rifle',
    description: 'Full-auto electric gel blaster, metal gearbox, 800 rounds/min. Great for beginners and veterans.',
    price: 1299,
    unit: '+ shipping',
    tag: '🔥 Hot',
    slug: 'M4A1',
    image: 'products/m4a1.jpeg'
  },
  {
    id: 2,
    name: 'AKM-Style Gel Blaster',
    description: 'Realistic AKM design, semi/full-auto toggle, upgraded spring system for longer range.',
    price: 1499,
    unit: '+ shipping',
    tag: '⭐ Popular',
    slug: 'AKM',
    image: 'products/m4a1.jpeg'
  },
  {
    id: 3,
    name: 'Glock-Style Gel Pistol',
    description: 'Compact sidearm perfect as backup. Lightweight, easy to carry, fits standard gel bead ammo.',
    price: 699,
    unit: '+ shipping',
    tag: 'New',
    slug: 'GLK',
    image: 'products/m4a1.jpeg'
  },
  {
    id: 4,
    name: 'Bulk Gel Bead Pack',
    description: '10,000 pcs high-burst gel beads. 7–8mm compatible. Pre-soaked option available.',
    price: 149,
    unit: '/ 10k pcs',
    slug: 'AMMO',
    image: 'products/m4a1.jpeg'
  }
];

  scrollToOrder(): void {
    const el = document.getElementById('order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
