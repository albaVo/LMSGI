import { LibrosService } from 'src/app/services/libros.service';
import { ICategoria } from './../../interfaces/ILibros';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias: ICategoria[] = [];
  constructor(private LibrosService: LibrosService) { }

  async ngOnInit() {
    this.categorias = await this.LibrosService.getCategorias();
  }

}
