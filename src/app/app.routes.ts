import { Routes } from '@angular/router';
import { Inicio } from './rutas/inicio/inicio';
import { Productos } from './rutas/productos/productos';

export const routes: Routes = [
    {path: 'inicio', component: Inicio},
    {path: 'productos', component: Productos},
    {path: '', redirectTo: '/inicio', pathMatch: 'full'}
];
