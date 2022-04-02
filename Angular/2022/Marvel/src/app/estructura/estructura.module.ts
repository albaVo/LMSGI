import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstructuraRoutingModule } from './estructura-routing.module';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    EstructuraRoutingModule
  ],
  exports: [
    HeaderComponent,
    MainComponent,
    FooterComponent
  ]
})
export class EstructuraModule { }
