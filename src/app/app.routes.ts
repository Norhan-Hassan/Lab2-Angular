import { Contact } from './components/contact/contact';
import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ProductList } from './components/product-list/product-list';
import { About } from './components/about/about';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'ProductList', component: ProductList },
  //default
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: NotFound },
];
