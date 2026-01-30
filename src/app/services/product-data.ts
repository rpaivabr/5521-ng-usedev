import { Injectable } from '@angular/core';
import { Product, products } from '../product';

@Injectable({
  providedIn: 'root',
})
export class ProductData {
  private products = [...products];

  getProducts(): Product[] {
    return this.products;
  }
}
