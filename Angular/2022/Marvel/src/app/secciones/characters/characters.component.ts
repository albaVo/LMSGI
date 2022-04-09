import { Observable } from 'rxjs';
import { MarvelService } from './../../servicios/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private MarvelService: MarvelService) { }

  characters!: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters = this.MarvelService.getCharacters();
  }

}
