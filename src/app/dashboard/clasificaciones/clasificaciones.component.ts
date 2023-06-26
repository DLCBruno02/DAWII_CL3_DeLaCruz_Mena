import { Component } from '@angular/core';

@Component({
  selector: 'app-clasificaciones',
  templateUrl: './clasificaciones.component.html',
  styleUrls: ['./clasificaciones.component.css']
})
export class ClasificacionesComponent {
  calificacion1: number;
  calificacion2: number;
  calificacion3: number;
  promedio: number | null = null;



  constructor() {
    this.calificacion1 = 0;
    this.calificacion2 = 0;
    this.calificacion3 = 0;
  }
  


  calcularPromedio() {
    if (this.calificacion1 && this.calificacion2 && this.calificacion3) {
      const suma = this.calificacion1 + this.calificacion2 + this.calificacion3;
      this.promedio = suma / 3;
    } else {
      this.promedio = null;
    }
  }


}
