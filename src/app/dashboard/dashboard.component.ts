import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router:Router,private route:ActivatedRoute){}


  irPaginaUsuario(): void{
    this.router.navigate(['usuario'], {relativeTo: this.route});
  }

  irPaginaEmpresa():void{
    this.router.navigate(['empresa'], {relativeTo: this.route})
  }

  irPaginaClasificaciones(): void{
    this.router.navigate(['clasificaciones'], {relativeTo: this.route});
  }
}
