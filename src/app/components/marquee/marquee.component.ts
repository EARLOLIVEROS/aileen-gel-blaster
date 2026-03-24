import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  items = [
    'Gel Blasters', 'Gel Ammo', 'Tactical Gear',
    'Spare Parts', 'COD Available', 'Fast Shipping',
    'Order via Messenger'
  ];
  // doubled for seamless loop
  get doubledItems() {
    return [...this.items, ...this.items];
  }
}
