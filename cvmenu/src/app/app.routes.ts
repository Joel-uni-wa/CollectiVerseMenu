import { Routes } from '@angular/router';
import { ViewInicio } from './cu/inicio/view-inicio/view-inicio';
import { ViewProductos } from './cu/administrar-productos/view-productos/view-productos';
import { ViewPublicaciones } from './cu/administrar-publicaciones/view-publicaciones/view-publicaciones';
import { ViewPerfil } from './cu/consultar-perfil/view-perfil/view-perfil';

export const routes: Routes = [
  {path: 'inicio', component: ViewInicio, title: 'Inicio'},
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'productos', component: ViewProductos, title: 'Productos'},
  {path: 'publicaciones', component: ViewPublicaciones, title: 'Publicaciones'},
  {path: 'perfil', component: ViewPerfil, title: 'Mi perfil'},
];