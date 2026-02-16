import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/layout/header/header';
import { Footer } from './shared/layout/footer/footer';
import { Banner } from './shared/layout/banner/banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Banner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
