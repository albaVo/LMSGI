import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { LobbyComponent } from './lobby/lobby.component';


@NgModule({
  declarations: [
    CharactersComponent,
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
