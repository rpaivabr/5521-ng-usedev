import { Component, inject } from '@angular/core';
import { CartData } from '../../../services/cart-data';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartData = inject(CartData);
}
