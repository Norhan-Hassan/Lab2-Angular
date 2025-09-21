import { Component } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule],
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

  products: IProduct[] = [
    {
      id: 1,
      name: 'T-Shirt',
      quantity: 5,
      price: 200,
      img: 'https://fakeimg.pl/300x200/?text=T-Shirt',
      categoryID: 1,
    },
    {
      id: 2,
      name: 'Jeans',
      quantity: 2,
      price: 400,
      img: 'https://fakeimg.pl/300x200/?text=Jeans',
      categoryID: 1,
    },
    {
      id: 3,
      name: 'Necklace',
      quantity: 0,
      price: 150,
      img: 'https://fakeimg.pl/300x200/?text=Necklace',
      categoryID: 2,
    },
    {
      id: 4,
      name: 'Sneakers',
      quantity: 10,
      price: 600,
      img: 'https://fakeimg.pl/300x200/?text=Sneakers',
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
