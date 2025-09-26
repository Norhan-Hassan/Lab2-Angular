import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root', // means Create a singleton instance of this service at the application root level
})
export class ProductService {
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

  getProductsByCatID(catID: number): IProduct[] {
    if (catID === 0) return this.products;
    return this.products.filter((p) => p.categoryID === catID);
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.products.find((p) => p.id === prodID);
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }
}
