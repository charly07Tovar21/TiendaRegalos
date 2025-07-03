import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interface/productos';

@Injectable({
  providedIn: 'root'
})
export class Productos {
  private endPoint: string = environment.endPoint;
  private apiUrl: string = this.endPoint + 'Tienda/';

  constructor(private http: HttpClient) { }

  getListProductos(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(`${this.apiUrl}productos`);
  }

}
