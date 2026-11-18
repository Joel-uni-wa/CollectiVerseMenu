import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-producto',
  imports: [FormsModule],
  templateUrl: './modal-producto.html',
  styleUrl: './modal-producto.css',
})
export class ModalProducto {

  producto = input<any>();

  cerrar = output<void>();

  onGuardar(form: any) {
    if (form.valid) {
      console.log(this.producto());
      this.cerrar.emit();
    }
  }

}