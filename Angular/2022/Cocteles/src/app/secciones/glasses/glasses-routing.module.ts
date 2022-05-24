import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassesNavComponent } from './glasses-nav/glasses-nav.component';
import { GlassesCreateComponent } from './glasses-create/glasses-create.component';
import { GlassesComponent } from './glasses.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: GlassesComponent, outlet: 'cuerpo' },
  { path: 'new', component: GlassesCreateComponent, outlet: 'cuerpo' },
  { path: 'sidebar', component: GlassesNavComponent, outlet: 'menu' },
  { path: 'list/:idGlass/:nameGlass', component: GlassesListComponent, outlet: 'cuerpo' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlassesRoutingModule { }
