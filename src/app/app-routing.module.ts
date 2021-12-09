import { MunicipioGuardarComponent } from './municipio/municipio-guardar/municipio-guardar.component';
import { MunicipioListaComponent } from './municipio/municipio-lista/municipio-lista.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvinciaListaComponent } from './provincia/provincia-lista/provincia-lista.component';
import { ProvinciaGuardarComponent } from './provincia/provincia-guardar/provincia-guardar.component';

const routes: Routes = [
  {
    path: 'provincia-listar', component: ProvinciaListaComponent
  },
  {
    path: 'provincia-novo', component: ProvinciaGuardarComponent
  },
  {
    path: 'municipio-listar', component: MunicipioListaComponent
  },
  {
    path:  'municipio-novo', component: MunicipioGuardarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
