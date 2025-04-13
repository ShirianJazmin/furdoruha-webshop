import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

export const routes: Routes = [
    { path: 'list', component: ProductListComponent },
    { path: 'card', component: ProductCardComponent },
    
];
