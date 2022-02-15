import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeaderComponent,
    HeaderMenuComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }
