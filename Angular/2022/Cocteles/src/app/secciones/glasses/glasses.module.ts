import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GlassesRoutingModule } from './glasses-routing.module';
import { GlassesListComponent } from './glasses-list/glasses-list.component';
import { GlassesNavComponent } from './glasses-nav/glasses-nav.component';
import { GlassesCreateComponent } from './glasses-create/glasses-create.component';


@NgModule({
  declarations: [
    GlassesListComponent,
    GlassesNavComponent,
    GlassesCreateComponent
  ],
  imports: [
    CommonModule,
    GlassesRoutingModule
  ]
})
export class GlassesModule { }
