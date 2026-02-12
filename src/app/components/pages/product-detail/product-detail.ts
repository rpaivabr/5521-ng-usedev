import { Component, computed, effect, inject, input } from '@angular/core';
import { ProductData } from '../../../services/product-data';
import { CartData } from '../../../services/cart-data';
import { Router } from '@angular/router';
import { AuthData } from '../../../services/auth-data';

@Component({
  selector: 'app-product-detail',
  imports: [],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail {
  private router = inject(Router);
  private productData = inject(ProductData);
  private cartData = inject(CartData);
  authData = inject(AuthData);
  id = input<string>();
  product = computed(() => this.productData.getProductById(Number(this.id())));

  private redirectIfProductNotExistEffect = effect(() => {
    if (!this.product()) this.router.navigateByUrl('/products');
  })

  addToCart() {
    const product = this.product();
    if (!product) return;
    this.cartData.addToCart(product);
  }
}
