import { category } from './../../../interfaces/cocteles';
import { Component, OnInit } from '@angular/core';
import { drinks } from 'src/app/interfaces/cocteles';
import { CoctelesService } from 'src/app/services/cocteles.service';

@Component({
  selector: 'app-glasses-nav',
  templateUrl: './glasses-nav.component.html',
  styleUrls: ['./glasses-nav.component.css']
})
export class GlassesNavComponent implements OnInit {

  allGlasses: drinks={drinks: []};

  constructor(private http: CoctelesService) { }

  ngOnInit() {
    this.http.getAllGlasses().subscribe(ret => {
      this.allGlasses = ret;
      console.log(this.allGlasses);
    });
  }
}
