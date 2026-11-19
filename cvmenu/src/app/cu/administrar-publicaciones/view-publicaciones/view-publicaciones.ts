import { Component } from '@angular/core';
import { ModalPublicaciones } from '../modal-publicaciones/modal-publicaciones';

@Component({
  selector: 'app-view-publicaciones',
  imports: [ModalPublicaciones],
  templateUrl: './view-publicaciones.html',
  styleUrl: './view-publicaciones.css',
})
export class ViewPublicaciones {

  publicaciones: any[] = [
    {
      id: 1,
      nombre: 'Charizard EX',
      tipo: 'Venta',
      precio: 180,
      descripcion: 'Carta en excelente estado.',
      estado: 'Disponible'
    },
    {
      id: 2,
      nombre: 'Dragón Blanco de Ojos Azules',
      tipo: 'Intercambio',
      precio: 0,
      descripcion: 'Busco intercambiar por otra carta.',
      estado: 'Disponible'
    },
    {
      id: 3,
      nombre: 'Pikachu VMAX',
      tipo: 'Venta',
      precio: 95,
      descripcion: 'Carta coleccionable original.',
      estado: 'Disponible'
    }
  ];

  mostrarModal = false;

  abrirModal() {
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  guardarPublicacion(publicacion: any) {
    const nuevaPublicacion = {
      id: this.publicaciones.length + 1,
      ...publicacion
    };

    this.publicaciones.push(nuevaPublicacion);
  }

}