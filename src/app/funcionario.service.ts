import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './Funcionario';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly API = 'http://localhost:8080/api/funcionarios'
  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.API);
  }
  getReport(): Observable<any> {
    return this.http.get(`${this.API}/pdf`, { responseType: 'blob' });
  }
}
