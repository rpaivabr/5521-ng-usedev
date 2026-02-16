import { Component, input, output } from '@angular/core';
import { CartItem } from '../../../../shared/models/cart';
import { Product } from '../../../../shared/models/product';

@Component({
  selector: 'app-cart-item-row',
  imports: [],
  templateUrl: './cart-item-row.html',
  styleUrl: './cart-item-row.css',
})
export class CartItemRow {
  cartItem = input.required<CartItem<Product>>();
  add = output<void>();
  remove = output<void>();
  removeAll = output<void>();
}
