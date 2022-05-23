import { CoctelesService } from './../../../services/cocteles.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent {

  // nCat: string = '';
  // nombre: string = '';
  // drinks: IDrinks[] = [];

  // constructor(private ruta: ActivatedRoute,
  //             private CoctelesService: CoctelesService) { }

  // ngOnInit(): void {
  //   this.ruta.params
  //     .subscribe ( async (params: Params ) => {
  //       this.nCat = params['nCat'];
  //       this.nombre = params['nombre'];
  //       this.drinks = await this.CoctelesService.getDrinksCategory(this.nCat);
  //       console.log(this.drinks);
  //     })
  // }

}
