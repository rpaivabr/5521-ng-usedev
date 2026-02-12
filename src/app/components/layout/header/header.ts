import { Component, inject } from '@angular/core';
import { CartData } from '../../../services/cart-data';
import { RouterLink } from '@angular/router';
import { AuthData } from '../../../services/auth-data';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cartData = inject(CartData);
  authData = inject(AuthData);
  cartItemsCount = this.cartData.cartItemsCount;
}
