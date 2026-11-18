import { Routes } from '@angular/router';
import { ViewProductos } from './cu/administrar-productos/view-productos/view-productos';
import { ViewServices } from './cu/administrar-services/view-services/view-services';
export const routes: Routes = [
    
        {path:'productos', component: ViewProductos,title  :'Vista de productos'},
        {path:'services', component: ViewServices,title  :'Vista de servicios'}

         
    
];