import { Component } from '@angular/core';
import { ModalServices } from '../modal-services/modal-services';

@Component({
  selector: 'app-view-services',
  imports: [ModalServices],
  templateUrl: './view-services.html',
  styleUrl: './view-services.css',
})
export class ViewServices {

  services: any[] = [
    { id: 1, nombre: 'Mantenimiento de PC', descripcion: 'Mantenimiento preventivo de computadoras.', precio: 80, disponible: true },
    { id: 2, nombre: 'Instalación de Windows', descripcion: 'Instalación y configuración del sistema operativo.', precio: 50, disponible: true },
    { id: 3, nombre: 'Reparación de Laptop', descripcion: 'Diagnóstico y reparación de laptops.', precio: 120, disponible: false },
    { id: 4, nombre: 'Limpieza de Hardware', descripcion: 'Limpieza interna de componentes.', precio: 40, disponible: true }
  ];
  mostrarModal = false;

  serviceSeleccionado: any = null;

  editarService(service: any) {
    this.serviceSeleccionado = { ...service };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.serviceSeleccionado = null;
  }

}