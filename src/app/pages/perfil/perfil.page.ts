import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    RouterModule
  ]
})
export class PerfilPage {
  nombre: string = 'Hans Vidal';
  correo: string = 'hans.vidal@uniacc.edu';
  telefono: string = '+56912345678';

  guardarCambios() {
    alert('Cambios guardados correctamente.');
    console.log({
      nombre: this.nombre,
      correo: this.correo,
      telefono: this.telefono
    });
  }

  cerrarSesion() {
    // Aquí puedes limpiar sesión si tienes lógica, por ahora solo navega
  }
}
