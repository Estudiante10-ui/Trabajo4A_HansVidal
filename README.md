# PetTracker 🐾

**PetTracker** es una aplicación móvil desarrollada con **Ionic + Angular** que permite a los usuarios registrar mascotas, rastrearlas y gestionar su información. Este repositorio corresponde al avance del 50% del desarrollo, enmarcado en la Parte A de la Unidad 4 del curso.

---

## 📱 Funcionalidades implementadas

- Pantalla **Home** con bienvenida, descripción e imagen.
- Botones para **Iniciar sesión** y **Registrarse**, que redirigen correctamente a sus respectivas páginas.
- Página **Registro** con formulario funcional que almacena los datos y muestra un mensaje de éxito.
- Página **Perfil** con formulario editable de datos ficticios y botón para cerrar sesión.
- Página **Buscar** con tarjetas de mascotas. Cada tarjeta permite rastrear una mascota mostrando una dirección ficticia al presionar el botón.
- Menú lateral funcional en todas las páginas.
- Uso de **componentes visuales** como `ion-card`, `ion-button`, `ion-input`, `ion-toast` y `ion-menu`.

---

## 🧩 Componentes utilizados

- `ion-card`: para mostrar tarjetas de mascotas.
- `ion-button`: navegación y acciones.
- `ion-toast`: notificación de registro exitoso.
- `ion-input`: captura de datos en formularios.
- `ion-menu`: navegación lateral.
- `ngModel` y `*ngIf`, `*ngFor`: para control de flujo.

---

## 🛠️ Instrucciones de instalación

1. Clonar el repositorio:


git clone https://github.com/Estudiante10-ui/Trabajo4A_HansVidal
cd Trabajo4A_HansVidal

2. Instalar dependencias:

npm install

3. Ejecutar la aplicación:

ionic serve

---

##🧪 Problemas enfrentados

*El uso de caracteres especiales (como ñ) en variables (contraseña) causaba errores de compilación. Fue corregido cambiando el nombre a clave.

*Problemas con el reconocimiento de ngModel y *ngFor al no importar CommonModule y FormsModule en componentes standalone.

*Ajustes de estilo y centrado de contenido, especialmente en la página Home.

