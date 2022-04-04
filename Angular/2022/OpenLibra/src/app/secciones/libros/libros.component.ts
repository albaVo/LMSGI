import { ICategoria } from './../../interfaces/ILibros';
import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';


@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  categorias: ICategoria[] = [];

  constructor(private librosService: LibrosService) { }

  async ngOnInit() {
    console.log(this.librosService.getCategorias());
    this.categorias = await this.librosService.getCategorias();
  }

}
