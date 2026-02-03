import { Routes } from '@angular/router';
import { ProductList } from './components/pages/product-list/product-list';
import { ProductDetail } from './components/pages/product-detail/product-detail';
import { Cart } from './components/pages/cart/cart';

export const routes: Routes = [
  { path: 'products', component: ProductList },
  { path: 'products/:id', component: ProductDetail },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '/products' },
];
