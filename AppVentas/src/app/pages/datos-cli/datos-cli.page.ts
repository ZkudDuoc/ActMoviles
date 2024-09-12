import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-cli',
  templateUrl: './datos-cli.page.html',
  styleUrls: ['./datos-cli.page.scss'],
})
export class DatosCliPage {
  cliente = { nombre: '', apellido: '', edad: null };
  tipoEntrada: string = '';
  tiposEntrada = ['VIP', 'Preferencial', 'General'];
  cantidadEntradas: number = 1;

  constructor(private router: Router) {}

  enviarFormulario() {
    const descuento = this.calcularDescuento();
    this.router.navigate(['/boleta'], { 
      state: { cliente: this.cliente, tipoEntrada: this.tipoEntrada, cantidadEntradas: this.cantidadEntradas, descuento } 
    });
  }

  calcularDescuento() {
    if (this.cliente && this.cliente.edad) {
      if (this.cliente.edad < 18) {
        return 0.1;
      } else if (this.cliente.edad > 60) {
        return 0.2;
      }
    }
    return 0;
  }
}