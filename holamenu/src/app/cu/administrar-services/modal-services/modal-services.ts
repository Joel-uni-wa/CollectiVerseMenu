import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-services',
  imports: [FormsModule],
  templateUrl: './modal-services.html',
  styleUrl: './modal-services.css',
})
export class ModalServices {

  service = input<any>();

  cerrar = output<void>();

  onGuardar(form: any) {
    if (form.valid) {
      console.log(this.service());
      this.cerrar.emit();
    }
  }

}