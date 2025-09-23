import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductDetail } from '../product-detail/product-detail';
import { ICategory } from '../../models/icategory';
import { CreditCardPipe } from '../../pipes/pipes/credit-card-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductDetail, CreditCardPipe, FormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  categories: ICategory[] = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Shoes' },
  ];
  products: IProduct[] = [
    {
      id: 1,
      name: 'T-Shirt',
      quantity: 5,
      price: 200,
      img: 'images/t.jpg',
      categoryID: 1,
    },
    {
      id: 2,
      name: 'Jeans',
      quantity: 2,
      price: 400,
      img: 'images/j.jpg',
      categoryID: 1,
    },
    {
      id: 3,
      name: 'Necklace',
      quantity: 0,
      price: 150,
      img: 'images/N.jpg',
      categoryID: 2,
    },
    {
      id: 4,
      name: 'Sneakers',
      quantity: 10,
      price: 600,
      img: 'images/s.jpg',
      categoryID: 3,
    },
  ];

  selectedProduct: IProduct | null = null;
  searchTerm: string = '';
  selectedCategory: number = 0;

  today: Date = new Date();
  creditCardNumber: string = '1234567812345678';

  get filteredProducts(): IProduct[] {
    return this.products.filter(
      (p) =>
        (this.selectedCategory === 0 || p.categoryID === this.selectedCategory) &&
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  buyProduct(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity--;
      alert(`${product.name} purchased!`);
    }
  }
  viewDetails(product: IProduct) {
    this.selectedProduct = product;
  }

  hideDetails() {
    this.selectedProduct = null;
  }
}
