import { ProvinciaService } from './../provincia.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-provincia-guardar',
  templateUrl: './provincia-guardar.component.html',
  styleUrls: ['./provincia-guardar.component.scss']
})
export class ProvinciaGuardarComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private _service: ProvinciaService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.criarFrom();
  }
  criarFrom(){
    this.form = this.fb.group({
      nome: ['', Validators.required]
    });
  }

  onSubmit(){
    this._service.post(this.form.value).subscribe(response => {
      console.log(response);
      this.router.navigate(['/provincia-listar']);
    });
  }

}
