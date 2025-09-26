import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-shoping-cart',
  imports: [CommonModule],
  templateUrl: './shoping-cart.html',
  styleUrl: './shoping-cart.css',
})
export class ShoppingCart implements OnInit {
  private productService = inject(ProductService);

  cartProducts: IProduct[] = [];

  ngOnInit() {
    this.cartProducts = this.productService.getProductsByCatID(1);
  }
}
