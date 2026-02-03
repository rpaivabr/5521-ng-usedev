import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/layout/header/header';
import { Footer } from "./components/layout/footer/footer";
import { Banner } from './components/layout/banner/banner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Banner],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
