import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeccionesRoutingModule } from './secciones-routing.module';
import { GlassesComponent } from './glasses/glasses.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { LobbyComponent } from './lobby/lobby.component';


@NgModule({
  declarations: [
    GlassesComponent,
    IngredientsComponent,
    LobbyComponent
  ],
  imports: [
    CommonModule,
    SeccionesRoutingModule
  ]
})
export class SeccionesModule { }
