

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciaListaComponent } from './provincia/provincia-lista/provincia-lista.component';
import { ProvinciaGuardarComponent } from './provincia/provincia-guardar/provincia-guardar.component';
import { MunicipioListaComponent } from './municipio/municipio-lista/municipio-lista.component';
import { MunicipioGuardarComponent } from './municipio/municipio-guardar/municipio-guardar.component';




@NgModule({
  declarations: [
    AppComponent,
    ProvinciaListaComponent,
    ProvinciaGuardarComponent,
    MunicipioListaComponent,
    MunicipioGuardarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
