import { effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../cart';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartData {
  private cart = signal<CartItem<Product>[]>([]);

  logEffect = effect(() => {
    console.log(this.cart());
  })

  addToCart(product: Product): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => product.id === cartItem.item.id);
    
    if (itemIndexToUpdate < 0) {
      this.cart.update(cartItems => [...cartItems, { item: product, quantity: 1 }]);
      return;
    }

    const updatedCart = [...this.cart()];
    updatedCart[itemIndexToUpdate].quantity += 1;
    this.cart.set(updatedCart);
  }

}
