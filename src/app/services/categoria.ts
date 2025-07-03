import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategoria } from '../interface/categoria';

@Injectable({
  providedIn: 'root'
})
export class Categoria {
  private endPoint: string = environment.endPoint;
  private apiUrl: string = this.endPoint + 'Categorias/';

  constructor(private http: HttpClient) { }

  getList(): Observable<ICategoria[]> {
    return this.http.get<ICategoria[]>(`${this.apiUrl}ListarCategorias`);
  }

}
