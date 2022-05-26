import { CoctelesService } from './../../../services/cocteles.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { category } from 'src/app/interfaces/cocteles';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit{

  category: category = {};
  nameCat: string = '';

  constructor(private http: CoctelesService,
              private rutas: ActivatedRoute)
  {}

  ngOnInit() {
    // this.rutas.params
    //   .subscribe(async (parametros: Params) => {
    //     this.nameCat = parametros ['nameCat'];
    //     console.log(this.nameCat);
    //       this.http.getCategoriesFilter(this.nameCat)
    //       .subscribe(data => {
    //         this.category = data;
    //     })
    //   })
  }
}
