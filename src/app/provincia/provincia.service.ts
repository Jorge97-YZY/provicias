import { Provincia } from './../models/provincia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private readonly API = 'http://localhost:8080/api/provincias'

  constructor(
    private http: HttpClient
  ) { }

  getAll():Observable<Provincia[]>{
    return this.http.get<Provincia[]>(this.API);
  }

  post(provincia: Provincia):Observable<Provincia>{
    return this.http.post<Provincia>(this.API, provincia);
  }
}
