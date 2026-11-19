import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal-productos',
  imports: [FormsModule],
  templateUrl: './modal-productos.html',
  styleUrl: './modal-productos.css',
})
export class ModalProductos {

  @Input() producto: any = {
    categoriaPersonalizada: ''
  };

  @Output() cerrar = new EventEmitter<void>();

  @Output() guardar = new EventEmitter<any>();

  onGuardar(form: NgForm) {
    if (form.valid) {

      if (this.producto.categoria === 'Otros') {
        this.producto.categoria = this.producto.categoriaPersonalizada;
      }

      this.guardar.emit(this.producto);
      this.cerrar.emit();
    }
  }

}