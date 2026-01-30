import { Component, inject, input, output } from '@angular/core';
import { Product } from '../../product';
import { CartData } from '../../services/cart-data';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  private cartData = inject(CartData);
  product = input.required<Product>()
  
  addToCart(product: Product) {
    this.cartData.addToCart(product);
  }
}
