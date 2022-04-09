import { Observable } from 'rxjs';
import { MarvelService } from './../../servicios/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  constructor(private MarvelService: MarvelService) { }

  comics!: Observable<any>;

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comics = this.MarvelService.getComics();
  }

}
