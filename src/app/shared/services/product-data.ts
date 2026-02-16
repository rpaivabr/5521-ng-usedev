import { Injectable } from '@angular/core';
import { Product, products } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductData {
  private products = [...products];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
