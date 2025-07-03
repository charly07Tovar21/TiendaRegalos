import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Buscador } from "../buscador/buscador";
import { Cabecero } from "../../cabecero/cabecero";
import { ListadoProductos } from "../../listado-productos/listado-productos";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [RouterOutlet, Buscador, ListadoProductos, HttpClientModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {

}
