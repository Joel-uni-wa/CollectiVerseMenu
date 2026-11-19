
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-productos',
  imports: [FormsModule],
  templateUrl: './modal-productos.html',
  styleUrl: './modal-productos.css',
})
export class ModalProductos {

  @Input() producto: any;

  @Output() cerrar = new EventEmitter<void>();

  @Output() guardar = new EventEmitter<any>();

  onGuardar(form: NgForm) {
    if (form.valid) {
      this.guardar.emit(this.producto);
      this.cerrar.emit();
    }
  }

}
