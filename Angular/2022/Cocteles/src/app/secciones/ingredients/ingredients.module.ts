import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsSearchComponent } from './ingredients-search/ingredients-search.component';
import { IngredientsInfoComponent } from './ingredients-info/ingredients-info.component';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { IngredientsNavComponent } from './ingredients-nav/ingredients-nav.component';


@NgModule({
  declarations: [
    IngredientsSearchComponent,
    IngredientsInfoComponent,
    IngredientsListComponent,
    IngredientsNavComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ]
})
export class IngredientsModule { }
