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
    description: 'Full metal gears, metal inner & outer barrel, and metal tube for durability. High-end metal mag, fully upgradable. Includes FREE gel battery charger (240fps).',
    price: 3500,
    unit: '+ shipping',
    tag: 'Hot',
    slug: 'M4A1',
    image: 'products/m4a1.jpeg'
  },
  {
    id: 2,
    name: 'tg SLR V2',
    description: 'Full metal gears, metal inner & outer barrel, metal tube, and metal mag. High-end and fully upgradable. Includes FREE gel battery charger (270fps).',
    price: 3800,
    unit: '+ shipping',
    tag: 'Popular',
    slug: 'AKM',
    image: 'products/gb8.jfif'
  },
  {
    id: 3,
    name: 'Bohan MK8 v2',
    description: 'Metal gears, metal tube, prime mag, high-end and upgradable. Includes FREE gel battery charger and holo sight (250fps).',
    price: 3500,
    unit: '+ shipping',
    tag: 'New',
    slug: 'GLK',
    image: 'products/gb9.jfif'
  },
  {
    id: 4,
    name: 'JINGJI SLR V5',
    description: 'Metal gears, metal gearbox, metal barrel, bolt catch, and blowback. Includes prime & long mag, metal muzzle. Premium, upgradable unit with gel battery charger (270fps).',
    price: 8900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb28.jfif'
  },
  {
    id: 5,
    name: 'PDX V4',
    description: 'Metal gears, metal gearbox, metal barrel, and blowback. Upgradable unit with gel, 11.1v Battery and Charger (270fps).',
    price: 5300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/b.jfif'
  },
  {
    id: 6,
    name: 'BOHAN AR SNIPER',
    description: 'Metal gears, metal inner and outer barrel, and blowback.Includes Metal muzzle. Upgradable unit with gel battery charger (240fps).',
    price: 3800,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb1.jfif'
  },
  {
    id: 7,
    name: 'BOHAN HK416D V2',
    description: 'Metal gears, metal tube, prime mag, high-end and upgradable. Includes FREE gel battery charger and holo sight (240fps).',
    price: 3500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb2.jfif'
  },
  {
    id: 8,
    name: 'BOHAN AR15 V2',
    description: 'Metal gears, metal tube, prime mag, high-end and upgradable. Includes FREE gel battery charger and holo sight (240fps).',
    price: 3600,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb24.jfif'
  },
  {
    id: 9,
    name: 'BOHAN M4A1 V2',
    description: 'Metal gears, metal tube, prime mag, high-end and upgradable. Includes FREE gel battery charger and holo sight (240fps).',
    price: 3500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb19.jfif'
  },
  {
    id: 10,
    name: 'F1 BLAZE V4',
    description: 'Metal gears, metal gear box, cnc metal, Auto Prime Magazine, metal tube, high-end and upgradable. Includes FREE Gel *No battery and charger included (260fps).',
    price: 8300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb3.jfif'
  },
  {
    id: 11,
    name: 'CYMA M4A1 V2 SAND',
    description:'Full metal gears, metal inner & outer barrel, and metal tube for durability. High-end metal mag, fully upgradable. Includes FREE gel battery charger (240fps).',
    price: 3500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb4.jfif'
  },
  {
    id: 12,
    name: 'TG MCX V2',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Pressure spring prime mag, high-end and upgradable. Includes FREE Gel, Battery charger, holo sight, and Metal muzzle (260fps).',
    price: 3800,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb5.jfif'
  },
  {
    id: 13,
    name: 'TG MCX V2 METAL MAG',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Metal prime mag, high-end and upgradable. Includes FREE Gel, Battery charger, holo sight, and Metal muzzle (260fps).',
    price: 3600,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb31.jfif'
  },
  {
    id: 14,
    name: 'CYMMA MP5 V2',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger, Extra Butt and Round Mag (240fps).',
    price: 5500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb7.jfif'
  },
  {
    id: 15,
    name: 'TG MP5L V2',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (240fps).',
    price: 3600,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb10.jfif'
  },
  {
    id: 16,
    name: 'TG ARP9 V4',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 3600,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb11.jfif'
  },
  {
    id: 17,
    name: 'TG G36C V2',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 3800,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb12.jfif'
  },
  {
    id: 18,
    name: 'STEN MK2',
    description: 'Metal gears,Metal gearbox, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (240fps).',
    price: 8000,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb14.jfif'
  },
  {
    id: 19,
    name: 'TG DDMPDW V2',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Prime mag.*Not Upgradable. Includes FREE Gel, Battery charger (250fps).',
    price: 3000,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb17.jfif'
  },
  {
    id: 20,
    name: 'TG ARP9 V2',
    description: 'Metal gears, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 3300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb20.jfif'
  },
  {
    id: 21,
    name: 'TG MP5 SHORT',
    description: 'Nylon Gear, Not upgradable (250fps).',
    price: 2500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb22.jfif'
  }, 
  {
    id: 22,
    name: 'BOHAN MK8 V5',
    description: 'Metal gears, Metal gearbox, metal inner/outer Barrel, metal tube, Prime mag, Metal Mag high-end and upgradable, 80% Metal. Includes FREE Gel, Battery charger (250fps).',
    price: 5800,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb23.jfif'
  },
  {
    id: 23,
    name: 'BOHAN HK416D V5',
    description: 'Metal gears, Metal gearbox, metal inner/outer Barrel, metal tube, Prime mag, Metal Mag high-end and upgradable, 80% Metal. Includes FREE Gel, Battery charger (250fps).',
    price: 5300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb30.jfif'
  },
  {
    id: 23,
    name: 'SUGE PDX',
    description: 'Metal gears, Metal gearbox V2, metal inner/outer Barrel, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (250fps).',
    price: 6600,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb26.jfif'
  },
  {
    id: 24,
    name: 'SIJUN TR1 V2',
    description: 'Metal gears, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (250fps).',
    price: 3600,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb27.jfif'
  },
  {
    id: 25,
    name: 'FJS BLP MOSFET',
    description: 'Metal gears,Metal Gearbox, metal tube, auto Prime mag, Mosfet high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 8500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb29.jfif'
  },
  {
    id: 26,
    name: 'SIJUN HK416D V3',
    description: 'Metal gears,Metal Gearbox, metal tube, metal mag, high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 8300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb32.jfif'
  },
  {
    id: 27,
    name: 'SIJUN MK18 V4',
    description: 'Metal gears,Metal Gearbox, metal tube, metal mag, Mosfet high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 8300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb33.jfif'
  },
  {
    id: 28,
    name: 'LT NOVESKE V4',
    description: 'Metal gears,Metal Gearbox, metal tube, Prime mag, Mosfet high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 8300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb34.jfif'
  },
  {
    id: 29,
    name: 'FJS HK416D V4',
    description: 'Metal gears,Metal Gearbox, metal tube, Prime mag, Mosfet high-end and upgradable. Includes FREE Gel, Battery charger (260fps).',
    price: 8700,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb35.jfif'
  },
  {
    id: 30,
    name: 'WD PDX V2',
    description: 'Metal gears, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger and Holo sight (250fps).',
    price: 3500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb36.jfif'
  },
  {
    id: 31,
    name: 'WD PDX V3',
    description: 'Metal gears, Metal gearbox, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger and Holo sight (260fps).',
    price: 4850,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb37.jfif'
  },
  {
    id: 32,
    name: 'BOHAN TEC9',
    description: 'Metal gears, Metal gearbox, metal tube, Prime mag, Mosfet high-end and upgradable, 80% Metal. Includes FREE Gel, Battery charger and Holo sight (260fps).',
    price: 6500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb39.jfif'
  },
  {
    id: 33,
    name: 'TG F4 V2',
    description: 'Metal gears, Metal mag, metal tube, metal inner/outer barrel, Prime mag, *Not upgradable. Includes FREE Gel, Battery charger and Holo sight (250fps).',
    price: 3000,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb38.jfif'
  },
  {
    id: 34,
    name: 'EVO UZI',
    description: 'Nylon, *Not upgradable.(200fps).',
    price: 3000,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb40.jfif'
  },
  {
    id: 35,
    name: 'G22',
    description: 'Metal Gear.(200fps).',
    price: 5300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb42.jfif'
  },
  {
    id: 36,
    name: 'FJS M4 V3',
    description: 'Metal gears,Metal Gearbox, metal tube, Prime mag, high-end and upgradable, 80% Metal. Includes FREE Gel, Battery charger (260fps).',
    price: 8300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb43.jfif'
  },
  {
    id: 37,
    name: 'CYMMA AK47',
    description: 'Metal gears, metal tube, Prime mag, high-end and upgradable. Includes FREE Gel, Battery charger (250fps).',
    price: 4500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb44.jfif'
  },
  {
    id: 38,
    name: 'SQB RED',
    description: 'Metal gears, metal tube, Prime mag, high-end and upgradable, CNC Metal. Includes FREE Gel, 11V Battery charger (260fps).',
    price: 7900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb45.jfif'
  },
  {
    id: 39,
    name: 'SQB GREEN',
    description: 'Metal gears, metal tube, Prime mag, high-end and upgradable, CNC Metal. Includes FREE Gel, 11V Battery charger (260fps).',
    price: 7900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb46.jfif'
  },
  {
    id: 40,
    name: 'MK18 NYLON (MID END UNIT)',
    description: 'Nylon body, nylon Gear, *Not upgradable (200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb47.jfif'
  },
  {
    id: 41,
    name: 'MK18 NYLON SAND (MID END UNIT)',
    description: 'Nylon body, nylon Gear, *Not upgradable (200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb49.jfif'
  },
  {
    id: 42,
    name: 'AR (MID END UNIT)',
    description: 'Nylon body, nylon Gear, *Not upgradable (200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb50.jfif'
  },
  {
    id: 43,
    name: 'TG HK416 BLOWBACK (MID END UNIT)',
    description: 'Plastic Abs body, nylon Gear, *Not upgradable (200fps).',
    price: 1650,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb51.jfif'
  },
  {
    id: 44,
    name: 'TG HK416 BLOWBACK SAND (MID END UNIT)',
    description: 'Plastic Abs body, nylon Gear, *Not upgradable (200fps).',
    price: 1650,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb53.jfif'
  },
  {
    id: 45,
    name: 'HK M16 SAND (MID END UNIT)',
    description: 'Plastic Abs body, nylon Gear, *Not upgradable (200fps).',
    price: 1650,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb52.jfif'
  },
  {
    id: 46,
    name: 'HK M16 BLACK (MID END UNIT)',
    description: 'Plastic Abs body, nylon Gear, *Not upgradable (200fps).',
    price: 1650,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb54.jfif'
  },
  {
    id: 47,
    name: 'JINGJI SLR V4',
    description: 'Full metal gears, metal inner & outer barrel, metal tube, and Prime mag. High-end and fully upgradable. Includes FREE gel battery charger (260fps).',
    price: 6900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb55.jfif'
  },
  {
    id: 48,
    name: 'JINGJI SLR V4 CLEAR',
    description: 'Full metal gears, metal inner & outer barrel, metal tube, and Prime mag. High-end and fully upgradable. Includes FREE gel battery charger (260fps).',
    price: 7900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb57.jfif'
  },
  {
    id: 49,
    name: 'TG F4 V1 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable (240fps).',
    price: 2200,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb58.jfif'
  },
  {
    id: 50,
    name: 'LEHUI MCX (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer (200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb59.jfif'
  },
  {
    id: 51,
    name: 'LEHUI ARP 9 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb60.jfif'
  },
  {
    id: 52,
    name: 'LEHUI VECTOR (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb63.jfif'
  },
  {
    id: 53,
    name: 'LEHUI X95 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb68.jfif'
  },
  {
    id: 54,
    name: 'LEHUI MPX (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1900,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb70.jfif'
  },
  {
    id: 55,
    name: 'HD TEC9 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1200,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb61.jfif'
  },
  {
    id: 56,
    name: 'HD ACE 21N (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb65.jfif'
  },
  {
    id: 57,
    name: 'HD ACE 21N (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb65.jfif'
  },
  {
    id: 58,
    name: 'HD SLR 5.0 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb62.jfif'
  },
  {
    id: 59,
    name: 'HD N4 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb71.jfif'
  },
  {
    id: 60,
    name: 'HD UMP 45 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 2000,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb66.jfif'
  },
  {
    id: 61,
    name: 'HD AUG (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1500,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb67.jfif'
  },
  {
    id: 62,
    name: 'HD CPE3 (MID END UNIT)',
    description: 'Nylon gear, Nylon Body. *Not upgradable. Free Tracer(200fps).',
    price: 1300,
    unit: '+ shipping',
    slug: 'AMMO',
    image: 'products/gb69.jfif'
  },
];

  scrollToOrder(): void {
    const el = document.getElementById('order');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
