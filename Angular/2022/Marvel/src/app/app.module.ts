import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstructuraModule } from './estructura/estructura.module';
import { SeccionesModule } from './secciones/secciones.module';
import { VistasModule } from './vistas/vistas.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstructuraModule,
    SeccionesModule,
    VistasModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
