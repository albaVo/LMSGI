import { SeriesComponent } from './series/series.component';
import { LobbyComponent } from './lobby/lobby.component';
import { EventsComponent } from './events/events.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: LobbyComponent },
  { path: 'characters', component: CharactersComponent},
  { path: 'comics', component: ComicsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'series', component: SeriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
