import { GlassesComponent } from './glasses/glasses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  { path: 'lobby', component: LobbyComponent, outlet: 'cuerpo' },
  { path: 'categories', loadChildren: () => import('./categories/categories.module')
                              .then(m => m.CategoriesModule)},
  { path: 'glasses', loadChildren: () => import('./glasses/glasses.module')
                              .then(m => m.GlassesModule)},
  { path: 'ingredients', loadChildren: () => import('./ingredients/ingredients.module')
                              .then(m => m.IngredientsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
