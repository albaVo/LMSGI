import { IngredientsNavComponent } from './ingredients-nav/ingredients-nav.component';
import { IngredientsComponent } from './ingredients.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: IngredientsComponent, outlet: 'cuerpo'},
  { path: 'sidebar', component: IngredientsNavComponent, outlet: 'menu' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IngredientsRoutingModule { }
