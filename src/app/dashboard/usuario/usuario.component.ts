import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {


  usuarios: Usuario[]=[]
  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'direccion','telefono'];
  
  constructor(private usuarioService:UsuarioService,private route:ActivatedRoute,
              private router: Router
    
    ){}



  ngOnInit(): void {
    this.usuarioService.listarUsuarios()
    .subscribe((data) => {
      this.usuarios = data
      
    });
  }

}
