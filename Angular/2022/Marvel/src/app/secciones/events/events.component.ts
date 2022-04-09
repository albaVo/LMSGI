import { Observable } from 'rxjs';
import { MarvelService } from './../../servicios/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {


  constructor(private MarvelService: MarvelService) { }

  events!: Observable<any>;

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.events = this.MarvelService.getEvents();
  }

}
