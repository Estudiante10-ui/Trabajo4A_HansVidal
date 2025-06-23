import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-mascota',
  templateUrl: './mascota.page.html',
  styleUrls: ['./mascota.page.scss'],
  standalone: true,
  imports: [
    CommonModule,  // ← Para *ngIf y *ngFor
    IonicModule    // ← Para los componentes ion-*
  ]
})
export class MascotaPage {
  mascotas = [
    {
      nombre: 'Luna',
      especie: 'Perro',
      edad: 2,
      direccion: 'Av. Siempre Viva 123',
      mostrarDireccion: false
    },
    {
      nombre: 'Max',
      especie: 'Gato',
      edad: 4,
      direccion: 'Calle del Bosque 456',
      mostrarDireccion: false
    },
    {
      nombre: 'Bella',
      especie: 'Perro',
      edad: 3,
      direccion: 'Camino del Sol 321',
      mostrarDireccion: false
    }
  ];

  mostrarDireccion(mascota: any) {
    mascota.mostrarDireccion = !mascota.mostrarDireccion;
  }
}
