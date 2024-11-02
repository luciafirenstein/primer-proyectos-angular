// src/app/reportes/reportes.component.ts
import { Component, OnInit } from '@angular/core';
import { ReportesService } from './reportes.service';
import { Reporte } from './reporte.model';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  reportes: Reporte[] = [];

  constructor(private reportesService: ReportesService) {}

  ngOnInit(): void {
    this.loadReportes();
  }

  loadReportes(): void {
    this.reportesService.getReportes().subscribe(reportes => {
      this.reportes = reportes;
    });
  }
}

