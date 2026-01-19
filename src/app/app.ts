import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, products } from './product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  products = signal<Product[]>(products);
  totalCartItems = signal(0);

  addToCart() {
    this.totalCartItems.update(value => value + 1)
  }
}
