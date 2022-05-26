import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesNavComponent } from './categories-nav/categories-nav.component';
import { CategoriesComponent } from './categories.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: CategoriesComponent, outlet: 'cuerpo' },
  { path: 'sidebar', component: CategoriesNavComponent, outlet: 'menu' },
  { path: 'list/:nameCat', component: CategoriesListComponent, outlet: 'cuerpo' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
