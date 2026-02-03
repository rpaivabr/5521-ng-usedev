import { Component, inject } from '@angular/core';
import { CartData } from '../../../services/cart-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cartData = inject(CartData);
  cartItemsCount = this.cartData.cartItemsCount;
}
