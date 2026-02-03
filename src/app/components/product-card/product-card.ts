import { Component, inject, input } from '@angular/core';
import { Product } from '../../product';
import { CartData } from '../../services/cart-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
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
