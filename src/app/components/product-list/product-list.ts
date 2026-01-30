import { Component, inject, input, output, signal } from '@angular/core';
import { Product, products } from '../../product';
import { ProductCard } from '../product-card/product-card';
import { ProductData } from '../../services/product-data';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  // products = input.required<Product[]>();
  private productData = inject(ProductData);
  products = this.productData.getProducts();
  addToCart = output<Product>();
}
