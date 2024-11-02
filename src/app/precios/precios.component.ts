// src/app/precios/precios.component.ts
import { Component, OnInit } from '@angular/core';
import { PreciosService } from './precios.service';
import { Precio } from './precio.model';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {
  precios: Precio[] = [];
  selectedPrecio?: Precio;

  constructor(private preciosService: PreciosService) {}

  ngOnInit(): void {
    this.loadPrecios();
  }

  loadPrecios(): void {
    this.preciosService.getPrecios().subscribe(precios => {
      this.precios = precios;
    });
  }

  editPrecio(precio: Precio): void {
    this.selectedPrecio = { ...precio }; 
  }

  savePrecio(): void {
    if (this.selectedPrecio) {
      this.preciosService.updatePrecio(this.selectedPrecio).subscribe(() => {
        this.loadPrecios(); 
        this.selectedPrecio = undefined; 
      });
    }
  }

  cancelEdit(): void {
    this.selectedPrecio = undefined; 
  }
}

