import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategory } from '../../models/product.model';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  categories: ProductCategory[] = [
    {
      id: 1,
      title: 'Gel Blaster Guns',
      description: 'Full-auto, semi-auto, pistols, rifles, and sniper-style blasters. Multiple brands and models available.',
      badge: 'Bestseller',
      icon: 'gun',
      targetId: 'featured'
    },
    {
      id: 2,
      title: 'Gel Ammo & Balls',
      description: 'High-quality water-gel beads in different sizes. Bulk packs available for extended gameplay sessions.',
      icon: 'ammo',
      targetId: 'featured'
    },
    {
      id: 3,
      title: 'Tactical Gear',
      description: 'Vests, holsters, magazines, scopes, and accessories to complete your full loadout.',
      icon: 'gear',
      targetId: 'accessories'
    },
    {
      id: 4,
      title: 'Spare Parts',
      description: 'Motors, springs, gearboxes, barrels, nozzles, and more. Keep your blaster at peak performance.',
      icon: 'parts',
      targetId: 'accessories'
    }
  ];

  scrollToSection(targetId: string): void {
    const el = document.getElementById(targetId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}