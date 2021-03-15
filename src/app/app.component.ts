import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RentACar';
  user = 'Doğukan Muslukçu';
  product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 2,
    unitPrice: 5,
  };
  product2 = {
    productId: 2,
    productName: 'Bardak',
    categoryId: 2,
    unitPrice: 5,
  };
  product3 = {
    productId: 3,
    productName: 'Bardak',
    categoryId: 2,
    unitPrice: 5,
  };
  product4 = {
    productId: 4,
    productName: 'Bardak',
    categoryId: 2,
    unitPrice: 5,
  };
  product5 = {
    productId: 5,
    productName: 'Bardak',
    categoryId: 2,
    unitPrice: 5,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];
}
