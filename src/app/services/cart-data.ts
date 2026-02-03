import { computed, effect, Injectable, signal } from '@angular/core';
import { CartItem } from '../cart';
import { Product } from '../product';

@Injectable({
  providedIn: 'root',
})
export class CartData {
  private cart = signal<CartItem<Product>[]>([]);
  cartItems = this.cart.asReadonly();
  cartItemsCount = computed(
    () => this.cart().reduce((sum, cartItem) => sum + cartItem.quantity, 0)
  );
  cartItemsTotal = computed(
    () => this.cart().reduce((sum, cartItem) => sum + cartItem.quantity * cartItem.item.price, 0)
  );

  private logEffect = effect(() => {
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

  minus(id: number): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => id === cartItem.item.id);

    const updatedCart = [...this.cart()];
    updatedCart[itemIndexToUpdate].quantity -= 1;
    this.cart.set(updatedCart.filter(cartItems => cartItems.quantity !== 0));
  }

  plus(id: number): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => id === cartItem.item.id);

    const updatedCart = [...this.cart()];
    updatedCart[itemIndexToUpdate].quantity += 1;
    this.cart.set(updatedCart);
  }

  remove(id: number): void {
    const updatedCart = [...this.cart()];
    this.cart.set(updatedCart.filter(cartItems => cartItems.item.id !== id));
  }

}
