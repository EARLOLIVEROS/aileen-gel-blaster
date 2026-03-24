import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WhyItem {
  num: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-us.component.html',
  styleUrl: './why-us.component.scss'
})
export class WhyUsComponent {
  items: WhyItem[] = [
    { num: '01', title: 'Fast Delivery', description: 'Same-day packing on orders before 12NN. Nationwide shipping via trusted couriers.' },
    { num: '02', title: 'COD Friendly', description: 'Cash on Delivery available for most areas. No need for online payment to order.' },
    { num: '03', title: 'Legit Seller', description: 'Established store with real customer reviews and proof of transactions. See Proof of transactions on our Facebook page' },
    { num: '04', title: 'After-Sales Support', description: 'Got issues with your order? Message us and we\'ll fix it ASAP.' },
    { num: '05', title: 'Complete Loadout', description: 'One shop for everything — guns, ammo, gear, and parts. Walang aalis na kulang.' },
  ];
}
