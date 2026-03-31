import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Step {
  num: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-to-order',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-to-order.component.html',
  styleUrl: './how-to-order.component.scss'
})
export class HowToOrderComponent {
  // TODO: Replace with actual Facebook page Messenger link
  messengerUrl = 'https://www.facebook.com/share/173cq6yAm4/';

  steps: Step[] = [
    {
      num: '01',
      title: 'Browse & Pick',
      description: 'Check our products above or ask us on Messenger for the full catalog and availability.'
    },
    {
      num: '02',
      title: 'Message Us',
      description: 'Send your order via Facebook Messenger with your name, address, and items you want.'
    },
    {
      num: '03',
      title: 'Get It Delivered',
      description: 'We\'ll pack and ship your order. COD available or GCash/BPI for prepaid orders.'
    }
  ];

  openMessenger(): void {
    window.open(this.messengerUrl, '_blank');
  }
}
