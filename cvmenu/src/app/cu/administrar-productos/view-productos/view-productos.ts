import { Component } from '@angular/core';
import { ModalProductos } from '../modal-productos/modal-productos';

@Component({
  selector: 'app-view-productos',
  imports: [ModalProductos],
  templateUrl: './view-productos.html',
  styleUrl: './view-productos.css',
})
export class ViewProductos {

  productos: any[] = [
    {
      id: 1,
      nombre: 'Dragón Blanco de Ojos Azules',
      precio: 150,
      categoria: 'Yu-Gi-Oh!',
      descripcion: 'Carta original en buen estado.'
    },
    {
      id: 2,
      nombre: 'Charizard',
      precio: 220,
      categoria: 'Pokémon',
      descripcion: 'Carta coleccionable en excelente estado.'
    },
    {
      id: 3,
      nombre: 'Mago Oscuro',
      precio: 100,
      categoria: 'Yu-Gi-Oh!',
      descripcion: 'Carta clásica de colección.'
    }
  ];

  mostrarModal = false;

  productoSeleccionado: any = null;

  editarProducto(producto: any) {
    this.productoSeleccionado = { ...producto };
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
    this.productoSeleccionado = null;
  }

  guardarProducto(producto: any) {
    const index = this.productos.findIndex(p => p.id === producto.id);

    if (index !== -1) {
      this.productos[index] = { ...producto };
    }
  }

}