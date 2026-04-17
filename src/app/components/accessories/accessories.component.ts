import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss'
})
export class AccessoriesComponent {
  accessories: Product[] = [
    {
      id: 1,
      name: 'Metal Tracer',
      description: '',
      price: 700,
      unit: '+ shipping',
      tag: 'Popular',
      slug: 'SIGHT',
      image: 'products/accessories/metaltracer.jfif'
    },

    {
      id: 2,
      name: 'TG ARP9 V4 Round Mag',
      description: '',
      price: 900,
      unit: '+ shipping',
      tag: 'Popular',
      slug: 'MAG',
      image: 'products/accessories/Tgarp9v4roundmag.jfif'
    },

    {
      id: 3,
      name: 'CQB Drum Mag',
      description: '',
      price: 1500,
      unit: '+ shipping',
      tag: 'Popular',
      slug: 'MAG',
      image: 'products/accessories/Cqbdrummag.jfif'
    },
    
    {
      id: 4,
      name: 'Eotech 558 Metal Adjustable',
      description: '',
      price: 600,
      unit: '+ shipping',
      tag: 'New',
      slug: 'SIGHT',
      image: 'products/accessories/Eotech558metal adjustable.jfif'
    },

    {
      id: 5,
      name: 'Eotech 558 + G33 Combo Full Alloy Adjustable',
      description: '',
      price: 5899,
      unit: '+ shipping',
      tag: '',
      slug: 'SIGHT',
      image: 'products/accessories/Eotech558+g33combofullalloyadjustable.jfif'
    },

    {
      id: 6,
      name: 'VISM Adjustable Full Metal',
      description: '',
      price: 2200,
      unit: '+ shipping',
      tag: 'New',
      slug: 'SIGHT',
      image: 'products/accessories/Vismadjustablefullmetal.jfif'
    },

    {
      id: 7,
      name: '1.25 MOA Alloy Adjustable',
      description: '',
      price: 1700,
      unit: '+ shipping',
      tag: 'New',
      slug: 'SIGHT',
      image: 'products/accessories/1.25 MOA alloy adjustable.jfif'
    },

    {
      id: 8,
      name: 'M1k full Ally Adjustable',
      description: '',
      price: 1300,
      unit: '+ shipping',
      tag: '',
      slug: 'SIGHT',
      image: 'products/accessories/M1k full ally adjustable.jfif'
    },

    {
      id: 9,
      name: '1.2 - 6 Crosshair Full Metal zoomable adjustable',
      description: '',
      price: 3300,
      unit: '+ shipping',
      tag: 'New',
      slug: 'SIGHT',
      image: 'products/accessories/1.2 - 6 crosshair full metal zoomable adjustable.jfif'
    },

    {
      id: 10,
      name: '1x40 RD UPGRADADED VERSION FULL METAL ADJUSTABLE',
      description: '',
      price: 1400,
      unit: '+ shipping',
      tag: 'New',
      slug: 'SIGHT',
      image: 'products/accessories/1x40 RD UPGRADADED VERSION FULL METAL ADJUSTABLE.jfif'
    },

    {
      id: 10,
      name: 'peq 15 plastic',
      description: '',
      price: 250,
      unit: '+ shipping',
      tag: 'TOP SELLING',
      slug: 'SIGHT',
      image: 'products/accessories/peq 15 plastic.jfif'
    },
  ];

  scrollToOrder(): void {
    const el = document.getElementById('order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
