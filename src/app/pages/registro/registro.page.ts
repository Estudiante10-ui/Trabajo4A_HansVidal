import { Component } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss']
})
export class RegistroPage {
  nombre: string = '';
  correo: string = '';
  contrasena: string = '';

  constructor(
    private toastController: ToastController,
    private router: Router
  ) {}

  async registrarUsuario() {
    if (this.nombre && this.correo && this.contrasena) {
      const usuario = {
        nombre: this.nombre,
        correo: this.correo,
        contraseña: this.contrasena
      };
      localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));

      const toast = await this.toastController.create({
        message: 'Usuario registrado con éxito',
        duration: 2000,
        color: 'success'
      });
      await toast.present();

      // Espera que el toast desaparezca, luego redirige
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);

    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
