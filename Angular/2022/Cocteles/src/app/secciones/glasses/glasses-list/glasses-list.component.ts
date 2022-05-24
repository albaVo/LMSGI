import { Component, OnInit } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-glasses-list',
  templateUrl: './glasses-list.component.html',
  styleUrls: ['./glasses-list.component.css']
})
export class GlassesListComponent implements OnInit {

  glassesFilter: any[] = [];
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
         this.http.getDrinkById(this.idGlass).subscribe(ret => {
          console.log(this.glassesFilter);
        })

      })

  }
}

