import { Municipio } from './../models/municipio';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MunicipioService {
  private readonly API = 'http://localhost:8080/api/municipios'

  constructor(
    private http: HttpClient
  ) { }

  getAll():Observable<Municipio[]>{
    return this.http.get<Municipio[]>(this.API);
  }

  post(municipio: Municipio): Observable<Municipio>{
    return this.http.post<Municipio>(this.API, municipio)
  }
}
