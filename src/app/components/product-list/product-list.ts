import { Component, inject, output } from '@angular/core';
import { Product } from '../../product';
import { ProductCard } from '../product-card/product-card';
import { ProductData } from '../../services/product-data';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private productData = inject(ProductData);
  products = this.productData.getProducts();
  addToCart = output<Product>();
}
