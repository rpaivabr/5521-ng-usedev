import { Component, computed, effect, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { Banner } from './components/banner/banner';
import { ProductList } from './components/product-list/product-list';
import { Product } from './product';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   cart = signal<Product[]>([]);
   cartItemsCount = computed(() => this.cart().length);

   logEffect = effect(() => {
      console.log(this.cart());
   })

   addToCart(product: Product): void {
     this.cart.update(items => [...items, product]);
   }
}
