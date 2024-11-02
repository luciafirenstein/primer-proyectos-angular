// src/app/reportes/reportes.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reporte } from './reporte.model'; // Asegúrate de definir este modelo

@Injectable({
  providedIn: 'root'
})
export class ReportesService {
  private apiUrl = 'http://localhost:3000/estacionamientos'; // Cambia esto según tu configuración

  constructor(private http: HttpClient) {}

  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.apiUrl);
  }
}

