import { Component, OnInit } from '@angular/core';
import { ICategoria, ILibro } from 'src/app/interfaces/Libros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros-nav',
  templateUrl: './libros-nav.component.html',
  styleUrls: ['./libros-nav.component.css']
})
export class LibrosNavComponent implements OnInit {
  categorias: ICategoria[] = [];
  autores: string[] = [];
  libros: ILibro[] = [];
  constructor(private librosService: LibrosService) { }

  async ngOnInit(){
    this.categorias = await this.librosService.getCategorias();
    this.autores = await this.librosService.getLibros();
    console.log(this.autores.length);
    console.log(this.categorias);
  }

}
