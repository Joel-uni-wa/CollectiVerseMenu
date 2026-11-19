import { Component } from '@angular/core';
import { ModalPerfil } from '../modal-perfil/modal-perfil';

@Component({
  selector: 'app-view-perfil',
  imports: [ModalPerfil],
  templateUrl: './view-perfil.html',
  styleUrl: './view-perfil.css',
})
export class ViewPerfil {

  usuario: any = {
    nombre: 'Seo',
    usuario: 'Seo-awa',
    correo: 'correogenericoxd@gmail.com',
    fechaRegistro: '11/19/2026',
    coleccionables: 35,
    publicaciones: 12
  };

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

}