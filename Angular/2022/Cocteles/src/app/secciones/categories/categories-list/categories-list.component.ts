import { CoctelesService } from './../../../services/cocteles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit{

  categoriesFilter: any[] = [];

  constructor(private http: CoctelesService) {}

  ngOnInit() {
    // this.http.getCategoriesFilter().subscribe(ret => {
    //   this.categoriesFilter = ret;
    //   console.log(this.categoriesFilter);
    // })
  }
}
