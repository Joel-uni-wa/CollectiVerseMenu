import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-publicaciones',
  imports: [FormsModule],
  templateUrl: './modal-publicaciones.html',
  styleUrl: './modal-publicaciones.css',
})
export class ModalPublicaciones {

  @Output() cerrar = new EventEmitter<void>();
  @Output() guardar = new EventEmitter<any>();

  publicacion: any = {
    nombre: '',
    tipo: 'Venta',
    precio: 0,
    descripcion: '',
    estado: 'Disponible'
  };

  onGuardar(form: NgForm) {
    if (form.valid) {

      // Si es categoría, no necesita precio
      if (this.publicacion.tipo === 'Categoría') {
        this.publicacion.precio = 0;
      }

      this.guardar.emit(this.publicacion);
      this.cerrar.emit();
    }
  }

}