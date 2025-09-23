import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from "./components/products/products";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { ProductList } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  imports: [Products, Footer, Header, ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Lab2');
}
