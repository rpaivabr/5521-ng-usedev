import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from "./components/footer/footer";
import { Banner } from './components/banner/banner';
import { ProductList } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Banner, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
