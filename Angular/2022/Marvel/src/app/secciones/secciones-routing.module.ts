import { StoriesComponent } from './stories/stories.component';
import { SeriesComponent } from './series/series.component';
import { LobbyComponent } from './lobby/lobby.component';
import { EventsComponent } from './events/events.component';
import { CreatorsComponent } from './creators/creators.component';
import { ComicsComponent } from './comics/comics.component';
import { CharactersComponent } from './characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent},
  { path: 'comics', component: ComicsComponent },
  { path: 'creators', component: CreatorsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'stories', component: StoriesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
