import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassesRoutingModule } from './glasses-routing.module';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassesNavComponent } from './glasses-nav/glasses-nav.component';


@NgModule({
  declarations: [
    GlassesListComponent,
    GlassesNavComponent
  ],
  imports: [
    CommonModule,
    GlassesRoutingModule
  ]
})
export class GlassesModule { }
