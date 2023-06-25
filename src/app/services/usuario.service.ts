import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("https://6498bf3c9543ce0f49e24ab3.mockapi.io/usuario");
  }
}
