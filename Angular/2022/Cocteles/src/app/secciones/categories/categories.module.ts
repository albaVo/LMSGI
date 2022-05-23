import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    CategoriesNavComponent,
    CategoriesListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
