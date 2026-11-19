import { Routes } from '@angular/router';
import { ViewProductos } from './cu/administrar-productos/view-productos/view-productos';
import { ViewInicio } from './cu/inicio/view-inicio/view-inicio';

export const routes: Routes = [
  {path: 'inicio', component: ViewInicio, title: 'Inicio'},
  {path: 'productos', component: ViewProductos, title: 'Productos'},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'}
];