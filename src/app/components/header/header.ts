import { Component, inject } from '@angular/core';
import { CartData } from '../../services/cart-data';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cartData = inject(CartData);
  cartItemsCount = this.cartData.cartItemsCount;
}
