import { ProvinciaService } from './../../provincia/provincia.service';
import { Provincia } from './../../models/provincia';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MunicipioService } from '../municipio.service';

@Component({
  selector: 'app-municipio-guardar',
  templateUrl: './municipio-guardar.component.html',
  styleUrls: ['./municipio-guardar.component.scss']
})
export class MunicipioGuardarComponent implements OnInit {

  form!: FormGroup;
  Provincias!: Provincia[];

  constructor(
    private _service: MunicipioService,
    private _serviceProv: ProvinciaService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.criarFrom();
    this._serviceProv.getAll().subscribe(response => this.Provincias = response);

  }
  criarFrom(){
    this.form = this.fb.group({
      nome: ['', Validators.required],
      provincia:[{}]

    });
  }

  onSubmit(){

    this._service.post(this.form.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/municipio-listar']);
    });
  }

}
