import { Component, inject, output } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductData } from '../../../../shared/services/product-data';
import { Product } from '../../../../shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productData = inject(ProductData);
  private router = inject(Router)
  products = this.productData.getProducts();
  addToCart = output<Product>();

  goToDetails(id: number): void {
    this.router.navigateByUrl(`/products/${id}`)
  }
}
