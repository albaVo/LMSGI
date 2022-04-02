import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VistasRoutingModule } from './vistas-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NuevoComponent } from './nuevo/nuevo.component';
import { EditarComponent } from './editar/editar.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    NuevoComponent,
    EditarComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    VistasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    DashboardComponent,
    EditarComponent,
    LoginComponent,
    NuevoComponent,
    LoginFormComponent
  ]
})
export class VistasModule { }
