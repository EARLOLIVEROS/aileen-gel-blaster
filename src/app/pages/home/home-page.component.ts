import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { MarqueeComponent } from '../../components/marquee/marquee.component';
import { ProductsComponent } from '../../components/products/products.component';
import { FeaturedComponent } from '../../components/featured/featured.component';
import { AccessoriesComponent } from '../../components/accessories/accessories.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';
import { FaqComponent } from '../../components/faq/faq.component';
import { HowToOrderComponent } from '../../components/how-to-order/how-to-order.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    MarqueeComponent,
    ProductsComponent,
    FeaturedComponent,
    WhyUsComponent,
    FaqComponent,
    AccessoriesComponent,
    HowToOrderComponent,
    FooterComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {}
