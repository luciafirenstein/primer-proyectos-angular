// src/app/cocheras/cocheras.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cochera } from '../cocheras/cochera.model'; 

@Injectable({
  providedIn: 'root'
})
export class CocherasService {
  private apiUrl = 'http://localhost:3000/cocheras'; 

  constructor(private http: HttpClient) {}

  getCocheras(): Observable<Cochera[]> {
    return this.http.get<Cochera[]>(this.apiUrl);
  }

  createCochera(cochera: Cochera): Observable<Cochera> {
    return this.http.post<Cochera>(this.apiUrl, cochera);
  }

  deleteCochera(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  enableCochera(id: number): Observable<Cochera> {
    return this.http.post<Cochera>(`${this.apiUrl}/${id}/enable`, {});
  }

  disableCochera(id: number): Observable<Cochera> {
    return this.http.post<Cochera>(`${this.apiUrl}/${id}/disable`, {});
  }
}

