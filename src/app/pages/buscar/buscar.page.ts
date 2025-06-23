import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss']
})
export class BuscarPage {
  mascotas = [
    { nombre: 'Max', especie: 'Perro', edad: 3, direccion: 'Av. Siempre Viva 123', mostrarDireccion: false },
    { nombre: 'Mishi', especie: 'Gato', edad: 2, direccion: 'Calle Ficticia 456', mostrarDireccion: false },
    { nombre: 'Toby', especie: 'Perro', edad: 5, direccion: 'Pasaje Inventado 789', mostrarDireccion: false }
  ];

  mostrarDireccion(mascota: any) {
    mascota.mostrarDireccion = !mascota.mostrarDireccion;
  }
}
