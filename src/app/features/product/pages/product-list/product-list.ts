import { Component, inject, output } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductData } from '../../../../shared/services/product-data';
import { Product } from '../../../../shared/models/product';

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
