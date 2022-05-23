import { IngredientsComponent } from './ingredients/ingredients.component';
import { GlassesComponent } from './glasses/glasses.component';
import { CategoriesComponent } from './categories/categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyComponent, outlet: 'cuerpo' },
  { path: 'categories', loadChildren: () => import('./categories/categories.module')
                              .then(m => m.CategoriesModule)},
  { path: 'glasses', component: GlassesComponent },
  { path: 'ingredients', component: IngredientsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
