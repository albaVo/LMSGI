import { MarvelService } from './../../servicios/marvel.service';
import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/characters.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  characters: ICharacter[] = [];
  constructor(private MarvelService: MarvelService) {}

  async ngOnInit() {
    this.characters = await this.MarvelService.getCharacter();
  }

}
