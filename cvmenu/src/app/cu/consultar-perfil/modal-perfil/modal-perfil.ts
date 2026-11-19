import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-perfil',
  imports: [],
  templateUrl: './modal-perfil.html',
  styleUrl: './modal-perfil.css',
})
export class ModalPerfil {

  @Input() usuario: any;

  @Output() cerrar = new EventEmitter<void>();

}