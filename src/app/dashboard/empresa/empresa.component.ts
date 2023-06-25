import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit{
  empresas: Empresa[]=[]
  displayedColums: string[]=['id','nombreEmpresa','ruc','razonSocial','email','telefono'];

  constructor(private empresaService:EmpresaService,private route:ActivatedRoute,private router:Router){}

    ngOnInit(): void {
      this.empresaService.listarEmpresas().subscribe((data) => {
        this.empresas = data
      });
    }
}
