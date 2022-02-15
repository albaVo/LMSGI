import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainCuerpoComponent } from './main-cuerpo/main-cuerpo.component';


@NgModule({
  declarations: [
    MainComponent,
    MainCuerpoComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
