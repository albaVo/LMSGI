import { UsuariosShowComponent } from './usuarios-show/usuarios-show.component';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosNavComponent } from './usuarios-nav/usuarios-nav.component';

const routes: Routes = [
  { path: 'new', component: UsuariosCreateComponent, outlet: 'cuerpo' },
  { path: 'show', component: UsuariosShowComponent, outlet: 'cuerpo' },
  { path: 'sidebar', component: UsuariosNavComponent, outlet: 'menu' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
