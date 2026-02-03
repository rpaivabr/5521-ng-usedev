import { Component, computed, effect, inject, input } from '@angular/core';
import { ProductData } from '../../../services/product-data';
import { Router } from '@angular/router';
import { CartData } from '../../../services/cart-data';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private router = inject(Router)
  private productData = inject(ProductData);
  private cartData = inject(CartData);
  private auth = inject(Auth);
  isLogged = this.auth.isLogged;

  id = input<string>();
  product = computed(() => this.productData.getProductById(Number(this.id())));

  redirectNotFoundProductEff = effect(() => {
    if (!this.product()) this.router.navigateByUrl('/products');
  })

  addToCart(): void {
    const product = this.product();
    if (product) {
      this.cartData.addToCart(product);
    }
  }
}
