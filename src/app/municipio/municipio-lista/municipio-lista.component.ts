import { MunicipioService } from './../municipio.service';
import { Component, OnInit } from '@angular/core';
import { Municipio } from 'src/app/models/municipio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-municipio-lista',
  templateUrl: './municipio-lista.component.html',
  styleUrls: ['./municipio-lista.component.scss']
})
export class MunicipioListaComponent implements OnInit {

  municipios!: Municipio[];
  constructor(
    private _service: MunicipioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._service.getAll().subscribe(response => this.municipios = response);
  }
  novo(){
    this.router.navigate(['/municipio-novo']);
  }

}
