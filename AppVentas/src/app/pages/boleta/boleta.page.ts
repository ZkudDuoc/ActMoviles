import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.page.html',
  styleUrls: ['./boleta.page.scss'],
})
export class BoletaPage  {
  cliente: any = {};  
  tipoEntrada: string = '';  
  cantidadEntradas: number = 0;  
  descuento: number = 0;  
  total: number = 0;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
if (nav && nav.extras && nav.extras.state) { 
  const estado = nav.extras.state;
  this.cliente = estado['cliente'] || {}; 
  this.tipoEntrada = estado['tipoEntrada'] || '';  
  this.cantidadEntradas = estado['cantidadEntradas'] || 0;  
  this.descuento = estado['descuento'] || 0;  

  const precioBase = this.obtenerPrecio(this.tipoEntrada);
  const precioConDescuento = precioBase * (1 - this.descuento);
  this.total = precioConDescuento * this.cantidadEntradas;
}
  }

  obtenerPrecio(tipo: string) {
    if (tipo === 'VIP') return 100;
    if (tipo === 'Preferencial') return 70;
    return 50;
  }
}