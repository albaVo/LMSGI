import { Observable } from 'rxjs';
import { MarvelService } from './../../servicios/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  constructor(private MarvelService: MarvelService) { }

  series!: Observable<any>;

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.series = this.MarvelService.getSeries();
  }

}
