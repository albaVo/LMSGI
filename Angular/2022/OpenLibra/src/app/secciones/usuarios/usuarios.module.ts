import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosShowComponent } from './usuarios-show/usuarios-show.component';
import { UsuariosNavComponent } from './usuarios-nav/usuarios-nav.component';


@NgModule({
  declarations: [
    UsuariosCreateComponent,
    UsuariosShowComponent,
    UsuariosNavComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
