import { Component, inject } from '@angular/core';
import { CartData } from '../../../services/cart-data';
import { RouterLink } from '@angular/router';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private cartData = inject(CartData);
  private auth = inject(Auth);
  cartItemsCount = this.cartData.cartItemsCount;
  isLogged = this.auth.isLogged;

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout();
  }
}
