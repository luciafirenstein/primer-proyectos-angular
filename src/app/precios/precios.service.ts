import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Precio } from './precio.model'; 
@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  private apiUrl = 'http://localhost:3000/tarifas'; 
  constructor(private http: HttpClient) {}

  getPrecios(): Observable<Precio[]> {
    return this.http.get<Precio[]>(this.apiUrl);
  }

  updatePrecio(precio: Precio): Observable<Precio> {
    return this.http.put<Precio>(`${this.apiUrl}/${precio.id}`, precio);
  }
}

