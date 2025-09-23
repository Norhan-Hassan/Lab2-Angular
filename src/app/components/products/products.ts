import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../../directives/product-card';
import { CreditCardPipe } from '../../pipes/pipes/credit-card-pipe';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, ProductCard, CreditCardPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  searchTerm: string = '';

  categories: ICategory[] = [
    { id: 1, name: 'Clothes' },
    { id: 2, name: 'Accessories' },
    { id: 3, name: 'Shoes' },
  ];

  selectedCategory: number = 0;
  today: Date = new Date();
  creditCardNumber: string = '1234567812345678';

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

  get filteredProducts() {
    return this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedCategory === 0 || p.categoryID === this.selectedCategory)
    );
  }

  getQuantityStatus(qty: number): string {
    switch (qty) {
      case 0:
        return 'Out of stock';
      case 1:
        return 'Last one item';
      case 2:
        return 'Last two items';
      default:
        return 'In stock';
    }
  }

  buyProduct(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity = Math.max(product.quantity - 2, 0);
    }
  }

  showDetails(product: IProduct) {
    alert(`
      product: ${product.name}
      price: ${product.price}
      quantity: ${product.quantity}
      categoryID: ${product.categoryID}
    `);
  }
}
