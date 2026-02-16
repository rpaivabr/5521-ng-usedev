import { CanActivateFn, Router, Routes } from '@angular/router';
import { Cart } from './features/cart/cart';
import { inject } from '@angular/core';
import { AuthData } from './shared/services/auth-data';
import { ProductList } from './features/product/pages/product-list/product-list';
import { ProductDetail } from './features/product/pages/product-detail/product-detail';

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
