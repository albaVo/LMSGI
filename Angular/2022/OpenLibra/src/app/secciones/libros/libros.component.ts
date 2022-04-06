import { ICategoria, ILibro } from './../../interfaces/ILibros';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  // DECLARACION DE PROPIEDADES
  categorias: ICategoria[] = [];
  libros: ILibro[] = [{}];
  constructor(private librosService: LibrosService) { }

  // DECLARACION DE METODOS
  async ngOnInit() {
    console.log(this.librosService.getCategorias());
    this.categorias = await this.librosService.getCategorias();
  }

  async getLibrosCategory(codigo: number) {
    let libros: ILibro[] = [];
    console.log(codigo, 'desde el controlador/componente');
    this.libros = await this.librosService.getCategorias();
    console.log(this.libros)
  }

}
