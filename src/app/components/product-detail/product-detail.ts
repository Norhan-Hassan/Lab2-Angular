import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  constructor(private productService: ProductService) {}

  @Input() product!: IProduct;
  @Output() close = new EventEmitter<void>();

  closeDetails() {
    this.close.emit();
  }

  ngOnInit() {
    this.product = this.productService.getProductByID(this.product.id)!;
  }
}
