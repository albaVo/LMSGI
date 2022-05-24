import { CoctelesService } from './../../services/cocteles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  allIngredients: any[] = [];

  constructor(private http: CoctelesService) { }

  ngOnInit() {
    this.http.getAllIngredients().subscribe(ret => {
      this.allIngredients = ret;
      console.log(this.allIngredients);
    })
  }
}
