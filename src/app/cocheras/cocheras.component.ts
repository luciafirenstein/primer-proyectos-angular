import { Component, OnInit } from '@angular/core';
import { CocherasService } from './cocheras.service';
import { Cochera } from './cochera.model';

@Component({
  selector: 'app-cocheras',
  templateUrl: './cocheras.component.html',
  styleUrls: ['./cocheras.component.css']
})
export class CocherasComponent implements OnInit {
  cocheras: Cochera[] = [];
  selectedCochera: Cochera | null = null;
  showAssignModal = false;
  showConfirmModal = false;
  action: 'enable' | 'disable' | 'delete' | null = null;

  constructor(private cocherasService: CocherasService) {
    this.selectedCochera = { id: 0, disponibilidad: '', ingreso: null, egreso: null };
  }

  ngOnInit(): void {
    this.loadCocheras();
  }

  loadCocheras(): void {
    this.cocherasService.getCocheras().subscribe(cocheras => {
      this.cocheras = cocheras;
    });
  }

  openAssignModal(cochera: Cochera | null): void {
    // Verificar si `cochera` es nulo, y si lo es, asignar un objeto cochera vacío
    this.selectedCochera = cochera || { id: 0, disponibilidad: 'Disponible', ingreso: null, egreso: null };
    this.showAssignModal = true;
  }
  

  assignVehicle(patente: string): void {
    // Asignar vehículo a la cochera seleccionada
    if (this.selectedCochera) {
      this.selectedCochera.disponibilidad = patente;
      this.selectedCochera.ingreso = new Date().toISOString();
      this.showAssignModal = false;

      
    }
  }

  openConfirmModal(cochera: Cochera, action: 'enable' | 'disable' | 'delete'): void {
    this.selectedCochera = cochera;
    this.action = action;
    this.showConfirmModal = true;
  }

  confirmAction(): void {
    if (this.action === 'delete' && this.selectedCochera) {
      this.cocherasService.deleteCochera(this.selectedCochera.id).subscribe(() => {
        this.loadCocheras();
      });
    } else if (this.action === 'disable' && this.selectedCochera) {
      this.cocherasService.disableCochera(this.selectedCochera.id).subscribe(() => {
        this.loadCocheras();
      });
    } else if (this.action === 'enable' && this.selectedCochera) {
      this.cocherasService.enableCochera(this.selectedCochera.id).subscribe(() => {
        this.loadCocheras();
      });
    }
    this.showConfirmModal = false;
  }
}

