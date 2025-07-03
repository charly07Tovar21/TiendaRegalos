import { Component } from '@angular/core';
import { IProducto } from '../interface/productos';
import { Productos } from '../services/productos';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Buscador } from '../rutas/buscador/buscador';

@Component({
  selector: 'app-listado-productos',
  standalone: true,
  imports: [HttpClientModule, FormsModule, NgFor, NgIf, Buscador],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {
  protected title = 'Listado de Productos';
  listaDeProductos: IProducto[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  nombreProducto = '';
  precioProducto: number = 0;
  descripcionProducto = '';
  imagenProducto = '';
  IdProducto: number = 0;
  idCategoria: number = 0;

  constructor(private _productosService: Productos) {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this._productosService.getListProductos().subscribe({
      next: (data) => {
        this.listaDeProductos = data;
        this.isResultLoaded = true;
      }, error: (e) => { console.log(e) }
    });
  }

  obtenerProducto(data: IProducto) {
    this.IdProducto = data.idProducto;
    this.nombreProducto = data.nombreProducto;
    this.precioProducto = data.precioProducto;
    this.descripcionProducto = data.descripcion;
    this.imagenProducto = data.imagen_producto || '';
    this.idCategoria = data.idCategoriaProducto;
  }

  terminoBusqueda: string = '';

  actualizarFiltro(termino: string) {
    this.terminoBusqueda = termino;
  }


  productosFiltrados(): IProducto[] {
    return this.listaDeProductos.filter(producto => {
      const coincideNombre = producto.nombreProducto.toLowerCase().includes(this.terminoBusqueda.toLowerCase());
      const coincideCategoria = this.categoriasFiltradas.length === 0 || this.categoriasFiltradas.includes(producto.idCategoriaProducto);
      return coincideNombre && coincideCategoria;
    });


    return this.listaDeProductos.filter(producto =>
      producto.nombreProducto.toLowerCase().includes(this.terminoBusqueda.toLowerCase())
    );
  }

  categoriasFiltradas: number[] = [];

  actualizarCategorias(ids: number[]) {
    this.categoriasFiltradas = ids;
  }
}