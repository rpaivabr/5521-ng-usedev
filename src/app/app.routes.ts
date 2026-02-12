import { CanActivateFn, Router, Routes } from '@angular/router';
import { ProductList } from './components/pages/product-list/product-list';
import { ProductDetail } from './components/pages/product-detail/product-detail';
import { Cart } from './components/pages/cart/cart';
import { inject } from '@angular/core';
import { AuthData } from './services/auth-data';

const authGuard: CanActivateFn = () => {
  const authData = inject(AuthData);
  const router = inject(Router);
  return authData.isLogged() ? true : router.parseUrl('/products');
}

export const routes: Routes = [
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetail },
  { path: 'cart', component: Cart, canActivate: [authGuard] },
  { path: '**', redirectTo: '/products' },
];
