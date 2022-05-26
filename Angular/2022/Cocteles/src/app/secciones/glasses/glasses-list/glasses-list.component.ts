import { Component, OnInit } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { drink } from 'src/app/interfaces/cocteles';

@Component({
  selector: 'app-glasses-list',
  templateUrl: './glasses-list.component.html',
  styleUrls: ['./glasses-list.component.css']
})
export class GlassesListComponent implements OnInit {

  drink: drink = {};
  idGlass: string = '';
  nameGlass: string = '';

  constructor(private http: CoctelesService,
              private rutas: ActivatedRoute)
  {}


  ngOnInit() {
    this.rutas.params
      .subscribe(async (parametros: Params) => {
        this.idGlass = parametros ['idGlass'];
        this.nameGlass = parametros ['nameGlass'];
        console.log(this.idGlass, this.nameGlass);
         this.http.getDrinkById(this.idGlass)
         .subscribe( data => {
            this.drink = data;
        })
      })
  }
}

