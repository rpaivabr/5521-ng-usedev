import { Component, inject, signal } from '@angular/core';
import { ProductData } from '../../../services/product-data';
import { CartData } from '../../../services/cart-data';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private productData = inject(ProductData);
  private cartData = inject(CartData);
  product = signal(this.productData.getProducts()[0]);

  addToCart() {
    this.cartData.addToCart(this.product());
  }
}
