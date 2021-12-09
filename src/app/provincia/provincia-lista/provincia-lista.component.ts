import { Provincia } from './../../models/provincia';
import { ProvinciaService } from './../provincia.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provincia-lista',
  templateUrl: './provincia-lista.component.html',
  styleUrls: ['./provincia-lista.component.scss']
})
export class ProvinciaListaComponent implements OnInit {

  provincias!: Provincia[];
  constructor(
    private _service: ProvinciaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._service.getAll().subscribe(response => this.provincias = response);
  }

  novo(){
    this.router.navigate(['/provincia-novo']);
  }

}
