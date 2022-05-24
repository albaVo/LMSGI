import { CoctelesService } from './../../../services/cocteles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-nav',
  templateUrl: './categories-nav.component.html',
  styleUrls: ['./categories-nav.component.css']
})
export class CategoriesNavComponent implements OnInit {

  allCategories: any[] = [];

  constructor(private http: CoctelesService) { }

  ngOnInit() {
    this.http.getAllCategories().subscribe(ret => {
      this.allCategories = ret;
      console.log(this.allCategories);
    })
  }

}
