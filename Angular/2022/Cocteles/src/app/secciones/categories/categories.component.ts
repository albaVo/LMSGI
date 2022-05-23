import { CoctelesService } from './../../services/cocteles.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  allCategories: any[] = [];

  constructor(private http: CoctelesService) {

  }

  ngOnInit() {
    this.http.getAllCategories().subscribe(ret => {
      this.allCategories = ret;
      console.log(this.allCategories);
    })
  }

}
