import { Component, OnInit } from '@angular/core';
import { CoctelesService } from 'src/app/services/cocteles.service';

@Component({
  selector: 'app-ingredients-nav',
  templateUrl: './ingredients-nav.component.html',
  styleUrls: ['./ingredients-nav.component.css']
})
export class IngredientsNavComponent implements OnInit {

  allIngredients: any[] = [];

  constructor(private http: CoctelesService) { }

  ngOnInit() {
    this.http.getAllIngredients().subscribe(ret => {
      this.allIngredients = ret;
      console.log(this.allIngredients);
    })
  }

}
