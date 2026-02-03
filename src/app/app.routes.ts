import { CanActivateFn, Routes } from '@angular/router';
import { ProductList } from './components/pages/product-list/product-list';
import { ProductDetail } from './components/pages/product-detail/product-detail';
import { Cart } from './components/pages/cart/cart';
import { inject } from '@angular/core';
import { Auth } from './services/auth';

const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  return auth.isLogged();
}

export const routes: Routes = [
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetail },
  { path: 'cart', component: Cart, canActivate: [authGuard] },
  { path: '**', redirectTo: '/products' },
];
