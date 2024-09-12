import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  eventos = [
    { titulo: 'Concierto de K-Pop', descripcion: 'Show en vivo de una popular banda de K-Pop', fecha: '2024-10-01', precio: 80 },
    { titulo: 'Fiesta de EDM', descripcion: 'Festival de música electrónica con DJ’s internacionales', fecha: '2024-10-15', precio: 70 },
    { titulo: 'Concierto de Trap', descripcion: 'Evento con uno de los artistas más destacados del trap', fecha: '2024-11-05', precio: 65 },
    { titulo: 'Show de Indie Pop', descripcion: 'Concierto de banda indie emergente', fecha: '2024-11-20', precio: 55 },
    { titulo: 'Festival de Música Urbana', descripcion: 'Festival con varios artistas de música urbana y reggaetón', fecha: '2024-12-01', precio: 85 },
    { titulo: 'Noche de Hip-Hop', descripcion: 'Presentación de varios raperos famosos', fecha: '2024-12-15', precio: 60 },
    { titulo: 'Concierto de Música Alternativa', descripcion: 'Show con bandas de música alternativa', fecha: '2024-12-20', precio: 50 }
];


  constructor(private router: Router) {}

  irDatosCliente(evento: any) {
    this.router.navigate(['/datos-cliente'], { state: { evento } });
  }

  selecEvento(evento: any) {
    this.router.navigate(['/datos-cli'], { state: { evento: evento } });
  }
}