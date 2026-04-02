import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  items: FaqItem[] = [
    {
      question: 'Legit ba kayo? Saan pwede makita ang mga reviews?',
      answer: 'Oo, established na store kami. Pwede mong i-check ang aming Facebook page para sa mga proof of transactions, customer reviews, at unboxing videos ng aming mga buyers. Hindi kami basta-basta — maraming beses na kaming na-feature sa mga gel blaster communities.',
      open: false
    },
    {
      question: 'May Cash on Delivery (COD) ba kayo?',
      answer: 'Yes! Nag-ooperate kami ng COD sa karamihan ng areas sa Pilipinas. Hindi na kailangan mag-online payment para mag-order. Makipag-ugnayan lang sa amin sa Facebook o Shopee para i-confirm kung available ang COD sa inyong location.',
      open: false
    },
    {
      question: 'Gaano katagal ang delivery? Same-day ba ang pag-pack?',
      answer: 'Lahat ng orders na nai-place bago mag-12NN ay sama-samang pine-pack at ipinapadala ng araw na iyon. Ang delivery time ay depende sa courier at lokasyon — karaniwan ay 2–5 business days nationwide. Nagpapadala kami sa lahat ng probinsya sa buong Pilipinas.',
      open: false
    },
    {
      question: 'Available ba lahat ng unit?',
      answer: 'I-message lang kami agad sa aming Facebook page o sa platform kung saan kayo mag oorder para i-confirm ang availability ng unit na gusto niyo. May mga units na mabilis maubos dahil sa demand, pero lagi kaming nagre-restock ng mga bestsellers.',
      open: false
    },
    {
      question: 'Ano ang gagawin ko kung may problema ang aking order?',
      answer: 'I-message lang kami agad sa aming Facebook page o sa platform kung saan kayo nag-order. Ino-offer namin ang after-sales support para sa lahat ng aming customers — kung may sira, kulang, o maling item na natanggap, aayusin namin ito ASAP. Huwag mag-alinlangan na makipag-ugnayan.',
      open: false
    },
    {
      question: 'Anong klaseng Gel ba ang Recommended ?',
      answer: 'Ang aming gel blasters ay compatible sa 60n Hard Gel. Para sa best performance, inirerekomenda namin ang paggamit ng high-quality gel balls na may consistent size at hardness. Iwasan ang paggamit ng mga gel balls na sobrang malambot o matigas, dahil maaaring magdulot ito ng jams o damage sa blaster.',
      open: false
    },
    {
      question: 'May warranty ba ang mga produkto niyo?',
      answer: 'Oo, lahat ng aming gel blasters ay may 4 - days na palugit para ma return ang product. Kung may issue sa inyong unit, i-message lang kami agad para ma-assist namin kayo. Ang warranty ay hindi sakop ang damage na dulot ng misuse o normal wear and tear.',
      open: false
    },
    {
      question: 'Paano ang tamang pag babad ng hard gel?',
      answer: 'Para magbabad ng hard gel, ilagay ang mga gel balls sa isang clean container at punuin ito ng malinis na tubig. Hayaan itong magbabad ng 4-6 hours o hanggang sa lumaki ang mga gel balls. Siguraduhing hindi lalampas sa recommended soaking time para maiwasan ang oversized ng mga gel balls na mag cacause ng pag ka jam sa mga units nyo.',
      open: false
    },
    {
      question: 'Tinetest ba ang mga unit bago i deliver?',
      answer: 'lahat ng unit tinetest bago i ship kung sakaling depekto during shipment makipag ugnayan sa amin agad wag kalimutan mag video ng unboxing',
      open: false
    },
  ];

  toggle(item: FaqItem): void {
    item.open = !item.open;
  }
}