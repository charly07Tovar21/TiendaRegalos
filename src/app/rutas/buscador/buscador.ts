import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-buscador',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './buscador.html',
  styleUrl: './buscador.css'
})
export class Buscador {
  @Output() buscar = new EventEmitter<string>();
  termino: string = '';

  onBuscar() {
    this.buscar.emit(this.termino);
  }


  @Output() categoriasSeleccionadas = new EventEmitter<number[]>();

  categorias: { id: number, nombre: string, activo: boolean }[] = [
    { id: 1, nombre: 'Artículos', activo: false },
    { id: 2, nombre: 'Ropa', activo: false },
    { id: 3, nombre: 'Decoración', activo: false }
  ];

  onCategoriaChange() {
    const seleccionadas = this.categorias
      .filter(cat => cat.activo)
      .map(cat => cat.id);
    this.categoriasSeleccionadas.emit(seleccionadas);
  }

}
