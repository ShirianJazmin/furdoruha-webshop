import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-product-list',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  showWelcome = true;
  products: Product[] = [
    { id: 1, name: 'Kék bikini', description: 'Klasszikus kék bikini', price: 8990, imageUrl: 'assets/bikini1.jpg' },
    { id: 2, name: 'Piros fürdőruha', description: 'Egyrészes piros fürdőruha', price: 10990, imageUrl: 'assets/bikini2.jpg' }
  ];
}
