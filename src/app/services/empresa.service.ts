import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  listarEmpresas(): Observable<Empresa[]>{
    return this.http.get<[Empresa]>("https://6498bf3c9543ce0f49e24ab3.mockapi.io/empresa")
  }
}
