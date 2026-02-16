import { Component, inject } from '@angular/core';
import { CartData } from '../../../../shared/services/cart-data';
import { CartItemRow } from '../../components/cart-item-row/cart-item-row';

@Component({
  selector: 'app-cart',
  imports: [CartItemRow],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartData = inject(CartData);
}
