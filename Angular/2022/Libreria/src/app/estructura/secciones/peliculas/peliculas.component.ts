import { Component, OnInit } from '@angular/core';
import { IGenero, IPeliculas } from 'src/app/Interfaces/Peliculas';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  pagina: number = 0;

  public generos: IGenero = {}
  public peliculas: IPeliculas = {
    page: 1,
  };

  constructor(private peliculasService: PeliculasService) { }
  async ngOnInit() {
    this.peliculas = await this.peliculasService.getAll(this.pagina);
    console.log(this.peliculas);
    this.generos = await this.peliculasService.getAll(this.pagina);
    console.log(this.generos)
  }
  async  getPagina(npagina: number){
   // this.pagina = npagina;
    this.peliculas = await this.peliculasService.getGeneros;
    console.log(this.peliculas);
  }
}


