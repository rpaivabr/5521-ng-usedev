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

  removeFromCart(product: Product): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => product.id === cartItem.item.id);

    if (itemIndexToUpdate < 0) return;

    const updatedCart = [...this.cart()];
    updatedCart[itemIndexToUpdate].quantity -= 1;
    this.cart.set(updatedCart.filter(cartItem => cartItem.quantity > 0));
  }

  removeAllFromCart(product: Product): void {
    const itemIndexToUpdate = this.cart().findIndex(cartItem => product.id === cartItem.item.id);

    if (itemIndexToUpdate < 0) return;

    this.cart.update(cartItems => cartItems.filter(cartItem => cartItem.item.id !== product.id));
  }

}
