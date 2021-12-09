import { FuncionarioService } from './funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from './Funcionario';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  funcionarios!: Funcionario[];
  constructor(
    private service: FuncionarioService
  ) {

  }
  ngOnInit() {
    this.service.getAll().subscribe(response => {
      this.funcionarios = response;
    });
  }

  report(){
    this.service.getReport().subscribe((response: Blob) =>{
      var fileURL = window.URL.createObjectURL(response);
      window.open(fileURL, '_blank');
    }
    )
  }
}


